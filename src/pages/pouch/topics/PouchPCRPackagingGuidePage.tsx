import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchPCRPackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PCR_METRICS = [
    { label: 'Recycled Cont', value: '30-50%', unit: 'GRS', desc: 'Post-consumer resin percentage.' },
    { label: 'Carbon Save', value: '-2.5kg', unit: 'CO2e', desc: 'Emissions saved per kg resin.' },
    { label: 'Tax Relief', value: '100%', unit: 'Exempt', desc: 'Qualifies for UK/EU tax relief.' },
    { label: 'Food Safe', value: 'FDA', unit: 'EFSA', desc: 'Decontaminated food-grade resins.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>PCR Packaging Guide | Post-Consumer Recycled Tech | Pouch.eco</title>
        <meta name="description" content="Technical guide to PCR packaging. 800+ words of research on GRS certification, carbon metrics, and circular economy compliance." />
        <link rel="canonical" href={`${baseUrl}/topics/pcr-packaging`} />
        <meta name="keywords" content="PCR packaging, post-consumer recycled, GRS certified, recycled plastic, circular economy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">PCR_TECH_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Second.<br/>Life.<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Pure.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Stop digging, start recovering. We integrate up to 50% GRS-certified <strong>Post-Consumer Recycled (PCR)</strong> resin into your packaging structures—slashing carbon and eliminating plastic taxes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse PCR Solutions</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request GRS Evidence</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The PCR Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
                alt="PCR Integrated Structural Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">RECYCLED_CONTENT_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Engineered.<br/>To Reclaim.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Post-Consumer Recycled (PCR) resin is the engine of the 2026 <strong>Circular Economy</strong>. By reclaiming plastics from the waste stream and purifying them into high-performance resins, we decouple your supply chain from virgin fossil fuels. Our engineering protocol typically sandwiches <strong>30% to 50% PCR content</strong> between virgin polymer layers. This 'sandwich' structure ensures that your packaging maintains absolute <strong>seal integrity</strong> and <strong>food safety</strong> while achieving the carbon reduction targets required for ESG reporting. Every gram of PCR we use is <strong>GRS-certified</strong> and traceable back to the source.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PCR_METRICS.map((p, i) => (
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

      {/* Technical: The PCR Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">PCR_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Pure Tech.<br/>Pure Loop.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. GRS Traceability</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We provide full Transaction Certificates (TCs) for every PCR order. Your brand's recycled content claims are backed by audited legal evidence, not marketing 'estimates'.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Food-Grade Resins</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Utilizing advanced mechanical and chemical recycling, our PCR-PET and PCR-PE resins are decontaminated to meet FDA and EFSA standards for direct food contact.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Plastic Tax Relief</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Meeting the 30% PCR threshold exempts your brand from the UK Plastic Packaging Tax and qualifies for 'Eco-Modulated' fee reductions in EU EPR schemes.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Mechanical Integrity</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                By co-extruding PCR with virgin 'skin' layers, we maintain 100% of the puncture resistance and seal strength found in 100% virgin structures.
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
              <NeoBadge color="blue">RESIN_SCIENCE_V1</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Source.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                PCR quality is verified in the lab. We perform <strong>Fourier-transform infrared spectroscopy (FTIR)</strong> and <strong>Molecular Weight Analysis</strong> to ensure that the recycled resin meets our strict performance benchmarks. By utilizing <strong>GRS-certified</strong> supply chains, we ensure that the plastic we reclaim is processed ethically and technically correctly. We provide the <strong>Life Cycle Assessment (LCA)</strong> data for every order, proving that your switch to PCR has delivered a measurable reduction in global warming potential (GWP).
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Purity Tested</h4>
                    <p className="text-sm opacity-60">Tested for volatile organic compounds (VOCs) to ensure absolute safety for food contact.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Carbon Validated</h4>
                    <p className="text-sm opacity-60">Verified reduction in Scope 3 emissions compared to 100% virgin resin equivalents.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Verified PCR Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: PCR Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">PCR_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Will PCR affect the color of my packaging?", a: "High-quality rPET is nearly as clear as virgin PET. In PE structures, PCR can add a very slight 'grain' or 'tint', which many brands now lean into as a visual badge of sustainability." },
              { q: "Is PCR more expensive?", a: "The resin can be 10-20% more expensive than virgin plastic, but this is usually offset by avoiding the UK Plastic Packaging Tax (£217/tonne) and other global levies." },
              { q: "Can I use 100% PCR?", a: "Technically possible for non-food applications, but for high-barrier food pouches, we recommend 30-50% to ensure absolute seal integrity and safety." },
              { q: "How do I communicate PCR to my customers?", a: "We provide the icons and technical copy you need for your back-of-pack messaging, backed by our GRS certification numbers." }
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
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">PCR_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Recycled.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a PCR-integrated supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">Order PCR Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Resin Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPackagingGuidePage
