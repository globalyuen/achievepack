import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Recycle, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchBioPEPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Bio-PE Sustainable Packaging | Sugarcane Based | Pouch.eco</title>
        <meta name="description" content="Sugarcane-derived Bio-PE packaging. Carbon negative production, fossil-free, and fully recyclable. The sustainable alternative to traditional plastic." />
        <link rel="canonical" href={`${baseUrl}/materials/bio-pe`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">BIO_BASED_PROTOCOL</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Sugar.<br/>Not Oil.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Sugarcane-derived Bio-PE. Carbon negative. Fossil-free. 100% recyclable in standard streams.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Request Bio-PE Samples</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <NeoBadge color="cyan">CARBON_NEGATIVE</NeoBadge>
            <h2 className="font-black text-4xl uppercase mt-6">From Field to Pouch.</h2>
            <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
              Bio-PE is produced from ethanol derived from sugarcane. It captures CO2 from the atmosphere during its growth, making the material's carbon footprint negative.
            </p>
          </div>
          <NeoCard color="bg-[#F0F0F0]">
            <h4 className="font-black text-2xl uppercase mb-4">Tech Specs</h4>
            <ul className="space-y-4 font-['JetBrains_Mono'] font-bold text-sm">
              <li className="flex gap-3"><CheckCircle /> 100% Fossil-Free</li>
              <li className="flex gap-3"><CheckCircle /> Identical performance to PE</li>
              <li className="flex gap-3"><CheckCircle /> Recyclable in Code 4 stream</li>
              <li className="flex gap-3"><CheckCircle /> FDA Food-Safe Approved</li>
            </ul>
          </NeoCard>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchBioPEPage
