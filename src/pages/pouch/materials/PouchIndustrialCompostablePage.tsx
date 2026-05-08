import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Box, Truck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchIndustrialCompostablePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const INDUSTRIAL_CAPABILITIES = [
    { label: 'Shelf Stability', value: '12-24 Months', desc: 'Superior barrier structures compared to home-compostable variants.' },
    { label: 'Heat Resistance', value: 'Up to 90°C', desc: 'Capable of withstanding higher filling temperatures and hot environments.' },
    { label: 'Printing Clarity', value: 'Photo-Realistic', desc: 'Surface quality optimized for high-density flexo and digital inks.' },
    { label: 'Global Compliance', value: 'BPI / EN13432', desc: 'Standardized for city-wide composting programs across USA, UK, and EU.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Industrial Compostable Packaging | EN 13432 | Pouch.eco</title>
        <meta name="description" content="Certified industrial compostable pouches. Optimized for commercial composting facilities. High-barrier, heat-sealable, and perfect for mass-market food products." />
        <link rel="canonical" href={`${baseUrl}/materials/industrial-compostable`} />
        <meta name="keywords" content="industrial compostable, BPI certified, EN 13432, commercial composting, sustainable flexible packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">INDUSTRIAL_EFFICIENCY_V4.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">Scale.<br/>Heat.<br/>Soil.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-4 border-[#D4FF00] p-6 shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]">
            EN 13432 & ASTM D6400 Certified. Engineered for city-wide commercial composting networks. High-performance sustainable barriers for mass retail.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">Request Industrial Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" to="/products">View Eco Catalog</NeoButton>
          </div>
        </div>
      </section>

      {/* Grid of Industrial Stats */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIAL_CAPABILITIES.map((cap, i) => (
              <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                <h3 className="font-black text-xl uppercase mb-1">{cap.label}</h3>
                <div className="text-3xl font-black text-green-600 mb-4 italic">{cap.value}</div>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{cap.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Context */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial Composting Process" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">SCALABLE_BIO_LOOP</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Built for<br/>City-Wide<br/>Impact.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Industrial composting facilities provide the managed heat (60°C+) and precise microbial conditions required to break down high-performance bio-polymers like PLA and PBS. This allows us to create pouches with superior oil and moisture resistance that still return to soil.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4">
                  <Factory className="text-green-600 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">Facility Compatible</h4>
                  <p className="text-[10px] font-bold">Standardized for global municipal green bin programs.</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <Thermometer className="text-orange-500 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">High Fill Temps</h4>
                  <p className="text-[10px] font-bold">Safe for hot-fill products up to 90°C.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Certifications */}
      <section className="py-24 bg-black text-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00]">Verified Pathways</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70 italic text-white">Accepted by retailers and cities worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">BPI</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">North American Industrial Standard</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">EN 13432</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">European Union Compostable Mandate</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">TUV IND</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">OK Industrial Compost Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">UPGRADE_TO_INDUSTRIAL</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Global Ready.<br/>Soil Safe.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to bring certified industrial-compostable solutions to your retail lineup? Partner with us for high-barrier performance that returns to earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Request Samples</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Scale Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchIndustrialCompostablePage
