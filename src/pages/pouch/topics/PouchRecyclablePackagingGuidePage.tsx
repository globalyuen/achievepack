import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, CheckCircle, Info, Settings, ArrowRight, FlaskConical, Binary, Scale, ShieldCheck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecyclablePackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Packaging Design: Mono-Material Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to recyclable flexible packaging. Explore Mono-PE engineering, MDO technology, and global recycling compliance standards for high-performance brands." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-blue-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">TECH_SPEC_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            RECYCLABLE<br/>
            BY_POLYMER<br/>
            ENGINEERING
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Forget multi-material waste. We've engineered 100% Mono-Material structures that protect your product and are actually recovered by recycling streams.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">TALK_TO_ENGINEERS</NeoButton>
            <NeoButton variant="secondary" to="/materials">PE_LAB_RESULTS</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">THE_TECH</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Mono-Material<br/>Breakthrough</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              The barrier to recyclability has always been lamination. By using <strong>MDO (Machine Direction Orientation)</strong>, we align polymer chains to make PE perform like PET.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2">MDO-PE</h4>
                <p className="text-xs text-gray-600 font-['JetBrains_Mono']">Tensile strength and heat resistance optimized for high-speed filling lines.</p>
              </div>
              <div className="p-6 bg-[#D4FF00] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2">Barrier+</h4>
                <p className="text-xs text-gray-600 font-['JetBrains_Mono']">EVOH co-extrusion (less than 5% weight) for extreme oxygen protection.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/recyclable_guide.png" 
                alt="Mono-PE Material Structure" 
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
              <h3 className="font-black text-4xl uppercase italic mb-8">Design for Circularity</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                True recyclability isn't just about the film. It's an entire ecosystem of components. At Pouch.eco, we audit every element of the pouch to ensure zero contamination of the recycling stream.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <NeoCard color="bg-white" className="border-4 border-black !p-8">
                  <h4 className="font-black text-xl mb-4 flex items-center gap-2"><Recycle className="w-6 h-6 text-blue-500" /> Compatible Inks</h4>
                  <p className="text-sm text-gray-600">We utilize low-migration, wash-off inks that don't interfere with the optical sorting machinery at recovery facilities.</p>
                </NeoCard>
                <NeoCard color="bg-white" className="border-4 border-black !p-8">
                  <h4 className="font-black text-xl mb-4 flex items-center gap-2"><Settings className="w-6 h-6 text-blue-500" /> PE Zippers</h4>
                  <p className="text-sm text-gray-600">Most bags fail because they use PP zippers on PE films. Our zippers are 100% PE, ensuring the entire pouch is one polymer family.</p>
                </NeoCard>
              </div>
              <div className="p-12 bg-black text-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,255,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3"><Scale className="text-blue-400" /> COMPLIANCE_AND_TRUST</h4>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Transparency is the core of E-E-A-T. We help brands adopt accurate labeling systems like <strong>How2Recycle</strong> and <strong>OPRL</strong>. We don't hide behind the word "recyclable"—we specify the disposal pathway: "Store Drop-off."
                </p>
                <p className="text-md leading-relaxed text-gray-400">
                  Our engineering team provides full <strong>APR Critical Guidance</strong> results to verify your packaging contributes to high-quality post-consumer resin (PCR) streams.
                </p>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Performance Performance Performance</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                A recyclable pouch that leaks is a disaster. We perform high-stress drop tests and burst testing to ensure our Mono-PE structures withstand the rigors of modern e-commerce logistics.
              </p>
            </div>
            <aside className="space-y-8">
              <div className="bg-[#D4FF00] p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
                  <Binary className="text-black" /> TECH_KPIs
                </h4>
                <div className="space-y-4 font-black uppercase text-xs">
                  <div className="flex justify-between border-b-2 border-black pb-2">
                    <span>OTR (Oxygen)</span>
                    <span>&lt; 1.0</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-2">
                    <span>WVTR (Moisture)</span>
                    <span>&lt; 1.0</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-2">
                    <span>Recycle Stream</span>
                    <span>Cat 4 (LDPE)</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-2">
                    <span>Seal Strength</span>
                    <span>&gt; 45 N/15mm</span>
                  </div>
                </div>
              </div>
              <NeoCard color="bg-magenta-400" className="border-4 border-black text-white">
                <h4 className="font-black text-xl uppercase mb-4">Engineer Audit</h4>
                <p className="text-sm">We provide technical structural audits for brands moving from multi-layer PET to Mono-PE.</p>
                <NeoButton variant="dark" className="mt-6 w-full !bg-black !text-white" to="/quote">START_TECH_AUDIT</NeoButton>
              </NeoCard>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            RECYCLE_READY<br/>
            <span className="text-blue-400">MONO_STRENGTH</span>
          </h2>
          <NeoButton variant="primary" className="!bg-blue-400 !text-black !text-2xl px-12 py-6" to="/quote">
            GET_SPEC_SHEET
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclablePackagingGuidePage
