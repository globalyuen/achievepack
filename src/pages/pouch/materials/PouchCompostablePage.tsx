import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, Recycle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchCompostablePage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Compostable Packaging - Zero Waste Solutions | POUCH.ECO"
  const description = "Certified compostable packaging solutions for startups. EN 13432 and ASTM D6400 compliant. Low MOQ 500 units. High-barrier plant-based pouches."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/compostable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#14532d] text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">MATERIAL_CLASS: BIO_01</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Zero.<br/>
                Waste.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Future.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Plant-based materials.<br/>
                &gt; Certified circularity.<br/>
                &gt; High performance barrier.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Now</NeoButton>
                <NeoButton variant="secondary">View Certs</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#10b981] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/pouch/materials/pouch_compost_hero.png" 
                    alt="Compostable Pouch" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    BPI_CERT_ACTIVE
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none">The Science of<br/>Degradation</h2>
            <p className="font-['JetBrains_Mono'] text-lg leading-relaxed text-neutral-600">
              Our compostable pouches are engineered from renewable resources like corn starch, wood pulp, and sugarcane. They break down into water, CO2, and biomass within 90-180 days in commercial composting environments.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white">
                <h4 className="font-black uppercase mb-2">Home</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono']">Degrades in garden composters</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00]">
                <h4 className="font-black uppercase mb-2">Industrial</h4>
                <p className="text-xs font-bold font-['JetBrains_Mono']">Degrades in city-run facilities</p>
              </div>
            </div>
          </div>
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">Certified Protocol</h3>
            <div className="space-y-6">
              {[
                { name: 'EN 13432', desc: 'European Standard for compostable packaging' },
                { name: 'ASTM D6400', desc: 'US Standard for biodegradable materials' },
                { name: 'BPI CERTIFIED', desc: 'Biodegradable Products Institute certified' },
                { name: 'OK COMPOST', desc: 'TÜV AUSTRIA Home & Industrial certification' }
              ].map(cert => (
                <div key={cert.name} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4FF00] flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-lg">{cert.name}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#10b981]">Compostable Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              The packaging industry is at a critical turning point. With plastic pollution becoming an undeniable global crisis, consumers are demanding brands take accountability for their environmental footprint. Compostable packaging is no longer a niche trend; it is the definitive solution for the future of FMCG (Fast-Moving Consumer Goods). At POUCH.ECO, we engineer certified compostable pouches that offer the barrier protection your product needs and the end-of-life solution the planet deserves.
            </p>
            
            <img 
              src="/imgs/4-infograhic/compost.webp" 
              alt="Infographic showing the breakdown of compostable packaging in a home compost bin" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Home Compostable vs. Industrial Compostable</h3>
            <p>
              It is crucial for brands to understand the difference between the two primary types of compostable packaging. <strong>Industrial compostable</strong> materials (often PLA-based) require specific conditions—high temperatures (around 60°C/140°F), specific humidity levels, and specialized microbes—to break down. These conditions are typically only found in commercial composting facilities, which are not accessible to all consumers.
            </p>
            <p>
              Our flagship solution is <strong>Home Compostable</strong> packaging. Certified by TUV Austria (OK Compost Home), these materials are formulated from plant-based polymers like cellulose and starch that can break down in a standard backyard compost bin at ambient temperatures. Within 180 days, the packaging decomposes entirely into water, CO2, and nutrient-rich biomass, leaving zero microplastics or toxic residue behind.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Overcoming the Barrier Challenge</h3>
            <p>
              Historically, compostable materials suffered from poor barrier properties, making them unsuitable for products that are sensitive to moisture or oxygen (like coffee, crispy snacks, or pet kibble). We have solved this issue. 
            </p>
            
            <img 
              src="/imgs/blog/Sustainable-pet/a_sustainable_pet_food_packaging_hero_2601845.webp" 
              alt="Premium sustainable packaging providing high barrier protection" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <p>
              Through advanced lamination techniques and proprietary plant-based metallization, our high-barrier compostable pouches achieve an Oxygen Transmission Rate (OTR) and Water Vapor Transmission Rate (WVTR) that rival traditional multi-layer plastics and aluminum foil. Your products stay fresh, crunchy, and aromatic throughout their entire shelf life.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Circular Economy in Action</h3>
            <p>
              Adopting compostable packaging is a powerful way to align your brand with the principles of the Circular Economy. Instead of a linear "take-make-dispose" model, our packaging follows a "grow-make-return" cycle. The plants used to create our films absorb CO2 during growth. After fulfilling their purpose as premium packaging, they return to the earth as compost, which can then be used to grow more plants. This closed-loop system is the gold standard of sustainability.
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
                q: 'What certifications do your compostable pouches hold?',
                a: 'Our home compostable materials are certified by TUV Austria (OK Compost Home) and meet the stringent European standard EN 13432 as well as the American standard ASTM D6400.'
              },
              {
                q: 'How long does it take for a home compostable bag to break down?',
                a: 'Under standard home composting conditions (ambient temperature, presence of moisture and microorganisms), our pouches break down into organic biomass within 180 days.'
              },
              {
                q: 'Are the zippers and valves also compostable? Do I need to rip them off?',
                a: 'Yes! Every single component of our compostable pouches—including the press-to-close zippers, coffee degassing valves, and tear notches—is made from certified compostable materials. You DO NOT need to rip off the zipper or remove the valve before composting. Just toss the entire empty bag directly into your compost bin!'
              },
              {
                q: 'Can I print my brand design on compostable bags?',
                a: 'Absolutely. We use state-of-the-art digital printing with compostable, low-migration inks to print high-resolution graphics, vibrant colors, and sharp text directly onto the packaging.'
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
      <section className="py-24 bg-[#14532d] border-t-4 border-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">Join the Circle</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Switch your brand to compostable packaging and lead the zero-waste movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Start My Project</NeoButton>
            <NeoButton variant="secondary" className="!text-black">Request Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
