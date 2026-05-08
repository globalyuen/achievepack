import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, ArrowRight, CheckCircle, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCustomCompostablePouchSuppliersPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Compostable Pouch Suppliers | Global Manufacturing | Pouch.eco</title>
        <meta name="description" content="Direct factory access to certified compostable pouch manufacturing. Low MOQ, full color digital printing, and global logistics. Your premier sustainable packaging partner." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-compostable-pouch-suppliers`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">FACTORY_DIRECT_ACCESS</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Scale.<br/>Trust.<br/>Print.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Verified compostable pouch manufacturing for growing brands. Certified materials, uncompromised quality.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/quotes/stand-up-pouch">Get Factory Quote</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <NeoBadge color="lime">MANUFACTURING_INTEL</NeoBadge>
            <h2 className="font-black text-5xl uppercase mt-6">Why Partner With Us?</h2>
            <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
              Not all suppliers understand the nuances of compostable films. We've spent a decade perfecting the heat-seal, barrier, and print stability of plant-based materials.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 items-center font-bold uppercase"><CheckCircle className="text-magenta-600" /> BRC Grade A Certified</div>
              <div className="flex gap-4 items-center font-bold uppercase"><CheckCircle className="text-magenta-600" /> TUV OK Home Certified</div>
              <div className="flex gap-4 items-center font-bold uppercase"><CheckCircle className="text-magenta-600" /> 10-Day Digital Turnaround</div>
            </div>
          </div>
          <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <img src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" alt="Factory Production" className="w-full grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomCompostablePouchSuppliersPage
