import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Printer, Shield, Zap, ArrowRight, CheckCircle, Palette, MousePointer2, Layers, Type, BarChart3, Image } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchDigitalPrintingEcoPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PRINT_SPECS = [
    { label: 'Color Matching', value: 'Pantone®', desc: 'Precise color consistency across batches.' },
    { label: 'Variable Data', value: 'Unique IDs', desc: 'Print unique QR codes or serials on every bag.' },
    { label: 'Substrates', value: 'All Eco', desc: 'Certified for Kraft, Bio-PE, and PCR films.' },
    { label: 'Min. Quantity', value: '100 units', desc: 'Lowest entry point for custom packaging.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Digital Printing for Eco Packaging | Low MOQ Pouches | Pouch.eco</title>
        <meta name="description" content="Photo-quality digital printing on sustainable packaging. No plate fees, fast 10-day turnaround. Perfect for small runs and multiple SKUs. Certified eco-friendly inks." />
        <link rel="canonical" href={`${baseUrl}/topics/digital-printing-eco-packaging`} />
        <meta name="keywords" content="digital printing packaging, custom printed pouches, water based inks, no plate fees packaging, low moq custom pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">INK_JET_MAX_V4.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Pure.<br/>Print.<br/><span className="text-[#FF0080] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Now.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Digital printing on eco materials. Zero plates. Unlimited color. Photo-quality resolution from just 100 units. The future of brand agility starts here.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/printing/digital">Explore Digital Tech</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Print Sample</NeoButton>
          </div>
        </div>
      </section>

      {/* Technology Breakdown */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
                alt="Advanced Digital Printing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="cyan">ZERO_PLATE_LOGIC</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Why Digital?</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Traditional printing requires expensive metal plates for every color and every SKU. Digital printing eliminates this entirely, allowing you to launch multiple designs in days, not months.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PRINT_SPECS.map((s, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{s.label}</h4>
                    <p className="text-xl font-black">{s.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-yellow-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Digital<br/>Vibrancy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Digitally printed stand up pouch" 
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
              src="/imgs/store/pouch shape/3-side.webp" 
              alt="3-side seal flat pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Flat Pouches"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="Custom printed DTC packaging" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* Finishing Grid */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <img src="/imgs/seo-photos/a_printing_types_overview_4017325.webp" className="border-2 border-black w-full mb-6" alt="Digital Print Overview" />
              <h4 className="font-black text-xl uppercase mb-2">Multi-Flavor Agility</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Print 5 designs of 100 units each in a single 500-unit run. Ideal for testing market response.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <img src="/imgs/seo-photos/a_finishing_options_premium_showcase_3613860.webp" className="border-2 border-black w-full mb-6" alt="Premium Finishing" />
              <h4 className="font-black text-xl uppercase mb-2">Premium Texture</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Combine digital precision with soft-touch matte or spot-UV finishes for a luxury unboxing feel.</p>
            </NeoCard>
            <NeoCard>
              <div className="p-8 bg-black text-[#D4FF00] h-full flex flex-col justify-center text-center">
                <Palette className="w-16 h-16 mx-auto mb-6" />
                <h4 className="font-black text-3xl uppercase">Ink Safety</h4>
                <p className="text-xs font-bold mt-4 uppercase italic">Compost-safe, water-based inks that meet the highest FDA and EU food safety standards.</p>
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
              <h4 className="font-black text-xl mb-2">Are digital inks eco-friendly and food-safe?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we use advanced water-based digital inks that are both FDA/EU compliant for food contact and certified safe for compostable disposal.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are there any hidden plate or setup fees?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">No. Unlike rotogravure or flexo printing, digital printing requires zero metal plates, meaning you pay zero setup fees.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can you match my specific brand Pantone colors?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Absolutely. Our digital presses use advanced CMYK+ layering to achieve over 97% of the Pantone matching system with incredible consistency.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">How fast is turnaround for digital printing?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Because there is no plate manufacturing required, we can go from approved artwork to shipped product in just 10-15 business days.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">PRINT_READY_ACTION</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-pink-600">Print Fast.<br/>Ship Faster.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Ready to bring your brand vision to life with zero setup fees? Request our Print Masterclass Kit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-pink-600 !text-white">Order Print Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Print Consultation Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDigitalPrintingEcoPackagingPage
