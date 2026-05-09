import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Recycle, CheckCircle, ArrowRight, Shield, Globe } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchUSACompostableHubPage() {
  const title = "USA Compostable Packaging Guide | BPI Certified Bags | POUCH.ECO"
  const description = "Navigate the complex landscape of compostable packaging in the USA. Learn about BPI certification, ASTM D6400 standards, and state-specific regulations."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/compostable-packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">USA_MARKET_HUB // COMPOSTABLE</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black">
                True <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Zero Waste</span> for the US.
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                Navigate ASTM D6400, BPI certifications, and state EPR laws with our fully compliant, 100% plant-based compostable flexible packaging.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/4-infograhic/compost.webp" 
                    alt="Infographic detailing the compostable packaging lifecycle in the USA" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    ASTM_D6400_READY
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            Navigating Compostable Packaging in the <span className="text-emerald-500">United States</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              As plastic pollution becomes a critical issue for American consumers and legislators, the shift towards compostable packaging is accelerating. However, the United States presents a complex regulatory landscape for brands looking to adopt "zero waste" packaging. From the rigorous standards of the Biodegradable Products Institute (BPI) to strict state-level labeling laws in California and Washington, navigating the US compostable market requires a knowledgeable packaging partner.
            </p>

            <img 
              src="/imgs/samples/kraft-compostable-zipper.png" 
              alt="Kraft compostable pouch utilizing plant-based polymers and zippers" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">ASTM D6400 and BPI Certification</h3>
            <p>
              In the USA, you cannot simply label a product as "biodegradable" without facing severe scrutiny from the FTC (Federal Trade Commission). The gold standard for commercial compostability in the United States is the <strong>ASTM D6400</strong> specification. This standard dictates that a material must break down completely into water, CO2, and biomass within a specific timeframe (usually 180 days) in a commercial composting facility, leaving no toxic residue behind.
            </p>
            <p>
              The <strong>Biodegradable Products Institute (BPI)</strong> is the primary third-party certifier for compostable products in North America. By utilizing our pre-certified compostable films, adhesives, and zippers, US brands drastically simplify their path to obtaining their own final product BPI certification, ensuring consumer trust and legal compliance.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">State-Level Legislation (EPR Laws)</h3>
            <p>
              Extended Producer Responsibility (EPR) laws are actively sweeping across the US. States like California (SB 54), Colorado, Oregon, and Washington have passed legislation requiring packaging to be recyclable or compostable by specific deadlines (e.g., 2032). 
            </p>
            <p>
              Furthermore, states like California and Washington have strict "truth in labeling" laws. You are legally prohibited from labeling a plastic product as "biodegradable," "degradable," or "decomposable" unless it meets stringent ASTM specifications and is clearly labeled as "Commercially Compostable." Partnering with POUCH.ECO ensures your packaging materials inherently meet the technical requirements to safely navigate these state-specific hurdles.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Industrial vs. Home Composting in the US</h3>
            <p>
              It is critical to understand the difference between industrial and home composting. The US currently lacks universal industrial composting infrastructure; access varies wildly by municipality. Therefore, many eco-conscious consumers rely on backyard composting. While ASTM D6400 covers industrial facilities, we also offer specific high-barrier structures that are certified for <strong>Home Composting</strong> (meeting standards like TUV OK Compost Home). This allows your customers to responsibly dispose of their packaging directly in their backyard bins, regardless of their local municipal waste services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Compostable USA <span className="text-emerald-500">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What does ASTM D6400 mean?',
                a: 'ASTM D6400 is the standard specification for labeling plastics designed to be aerobically composted in municipal or industrial facilities in the United States. It ensures the material fully breaks down into safe biomass without leaving microplastics or toxic residue.'
              },
              {
                q: 'Can I legally claim my packaging is "biodegradable" in California?',
                a: 'No. Under California law, it is illegal to sell plastic packaging labeled "biodegradable" or "degradable." You must use the term "compostable" and only if the packaging meets ASTM D6400 standards and is appropriately certified.'
              },
              {
                q: 'Are your compostable pouches FDA approved for food contact?',
                a: 'Yes. Our plant-based films (such as PLA and specialized cellulose) and our compostable adhesives are fully FDA compliant for direct food contact in the US market.'
              },
              {
                q: 'Do your compostable bags have zippers?',
                a: 'Yes, we offer fully compostable press-to-close zippers. Because the zipper is made from the same certified biodegradable polymers as the bag, consumers do not need to tear it off before composting.'
              },
              {
                q: 'Is BPI certification required in the USA?',
                a: 'While not federally mandated, BPI certification is highly recommended. It acts as a trusted third-party verification that your packaging meets ASTM D6400 standards, protecting your brand from "greenwashing" claims and satisfying major retailers.'
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
                  <span className="text-emerald-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-emerald-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Ready to Go Green?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Secure US-compliant, certified compostable packaging for your brand. Stop greenwashing. Start leading.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-emerald-500 !text-black w-full sm:w-auto text-xl py-4">
              Get Your Custom Quote <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
