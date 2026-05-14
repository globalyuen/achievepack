import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecyclablePackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const RECYCLE_METRICS = [
    { label: 'Recovery Rate', value: '90%+', unit: 'Stream', desc: 'Mono-PE recovery (Cyclos-HTP).' },
    { label: 'MDO-PE Tech', value: 'PET', unit: 'Replace', desc: 'Equivalent stiffness/clarity.' },
    { label: 'Barrier', value: '< 1.0', unit: 'OTR', desc: 'Oxygen Transmission Rate (cc/m²).' },
    { label: 'Components', value: '100%', unit: 'Mono', desc: 'Recyclable zippers and valves.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Packaging Guide | Mono-Material Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to recyclable packaging. 800+ words of research on Mono-PE, MDO-PE technology, and circular economy compliance." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-packaging`} />
        <meta name="keywords" content="recyclable packaging, mono-material, mono-PE, MDO-PE, circular economy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">RECYCLE_TECH_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Circular.<br/>By.<br/><span className="text-blue-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Design.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                The era of non-recyclable multi-layer plastic is over. We engineer 100% <strong>Mono-Material</strong> structures (PE/PE or PP/PP) that are fully compatible with global recycling streams.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Recyclable Pouches</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Material Data</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp" 
                alt="Recyclable Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Mono-Material Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_recyclable_mono_pe_card_v2_5619420.webp" 
                alt="Recyclable Mono-Material Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">MONO_MATERIAL_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>For Recovery.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Recyclability is a function of polymer homogeneity. Traditional 'multi-material' bags (PET/PE) are landfill-bound because they cannot be separated during processing. Our <strong>Mono-Material Revolution</strong> utilizes <strong>MDO-PE (Machine Direction Orientation)</strong> technology to replace the PET outer layer with a specialized Polyethylene film. This creates a 100% PE package that achieving &gt; 90% recovery rates in standard recycling streams. Verified by <strong>Cyclos-HTP</strong> and compatible with 'Store Drop-off' and advanced automated sorting systems.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {RECYCLE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-blue-800">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Sortability & NIR Tech */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">SORT_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Invisible.<br/>To the NIR.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. NIR-Sortable Inks</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Standard carbon black inks absorb NIR light, making the pouch invisible to sorting sensors. We use specialized non-carbon inks to ensure 100% sortability.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. EVOH Barrier (&lt;5%)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We integrate ultra-thin EVOH layers to block oxygen without disrupting the recycling stream. Compliant with CEFLEX and APR design-for-recycling guidelines.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. PE Degassing Valves</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                For coffee roasters, we use 100% Polyethylene one-way valves. This ensures the entire package stays in the PE loop without requiring component removal.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. EPR Fee Mitigation</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Designing for recyclability is a financial decision. Our mono-materials qualify for reduced 'eco-modulated' fees under California SB 54 and UK EPR mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">MATERIAL_LAB_VERIFY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Loop.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Circular economy claims require laboratory evidence. We perform <strong>FTIR spectroscopy</strong> on every production batch to verify resin purity and co-extrusion accuracy. Our <strong>Mono-PE</strong> structures undergo <strong>Cyclos-HTP</strong> testing to verify that they result in high-quality rPE resin suitable for non-food or even food-contact applications (if using chemical recycling). We provide the technical evidence your brand needs to use 'How2Recycle' or 'Recycle Now' logos with absolute confidence.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">NIR Sortable</h4>
                    <p className="text-sm opacity-60">Tested for automated identification in advanced material recovery facilities.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Recovery Score</h4>
                    <p className="text-sm opacity-60">Achieving 90/100 recyclability scores under global certification protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_monomaterial_warm_4127359.webp" 
                alt="Verified Recyclable Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Recyclable Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">RECYCLE_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Is 'Store Drop-off' the only way to recycle these pouches?", a: "In North America, store drop-off is currently the standard for PE pouches. However, in Europe and emerging markets like California, advanced automated sorting is bringing these into curbside loops." },
              { q: "Can I use metallic effects on recyclable bags?", a: "Yes. We use vacuum-metallized PE (VMPET replacement) to achieve high-barrier and metallic aesthetics while keeping the structure 100% recyclable." },
              { q: "What is MDO-PE?", a: "Machine Direction Orientation Polyethylene is a film that has been stretched during manufacturing. This process increases stiffness and heat resistance, allowing us to remove non-recyclable PET." },
              { q: "Does the zipper need to be removed?", a: "No. Our zippers are manufactured from 100% Polyethylene, meaning the entire pouch can be recycled as a single unit without consumer intervention." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">RECYCLE_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Circular.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a recyclable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-900">Order Recyclable Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Circular Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclablePackagingGuidePage
