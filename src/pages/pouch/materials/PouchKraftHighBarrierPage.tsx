import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, Package, ArrowRight, CheckCircle, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchKraftHighBarrierPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Kraft High Barrier Packaging | Maximum Shelf Life | Pouch.eco</title>
        <meta name="description" content="Premium kraft paper pouches with high-barrier aluminum or EVOH protection. Ideal for coffee, nuts, and sensitive food products requiring long shelf life." />
        <link rel="canonical" href={`${baseUrl}/materials/kraft-high-barrier`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">PREMIUM_BARRIER_V8</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Kraft.<br/>Max.<br/>Shield.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Artisan aesthetic meets industrial protection. High-barrier aluminum or clear EVOH lining for 24+ month shelf life.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/quotes/flat-bottom">Get Premium Quote</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#451a03] translate-x-4 translate-y-4 border-4 border-black" />
            <img src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" alt="Kraft High Barrier" className="relative z-10 border-4 border-black w-full" />
          </div>
          <div>
            <NeoBadge color="cyan">ELITE_PROTECTION</NeoBadge>
            <h2 className="font-black text-4xl uppercase mt-6">Maximum Freshness.</h2>
            <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
              Our High Barrier Kraft range is designed for the most sensitive products. Whether it's the oils in specialty coffee or the delicate flavors of organic nuts, our multi-layer shield locks everything in.
            </p>
            <div className="mt-8 space-y-2">
              <div className="flex gap-3 font-bold uppercase text-sm"><CheckCircle className="text-[#D4FF00]" /> 99.9% UV Block</div>
              <div className="flex gap-3 font-bold uppercase text-sm"><CheckCircle className="text-[#D4FF00]" /> Superior Aroma Retention</div>
              <div className="flex gap-3 font-bold uppercase text-sm"><CheckCircle className="text-[#D4FF00]" /> Puncture Resistant</div>
            </div>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchKraftHighBarrierPage
