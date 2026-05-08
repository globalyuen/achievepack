import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Gavel, Shield, Zap, ArrowRight, FileText, Globe } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { getBaseUrl } from '../../utils/domain'

const PouchEcoPackagingRegulationsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  return (
    <PouchLayout>
      <Helmet>
        <title>Eco Packaging Regulations 2026 | Compliance Guide | Pouch.eco</title>
        <meta name="description" content="Stay compliant with global packaging regulations. Guide to EPR, Plastic Taxes, and SB54. Future-proof your food brand for 2026 mandates." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-packaging-regulations`} />
      </Helmet>
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">REGULATORY_PROTOCOL_2026</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Law.<br/>Order.<br/>Green.</h1>
          <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-2 border-[#D4FF00] p-4 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)]">
            Don't get fined. Get compliant. Global sustainability laws are changing—we keep you ahead.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <NeoButton variant="primary" to="/certifications">View Certifications</NeoButton>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase mb-12 italic text-center">Mandates You Need to Know</h2>
          <div className="space-y-8">
            <NeoCard>
              <div className="flex gap-6 items-start">
                <Globe className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-2xl uppercase">EU PPWR (2030)</h4>
                  <p className="text-gray-600 font-['JetBrains_Mono'] mt-2">Mandatory recyclability for all packaging. We are already meeting 2030 standards today.</p>
                </div>
              </div>
            </NeoCard>
            <NeoCard>
              <div className="flex gap-6 items-start">
                <Shield className="w-12 h-12 flex-shrink-0 text-magenta-600" />
                <div>
                  <h4 className="font-black text-2xl uppercase">USA SB 54 (California)</h4>
                  <p className="text-gray-600 font-['JetBrains_Mono'] mt-2">Circular economy requirements for plastic producers. Compliance is built into our mono-material range.</p>
                </div>
              </div>
            </NeoCard>
            <NeoCard>
              <div className="flex gap-6 items-start">
                <Gavel className="w-12 h-12 flex-shrink-0 text-cyan-600" />
                <div>
                  <h4 className="font-black text-2xl uppercase">UK Plastic Packaging Tax</h4>
                  <p className="text-gray-600 font-['JetBrains_Mono'] mt-2">Tax exemptions for packaging with 30%+ recycled content. Our PCR films are 100% tax-compliant.</p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoPackagingRegulationsPage
