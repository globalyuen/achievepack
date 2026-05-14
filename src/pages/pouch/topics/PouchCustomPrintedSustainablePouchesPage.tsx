import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Printer, Palette } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomPrintedSustainablePouchesPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PRINT_METRICS = [
    { label: 'Color Prec', value: '< 2.0', unit: 'Delta-E', desc: 'G7-certified accuracy.' },
    { label: 'Resolution', value: '1200', unit: 'DPI', desc: 'High-definition clarity.' },
    { label: 'Print Tech', value: 'Hybrid', unit: 'Fleet', desc: 'Digital & Rotogravure.' },
    { label: 'Ink Safety', value: 'FDA', unit: 'EFSA', desc: 'Certified for food contact.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Printed Sustainable Pouches | Pouch.eco Branding Hub</title>
        <meta name="description" content="Technical guide to custom printed sustainable pouches. 800+ words on digital vs rotogravure, G7 color science, and eco-friendly inks." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-printed-pouches`} />
        <meta name="keywords" content="custom printed pouches, sustainable branding, digital printing, rotogravure, G7 color, packaging design" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#4c1d95_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">BRANDING_HUB_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Art.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Identity.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Your brand is a story. We engineer custom printed sustainable pouches that deliver that story with precision.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Print Styles</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Print Proofs</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt="Custom Printed Sustainable Pouches Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Branding Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
                alt="Custom Printed Sustainable Pouch Precision" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">COLOR_LOGIC_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Be Seen.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Branding is not just 'design'; it's color physics. In 2026, maintaining brand integrity across sustainable substrates (like Kraft or Mono-PE) is a significant technical challenge. At Pouch.eco, we utilize <strong>G7 Master Certified</strong> color management workflows to ensure that your <strong>Delta-E (ΔE) deviation remains &lt; 2.0</strong>. This means your brand color is consistent across digital and rotogravure production runs, regardless of the material structure. We utilize <strong>1200 DPI High-Definition</strong> technology to ensure that even the most complex illustrations and smallest legal fonts are reproduced with extreme clarity. Whether you are a startup launching with 500 units or an enterprise moving 5 million, our print engineering delivers total visual dominance.
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

      {/* Technical: The Identity Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">IDENTITY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Pure Vision.<br/>Pure Print.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Digital Agility</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing HP Indigo 25K technology for zero-plate manufacturing. Perfect for product launches, seasonal SKUs, and startup-scale branding.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Enterprise Rotogravure</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Copper-plate precision for high-volume runs. Delivering the lowest per-unit cost while maintaining extreme ink density and color saturation.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Food-Safe Inks</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Certified low-migration inks that meet FDA and EFSA regulations. Solvent-free and odor-neutral for sensitive food products.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Premium Finishes</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Customizing the tactile experience with soft-touch matte, spot UV, and gloss finishes that reinforce your brand's luxury and sustainability.
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
              <NeoBadge color="blue">IDENTITY_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the Pixel.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Brand identity is a technical specification. We utilize <strong>Spectrophotometric Validation</strong> on every production run to verify that your colors match your brand guidelines exactly. Our <strong>EEAT Identity Protocol</strong> ensures that your sustainable packaging is not just environmentally pure, but visually elite. We provide high-fidelity <strong>Print Proofs</strong> that allow you to see and feel the final result before mass production. By utilizing <strong>Certified Eco-Inks</strong> and advanced finishing technology, we help brands align their physical product with their digital storytelling. This is branding verified by science.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Palette className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Visual Dominance</h4>
                    <p className="text-sm opacity-60">Ensuring your brand stands out on the shelf with ultra-high resolution and color purity.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Scale Optimization</h4>
                    <p className="text-sm opacity-60">Seamlessly transitioning from digital startups to high-volume enterprise production.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt="Verified Custom Printing Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Identity Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">IDENTITY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "What is G7 Master Certification?", a: "It is an international standard for grayscale and color balance. It ensures your brand colors remain consistent across different presses and substrates." },
              { q: "Can I print on transparent windows?", a: "Yes. We offer precision ink-masking that allows for crystal-clear product windows while maintaining high-opacity branding everywhere else." },
              { q: "Do you offer metallic silver or gold inks?", a: "Yes. We utilize high-performance digital and rotogravure metallic inks that replicate the look of foil without the environmental cost." },
              { q: "How do I submit artwork for printing?", a: "We require vectorized files (AI or PDF) with all fonts outlined and colors specified as Pantone (PMS) Solid Coated for maximum accuracy." }
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
          <NeoBadge color="lime">IDENTITY_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Identity.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a visually elite, sustainable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Print Proofs</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Branding Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomPrintedSustainablePouchesPage
