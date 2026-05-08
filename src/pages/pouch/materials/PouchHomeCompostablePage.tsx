import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Zap, CheckCircle, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchHomeCompostablePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Home Compostable Packaging | TUV OK Home Certified | Pouch.eco</title>
        <meta name="description" content="Certified home compostable pouches. Breaks down in your backyard compost bin within 180 days. TUV OK Home certified, food-safe, and high-barrier." />
        <link rel="canonical" href={`${baseUrl}/materials/home-compostable`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">HOME_COMPOST_READY</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Back.<br/>Yard.<br/>Soil.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            TUV OK Home Certified. Breaks down in 180 days in ambient conditions. The ultimate eco-friendly choice.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/sample">Order Home Samples</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl uppercase mb-12">No Industrial Heat Required.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <NeoCard color="bg-[#D4FF00]/20">
              <h4 className="font-black text-2xl uppercase mb-4">Why Home Compost?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-700">Most compostable plastics require 60°C+ industrial facilities. Our Home Compostable range breaks down at room temperature, making it accessible to every customer with a garden.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-2xl uppercase mb-4">Certifications</h4>
              <ul className="space-y-4 font-['JetBrains_Mono'] font-bold text-sm">
                <li className="flex gap-3"><Award className="text-magenta-600" /> TUV OK Home Compost</li>
                <li className="flex gap-3"><Award className="text-magenta-600" /> AS 5810 (Australia)</li>
                <li className="flex gap-3"><Award className="text-magenta-600" /> ABA Home Compostable</li>
                <li className="flex gap-3"><Award className="text-magenta-600" /> EN 13432 Compliant</li>
              </ul>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostablePage
