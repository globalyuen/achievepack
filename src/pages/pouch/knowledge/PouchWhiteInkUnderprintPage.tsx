import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Droplet, Sun, Contrast } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchWhiteInkUnderprintPage() {
  const title = "White Ink Underprint | Metallized Packaging Design | POUCH.ECO"
  const description = "Learn how to use white ink underprinting to control opacity, create metallic effects, and make your custom packaging colors pop on foil and clear materials."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/white-ink-underprint" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">KNOWLEDGE_BASE // PRE-PRESS</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                The Invisible <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Layer.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                Unlock the secret to vibrant colors on metallic and clear pouches. Learn how to strategically use White Ink Underprinting in your artwork files.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                   <div className="w-full h-full border-4 border-black relative bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                      {/* Simulated metallic bag */}
                      <div className="absolute top-1/4 left-1/4 right-1/4 text-center">
                         <h3 className="font-black text-4xl text-red-500 mix-blend-multiply opacity-80">NO WHITE INK (METALLIC RED)</h3>
                      </div>
                      <div className="absolute bottom-1/4 left-1/4 right-1/4 text-center bg-white border-2 border-black p-2">
                         <h3 className="font-black text-4xl text-red-500">WITH WHITE INK (SOLID RED)</h3>
                      </div>
                   </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    OPACITY CONTROL
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
            Mastering <span className="text-blue-500">White Ink Underprint</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When designing artwork for flexible packaging, what you see on your computer screen is not necessarily what will print on the pouch. Computer screens have a solid white background. But what happens when you print your artwork onto a clear film, a silver metallic film (VMPET), or brown Kraft paper? The colors will change drastically. This is where the magic of the <strong>White Ink Underprint</strong> (or White Plate) comes into play.
            </p>

            <img 
              src="/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp" 
              alt="Metallic gold effect created by omitting white ink underprint on foil" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Rule of Transparency</h3>
            <p>
              Standard CMYK printing inks (Cyan, Magenta, Yellow, Black) are inherently semi-transparent. If you print yellow ink directly onto a silver metallic foil bag, the silver shines right through the ink, turning your solid yellow logo into a shiny, metallic gold. If you print a photo on a clear plastic window, the photo will look like stained glass—you'll be able to see right through it.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">How White Ink Fixes This</h3>
            <p>
              To make colors solid and opaque, we must first print a base layer of solid, highly opaque White Ink, and then print your CMYK colors on top of it. This "underprint" acts exactly like a primer when painting a wall.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">WITH White Underprint</h4>
                  <p className="text-sm">Colors appear solid, vibrant, and opaque. Your logo looks exactly as it does on your computer screen. Text is highly legible. Barcodes scan perfectly.</p>
               </div>
               <div className="bg-gray-200 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">WITHOUT White Underprint</h4>
                  <p className="text-sm">The background material (Silver foil, Clear plastic, or Brown Kraft) shows through the ink. Colors become metallic, see-through, or darkened by the kraft paper.</p>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Using White Ink Creatively (Metallic Effects)</h3>
            <p>
              White ink isn't just for fixing problems—it's a powerful design tool. By selectively choosing where to place white ink, you can create stunning visual contrast on a single pouch.
            </p>
            <p>
              Imagine you want a matte black bag with a shiny, metallic silver logo. You would use a metallic foil material structure. We print white ink under the black background to make it solid and opaque. However, we leave the area under your logo completely empty of white ink. The transparent ink (or no ink at all) allows the raw silver foil to shine through perfectly in the shape of your logo. This is how premium metallic effects are achieved without paying for expensive hot-foil stamping.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">How to Set Up Your Artwork File</h3>
            <p>
              Setting up a White Ink layer requires a specific process in Adobe Illustrator. You must create a new Spot Color Swatch (usually named "White"), set it to Overprint, and create a separate layer containing vector shapes that map exactly to where you want the white ink to go. If you don't know how to do this, don't worry! Our expert pre-press team will set up the white plates for you based on your design intentions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            White Ink <span className="text-blue-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do I have to pay extra for White Ink?',
                a: 'No. For both Rotogravure and Digital printing, White is considered a standard color base and is factored into your standard pricing. (For Rotogravure, it does require its own engraving cylinder).'
              },
              {
                q: 'Do I need white ink under my barcode?',
                a: 'Absolutely YES. Barcodes must be printed in solid black ink over a solid white background to be scannable by lasers. If you print a barcode directly onto clear or silver foil, it will fail at the retail checkout.'
              },
              {
                q: 'What if my bag is made of white plastic?',
                a: 'If your base material is already white (like white PE), you do not need a white ink underprint for your colors to look solid. However, you cannot achieve metallic or clear window effects on a solid white plastic base.'
              },
              {
                q: 'Can I print a photograph with metallic effects?',
                a: 'Yes, but it requires careful pre-press setup. By creating a gradient mask on the white ink layer, we can make certain parts of a photograph look metallic while keeping the rest solid.'
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
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Design Without Limits</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Send us your Adobe Illustrator files. Our pre-press experts will handle the complex white ink setups for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Submit Your Artwork <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
