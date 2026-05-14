import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Printer, Palette } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchDigitalPrintingEcoPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PRINT_METRICS = [
    { label: 'Plate Waste', value: '0%', unit: 'Zero', desc: 'No metal plates or chemicals.' },
    { label: 'Resolution', value: '1200', unit: 'DPI', desc: 'Ultra-high definition clarity.' },
    { label: 'Turnaround', value: '21', unit: 'Days', desc: 'From artwork to delivery.' },
    { label: 'MOQ Minimum', value: '500', unit: 'Units', desc: 'Agile startup-friendly entry.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Digital Printing for Eco-Packaging | HP Indigo Tech | Pouch.eco</title>
        <meta name="description" content="Technical guide to digital printing for sustainable packaging. 800+ words of research on HP Indigo 25K, zero-plate sustainability, and agile manufacturing." />
        <link rel="canonical" href={`${baseUrl}/topics/digital-printing`} />
        <meta name="keywords" content="digital printing eco packaging, HP Indigo 25K, zero plate printing, sustainable packaging manufacturer, low MOQ pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#083344_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">DIGITAL_STRATEGY_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Zero.<br/>Plate.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Agile.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Traditional printing is a waste engine. We utilize HP Indigo 25K digital technology to eliminate plate fees.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Digital Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Print Proofs</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt="Digital Printing Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Digital Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
                alt="Digital Printing Precision" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">AGILE_MANUFACTURING</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Pivot.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability in 2026 is defined by <strong>Efficiency</strong>. Traditional rotogravure and flexographic printing require hundreds of kilograms of setup waste and toxic metal plates. Digital printing eliminates these hurdles. At Pouch.eco, we utilize the <strong>HP Indigo 25K</strong> digital press to provide brands with <strong>Zero-Plate</strong> manufacturing. This allows for hyper-agile supply chains with MOQs as low as 500 units. By eliminating dead inventory and allowing for rapid SKU pivots, we help brands reduce their aggregate material waste by up to 15%. We back our print quality with <strong>G7 Master Certification</strong>, ensuring your brand colors remain invariant across every single pouch.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PRINT_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Digital Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">PRINT_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Pure Color.<br/>Pure Speed.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. HP ElectroInk</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                100% solvent-free, food-safe inks that meet FDA and EFSA standards. Certified for both home and industrial compostable structures.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Variable Data (VDP)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Print unique QR codes, serialization, or hyper-personalized graphics on every unit without increasing production costs.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. G7 Color Matching</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Automated spectrophotometry ensures a Delta-E (ΔE) of &lt; 2.0. Your brand identity remains consistent across all materials and regions.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Rapid Turnaround</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Eliminate the 4-week plate-making wait. Go from artwork approval to finished pouches in as little as 14-21 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">PRINT_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Pixel.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Digital print quality is a technical specification. We utilize <strong>1200 DPI High-Definition</strong> technology to ensure that even the smallest font sizes and complex barcodes are perfectly legible. Our inks are tested for <strong>Migration Resistance</strong> and <strong>Odor Neutrality</strong>, ensuring they never compromise the sensory profile of your food products. As your technical partner, we provide the <strong>Life Cycle Assessment (LCA)</strong> data that proves digital printing's lower environmental impact compared to traditional rotogravure. This is agile manufacturing verified by science.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Palette className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Color Integrity</h4>
                    <p className="text-sm opacity-60">Verified G7 gray balance and visual consistency across all SKUs.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Waste Reduction</h4>
                    <p className="text-sm opacity-60">90% reduction in setup waste compared to traditional printing methods.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt="Verified Digital Printing Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Digital Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">DIGITAL_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Is digital printing suitable for food packaging?", a: "Absolutely. Our HP ElectroInks are 100% food-safe and meet the strictest global regulations for direct food contact." },
              { q: "Can you print metallic or foil effects digitally?", a: "Yes. We offer high-performance metallic silver inks and under-printing techniques that replicate the look of foil without the environmental cost." },
              { q: "What is the smallest font size you can print?", a: "Thanks to our 1200 DPI resolution, we can print legible text as small as 4pt, ideal for complex ingredient lists and legal disclaimers." },
              { q: "Do you offer physical print proofs?", a: "Yes. We offer high-fidelity digital mockups that use the exact same ink and material as your final production run, ensuring no surprises." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">DIGITAL_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Agile.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure an agile, low-waste digital supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Print Proofs</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Print Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDigitalPrintingEcoPackagingPage
