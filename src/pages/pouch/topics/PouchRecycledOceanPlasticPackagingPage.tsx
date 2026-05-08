import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Anchor, CheckCircle, Package, ArrowRight, Zap, Droplets, Info } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecycledOceanPlasticPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Recycled Ocean Plastic Packaging | OBP Certified Pouches | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging made from recycled ocean-bound plastic (OBP). Help clean our oceans while providing premium protection for your products. OBP certified." />
        <link rel="canonical" href={`${baseUrl}/topics/recycled-ocean-plastic-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">OCEAN_BOUND_V1.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Pure.<br/>Ocean.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">RESTORE</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Every pouch helps clean the sea. Our Ocean-Bound Plastic (OBP) certified materials turn environmental risk into premium sustainable packaging.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Ocean Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request OBP Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/recycled_ocean_plastic_packaging.png" 
              alt="Recycled Ocean Plastic Packaging" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
          <div>
            <NeoBadge color="magenta">CERTIFIED_RECOVERY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Intercepted<br/>at Source.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              We utilize ocean-bound plastic collected from river mouths and coastal areas before it reaches the deep ocean. This material is then processed into high-quality resin suitable for durable packaging pouches.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-cyan-50 border-l-8 border-cyan-600 p-4">
                <Droplets className="text-cyan-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Certified OBP Recovery Operations</span>
              </div>
              <div className="flex items-center gap-4 bg-green-50 border-l-8 border-green-600 p-4">
                <Anchor className="text-green-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Full Traceability from Shore to Shelf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Ocean FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">What is Ocean-Bound Plastic (OBP)?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">OBP is plastic waste at risk of ending up in the ocean, typically collected within 50km of shorelines.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Is the material safe for food?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our recycled ocean plastic undergoes rigorous cleaning and processing to meet international food safety standards.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Clean<br/>Growth.</h2>
          <NeoButton variant="dark" to="/quote">Get Recycled Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecycledOceanPlasticPackagingPage
