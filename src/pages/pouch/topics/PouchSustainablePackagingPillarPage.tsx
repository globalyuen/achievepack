import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Leaf, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, Globe, BarChart3, FlaskConical, FileText } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchSustainablePackagingPillarPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>What is Sustainable Packaging? Engineering & Ethics Guide | Pouch.eco</title>
        <meta name="description" content="A deep-research guide into sustainable packaging science, circularity, and E-E-A-T principles. Learn how to audit your brand and avoid greenwashing traps." />
        <link rel="canonical" href={`${baseUrl}/topics/sustainable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-[#D4FF00] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">ECO_STRATEGY_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic">
            SUSTAINABLE<br/>
            BY_DESIGN<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">NOT_BY_CHANCE</span>
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Sustainability is an engineering discipline, not a marketing gimmick. This is our master guide to navigating the technical reality of the circular economy.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">CONTACT_EXPERTS</NeoButton>
            <NeoButton variant="secondary" to="/materials">MATERIAL_LAB</NeoButton>
          </div>
        </div>
      </section>

      {/* Authority Definition */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_SCIENCE</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Lifecycle<br/>Analysis</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              Sustainability in packaging isn't just about what a bag is made of; it's about what happens to it. At Pouch.eco, we evaluate every structure through the lens of <strong>LCA (Life Cycle Assessment)</strong>.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Resource Extraction</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">We prioritize bio-based feedstocks and recycled resins (PCR) to reduce dependency on virgin fossil fuels.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-8 h-8 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Material Circularity</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">The goal is a closed loop. If a package isn't designed for composting or high-grade recycling, it's just delayed waste.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4FF00] translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/sustainable_pillar.png" 
                alt="Engineering Sustainable Materials" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Research Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-xl max-w-none font-['JetBrains_Mono']">
                <h3 className="font-black text-4xl uppercase italic mb-8">The E-E-A-T Standard of Proof</h3>
                <p className="text-gray-800 leading-relaxed">
                  In an era of <strong>Global Green Claims Regulation</strong>, brands face increasing legal liability for vague environmental marketing. The EU Green Claims Directive and California's SB 54 have set a new bar: if you can't prove it with technical data, you can't say it.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Our commitment to Authoritativeness means every material we recommend is backed by its specific <strong>Technical Data Sheet (TDS)</strong>, <strong>Migration Test Reports</strong>, and <strong>Third-Party Certifications</strong> (BPI, TUV, GRS). We don't just sell bags; we sell verified environmental performance.
                </p>
                <div className="my-12 p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(212,255,0,1)]">
                  <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                    <AlertTriangle className="text-red-500" /> Avoiding the Greenwash Trap
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="font-black text-2xl text-red-500">01</span>
                      <span className="text-lg"><strong>Biodegradable vs. Compostable:</strong> "Biodegradable" is a time-unspecified claim. "Compostable" is a certified technical performance standard (EN13432).</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-black text-2xl text-red-500">02</span>
                      <span className="text-lg"><strong>Bio-Based vs. Plastic-Free:</strong> Many bio-plastics (like Bio-PE) are chemically identical to fossil-plastic; they are renewable but still non-biodegradable.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-black text-2xl text-red-500">03</span>
                      <span className="text-lg"><strong>Recyclable vs. Recycled:</strong> A multi-material pouch might be "theoretically" recyclable, but in the real world, only mono-material structures are processed by facilities.</span>
                    </li>
                  </ul>
                </div>
                <h3 className="font-black text-4xl uppercase italic mb-8">Future-Proofing Your Brand</h3>
                <p className="text-gray-800 leading-relaxed">
                  The transition to sustainable packaging is a journey. We advise brands to start with "Right-Sizing" and "Lightweighting"—reducing the amount of material used before attempting to switch to more complex compostable structures. This "Reduction First" strategy yields immediate carbon savings and lower operational costs.
                </p>
              </div>
            </div>
            <aside className="space-y-8">
              <div className="bg-black text-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
                  <FlaskConical className="text-[#D4FF00]" /> MATERIAL_STATS
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-black uppercase mb-1">
                      <span>Mono-PE Recyclability</span>
                      <span>98%</span>
                    </div>
                    <div className="h-4 bg-gray-800 border-2 border-white">
                      <div className="h-full bg-[#D4FF00]" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-black uppercase mb-1">
                      <span>Bio-Purity (PBS/NK)</span>
                      <span>100%</span>
                    </div>
                    <div className="h-4 bg-gray-800 border-2 border-white">
                      <div className="h-full bg-blue-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-black uppercase mb-1">
                      <span>Carbon Reduction (PCR)</span>
                      <span>35%</span>
                    </div>
                    <div className="h-4 bg-gray-800 border-2 border-white">
                      <div className="h-full bg-magenta-400" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <NeoCard color="bg-blue-400" className="border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4">Expert Audit</h4>
                <p className="text-sm font-['JetBrains_Mono']">We offer full packaging audits to evaluate your current slack-fill ratio and material liability.</p>
                <NeoButton variant="dark" className="mt-6 w-full" to="/quote">BOOK_AUDIT</NeoButton>
              </NeoCard>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-8xl uppercase italic mb-16 text-center">COMMON_QUESTIONS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Is sustainable packaging always more expensive?",
                a: "Initially, yes (15-30% premium). But when you factor in brand equity, carbon tax avoidance, and logistics optimization, the ROI is overwhelmingly positive."
              },
              {
                q: "Can eco-materials match fossil-plastic barrier?",
                a: "Absolutely. Modern NK/Kraft/PBS structures achieve OTR levels (<1.0) that protect even the most sensitive coffee and spice products for up to 18 months."
              },
              {
                q: "How do I verify a supplier's claim?",
                a: "Ask for their BPI or TUV license number. If they only show a 'lab report' without a license, they likely haven't passed the full certification."
              },
              {
                q: "What is the fastest way to start?",
                a: "Right-sizing. Engineering out the excess air in your current pouches reduces your plastic footprint by 15% overnight with zero changes to your filling lines."
              }
            ].map((faq, i) => (
              <NeoCard key={i} color="bg-[#F0F0F0]" className="border-4 border-black p-8 hover:bg-[#D4FF00] transition-all">
                <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6" /> {faq.q}
                </h3>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm leading-relaxed">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            UPGRADE_NOW<br/>
            <span className="text-[#D4FF00]">JOIN_THE_LOOP</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black !text-2xl px-12 py-6" to="/quote">
              START_CONSULTATION
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchSustainablePackagingPillarPage
