import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Package, CheckCircle, Recycle, Zap, BarChart3, ArrowRight } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { getBaseUrl } from '../../utils/domain'

const PouchRecyclableSnackPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Snack Packaging | Mono-Material Solutions | Pouch.eco</title>
        <meta name="description" content="Fully recyclable mono-material snack packaging. Store drop-off compatible PE pouches. High moisture barrier for chips, nuts, and snacks. Low 500 unit MOQ." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-snack-packaging`} />
        <meta name="keywords" content="recyclable snack packaging, mono-material pouches, sustainable snack bags, PE recyclable packaging, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">CIRCULAR_ECONOMY_V4</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Crunch.<br/>
            Cycle.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Repeat.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            High-performance mono-material snack packaging. 100% recyclable. Zero plastic tax. Perfect for retail.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/industry/snacks">Snack Industry Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Get Recyclable Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_achievepack_low_barrier_fresh_5851801.webp" 
                alt="Recyclable Snack Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="lime">MONO_MATERIAL_TECH</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">One Material.<br/>Infinite Life.</h2>
              <p className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono']">
                Traditional snack bags are laminates of different plastics and foils, making them impossible to recycle. Our Mono-PE pouches use one polymer for everything, ensuring they belong in the recycling bin, not the landfill.
              </p>
              <div className="mt-12 space-y-4">
                {[
                  { icon: Recycle, title: 'Mono-PE Structure', desc: '100% PE-based film for seamless recycling stream integration.' },
                  { icon: Zap, title: 'High Moisture Barrier', desc: 'Superior protection against moisture to keep snacks crunchy.' },
                  { icon: Package, title: 'Store Drop-off Ready', desc: 'Meets How2Recycle and European recycling requirements.' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border-2 border-black bg-[#F0F0F0]">
                    <s.icon className="w-8 h-8 text-[#00FFFF]" />
                    <div>
                      <h4 className="font-black text-lg uppercase">{s.title}</h4>
                      <p className="text-sm opacity-70 font-['JetBrains_Mono']">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIEO FAQ */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl text-center mb-16 uppercase">Snack Brand FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can recyclable pouches hold nitrogen for chips?", a: "Yes. Our mono-material films are engineered to hold a nitrogen flush, ensuring your chips stay fresh and protected during transit while remaining fully recyclable." },
              { q: "Is the print quality as good as traditional plastic?", a: "Absolutely. We use high-spec digital and flexographic printing that delivers vibrant colors and sharp graphics on mono-PE substrates, with matte or gloss finishes." },
              { q: "Do these bags meet the UK/EU plastic tax requirements?", a: "Yes. Because they are 100% recyclable and often contain PCR content, they qualify for tax exemptions and meet upcoming EPR regulations." },
              { q: "Are mono-material pouches puncture-resistant?", a: "We offer multiple thicknesses (80-140 microns) to ensure heavy or sharp snacks like nuts and hard crackers don't compromise the bag's integrity." }
            ].map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <span className="bg-[#00FFFF] text-black px-2 py-0.5 text-xs">SNACK_INTEL</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-[#00FFFF] pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#00FFFF]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">Close the<br/>Loop.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Switch to 100% recyclable mono-material snack packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">Order Recyclable Pack</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation <ArrowRight className="inline ml-2" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclableSnackPackagingPage
