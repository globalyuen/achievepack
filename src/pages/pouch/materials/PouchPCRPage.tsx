import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Shield, Zap, BarChart3, Globe, Factory, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchPCRPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PCR_BENEFITS = [
    { icon: Recycle, title: 'Virgin Plastic Reduction', desc: 'Up to 100% reduction in the use of fossil-fuel derived virgin plastics.' },
    { icon: BarChart3, title: 'Carbon Savings', desc: 'Up to 25% lower carbon footprint compared to standard plastic pouches.' },
    { icon: Shield, title: 'FDA Food Safe', desc: 'Medical-grade decontamination ensures PCR is safe for food contact applications.' },
    { icon: Factory, title: 'GRS Certified', desc: 'Verified by the Global Recycled Standard for chain of custody and social responsibility.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>PCR Recycled Packaging | Post-Consumer Content | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging with 30-100% PCR (Post-Consumer Recycled) plastic. Reduce virgin plastic use and meet global circular economy mandates. FDA food-safe approved." />
        <link rel="canonical" href={`${baseUrl}/materials/pcr`} />
        <meta name="keywords" content="PCR plastic, recycled pouch, post-consumer recycled, circular economy packaging, GRS certified" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="cyan">CIRCULAR_LOOP_V5.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Waste.<br/>Woven.<br/>New.</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Post-Consumer Recycled (PCR) content. 30-100% recycled plastic. High-barrier, food-safe, and planet-ready for the circular economy.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">Get PCR Samples</NeoButton>
            <NeoButton variant="secondary" to="/products">View PCR Catalog</NeoButton>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">THE_VALUE_CHAIN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Closing<br/>The Loop.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                PCR gives a second life to plastic waste that would otherwise end up in landfills or oceans. By incorporating 30% to 100% PCR content into your pouches, you directly fund the global recycling infrastructure.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm italic underline">Mandate Compliant: UK Plastic Tax & EU PPWR</span>
                </div>
                <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Post-Consumer Waste Diverted: 2.5 Tons/Order (Avg)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/PCR.webp" 
                alt="PCR Circular Economy" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Advantages */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PCR_BENEFITS.map((benefit, i) => (
            <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
              <benefit.icon className="w-12 h-12 mb-6 text-cyan-600" />
              <h3 className="font-black text-xl uppercase mb-4">{benefit.title}</h3>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{benefit.desc}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Content Density Table */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-cyan-400 italic">PCR Grade Matrix</h2>
          <div className="overflow-x-auto border-4 border-white bg-black">
            <table className="w-full font-['JetBrains_Mono'] text-sm">
              <thead className="bg-white text-black border-b-4 border-black">
                <tr>
                  <th className="p-6 text-left">PCR PERCENTAGE</th>
                  <th className="p-6 text-left">BEST USE CASE</th>
                  <th className="p-6 text-left">TAX IMPACT</th>
                  <th className="p-6 text-left">CLARITY LEVEL</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/20">
                <tr>
                  <td className="p-6 font-black uppercase">30% PCR</td>
                  <td className="p-6 text-cyan-400">Mainstream Retail</td>
                  <td className="p-6">UK Tax Exempt</td>
                  <td className="p-6">High (95%)</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-6 font-black uppercase">50% PCR</td>
                  <td className="p-6 text-cyan-400">DTC & E-commerce</td>
                  <td className="p-6">Tax Exempt + Rebates</td>
                  <td className="p-6">Medium (85%)</td>
                </tr>
                <tr>
                  <td className="p-6 font-black uppercase">100% PCR</td>
                  <td className="p-6 text-cyan-400">Eco-Pioneer Brands</td>
                  <td className="p-6">Max Sustainability Credits</td>
                  <td className="p-6">Matte/Opaque (70%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#3b82f6]">PCR Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              As consumers and regulatory bodies increasingly push for sustainable alternatives to virgin plastics, Post-Consumer Recycled (PCR) packaging has become a cornerstone of the circular economy. PCR packaging is manufactured using plastics that have already been used by consumers, collected through recycling programs, cleaned, melted down, and repurposed into new film. At POUCH.ECO, we utilize advanced PCR materials to help brands reduce their reliance on new fossil fuels while maintaining premium packaging aesthetics.
            </p>
            
            <img 
              src="/imgs/pcr/guide/a_pcr_barrier_performance_diagram_0887278.webp" 
              alt="Diagram explaining the circular lifecycle of Post-Consumer Recycled packaging" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Why Choose PCR Over Virgin Plastic?</h3>
            <p>
              The primary benefit of PCR packaging is its immediate impact on carbon emissions and plastic waste. By utilizing recycled content, you are diverting plastic from landfills and oceans. Manufacturing PCR resins requires significantly less energy and water compared to producing virgin plastics from crude oil. This translates to a lower overall carbon footprint for your product packaging.
            </p>
            <p>
              Furthermore, incorporating PCR materials signals to your customers that your brand is actively participating in environmental stewardship. In regions with strict plastic packaging taxes (like the UK and parts of the EU), using a high percentage of PCR content can also yield significant financial savings by exempting your brand from these taxes.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Addressing the "Cloudy" PCR Myth</h3>
            <p>
              Historically, a major drawback of PCR films was their appearance. Early iterations of recycled plastics often had a cloudy, yellowish, or inconsistent visual profile, making them unsuitable for premium brands that required high-clarity windows or vibrant printing. 
            </p>
            
            <img 
              src="/imgs/spec/pcr-pet-kraft-triplex-clear.webp" 
              alt="Clear PCR pouch demonstrating high transparency and print quality" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <p>
              Advancements in sorting and purification technologies have changed the game. Our modern PCR films boast excellent clarity and consistency. We use high-quality, FDA-approved PCR resins (typically rPET or rPE) sandwiched between thin layers of virgin material or functional barriers. This ensures that your custom artwork prints flawlessly, the colors pop, and any transparent windows remain crystal clear, showcasing your product perfectly.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Food Safety and PCR</h3>
            <p>
              A common concern regarding recycled plastics is food safety. Can you package consumables in plastic that was previously used? The answer is yes, provided the correct technologies are used. We utilize FDA Letter of No Objection (LNO) certified PCR resins. Through advanced super-cleaning processes, any potential contaminants from the plastic's previous life are completely removed. For added safety, the PCR layer is often encapsulated within the structural layers of the pouch, ensuring it never comes into direct contact with the food product.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#3b82f6]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What does PCR stand for?',
                a: 'PCR stands for Post-Consumer Recycled. It refers to plastic materials that have been used by end consumers, disposed of in recycling bins, and then processed into new raw materials.'
              },
              {
                q: 'Is your PCR packaging food safe?',
                a: 'Yes. We use FDA-approved PCR resins that have undergone rigorous super-cleaning processes. To guarantee absolute safety, the recycled content is often layered between virgin materials, meaning it never directly touches your food product.'
              },
              {
                q: 'Can I claim 100% PCR content?',
                a: 'To maintain the structural integrity, sealability, and food safety of the pouch, it is currently impossible to make a flexible pouch from 100% PCR. Our high-performance pouches typically utilize between 30% and 50% PCR content by weight.'
              },
              {
                q: 'Are PCR pouches recyclable?',
                a: 'Yes, our mono-material PCR pouches (like our PE/PE structures) are fully recyclable at store drop-off locations. This means your packaging can be recycled again, continuing the circular lifecycle.'
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
                  <span className="text-[#3b82f6] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#3b82f6]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyan-500 text-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">JOIN_THE_LOOP</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">Waste.<br/>New Again.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to lead the circular economy? Transition your brand to PCR content and eliminate virgin plastic from your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Get PCR Samples</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Circular Strategy Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPage
