import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, CheckCircle, Package, ArrowRight, Zap, Info, Lock } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchPFASFreePackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>PFAS-Free Food Packaging | Safe & Non-Toxic Pouches | Pouch.eco</title>
        <meta name="description" content="Certified PFAS-free food packaging. Safe, non-toxic, and eco-friendly pouches for organic and premium food brands. Protect your customers and the planet." />
        <link rel="canonical" href={`${baseUrl}/topics/pfas-free-food-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff00d4_1px,transparent_1px)] [background-size:24px_24px] bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">CHEMICAL_FREE_V2026</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Safe.<br/>Clean.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">PFAS_FREE</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Eliminate harmful "forever chemicals" from your supply chain. Our PFAS-free barriers provide superior protection without compromising safety.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Safe Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Safety Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-magenta-400 translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/pfas_free_packaging.png" 
              alt="PFAS-Free Packaging" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
          <div>
            <NeoBadge color="magenta">HEALTH_FIRST</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Beyond<br/>Compliance.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              PFAS chemicals are increasingly being banned globally. We stay ahead of regulations by utilizing advanced mineral-based and bio-polymer barriers that are 100% free from fluorinated compounds.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-green-50 border-l-8 border-green-600 p-4">
                <Shield className="text-green-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Certified Fluorine-Free Materials</span>
              </div>
              <div className="flex items-center gap-4 bg-blue-50 border-l-8 border-blue-600 p-4">
                <CheckCircle className="text-blue-600 w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Meets EU & US Food Safety Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Safety FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">What are PFAS?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">PFAS are "forever chemicals" often used for grease resistance but linked to health risks. Our packaging avoids them entirely.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">How do you achieve grease resistance without PFAS?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We use proprietary mechanical treatments and safe, plant-based coatings to provide excellent barrier properties.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Protect<br/>Your Brand.</h2>
          <NeoButton variant="dark" to="/quote">Get PFAS-Free Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPFASFreePackagingPage
