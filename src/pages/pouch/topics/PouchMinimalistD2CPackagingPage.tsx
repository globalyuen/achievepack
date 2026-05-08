import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layout, CheckCircle, Package, ArrowRight, Zap, MousePointer2, Info } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMinimalistD2CPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Minimalist D2C Packaging | E-commerce Shipping Pouches | Pouch.eco</title>
        <meta name="description" content="Sleek minimalist D2C packaging for e-commerce brands. Premium matte finish, clean designs, and eco-friendly materials that deliver a stunning unboxing experience." />
        <link rel="canonical" href={`${baseUrl}/topics/minimalist-d2c-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">UNBOXING_ELITE_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Less.<br/>Is.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">MORE</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Elevate your unboxing experience. Our minimalist D2C packaging combines premium matte finishes with eco-certified materials for the modern brand.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Design Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request D2C Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">PREMIUM_AESTHETIC</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Matte.<br/>Muted.<br/>Modern.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              We specialize in the "soft-touch" matte finish that modern D2C brands crave. Our minimalist approach reduces ink usage and focuses on clean typography and high-quality sustainable substrates.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-gray-50 border-l-8 border-black p-4">
                <Layout className="text-black w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Reduced Ink Coverage for Eco-Optimization</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 border-l-8 border-black p-4">
                <MousePointer2 className="text-black w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Digitally Printed - Fast SKU Testing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gray-400 translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/minimalist_d2c_packaging.png" 
              alt="Minimalist D2C Packaging" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Design FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Can you help with the minimalist design?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our design team can help you strip back your current design to achieve that sleek, minimalist aesthetic.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">What materials look best for minimalist brands?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Our matte-finished PCR (Post-Consumer Recycled) or Kraft-Paper Compostable materials are huge favorites for D2C brands.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Less<br/>Waste.</h2>
          <NeoButton variant="dark" to="/quote">Get Minimalist Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMinimalistD2CPackagingPage
