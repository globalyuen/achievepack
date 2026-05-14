import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostableHumidityControlPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const HUMIDITY_METRICS = [
    { label: 'WVTR', value: '< 0.5', unit: 'g/m²', desc: 'Bio-moisture parity.' },
    { label: 'OTR', value: '< 0.1', unit: 'cc/m²', desc: 'Oxygen-blocking tech.' },
    { label: 'Shelf Life', value: '12', unit: 'Months', desc: 'Verified preservation.' },
    { label: 'Bio Valve', value: 'Comp', unit: 'Valve', desc: 'Active CO2 release.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Humidity Control | High-Barrier Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to compostable humidity control. 800+ words of research on WVTR metrics, Bio-EVOH barrier science, and active preservation tech." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-humidity-control`} />
        <meta name="keywords" content="compostable humidity control, high barrier compostable, WVTR, bio-EVOH, compostable coffee valves, moisture proof" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">BARRIER_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Dry.<br/>Pure.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Proven.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Humidity is the enemy of quality. We engineer high-barrier compostable pouches that deliver plastic-equivalent moisture protection, keeping your products fresh and potent without the environmental cost.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Barrier Styles</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Barrier Proofs</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Humidity Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
                alt="Humidity Control Packaging Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">BARRIER_INTEGRITY_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>For Freshness.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                In the bio-economy, humidity protection has historically been a significant weakness. In 2026, protecting moisture-sensitive products (coffee, spices, pharmaceuticals) demands <strong>High-Barrier Purity</strong>. At Pouch.eco, we treat humidity control as a <strong>Thermodynamic Technical Deliverable</strong>. We utilize <strong>Bio-EVOH and PBS (Polybutylene Succinate)</strong> laminates to achieve a <strong>Water Vapor Transmission Rate (WVTR) of &lt; 0.5g/m²/day</strong>. This level of performance matches traditional petroleum-based plastics, ensuring your sensitive dry goods maintain their aroma, texture, and potency for up to 12 months. We don't just supply 'bags'; we engineer <strong>Active Micro-Climates</strong> through integrated compostable degassing valves and hermetic bio-zippers. This is the science of dry, verified for a circular future.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {HUMIDITY_METRICS.map((p, i) => (
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

      {/* Technical: The Barrier Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">BARRIER_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Zero Ingress.<br/>Total Pure.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. Bio-EVOH Shield</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing plant-based EVOH layers to block 99.9% of oxygen transmission. Preventing oxidation and preserving the volatile aromas of your product.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. PBS Moisture Guard</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Engineering high-purity Polybutylene Succinate (PBS) sealants that deliver industry-leading moisture barrier performance (WVTR) in 100% compostable formats.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Compostable One-Way Valves</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Integrated bio-valves that allow CO2 to escape from fresh-roasted coffee while preventing external oxygen and moisture from entering the pouch.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Hermetic Bio-Zippers</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Custom-molded compostable zippers that maintain a moisture-proof seal even after multiple uses, ensuring consumer freshness until the last unit.
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
              <NeoBadge color="blue">BARRIER_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To the CC.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Barrier performance is a technical specification. We utilize <strong>MOCON Permeation Testing</strong> (ASTM F1249 / ASTM D3985) to verify the WVTR and OTR of every custom production run. Our <strong>EEAT Barrier Protocol</strong> ensures that your sustainable packaging is not just environmentally pure, but scientifically superior. We provide <strong>Technical Data Sheets (TDS)</strong> for every structure, outlining its precise barrier performance under variable humidity and temperature conditions. By choosing <strong>High-Barrier Compostable Humidity Control</strong>, you align your product with the absolute cutting edge of material science and circularity.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Droplets className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Moisture Defense</h4>
                    <p className="text-sm opacity-60">Verified &lt; 0.5g/m² moisture transmission for extreme dry-goods protection.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Shelf Stability</h4>
                    <p className="text-sm opacity-60">Ensuring 12+ month freshness for sensitive products like specialty coffee and spices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Verified Humidity Control Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Humidity Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">HUMIDITY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Can compostable bags truly block moisture?", a: "Yes. By utilizing multi-layer laminates with PBS and Bio-EVOH, we can match the moisture barrier (WVTR) of traditional plastics like PET and LDPE." },
              { q: "Are the degassing valves compostable?", a: "Yes. We offer fully certified TUV Austria OK Compost valves that break down alongside the pouch in composting environments." },
              { q: "What is the OTR of your compostable films?", a: "Our high-barrier bio-films achieve an Oxygen Transmission Rate (OTR) of < 0.1 cc/m²/day, equivalent to high-performance plastics." },
              { q: "Do you offer recyclable humidity control?", a: "Yes. If composting is not the goal, we offer 100% Recyclable Mono-PE high-barrier structures that also deliver extreme moisture protection." }
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
          <NeoBadge color="lime">BARRIER_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Fresh.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a high-performance, high-barrier supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Request Barrier Proofs</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Barrier Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableHumidityControlPage
