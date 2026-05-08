import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, CheckCircle, Package, ArrowRight, Zap, Info, BarChart3 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMonoPEPouchesPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Mono-PE Pouches | Single Material Packaging | Pouch.eco</title>
        <meta name="description" content="Fully recyclable Mono-PE pouches. Single-material construction for easy store drop-off recycling. High barrier properties with a sustainable circular economy focus." />
        <link rel="canonical" href={`${baseUrl}/topics/mono-material-pe-pouches`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">CIRCULAR_ECONOMY_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Pure.<br/>PE.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">RECYCLE</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Stop mixing materials. Our Mono-PE pouches use a single polymer construction to ensure they are fully recyclable in existing PE streams.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Recycle Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request PE Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/mono_pe_pouches.png" 
              alt="Mono-PE Recyclable Pouches" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <NeoBadge color="magenta">SINGLE_MATERIAL</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Simplify<br/>Everything.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              Traditional pouches mix PET, PE, and Foil, making them impossible to recycle. Our Mono-PE technology uses oriented PE to provide the stiffness and barrier you need without the multi-material mess.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-cyan-50 border-l-8 border-cyan-600 p-4">
                <Recycle className="text-cyan-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">100% Recyclable (Level 4 PE)</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 border-l-8 border-gray-600 p-4">
                <BarChart3 className="text-gray-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">High Clarity & Gloss Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Recycling FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Can these be recycled at home?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">In most regions, Mono-PE is accepted at "store drop-off" locations alongside grocery bags.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Are they as strong as normal pouches?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes! We use specialized MDO-PE (Machine Direction Oriented) to ensure they have excellent puncture resistance and stiffness.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Loop<br/>In.</h2>
          <NeoButton variant="dark" to="/quote">Get Recyclable Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoPEPouchesPage
