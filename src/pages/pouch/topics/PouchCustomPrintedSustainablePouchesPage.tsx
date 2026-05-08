import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Sparkles, Zap, Package, ArrowRight, Palette, Printer, ShoppingBag } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCustomPrintedSustainablePouchesPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Printed Eco Pouches | Sustainable Brand Packaging | Pouch.eco</title>
        <meta name="description" content="Premium custom printing on sustainable packaging materials. Compostable, recyclable, and bio-based pouches with photo-quality graphics. Low MOQ from 500 pieces. Fast 10-day turnaround." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-printed-sustainable-pouches`} />
        <meta name="keywords" content="custom printed eco pouches, sustainable brand packaging, printed compostable bags, custom recyclable pouches, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">PRINT_LAB_ALPHA</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Design.<br/>
            Print.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF0080] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Sustain.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Vibrant custom printing on the world's most sustainable materials. Photo-quality graphics. Low 500 unit MOQ.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/printing/digital">Digital Print Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Print Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Printing Technology Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">VISUAL_IMPACT</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">No Compromise<br/>on Quality.</h2>
              <p className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono']">
                Sustainable packaging used to mean boring brown paper. Not anymore. Our advanced digital and flexographic presses deliver stunning, vibrant graphics on compostable and recyclable films.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Printer, title: 'Digital Precision', desc: 'No plate costs. Perfect for short runs and multiple SKUs.' },
                  { icon: Palette, title: 'Premium Finishes', desc: 'Spot UV, foil stamping, and soft-touch lamination.' },
                  { icon: Zap, title: 'Fast Turnaround', desc: 'Ships in 10-15 business days from artwork approval.' },
                  { icon: ShoppingBag, title: 'Low MOQ', desc: 'Start your brand journey with just 500 pouches.' },
                ].map((s, i) => (
                  <div key={i} className="p-4 border-2 border-black bg-[#F0F0F0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <s.icon className="w-6 h-6 mb-2 text-[#FF0080]" />
                    <h4 className="font-black text-sm uppercase">{s.title}</h4>
                    <p className="text-xs opacity-70 font-['JetBrains_Mono'] mt-1">{s.desc}</p>
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

      {/* AIEO FAQ */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl text-center mb-16 uppercase">Brand Design FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can you print white on clear compostable bags?", a: "Yes. Our digital presses allow for a high-opacity white ink layer, ensuring your colors pop even on transparent compostable or recyclable films." },
              { q: "Are the inks food-safe and eco-friendly?", a: "We use water-based and bio-based inks that are fully compatible with composting and recycling processes. They are low-odor, low-VOC, and FDA food-safe approved." },
              { q: "Do you offer metallic or foil finishes?", a: "Yes! We can apply metallic cold-foil and hot-stamping even on sustainable substrates. We also offer metallic-effect inks for a similar look with lower cost." },
              { q: "Can I print multiple designs in one order?", a: "Yes, that's the beauty of digital printing. You can split your 500-unit MOQ across multiple flavors or SKUs (e.g., 250 units of two designs) for a small fee." }
            ].map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <span className="bg-[#D4FF00] text-black px-2 py-0.5 text-xs">DESIGN_INTEL</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">Your Brand.<br/>Our Planet.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Design stunning custom packaging that doesn't cost the earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">Order Print Sample</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation <ArrowRight className="inline ml-2" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomPrintedSustainablePouchesPage
