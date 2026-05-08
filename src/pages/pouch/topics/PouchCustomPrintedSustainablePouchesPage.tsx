import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Sparkles, Zap, Package, ArrowRight, Palette, Printer, ShoppingBag, Eye, Layers, Type, MousePointer2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomPrintedSustainablePouchesPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const PRINT_CAPABILITIES = [
    { label: 'Color Range', value: 'CMYK + W', desc: 'Extended gamut with high-opacity white ink.' },
    { label: 'Resolution', value: '1200 DPI', desc: 'Photorealistic graphics and sharp micro-text.' },
    { label: 'Ink Type', value: 'Water-Based', desc: 'Compost-safe, low-odor, food-grade certified.' },
    { label: 'Lead Time', value: '10 Days', desc: 'Industry-leading speed for digital production.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Printed Eco Pouches | Sustainable Brand Packaging | Pouch.eco</title>
        <meta name="description" content="Premium custom printing on sustainable packaging materials. Compostable, recyclable, and bio-based pouches with photo-quality graphics. Low MOQ from 500 pieces. Fast 10-day turnaround." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-printed-sustainable-pouches`} />
        <meta name="keywords" content="custom printed eco pouches, sustainable brand packaging, printed compostable bags, custom recyclable pouches, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">VISUAL_ENGINE_V6.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Design.<br/>
            Print.<br/>
            <span className="text-[#FF0080] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Sustain.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Vibrant custom printing on the world's most sustainable substrates. Photo-quality graphics. Zero plate costs. Unlimited creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/printing/digital">Digital Print Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Print Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Tech Breakdown Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="cyan">PRINT_TECH_STACK</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">No Sacrifice<br/>on Vibrancy.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainable packaging used to mean "natural" looking brown paper with limited colors. We've changed the game. Our advanced digital presses deliver 1200 DPI resolution on compostable and recyclable films, ensuring your brand pops on the shelf.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PRINT_CAPABILITIES.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-magenta-600">{p.label}</h4>
                    <p className="text-xl font-black">{p.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF0080] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
                alt="Custom Printed Eco Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-yellow-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Custom<br/>Vibrancy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Custom printed stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom box pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Flat Bottom Bags"
            />
            <ClickableImage 
              src="/imgs/topics/green_coffee_materials_1778212283713.png" 
              alt="Custom printed coffee bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Coffee Bags"
            />
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt="Custom printed spout pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Spout Pouches"
            />
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <img src="/imgs/seo-photos/a_printing_types_overview_4017325.webp" className="border-2 border-black w-full mb-6" alt="Print Types" />
              <h4 className="font-black text-xl uppercase mb-2">Multi-SKU Agility</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Digital printing allows you to split your MOQ across 10+ flavors or designs without expensive setup fees.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
              <img src="/imgs/seo-photos/a_finishing_options_premium_showcase_3613860.webp" className="border-2 border-black w-full mb-6" alt="Finishing" />
              <h4 className="font-black text-xl uppercase mb-2">Premium Finishes</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Choose from matte, gloss, or soft-touch finishes. We also offer metallic effects even on compostable substrates.</p>
            </NeoCard>
            <NeoCard>
              <div className="p-8 bg-black text-[#D4FF00] h-full flex flex-col justify-center text-center">
                <MousePointer2 className="w-16 h-16 mx-auto mb-6" />
                <h4 className="font-black text-3xl uppercase">Dieline Library</h4>
                <p className="text-xs font-bold mt-4 uppercase italic">Access 100+ standard dielines to jumpstart your design process today.</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Frequently Asked<br/>Questions</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are the inks used for printing eco-friendly?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we use advanced water-based inks that are certified safe for compostable disposal and compliant with strict FDA/EU food safety standards.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">What is the minimum order quantity for custom printed bags?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Thanks to digital printing, our MOQs start as low as 500 units per design, with zero setup or plate fees.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can you print variable data or QR codes?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes! Digital printing allows for variable data printing (VDP), meaning we can print unique QR codes, serialization, or different designs on every single pouch.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">How long does a custom order take?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Our standard digital production time is 10-15 business days from artwork approval to shipment.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="yellow">DESIGN_CONSULT_AVAILABLE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-[#D4FF00]">Stand Out.<br/>Soil Safe.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Ready to design stunning custom packaging that doesn't cost the earth? Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Request Print Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to Print Expert
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomPrintedSustainablePouchesPage
