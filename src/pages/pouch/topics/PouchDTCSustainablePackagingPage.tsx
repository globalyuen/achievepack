import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingBag, Shield, Zap, ArrowRight, CheckCircle, Package } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { getBaseUrl } from '../../utils/domain'

const PouchDTCSustainablePackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>DTC Sustainable Packaging | Direct-to-Consumer Solutions | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging optimized for DTC brands. Lightweight, durable, and 100% eco-friendly. Reduce shipping costs and delight customers with premium unboxing." />
        <link rel="canonical" href={`${baseUrl}/topics/dtc-sustainable-packaging`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">DTC_OPTIMIZATION_ALPHA</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Ship.<br/>Save.<br/>Green.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Built for the modern e-commerce brand. Lightweight pouches that reduce carbon footprint and shipping fees.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/products">View DTC Catalog</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
            <h3 className="font-black text-3xl uppercase mb-6">The DTC Edge</h3>
            <ul className="space-y-4 font-['JetBrains_Mono']">
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> 60% lighter than glass/rigid</li>
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> Puncture-resistant for transit</li>
              <li className="flex gap-3"><CheckCircle className="text-[#00FFFF]" /> 100% letterbox compatible</li>
            </ul>
          </div>
          <div>
            <h2 className="font-black text-4xl uppercase">Unboxing Matters.</h2>
            <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
              Your customer's first physical touchpoint is your packaging. Our premium finishes and sustainable story create an unboxing experience that drives social shares and loyalty.
            </p>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDTCSustainablePackagingPage
