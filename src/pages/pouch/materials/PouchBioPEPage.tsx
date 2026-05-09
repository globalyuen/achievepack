import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
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

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#10b981]">Bio-PE Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              As the world aggressively shifts away from fossil-fuel-based plastics, Bio-Polyethylene (Bio-PE) has emerged as a revolutionary drop-in replacement. Derived from renewable resources like sugarcane ethanol, Bio-PE represents a significant leap forward in sustainable flexible packaging. At POUCH.ECO, we harness the power of this plant-based plastic to create high-performance pouches that drastically reduce your brand's carbon footprint without compromising on durability or barrier properties.
            </p>
            
            <img 
              src="/imgs/spec/biope-pet-triplex-metalised.webp" 
              alt="Bio-PE film structure showing renewable sugarcane origins" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Carbon Negative Origins</h3>
            <p>
              The most compelling argument for Bio-PE is its origin story. Traditional polyethylene is synthesized from crude oil, a finite resource that releases massive amounts of CO2 during extraction and refinement. In stark contrast, the sugarcane used to produce Bio-PE actually absorbs CO2 from the atmosphere as it grows. This remarkable process means that the production of Bio-PE resin can have a negative carbon footprint from cradle to gate, actively contributing to the fight against climate change.
            </p>
            <p>
              For brands deeply committed to Environmental, Social, and Governance (ESG) goals, switching to Bio-PE packaging provides a verifiable, measurable reduction in greenhouse gas emissions. You are not just making a superficial "green" claim; you are fundamentally changing the chemistry of your packaging supply chain.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">A True Drop-In Replacement</h3>
            <p>
              A major hurdle in adopting sustainable packaging is often performance degradation. Fortunately, Bio-PE is chemically identical to conventional fossil-based polyethylene. It offers the exact same tensile strength, sealability, and printability. Whether you are packaging heavy pet food, sharp snacks, or liquid cosmetics, Bio-PE performs flawlessly on the filling line and on the retail shelf. 
            </p>
            
            <img 
              src="/imgs/spec/biope-pet-kraft-triplex-clear.webp" 
              alt="Clear Bio-PE pouch structure for food packaging" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Recyclability and End of Life</h3>
            <p>
              It is important to understand that while Bio-PE is made from plants, it is not biodegradable or compostable. It is designed to be durable. However, because it is chemically identical to standard PE, it is 100% recyclable in the exact same recycling streams (such as store drop-off programs for soft plastics). This allows it to participate fully in a circular economy, unlike many mixed-material plastics that are destined for the landfill.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#10b981]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What exactly is Bio-PE?',
                a: 'Bio-PE, or biopolyethylene, is a plastic made from renewable biomass (like sugarcane) rather than fossil fuels. It has the same chemical properties as regular PE but a significantly lower carbon footprint.'
              },
              {
                q: 'Is Bio-PE compostable?',
                a: 'No, Bio-PE is not compostable or biodegradable. It is designed to be as durable as traditional plastic. However, it is fully recyclable in the same streams as standard polyethylene (PE).'
              },
              {
                q: 'Does Bio-PE perform differently than regular plastic?',
                a: 'No. Because Bio-PE is a "drop-in" replacement, it is chemically identical to fossil-based PE. It offers the exact same durability, moisture barrier, and seal strength as traditional plastic packaging.'
              },
              {
                q: 'What is the minimum order for Bio-PE pouches?',
                a: 'Through our digital printing technology, we offer low Minimum Order Quantities (MOQs) starting at just 500 units for fully custom printed Bio-PE pouches, making it accessible for startups and growing brands.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
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
