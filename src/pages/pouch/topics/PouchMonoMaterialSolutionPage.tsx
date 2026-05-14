import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layers, Recycle, Zap, CheckCircle, Info, ShieldCheck, FlaskConical, Scale, History, Binary } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMonoMaterialSolutionPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Mono-Material Solutions: The Future of Recyclability | Pouch.eco</title>
        <meta name="description" content="Technical guide to mono-material packaging technology. Learn about MDO-PE, high-barrier nano-coatings, and how to transition from PET/PE to 100% recyclable structures." />
        <link rel="canonical" href={`${baseUrl}/topics/mono-material-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-cyan-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">RECYCLE_ELITE_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-black drop-shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            ONE_POLYMER<br/>
            TOTAL_LOOP<br/>
            MONO_MATERIAL
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-white max-w-4xl bg-black border-4 border-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Stop mixing incompatible plastics. Our Mono-PE structures deliver the stiffness of PET with the 100% recyclability of polyethylene.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">TECH_CONSULT</NeoButton>
            <NeoButton variant="secondary" to="/materials">PE_BARRIER_DATA</NeoButton>
          </div>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">THE_SCIENCE</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Machine Direction<br/>Orientation</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              MDO technology is the technical 'secret' behind mono-materials. By stretching the film, we align the molecules, giving PE the heat resistance and modulus required for printing and filling.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Binary className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">MDO-PE vs. PET</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">Achieve the same glossy, stiff exterior as traditional PET while staying in the Category 4 recycling stream.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Nano-Barrier Tech</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">Ultra-thin SiOx/AlOx coatings provide glass-like moisture protection without contaminating the polymer purity.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/mono_material.png" 
                alt="Mono-Material Molecular View" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">Mechanical Recycling Efficiency</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Mono-materials aren't just "recyclable" in theory; they are highly valuable in the recycling market. Because they lack multi-polymer contamination, they produce <strong>High-Purity PCR</strong> that can be reintegrated into premium packaging, rather than just being downcycled into low-value products.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,255,255,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3"><History className="text-cyan-500" /> POLICY_ALERT: EU PPWR</h4>
                <p className="text-lg leading-relaxed mb-6">
                  The upcoming EU Packaging and Packaging Waste Regulation (PPWR) designates mono-materials as the primary pathway for flexible packaging circularity. Transitioning now prevents <strong>EPR Penalties</strong> and positions your brand as a first-mover in the new regulatory landscape.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">OTR/WVTR &lt; 1.0</h5>
                    <p className="text-xs">High-performance barrier levels for coffee, snacks, and pet food applications.</p>
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">98% Recovery</h5>
                    <p className="text-xs">NIR (Near-Infrared) sensors in recycling centers easily identify our mono-structures.</p>
                  </div>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Performance Performance Performance</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                We've overcome the "sealing window" challenge. Traditional mono-materials were difficult to run on fast machines. Our engineered structures feature a wide sealing window and low initiation temperatures, ensuring zero reduction in production speed during your transition.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,255,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Scale className="text-cyan-400" /> COMPLIANCE</h4>
                <p className="text-sm">Certified to meet CEFLEX and APR guidelines for flexible packaging circularity.</p>
                <NeoButton variant="primary" className="mt-8 !bg-cyan-400 !text-black w-full" to="/quote">SPEC_SHEET</NeoButton>
              </NeoCard>
              <div className="bg-white p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><FlaskConical /> LAB_DATA</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Tensile Modulus: 1800 MPa</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Gloss (60°): &gt; 80%</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Haze: &lt; 5%</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            ONE_POLYMER<br/>
            <span className="text-cyan-400">NO_COMPROMISE</span>
          </h2>
          <NeoButton variant="primary" className="!bg-cyan-400 !text-black !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            UPGRADE_TO_MONO
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoMaterialSolutionPage
