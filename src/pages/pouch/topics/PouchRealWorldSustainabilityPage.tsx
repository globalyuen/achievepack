import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Sprout, Recycle, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRealWorldSustainabilityPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Real-World Sustainability | Evidence-Based Packaging | Pouch.eco</title>
        <meta name="description" content="Moving beyond greenwashing. Discover practical sustainability: certified compostable materials, mono-PE recycling, and waste clarity for modern brands." />
        <link rel="canonical" href={`${baseUrl}/topics/real-world-sustainability`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-[#D4FF00] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">EVIDENCE_FIRST_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter">
            REAL<br/>
            WORLD<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">SUSTAIN</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Stop the greenwash. We help brands choose packaging that actually works in existing waste streams.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" href="https://calendly.com/30-min-free-packaging-consultancy">Book Audit Call</NeoButton>
            <NeoButton variant="secondary" to="/materials">Explore Materials</NeoButton>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-[-10%] w-[50%] aspect-square bg-white border-8 border-black rounded-full opacity-20 -rotate-12" />
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_CHALLENGE</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Confusion.<br/>Contamination.<br/>Consequences.</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed border-l-8 border-[#D4FF00] pl-6">
              Vague "eco-friendly" claims create sorting errors. If your compostable bag ends up in a recycling bin, it contaminates the whole batch. Real sustainability starts with **clarity**.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4">
              {[
                "Certified Compostable (EN13432)",
                "Verified Recyclable Mono-Materials",
                "Clear Disposal Instructions",
                "Proof over Promises"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#F0F0F0] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <CheckCircle className="text-black w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-4">
            <div className="absolute inset-0 bg-[#D4FF00] translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white">
              <ClickableImage 
                src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
                alt="Real World Sustainable Pouch" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-black text-4xl md:text-6xl uppercase italic">The Three Pillars</h2>
            <div className="flex-grow h-2 bg-black" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-white" className="!p-8 hover:bg-[#D4FF00] transition-colors group">
              <Sprout className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-2xl uppercase mb-4">Certified Compost</h3>
              <p className="font-['JetBrains_Mono'] text-gray-600 mb-6">
                Meeting EN13432 and ASTM D6400 is non-negotiable. We help you choose between Home and Industrial certifications.
              </p>
              <NeoBadge color="magenta">NO_VAGUE_CLAIMS</NeoBadge>
            </NeoCard>

            <NeoCard color="bg-white" className="!p-8 hover:bg-blue-400 transition-colors group">
              <Recycle className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-2xl uppercase mb-4">Mono-PE Wins</h3>
              <p className="font-['JetBrains_Mono'] text-gray-600 mb-6">
                Recyclability in the real world means Mono-Materials. Our PE/PE structures are compatible with soft plastic streams.
              </p>
              <NeoBadge color="blue">CURBSIDE_READY</NeoBadge>
            </NeoCard>

            <NeoCard color="bg-white" className="!p-8 hover:bg-purple-400 transition-colors group">
              <ShieldCheck className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-2xl uppercase mb-4">Waste Clarity</h3>
              <p className="font-['JetBrains_Mono'] text-gray-600 mb-6">
                We provide the guidance your customers need to sort correctly. From How2Recycle to OPRL standards.
              </p>
              <NeoBadge color="magenta">LABELING_AUDIT</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <NeoBadge color="green" className="mb-8">TAKE_ACTION</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            Audit Your<br/>Impact.
          </h2>
          <p className="text-xl md:text-2xl font-['JetBrains_Mono'] text-gray-400 mb-16">
            Get a 30-minute sustainability packaging audit. No sales pitch, just real data on your materials and waste stream compatibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Book Free Audit
            </NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-black" to="/materials">
              Material Hub
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRealWorldSustainabilityPage
