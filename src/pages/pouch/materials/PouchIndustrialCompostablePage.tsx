import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, CheckCircle, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchIndustrialCompostablePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Industrial Compostable Packaging | EN 13432 | Pouch.eco</title>
        <meta name="description" content="Certified industrial compostable pouches. Optimized for commercial composting facilities. High-barrier, heat-sealable, and perfect for mass-market food products." />
        <link rel="canonical" href={`${baseUrl}/materials/industrial-compostable`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">INDUSTRIAL_GRADE_ECO</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">Scale.<br/>Heat.<br/>Dirt.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-2 border-[#D4FF00] p-4 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)]">
            EN 13432 & ASTM D6400 Certified. Designed for industrial composting infrastructure. High-performance sustainable barriers.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Request Industrial Samples</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl uppercase mb-12">Performance Without Plastic.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <NeoCard color="bg-[#F0F0F0]">
              <h4 className="font-black text-2xl uppercase mb-4">Industrial Advantage</h4>
              <p className="font-['JetBrains_Mono'] text-gray-700 text-sm">Industrial composting provides the heat and microbial activity needed to break down complex bio-polymers like PLA and PBS. This allows for higher barrier properties and better shelf life for demanding food products.</p>
            </NeoCard>
            <NeoCard color="bg-[#D4FF00]">
              <h4 className="font-black text-2xl uppercase mb-4 text-black">Certifications</h4>
              <ul className="space-y-4 font-['JetBrains_Mono'] font-bold text-sm text-black">
                <li className="flex gap-3"><Award /> EN 13432 (Europe)</li>
                <li className="flex gap-3"><Award /> ASTM D6400 (USA)</li>
                <li className="flex gap-3"><Award /> BPI Certified</li>
                <li className="flex gap-3"><Award /> TUV Industrial Compost</li>
              </ul>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchIndustrialCompostablePage
