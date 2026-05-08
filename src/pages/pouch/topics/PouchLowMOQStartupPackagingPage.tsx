import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Rocket, Shield, Zap, ArrowRight, CheckCircle, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchLowMOQStartupPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Low MOQ Eco Packaging | Startup Sustainable Solutions | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging from just 500 units. Perfect for startups and emerging brands. Digital printing, fast delivery, and certified eco materials." />
        <link rel="canonical" href={`${baseUrl}/topics/low-moq-startup-packaging`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">STARTUP_ACCELERATOR_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Start.<br/>Small.<br/>Grow.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Ditch the 10,000 unit minimums. Get world-class sustainable packaging with just 500 units.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Order Test Pack</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase mb-12 italic text-center text-magenta-600">No More Inventory Risk</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard>
              <Rocket className="w-12 h-12 mb-4" />
              <h4 className="font-black text-xl uppercase">Test & Iterate</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mt-4">Launch with multiple designs and test market response without massive upfront costs.</p>
            </NeoCard>
            <NeoCard>
              <Package className="w-12 h-12 mb-4 text-cyan-600" />
              <h4 className="font-black text-xl uppercase">Rapid Fulfillment</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mt-4">Ships in 10-15 business days. Keep your cash flow moving and your warehouse lean.</p>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchLowMOQStartupPackagingPage
