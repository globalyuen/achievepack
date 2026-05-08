import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, ArrowRight, CheckCircle, Package, Globe, Award, ClipboardList, BarChart3, Truck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCustomCompostablePouchSuppliersPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const SUPPLY_ADVANTAGES = [
    { label: 'Facilities', value: 'BRC Grade A', desc: 'Global standards for food safety and quality.' },
    { label: 'Materials', value: 'TUV Certified', desc: 'Verified home and industrial compostable paths.' },
    { label: 'Logistics', value: 'DDP Shipping', desc: 'Door-to-door delivery with customs handled.' },
    { label: 'Support', value: '24/7 Tech', desc: 'Expert packaging engineers on standby.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Compostable Pouch Suppliers | Global Manufacturing | Pouch.eco</title>
        <meta name="description" content="Direct factory access to certified compostable pouch manufacturing. Low MOQ, full color digital printing, and global logistics. Your premier sustainable packaging partner." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-compostable-pouch-suppliers`} />
        <meta name="keywords" content="compostable pouch supplier, custom packaging manufacturer, sustainable pouch factory, certified eco packaging supplier" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#db2777_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">FACTORY_DIRECT_V5.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic text-black">Scale.<br/>Trust.<br/><span className="text-pink-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Global.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Verified compostable pouch manufacturing for the world's fastest-growing organic brands. Directly access high-barrier films and digital printing precision.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quotes/stand-up-pouch">Get Factory Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Factory Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="lime">MANUFACTURING_INTELLIGENCE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Beyond the<br/>Brokers.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Most packaging suppliers are middle-men with limited understanding of compostable film chemistry. We are direct manufacturers. We've spent a decade perfecting heat-seal stability and oxygen barrier integrity for plant-based materials.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SUPPLY_ADVANTAGES.map((a, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{a.label}</h4>
                    <p className="text-xl font-black">{a.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_factory_tour_quality_precision_0863191.webp" 
                alt="Compostable Pouch Factory" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_solutions_hub_comprehensive_offerings_0357822.webp" 
                alt="Global Solutions Hub" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <NeoBadge color="blue">GLOBAL_SUPPLY_CHAIN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6">Seamless<br/>Logistics.</h2>
              <p className="mt-8 text-xl font-['JetBrains_Mono'] opacity-80 leading-relaxed">
                From our BRC-certified facilities to your warehouse, we manage the entire logistics chain. DDP (Delivered Duty Paid) shipping means no hidden customs fees or paperwork headaches.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <Truck className="text-pink-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Global Door-to-Door Delivery</span>
                </div>
                <div className="flex items-center gap-4 bg-white border-2 border-black p-4">
                  <ClipboardList className="text-pink-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Full Certification Documentation Provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-20 italic">Verified Manufacturing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <div className="relative mb-6">
                <img src="/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp" className="border-2 border-black w-full" alt="Certification Audit" />
              </div>
              <h4 className="font-black text-2xl uppercase mb-4">BRC Grade A</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">The highest global standard for food safety and packaging quality management.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(219,39,119,1)]">
              <Award className="w-16 h-16 mx-auto mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">ISO 9001:2015</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Certified quality management systems ensuring consistent production standards across all SKU batches.</p>
            </NeoCard>
            <NeoCard>
              <Globe className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
              <h4 className="font-black text-2xl uppercase mb-4">Sedex Compliant</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Committed to ethical supply chains and responsible social/environmental business practices.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">PARTNERSHIP_READY</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-pink-500">Source.<br/>Sustain.<br/>Succeed.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Ready to partner with a direct manufacturer who understands the future of eco-packaging? Let's talk scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/quotes/stand-up-pouch" className="!bg-pink-600 !text-white">Request Factory Quote</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Global Supply Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomCompostablePouchSuppliersPage
