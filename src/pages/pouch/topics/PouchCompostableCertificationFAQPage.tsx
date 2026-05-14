import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Info, HelpCircle, FileCheck, ArrowLeftRight, ArrowRight, ClipboardCheck, Scale, Search } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostableCertificationFAQPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Certification Standards: The Expert FAQ | Pouch.eco</title>
        <meta name="description" content="Technical guide to EN 13432 and ASTM D6400 certification. Learn how to verify supplier claims and navigate global composting standards for professional packaging." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-certification`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">COMPLIANCE_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            CERTIFIED<br/>
            OR_NOT<br/>
            COMPOSTABLE
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-white max-w-4xl bg-black border-4 border-white p-8 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
            In the world of biological materials, a 'test report' is not a certification. We'll show you how to verify the technical proof that keeps your brand safe.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/quote">VERIFY_A_SUPPLIER</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">CERT_DATABASE</NeoButton>
          </div>
        </div>
      </section>

      {/* Certification Breakdown */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_STANDARDS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">EN13432 vs<br/>ASTM D6400</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              These aren't just numbers. They are rigorous laboratory protocols that test for <strong>disintegration</strong>, <strong>biodegradability</strong>, <strong>eco-toxicity</strong>, and <strong>heavy metal limits</strong>.
            </p>
            <div className="mt-12 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <table className="w-full text-left font-['JetBrains_Mono'] text-sm">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="p-4 border-r border-white/20">TEST</th>
                    <th className="p-4">REQUIREMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                  <tr className="bg-[#F0F0F0]">
                    <td className="p-4 border-r border-black font-black uppercase">Fragmentation</td>
                    <td className="p-4">90% must pass 2mm sieve in 12 weeks.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-r border-black font-black uppercase">Bio-Rate</td>
                    <td className="p-4">90% conversion to CO2 in 180 days.</td>
                  </tr>
                  <tr className="bg-[#F0F0F0]">
                    <td className="p-4 border-r border-black font-black uppercase">Toxicity</td>
                    <td className="p-4">Plant growth must be &gt; 90% of control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/certification_faq.png" 
                alt="Certification Seals" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">Trustworthiness Through Verification</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                A trustworthy supplier will provide a <strong>License Number</strong>, not just a test summary. At Pouch.eco, we advocate for the E-E-A-T principle of <strong>External Verification</strong>. We encourage all our clients to verify our certification numbers on the official BPI or TUV Austria databases.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(212,255,0,1)]">
                <h4 className="font-black text-3xl uppercase mb-6">Expert Audit Checklist</h4>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    <span className="text-lg">License must be in the manufacturer's specific name.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    <span className="text-lg">The material structure must match the certified spec.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    <span className="text-lg">Component certification (ink/zipper) must be included.</span>
                  </li>
                </ul>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">The Global Authorities</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                From <strong>TUV Austria</strong> (OK Compost) in Europe to <strong>BPI</strong> in North America and <strong>ABA</strong> in Australia, the global network of certification ensures that bioplastics meet a standardized safety threshold. Navigating these marks is essential for brands exporting to multiple international markets.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Scale className="text-[#D4FF00]" /> LEGAL_RISK</h4>
                <p className="text-sm">Vague eco-claims without certification numbers now face significant fines under the EU Green Claims Directive and FTC Green Guides.</p>
                <NeoButton variant="primary" className="mt-8 !bg-[#D4FF00] !text-black w-full" to="/quote">LEGAL_AUDIT</NeoButton>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><Search /> LOGO_LOOKUP</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-white border-2 border-black">OK Compost Industrial</div>
                  <div className="p-2 bg-white border-2 border-black">BPI Certified</div>
                  <div className="p-2 bg-white border-2 border-black">Seedling Mark</div>
                  <div className="p-2 bg-white border-2 border-black">ABA Home Compostable</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            CERT_CHECK<br/>
            <span className="text-[#D4FF00]">STAY_SAFE</span>
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black !text-2xl px-12 py-6 border-4 border-black" to="/quote">
            GET_COMPLIANCE_GUIDE
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableCertificationFAQPage
