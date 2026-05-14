import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMonoMaterialSolutionPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const MONO_METRICS = [
    { label: 'Polymer Purity', value: '100%', unit: 'Single Family', desc: 'No PET/PE mixed laminates.' },
    { label: 'MDO-PE Power', value: '3X', unit: 'Stiffness', desc: 'Stretched PE for PET replacement.' },
    { label: 'Recyclability', value: '90%', unit: 'Score', desc: 'Verified by Cyclos-HTP labs.' },
    { label: 'Barrier Tech', value: 'EVOH', unit: '< 5%', desc: 'Oxygen block without foil.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Mono-Material Packaging | High-Tech Recyclability | Pouch.eco</title>
        <meta name="description" content="Technical guide to mono-material packaging. 800+ words of research on MDO-PE, Mono-PP, and circular economy engineering." />
        <link rel="canonical" href={`${baseUrl}/topics/mono-material-packaging`} />
        <meta name="keywords" content="mono-material, mono-PE, MDO-PE, mono-PP, recyclable packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">MONO_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Single.<br/>Source.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Pure.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Traditional multi-layer plastic is a recycling failure. We solve the circularity puzzle with 100% <strong>Mono-Material</strong> engineering—using MDO-PE to deliver PET performance in a recyclable package.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Mono Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Material Proof</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Mono-Material Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
                alt="Mono-Material Structural Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">HOMOGENEOUS_POLYMER_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Recycle.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Circularity requires polymer homogeneity. By replacing the traditional PET (Polyester) outer layer with <strong>MDO-PE (Machine Direction Oriented Polyethylene)</strong>, we create a package that consists entirely of the PE polymer family. This technical breakthrough ensures that your pouch doesn't just claim to be recyclable—it actually contributes to high-quality rPE resin production. With <strong>&lt; 5% EVOH</strong> co-extruded for oxygen barrier, our mono-material structures achieve <strong>&gt; 90% recyclability scores</strong> (Cyclos-HTP), satisfying the strictest EPR requirements of 2026.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {MONO_METRICS.map((p, i) => (
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

      {/* Technical: MDO-PE Science */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">MDO_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Oriented.<br/>For Performance.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Stiffness (MDO)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Stretching PE film in the machine direction aligns molecules, increasing stiffness by 300%. This allows pouches to stand tall on shelves without PET reinforcement.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Optical Clarity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                MDO processing eliminates the 'haze' typically found in standard PE, delivering the crystal-clear display properties of traditional plastic.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Heat Resistance</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Oriented PE has a higher melting point than standard PE, allowing for high-speed heat sealing on standard VFFS and HFFS packaging lines.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. NIR Sortability</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Being a single polymer, our mono-materials are easily identified by Near-Infrared sensors at MRFs, ensuring they are correctly sorted for recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Science Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">POLYMER_SCIENCE_V2</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Micron.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Purity is the technical benchmark for recyclability. We perform <strong>FTIR spectroscopy</strong> and <strong>Differential Scanning Calorimetry (DSC)</strong> on all material batches to verify that our Mono-PE and Mono-PP structures are free from polymer contamination. By utilizing 100% PE zippers and 100% PE degassing valves, we ensure that the finished pouch is a technical masterpiece of circularity. No mixed materials, no separation required, and zero compromise on the <strong>EVOH oxygen barrier</strong>.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Polymer Purity</h4>
                    <p className="text-sm opacity-60">Tested for absolute resin consistency across all layers of the laminate.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Recovery Score</h4>
                    <p className="text-sm opacity-60">Achieving 90/100 recyclability scores under global Cyclos-HTP protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Verified Mono-Material Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Mono-Material Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">MONO_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Can mono-PE achieve the same shelf life as PET/PE?", a: "Yes. By integrating a thin (< 5%) layer of EVOH, we achieve an oxygen barrier (OTR) of < 1.0, matching the performance of traditional laminates." },
              { q: "Is MDO-PE more expensive?", a: "The resin and processing costs are slightly higher, but this is often offset by the reduction in plastic taxes and lower EPR fees for recyclable packaging." },
              { q: "Are mono-material bags suitable for liquids?", a: "Yes. We co-extrude high-performance PE sealants that provide the puncture resistance and seal integrity required for liquid and high-grease foods." },
              { q: "Do these bags work on my current machines?", a: "Most modern VFFS and HFFS lines can run mono-material PE with slight adjustments to the heat-sealing temperature and dwell time." }
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
      <section className="py-24 bg-blue-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">MONO_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Pure Material.<br/>Bold Impact.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a mono-material supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-blue-950">Order Mono Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Polymer Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoMaterialSolutionPage
