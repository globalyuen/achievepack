import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Search, ShieldCheck, Info, BarChart3, Globe, Zap, ClipboardCheck, Scale, History } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlySupplierVerificationPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Supplier Verification: Data-Driven Audit | Pouch.eco</title>
        <meta name="description" content="Master guide to auditing eco-friendly packaging suppliers. Learn about LCA methodology, ISO 14001, carbon footprinting, and sustainable sourcing (FSC/ISCC) for global brands." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-supplier-verification`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">DATA_AUDIT_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-black drop-shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            ECO_CLAIMS<br/>
            REQUIRE_REAL<br/>
            TECHNICAL_DATA
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-white max-w-4xl bg-black border-4 border-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Don't get tricked by 'green' marketing. We'll show you how to audit your supply chain using Life Cycle Assessment (LCA) and third-party certifications.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">START_ECO_AUDIT</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">LCA_METHODOLOGY</NeoButton>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_SCIENCE</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Life Cycle<br/>Assessment</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              True sustainability is measured, not guessed. We use <strong>LCA</strong> to quantify the environmental burden of every pouch from extraction to end-of-life.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">GWP Quantification</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">Measure the Global Warming Potential (CO2e) of your material choices to support ESG reporting.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Chain of Custody</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">FSC, PEFC, and ISCC PLUS verification to ensure every gram of material is sustainably sourced.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/eco_audit.png" 
                alt="Supplier Sustainability Audit" 
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
              <h3 className="font-black text-4xl uppercase italic mb-8">ISO 14001: The Operational Reality</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                An 'eco' product from a 'dirty' factory is not sustainable. We verify that our production partners implement <strong>ISO 14001 Environmental Management Systems</strong>, which track waste reduction, energy efficiency, and water management at the site level.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(52,211,153,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" /> Five Red Flags of Greenwash
                </h4>
                <p className="text-lg leading-relaxed mb-6">
                  Build your brand's E-E-A-T by avoiding these common low-trust behaviors from packaging suppliers:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 border-b-2 border-emerald-100 pb-4">
                    <span className="font-black text-emerald-500">01</span>
                    <span className="text-sm">No third-party cert numbers (BPI, TUV, FSC) on documentation.</span>
                  </li>
                  <li className="flex items-center gap-4 border-b-2 border-emerald-100 pb-4">
                    <span className="font-black text-emerald-500">02</span>
                    <span className="text-sm">Claiming 'natural' or 'earth-friendly' without technical definitions.</span>
                  </li>
                  <li className="flex items-center gap-4 border-b-2 border-emerald-100 pb-4">
                    <span className="font-black text-emerald-500">03</span>
                    <span className="text-sm">Promoting 'biodegradable' for multi-material fossil plastics.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="font-black text-emerald-500">04</span>
                    <span className="text-sm">Inability to provide primary carbon footprint data.</span>
                  </li>
                </ul>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Scope 3 Emissions Reporting</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                For most brands, 80-90% of their carbon footprint lies in their supply chain. Our <strong>Expert Audit Team</strong> provides the raw data packets you need to accurately report your Scope 3 emissions to stakeholders, ensuring your ESG reports are as bulletproof as your packaging.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(52,211,153,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Scale className="text-emerald-400" /> POLICY_CHECK</h4>
                <p className="text-sm">Compliant with the EU Green Claims Directive and FTC Green Guides standards for environmental marketing.</p>
                <NeoButton variant="primary" className="mt-8 !bg-emerald-400 !text-black w-full" to="/quote">LEGAL_REVIEW</NeoButton>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><History /> HISTORY_LOG</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-white border-2 border-black">ISO 14001 Registered</div>
                  <div className="p-2 bg-white border-2 border-black">Renewable Energy Used</div>
                  <div className="p-2 bg-white border-2 border-black">Zero Waste to Landfill</div>
                  <div className="p-2 bg-white border-2 border-black">Certified ISCC PLUS Partner</div>
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
            NO_LIES<br/>
            <span className="text-emerald-400">JUST_DATA</span>
          </h2>
          <NeoButton variant="primary" className="!bg-emerald-400 !text-black !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            GET_VERIFICATION_GUIDE
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierVerificationPage
