import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Snowflake, Thermometer, Droplets, Target, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchFrozenFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = "Frozen Food Packaging - High Strength & Eco | POUCH.ECO"
  const description = "Specialized frozen food pouches for startups. Puncture resistant, frost-proof, and compostable options. Low MOQ 500 units for frozen snacks and meals."

  const PERFORMANCE_MATRIX = [
    { label: 'Cold Resistance', value: '-40°C', unit: 'Min Temp', desc: 'Maintains flexibility in extreme cold.' },
    { label: 'Seal Strength', value: '> 25', unit: 'N/15mm', desc: 'Heavy-duty structural integrity.' },
    { label: 'Puncture Resistance', value: 'High', unit: 'Grade', desc: 'Protects against sharp frozen edges.' },
    { label: 'Recyclability', value: '100%', unit: 'Mono-PE', desc: 'Fully recyclable in standard streams.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/industry/frozen-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:24px_24px] bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">INDUSTRY_CODE: FROZEN_05</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Freeze.<br/>
                Store.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-cyan-600">Protect.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Sub-zero durability.<br/>
                &gt; Puncture-proof protocol.<br/>
                &gt; Recyclable Mono-PE active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Arctic Kit</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative">
                  <img 
                    src="/imgs/artifacts/frozen_food_hero.jpg" 
                    alt="Frozen Food Packaging" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    ARCTIC_GRADE_V2
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
                alt="Frozen Food Packaging Performance" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="cyan">SCIENCE_OF_COLD</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Frost<br/>Resistant.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Frozen products demand specialized polymer structures. Our Arctic-Grade films are engineered to remain flexible at -40°C, preventing the cracking and seal failure common in standard packaging.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PERFORMANCE_MATRIX.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-cyan-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-cyan-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="blue">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Arctic<br/>Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Frozen food stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom frozen food bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Bulk Frozen Bags"
            />
            <ClickableImage 
              src="/imgs/artifacts/vacuum_pouch_frozen.jpg" 
              alt="Flat pouch for frozen items" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Vacuum Pouches"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="DTC frozen food delivery" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-none text-black">Beyond the<br/>Frost Point</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              Our frozen food pouches use high-performance PE-based films designed specifically for sub-zero temperatures. No cracking, no peeling, no barrier failure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">Burst Test</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">PASS</p>
                <p className="text-[10px] font-bold opacity-60">High pressure resistance</p>
              </div>
              <div className="border-4 border-black p-4 bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase mb-2 text-black text-xs">Seal Integrity</h4>
                <p className="text-xl font-black font-['JetBrains_Mono'] text-black">ACTIVE</p>
                <p className="text-[10px] font-bold opacity-60">Zero-leak closure</p>
              </div>
            </div>
          </div>
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">Frozen Protocol</h3>
            <div className="space-y-6">
              {[
                { name: 'NYLON REINFORCED', desc: 'Superior puncture resistance for sharp frozen items' },
                { name: 'MONO-PE OPTION', desc: '100% recyclable even in frozen format' },
                { name: 'FROST-PROOF MATTE', desc: 'Keeps branding visible through freezer condensation' },
                { name: 'RETORT STABLE', desc: 'Safe for boil-in-the-bag applications' }
              ].map(feature => (
                <div key={feature.name} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4FF00] flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase text-lg">{feature.name}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="cyan">INDUSTRY_DEEP_DIVE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            The Science of <span className="text-cyan-600">Frozen Food Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              The frozen food sector presents some of the most rigorous challenges in the packaging industry. When products are subjected to deep-freeze conditions (often below -18°C / 0°F), standard packaging materials become brittle, rigid, and highly susceptible to cracking. This phenomenon, known as "cold flex failure," compromises the seal integrity, leading to freezer burn and product spoilage before it ever reaches the consumer's plate.
            </p>
            <p>
              At POUCH.ECO, our Arctic-Grade frozen food pouches are specifically engineered to thrive in sub-zero environments. We provide packaging solutions that ensure structural resilience, crystal-clear branding, and sustainability, empowering frozen food startups to compete with legacy brands on the supermarket shelf.
            </p>
            
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt="Frozen food packaging structure and performance" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption="Engineered for extreme cold: our films prevent cracking and freezer burn."
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Combating Cold Flex Failure</h3>
            <p>
              To combat the harsh reality of freezer aisles, we utilize specialized PE (Polyethylene) blends with advanced metallocene catalysts. This chemical engineering creates a film structure that remains highly pliable and flexible even at temperatures plummeting to -40°C. 
            </p>
            <p>
              By maintaining flexibility, our pouches can endure the inevitable drops, crushing, and rough handling during cold chain logistics without fracturing. Your product stays hermetically sealed from the packing facility to the customer's freezer.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Puncture Resistance for Sharp Proteins</h3>
            <p>
              Frozen foods are often structurally aggressive. Consider a bag of frozen bone-in chicken wings, sharply edged frozen vegetables, or hard blocks of frozen fruit. As these items jostle during transit, they act like tiny spears against the interior of the packaging.
            </p>
            <p>
              To prevent puncturing, our frozen food bags often incorporate a BOPA (Biaxially Oriented Polyamide/Nylon) layer. Nylon is renowned for its incredible tensile strength and puncture resistance. When laminated to our specialized freezer-grade sealant web, the resulting pouch is virtually impenetrable, ensuring that sharp frozen edges cannot compromise the vacuum seal or cause leaks when the product eventually thaws.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Sustainable Paths in Frozen Packaging</h3>
            <p>
              Historically, recycling frozen food packaging has been near impossible due to the complex, multi-material laminates required for durability. However, POUCH.ECO offers fully recyclable "Mono-PE" structures. These pouches use different densities of Polyethylene for both the structural and sealant layers. Because the entire pouch is made from a single polymer family, it is 100% recyclable through standard store drop-off programs (How2Recycle).
            </p>
            <p>
              We also offer specialized, heavy-duty compostable options for certain frozen snack applications, providing brands with multiple avenues to hit their sustainability targets while ensuring their product survives the deep freeze.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Frequently Asked<br/>Questions</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can these pouches withstand -40°C?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our Arctic-Grade structures are specifically designed to remain flexible and durable in extreme freezer environments without cracking.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are they puncture resistant for sharp frozen items?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we offer nylon-reinforced (BOPA) layers that provide superior resistance to punctures from frozen proteins or sharp-edged vegetables.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are your frozen pouches recyclable?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We offer Mono-PE structures that are 100% recyclable. We also have compostable options for specific frozen snack applications.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">What is the MOQ for frozen food pouches?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Our MOQ starts at 500 units for digitally printed pouches, making it ideal for startup frozen meal and snack brands.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyan-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">ARCTIC_READY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic text-black">Cold Chain<br/>Built Solid.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto text-black">
            Specialized frozen food packaging with low MOQ 500 units. Tested for the deep freeze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-black !text-cyan-400">Order Arctic Sample</NeoButton>
            <NeoButton variant="secondary" className="!border-black !text-black" href="https://calendly.com/30-min-free-packaging-consultancy">Consultation</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#00FFFF] px-2">Keep Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/baby-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/baby_food_hero.jpg"
                  alt="Baby Food Packaging"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  Baby Food
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Safety-first liquid packaging.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/pet-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/pet_food_pouch.jpg"
                  alt="Pet Food Pouches"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  Pet Food
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  High-barrier pet solutions.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/packaging/vacuum-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/vacuum_pouch_frozen.jpg"
                  alt="Vacuum Pouches Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-cyan-600 transition-colors">
                  Vacuum Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Technical specs for frozen vacuum seals.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
