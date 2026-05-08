import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Droplets, Shield, Zap, ArrowRight, CheckCircle, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCompostableHumidityControlPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Humidity Control Packaging | Pouch.eco</title>
        <meta name="description" content="Integrated humidity control in compostable packaging. Protect moisture-sensitive products with sustainable barriers. Ideal for tea, supplements, and snacks." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-humidity-control`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">MOISTURE_LOCK_TECH</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Dry.<br/>Safe.<br/>Green.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Advanced humidity control integrated into 100% compostable packaging. 
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Request Samples</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl uppercase mb-8">Protection Without Plastic</h2>
          <p className="text-xl font-['JetBrains_Mono'] text-gray-600 mb-12">
            Moisture-sensitive products like tea, powders, and specialty snacks require precise humidity control. Our plant-based films deliver industrial-strength barriers while remaining home compostable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard><Droplets className="w-12 h-12 mb-4" /> <h4 className="font-black">MVTR Optimized</h4> <p className="text-sm">High moisture vapor transmission barrier.</p></NeoCard>
            <NeoCard><Shield className="w-12 h-12 mb-4" /> <h4 className="font-black">Odor Protection</h4> <p className="text-sm">Locks in aromas and keeps contaminants out.</p></NeoCard>
            <NeoCard><Award className="w-12 h-12 mb-4" /> <h4 className="font-black">Certified TUV</h4> <p className="text-sm">Verified for both home and industrial composting.</p></NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableHumidityControlPage
