import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Lock, Shield, ShieldCheck, Zap, ArrowRight, CheckCircle, Info } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchChildResistantMylarBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Child-Resistant Mylar Bags | Secure CRM Packaging | Pouch.eco</title>
        <meta name="description" content="Certified child-resistant mylar bags. Secure, smell-proof, and tamper-evident packaging for pharmaceuticals, cannabis, and sensitive products. Professional security." />
        <link rel="canonical" href={`${baseUrl}/topics/child-resistant-mylar-bags`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">SECURE_CORE_V5</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Safe.<br/>Secure.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">LOCKED</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            High-security packaging for sensitive products. Our child-resistant mylar bags combine certified safety mechanisms with professional brand presentation.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Secure Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request CRM Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">CERTIFIED_SAFETY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Push.<br/>Pull.<br/>Protect.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              We offer ASTM D3475 certified child-resistant closures. These "push and pull" mechanisms are easy for adults to use but provide the necessary resistance to keep children safe.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-gray-50 border-l-8 border-black p-4">
                <Lock className="text-black w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Smell-Proof & Moisture-Proof Barrier</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 border-l-8 border-black p-4">
                <ShieldCheck className="text-black w-8 h-8 flex-shrink-0" />
                <span className="font-black uppercase text-sm">Opaque Materials for Discrete Shipping</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/topics/child_resistant_mylar_bags.png" 
              alt="Child Resistant Mylar Bags" 
              className="relative z-10 border-4 border-black w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-100 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-12">Security FAQs</h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Are these bags ASTM certified?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our child-resistant bags meet the ASTM D3475 standards for child-resistant packaging.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2">Can I customize the size and print?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Absolutely. We offer full-color custom printing and custom sizing for all our CRM mylar bags.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Secure<br/>Scale.</h2>
          <NeoButton variant="dark" to="/quote">Get Secure Quote</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchChildResistantMylarBagsPage
