import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Printer, Shield, Zap, ArrowRight, CheckCircle, Palette } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchDigitalPrintingEcoPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Digital Printing for Eco Packaging | Low MOQ Pouches | Pouch.eco</title>
        <meta name="description" content="Photo-quality digital printing on sustainable packaging. No plate fees, fast 10-day turnaround. Perfect for small runs and multiple SKUs. Certified eco-friendly inks." />
        <link rel="canonical" href={`${baseUrl}/topics/digital-printing-eco-packaging`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">INK_JET_MAX_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Pure.<br/>Print.<br/>Now.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Digital printing on eco materials. No plates. No limits. Photo-quality resolution from 100 units.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/printing/digital">Explore Digital Print</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase mb-12 italic text-center">Infinite Customization</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-white">
              <Printer className="w-12 h-12 mb-4 text-[#FF0080]" />
              <h4 className="font-black text-xl">1200 DPI</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mt-2">Stunning detail and smooth gradients that rival traditional offset printing.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <Palette className="w-12 h-12 mb-4 text-cyan-600" />
              <h4 className="font-black text-xl">Water-Based Inks</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mt-2">Food-safe, low-odor, and fully compatible with compostable and recyclable films.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <Zap className="w-12 h-12 mb-4 text-yellow-500" />
              <h4 className="font-black text-xl">Zero Plate Fees</h4>
              <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mt-2">Eliminate massive setup costs. Update your design whenever you want at no extra cost.</p>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDigitalPrintingEcoPackagingPage
