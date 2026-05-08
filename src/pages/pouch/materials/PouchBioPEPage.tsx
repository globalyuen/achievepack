import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Globe, Shield, Zap, Recycle, ArrowRight, BarChart3, Factory } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchBioPEPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PERFORMANCE_DATA = [
    { label: 'Tensile Strength', bio: 'High (30MPa)', fossil: 'High (30MPa)', match: true },
    { label: 'Moisture Barrier', bio: 'Superior', fossil: 'Superior', match: true },
    { label: 'Heat Sealability', bio: '110°C - 160°C', fossil: '110°C - 160°C', match: true },
    { label: 'Food Safety', bio: 'FDA / EU Approved', fossil: 'FDA / EU Approved', match: true }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Bio-PE Sustainable Packaging | Sugarcane Based | Pouch.eco</title>
        <meta name="description" content="Sugarcane-derived Bio-PE packaging. Carbon negative production, fossil-free, and fully recyclable. The sustainable alternative to traditional plastic." />
        <link rel="canonical" href={`${baseUrl}/materials/bio-pe`} />
        <meta name="keywords" content="Bio-PE, sugarcane plastic, carbon negative packaging, sustainable pouches, green PE" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-lime-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">BIO_BASED_PROTOCOL_V4</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">Sugar.<br/>Not Oil.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Sugarcane-derived Bio-PE. Carbon negative. Fossil-free. 100% recyclable in standard LDPE/PE streams without contamination.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">Request Bio-PE Samples</NeoButton>
            <NeoButton variant="secondary" to="/products">View Bio-PE Pouches</NeoButton>
          </div>
        </div>
      </section>

      {/* Tech Overview Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/Bio-PE.webp" 
                alt="Bio-PE Lifecycle" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">LIFECYCLE_ADVANTAGE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">Carbon<br/>Negative<br/>Impact.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Bio-PE is produced from ethanol derived from sustainably grown sugarcane. Every ton of Bio-PE captures up to 3.09 tons of CO2 from the atmosphere during its growth cycle.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <BarChart3 className="text-green-600 w-8 h-8 mb-2" />
                  <h4 className="font-black uppercase text-xs">Carbon Footprint</h4>
                  <p className="text-[10px] font-bold">-3.09kg CO2 per kg</p>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="text-blue-600 w-8 h-8 mb-2" />
                  <h4 className="font-black uppercase text-xs">Origin</h4>
                  <p className="text-[10px] font-bold">100% Sugarcane Ethanol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Comparison */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">The Performance Mirror</h2>
          <p className="text-center font-['JetBrains_Mono'] mb-12 text-xl opacity-80">Bio-PE matches fossil-based PE 1:1 in drop-test and barrier performance.</p>
          <div className="overflow-x-auto border-4 border-white bg-black">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">PROPERTY</th>
                  <th className="p-6 text-left">SUGARCANE BIO-PE</th>
                  <th className="p-6 text-left">FOSSIL-BASED PE</th>
                  <th className="p-6 text-left">MATCH</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 font-black uppercase">{row.label}</td>
                    <td className="p-6 text-[#D4FF00]">{row.bio}</td>
                    <td className="p-6">{row.fossil}</td>
                    <td className="p-6">✅</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <img src="/imgs/cert/im-green-logo.png" className="w-24 mb-6" alt="I'm Green Logo" />
            <h4 className="font-black text-xl mb-4 uppercase">Verified Origin</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Certified by ASTM D6866, our Bio-PE is part of the "I'm Green" ecosystem, ensuring full traceability back to the sugarcane fields.</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
            <Shield className="w-12 h-12 mb-6 text-green-600" />
            <h4 className="font-black text-xl mb-4 uppercase">Food Safe Compliance</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Fully FDA and EU food contact approved. Safe for liquid, oily, and dry foods without BPA or phthalates.</p>
          </NeoCard>
          <NeoCard>
            <Recycle className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-xl mb-4 uppercase">Circular Ready</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Can be recycled in the existing PE recycling stream (Code 4). No special infrastructure needed for disposal.</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">SUSTAINABILITY_UPGRADE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Sweet.<br/>Secure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to ditch oil-based plastics? Transition your brand to Bio-PE and claim a carbon-negative profile today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Order Bio-PE Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              LCA Analysis Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchBioPEPage
