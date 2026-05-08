import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Gavel, Shield, Zap, ArrowRight, FileText, Globe, AlertTriangle, CheckCircle, Scale, BarChart3, FileCheck, ClipboardList } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchEcoPackagingRegulationsPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const REGULATORY_LANDSCAPE = [
    { region: 'European Union', law: 'PPWR (2030 Target)', mandate: '100% Recyclability', status: 'Immediate Action Required' },
    { region: 'United Kingdom', law: 'Plastic Packaging Tax', mandate: '30%+ Recycled Content', status: '£217.85/tonne Fine Avoidance' },
    { region: 'USA (California)', law: 'SB 54 (Circular Economy)', mandate: 'Producer Responsibility', status: 'Phased implementation 2024-2032' },
    { region: 'Australia', law: 'APCO 2025 National Targets', mandate: '100% Reusable/Recyclable', status: 'Voluntary moving to Mandatory' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco Packaging Regulations 2026 | Global Compliance Guide | Pouch.eco</title>
        <meta name="description" content="Stay compliant with global packaging regulations. Guide to EPR, Plastic Taxes, and SB54. Future-proof your food brand for 2026 mandates." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-packaging-regulations`} />
        <meta name="keywords" content="packaging compliance, EPR laws, plastic tax UK, SB 54 California, PPWR Europe, sustainable packaging regulation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">COMPLIANCE_WATCH_2026</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Law.<br/>Order.<br/>Green.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-4 border-[#D4FF00] p-6 shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]">
            Sustainability is no longer a suggestion—it's a legal requirement. We navigate the complex web of global mandates so your brand remains audit-ready and tax-exempt.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/certifications" className="!bg-[#D4FF00] !text-black">Download Compliance PDF</NeoButton>
            <NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" href="https://calendly.com/30-min-free-packaging-consultancy">Speak to Legal Expert</NeoButton>
          </div>
        </div>
      </section>

      {/* Global Landscape Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/usa/hub/a_label_compliance_requirements_0902238.webp" 
                alt="Global Packaging Compliance" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">REGULATORY_INTEL</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">The Cost of<br/>Non-Compliance.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                From the UK's Plastic Packaging Tax to California's SB 54, brands that fail to adopt sustainable materials are facing aggressive fines and retail delisting.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-red-50 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AlertTriangle className="text-red-600 w-8 h-8 flex-shrink-0" />
                  <span className="font-black uppercase text-sm italic underline">WARNING: Retailers are delisting non-compliant SKUs.</span>
                </div>
                <div className="flex items-center gap-4 bg-green-50 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="text-green-600 w-8 h-8 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Pouch.eco materials exceed 2030 mandates.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Matrix Table */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">Global Mandates</h2>
          </div>
          <div className="overflow-x-auto border-4 border-black bg-white">
            <table className="w-full text-left font-['JetBrains_Mono'] text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-6">REGION</th>
                  <th className="p-6">LAW / INITIATIVE</th>
                  <th className="p-6">KEY MANDATE</th>
                  <th className="p-6">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/10">
                {REGULATORY_LANDSCAPE.map((row, i) => (
                  <tr key={i} className="hover:bg-yellow-50 transition-colors">
                    <td className="p-6 font-black uppercase">{row.region}</td>
                    <td className="p-6 font-bold">{row.law}</td>
                    <td className="p-6">{row.mandate}</td>
                    <td className="p-6">
                      <span className="bg-black text-[#D4FF00] px-2 py-1 text-[10px] font-black uppercase">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust & Certs Grid */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NeoCard>
            <div className="relative mb-6">
              <img src="/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp" className="border-2 border-black w-full" alt="Certification Audit" />
            </div>
            <h4 className="font-black text-2xl uppercase mb-4">Chain of Custody</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">We provide full traceability from resin supplier to finished pouch, ensuring your ESG reports are backed by hard data.</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
            <div className="relative mb-6">
              <img src="/imgs/seo-photos/a_eu_ppwr_compliant_pouch_achieve_pack_3186238.webp" className="border-2 border-black w-full" alt="EU Compliance" />
            </div>
            <h4 className="font-black text-2xl uppercase mb-4">EPR Optimization</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Extended Producer Responsibility fees are calculated based on material choice. Our mono-material designs can reduce your fees by up to 60%.</p>
          </NeoCard>
          <NeoCard>
            <div className="p-8 bg-black text-[#D4FF00] h-full flex flex-col justify-center text-center">
              <ClipboardList className="w-16 h-16 mx-auto mb-6" />
              <h4 className="font-black text-3xl uppercase">Compliance Audit</h4>
              <p className="text-xs font-bold mt-4 uppercase italic">Is your current packaging legal? Get a free regulatory audit today.</p>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">AUDIT_PROTOCOL</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-[#D4FF00]">Future.<br/>Proof.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Don't wait for a fine to find out your packaging is non-compliant. Transition to certified sustainable materials with Pouch.eco today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/certifications" className="!bg-[#D4FF00] !text-black">View Certifications</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Regulatory Audit Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoPackagingRegulationsPage
