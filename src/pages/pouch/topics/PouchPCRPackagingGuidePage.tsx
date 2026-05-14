import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, ShieldCheck, Info, BarChart, CheckCircle, FlaskConical, Globe, Scale, ClipboardList, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchPCRPackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>PCR Packaging Guide: Recycled Content Science | Pouch.eco</title>
        <meta name="description" content="Technical guide to PCR (Post-Consumer Recycled) resin. Learn about food-grade safety standards (FDA/EFSA), mechanical vs chemical recycling, and how to verify recycled content claims for professional brands." />
        <link rel="canonical" href={`${baseUrl}/topics/pcr-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-orange-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">CIRCULAR_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-black drop-shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            RECYCLED<br/>
            IS_THE_NEW<br/>
            VIRGIN_CONTENT
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-white max-w-4xl bg-black border-4 border-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Stop digging for oil. We're turning consumer waste into high-performance packaging with technical precision and food-grade safety.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">CONTACT_EXPERTS</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">PCR_SPEC_SHEETS</NeoButton>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_PROCESS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Super-Clean<br/>Recovery</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              Post-Consumer Recycled (PCR) resin isn't just scrap. It's material that has finished its life and been meticulously reprocessed into high-purity pellets.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black">
                <FlaskConical className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="font-black text-lg uppercase mb-2">Molecular Integrity</h4>
                <p className="text-xs text-gray-600 font-['JetBrains_Mono']">Optimized blending (30-50%) to ensure seal strength and puncture resistance.</p>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black">
                <Globe className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="font-black text-lg uppercase mb-2">Carbon Impact</h4>
                <p className="text-xs text-gray-600 font-['JetBrains_Mono']">Up to 40% reduction in GWP compared to virgin fossil-based resins.</p>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/pcr_guide.png" 
                alt="PCR Resin Pellets" 
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
              <h3 className="font-black text-4xl uppercase italic mb-8">Food-Grade Compliance (E-E-A-T)</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Safety is non-negotiable. To ensure consumer protection, we only utilize PCR resins produced through <strong>EFSA and FDA approved</strong> super-clean processes. Our multi-layer co-extrusion technology "sandwiches" the PCR between virgin functional barrier layers, ensuring the food only touches pure, certified polymers.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,165,0,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-orange-500" /> Trust Through Verification
                </h4>
                <p className="text-lg leading-relaxed mb-6">
                  Transparency is the core of our business. We provide <strong>Transaction Certificates (TC)</strong> from the Global Recycled Standard (GRS) or ISCC PLUS for every batch. We don't hide the PCR origin—we celebrate it as part of your brand's circular story.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">AB-A Co-Extrusion</h5>
                    <p className="text-xs">Ensures zero migration of NIAS (Non-Intentionally Added Substances).</p>
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">Mass Balance</h5>
                    <p className="text-xs">Advanced chemical recycling verification for 100% PCR claims.</p>
                  </div>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">The Aesthetics of Authenticity</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                PCR content can introduce a slight grey tint or tiny 'gels' (polymer specks). At Pouch.eco, we view these as symbols of sustainability. Modern consumers recognize these as visual proofs of real-world environmental impact, adding a layer of raw, premium authenticity to your packaging.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,165,0,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Scale className="text-orange-400" /> PLASTIC_TAX_HACK</h4>
                <p className="text-sm">In many regions (UK/EU), using 30% PCR exempts you from significant plastic taxes, often resulting in a net cost saving compared to virgin plastic.</p>
                <NeoButton variant="primary" className="mt-8 !bg-orange-400 !text-black w-full" to="/quote">TAX_CALCULATION</NeoButton>
              </NeoCard>
              <div className="bg-white p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><ClipboardList /> AUDIT_TRAIL</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">GRS Transaction Cert</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">FDA Super-Clean Cert</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">Migration Test OML/SML</div>
                  <div className="p-2 bg-[#F0F0F0] border-2 border-black">ISCC PLUS Chain of Custody</div>
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
            CLOSE_THE_LOOP<br/>
            <span className="text-orange-400">JOIN_THE_PCR_REV</span>
          </h2>
          <NeoButton variant="primary" className="!bg-orange-400 !text-black !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            START_RECYCLED_UPGRADE
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPackagingGuidePage
