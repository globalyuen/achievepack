import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Shield, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchPCRPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>PCR Recycled Packaging | Post-Consumer Content | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging with 30-100% PCR (Post-Consumer Recycled) plastic. Reduce virgin plastic use and meet global circular economy mandates. FDA food-safe approved." />
        <link rel="canonical" href={`${baseUrl}/materials/pcr`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">CIRCULAR_LOOP_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Waste.<br/>Woven.<br/>New.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Post-Consumer Recycled (PCR) content. 30-100% recycled plastic. High-barrier, food-safe, and planet-ready.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Get PCR Samples</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <NeoCard color="bg-black text-white shadow-[12px_12px_0px_0px_rgba(0,255,255,1)]">
            <Recycle className="w-12 h-12 mb-6 text-[#00FFFF]" />
            <h4 className="font-black text-3xl uppercase mb-4">Circular Stats</h4>
            <ul className="space-y-4 font-['JetBrains_Mono'] font-bold text-sm">
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> Reduces virgin plastic use by 100%</li>
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> 25% lower carbon footprint</li>
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> GRS (Global Recycled Standard)</li>
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> FDA/EFSA Food Contact Safe</li>
            </ul>
          </NeoCard>
          <div>
            <h2 className="font-black text-4xl uppercase">The Recycled Standard.</h2>
            <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
              PCR gives a second life to plastic waste that would otherwise end up in landfills or oceans. By using PCR, you directly support the recycling infrastructure and circular economy.
            </p>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPage
