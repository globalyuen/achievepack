import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Zap as Flash, Utensils } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecyclableSnackPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const SNACK_METRICS = [
    { label: 'Crunch Pres', value: '100%', unit: 'Shelf', desc: 'Verified parity with foil.' },
    { label: 'Sortability', value: 'NIR', unit: 'Ready', desc: 'Scan-verified recovery.' },
    { label: 'Grease Barr', value: 'High', unit: 'Seal', desc: 'Tested for oily snacks.' },
    { label: 'Recyclable', value: 'PP/PE', unit: 'Mono', desc: 'Single-stream compatible.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Snack Packaging | High Barrier & Crunch | Pouch.eco</title>
        <meta name="description" content="Technical guide to recyclable snack packaging. 800+ words of research on mono-material PP/PE, NIR sortability, and crunch preservation science." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-snack-packaging`} />
        <meta name="keywords" content="recyclable snack packaging, mono-material chip bags, snack pouches, sustainable snack packaging, NIR sortable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">SNACK_TECH_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Crunch.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Fresh.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Snack packaging is the final frontier of recycling. We engineer high-barrier mono-material pouches.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Snack Solutions</NeoButton>
                <NeoButton variant="secondary" to="/sample">Order Crunch Samples</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_c_4560298.webp" 
                alt="Recyclable Snack Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Snack Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp" 
                alt="Snack Packaging Barrier Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">CRUNCH_PRESERVATION_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For the Crunch.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                The snack industry has long relied on metallized multi-layer films to protect products from moisture and light. But these films are a recycling nightmare. In 2026, the mandate is <strong>Purity</strong>. At Pouch.eco, we engineer <strong>Mono-PP (BOPP/CPP)</strong> and <strong>Mono-PE (MDO-PE)</strong> structures that achieve <strong>WVTR levels below 0.5</strong>—matching the performance of traditional foil bags. Our structures are designed for <strong>NIR (Near-Infrared) Sortability</strong>, ensuring they are correctly identified by recycling infrastructure and processed into high-quality PCR resin. We maintain the tactile 'stiffness' and 'crackle' that consumers expect, providing a sustainable transition with zero sensory compromise.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SNACK_METRICS.map((p, i) => (
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

      {/* Technical: The Snack Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">SNACK_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">High Barrier.<br/>High Speed.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Vacuum Metallization</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Applying nano-layers of aluminum to mono-PP or mono-PE films. This provides extreme light and oxygen barriers while remaining within the &lt; 5% weight limit for recyclability.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Grease Barrier Tech</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Engineered inner layers that block oils and fats from migrating through the packaging, preventing delamination and maintaining crisp visual branding.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. High-Speed Converting</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Optimized COF (Coefficient of Friction) for high-speed automated Form-Fill-Seal (FFS) lines, ensuring zero downtime during the transition to sustainable films.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Laser Easy-Open</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Precision laser scoring that ensures a clean, straight tear every time—preventing the 'packaging explosion' common with traditional snack bags.
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
              <NeoBadge color="blue">SNACK_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Crunch.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Snack freshness is a measurable technical variable. We perform <strong>Accelerated Shelf-Life Testing (ASLT)</strong> on every custom structure to ensure your chips, nuts, or popcorn remain at peak quality for 6-12 months. Our <strong>EEAT Material Protocol</strong> utilizes <strong>Cyclos-HTP</strong> laboratory certification to prove that our mono-materials are correctly sorted in modern MRFs (Material Recovery Facilities). By replacing non-recyclable metallized BOPP with <strong>Certified Mono-PP</strong>, we help snack brands reduce their Extended Producer Responsibility (EPR) fee liability and meet the 'Design for Recycling' mandates of global regulations.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Flash className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Barrier Validated</h4>
                    <p className="text-sm opacity-60">Tested for OTR and WVTR to ensure absolute parity with traditional non-recyclable foil.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Utensils className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Food Safety Certified</h4>
                    <p className="text-sm opacity-60">100% solvent-free lamination and food-grade resins for total consumer safety.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Verified Snack Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Snack Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">SNACK_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Is metallized film truly recyclable?", a: "Only if the metal layer is < 5% of the total structure weight and applied to a mono-polymer film. Our structures are engineered to meet these strict global recycling benchmarks." },
              { q: "Do you offer 'Recyclable Kraft' snack pouches?", a: "Yes. We can apply a Kraft-paper finish to a mono-PE or mono-PP structure, providing the tactile 'natural' feel with 100% recyclability." },
              { q: "Can I use your films on my existing packing lines?", a: "Absolutely. We engineer the Coefficient of Friction (COF) and seal temperature profiles to match your existing equipment for a seamless transition." },
              { q: "What is NIR Sortability?", a: "It is the ability of a recycling scanner to correctly identify the polymer type. We use specialized inks and materials that ensure your packaging is never 'missed' by sensors." }
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
          <NeoBadge color="lime">SNACK_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Fresh.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a high-barrier, sustainable supply chain for your snack brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order Snack Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Snack Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclableSnackPackagingPage
