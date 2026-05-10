import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Heart, Baby, FileCheck, Thermometer, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchBabyFoodPage() {
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const title = "Baby Food Pouches - Safe & Eco Packaging | POUCH.ECO"
  const description = "Certified food-safe pouches for baby food and purees. BPA-free, spout options, and compostable materials. Low MOQ 500 units for growing baby food brands."

  const SAFETY_METRICS = [
    { label: 'BPA Migration', value: '0.00%', desc: 'Certified zero-migration polymers.' },
    { label: 'Phthalate Free', value: '100%', desc: 'Safe for direct infant food contact.' },
    { label: 'Heavy Metals', value: 'Non-Detect', desc: 'Verified by ASTM F963 standards.' },
    { label: 'Heat Stable', value: '95°C', desc: 'Safe for hot-fill puree processes.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="https://pouch.eco/imgs/artifacts/baby_food_hero.jpg" />
        <link rel="canonical" href="https://pouch.eco/industry/baby-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">INDUSTRY_CODE: BABY_04</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Pure.<br/>
                Safe.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-pink-600">Healthy.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; BPA-Free & Food Safe.<br/>
                &gt; Anti-Choke Cap Tech.<br/>
                &gt; Spouted & Stand-up options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Quote Now</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Safety Kit</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative">
                  <img 
                    src="/imgs/artifacts/baby_food_hero.jpg" 
                    alt="Safe Baby Food Packaging" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    FOOD_GRADE_CERT
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt="Safe Baby Food Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">CERTIFIED_CLEAN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic text-pink-600">Trust is<br/>Everything.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Baby food brands face the world's strictest packaging scrutiny. Our materials undergo rigorous independent lab testing to guarantee zero leaching of BPA, phthalates, or microplastics.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{m.label}</h4>
                    <p className="text-xl font-black">{m.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-pink-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Formats<br/>& Styles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt="Compostable baby food bags" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Spout Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Baby snack stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Snack Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Baby food box pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Formula Bags"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="DTC baby food delivery" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">GLOBAL_SAFETY_STANDARDS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 italic">No Compromise.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <FileCheck className="w-12 h-12 mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">FDA 21 CFR</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Full compliance with US Food & Drug Administration regulations for direct food contact in infants and toddlers.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <Shield className="w-12 h-12 mb-6 text-blue-600" />
              <h4 className="font-black text-2xl uppercase mb-4">EU 10/2011</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">European safety verification for overall and specific migration limits, ensuring maximum purity for delicate systems.</p>
            </NeoCard>
            <NeoCard>
              <Award className="w-12 h-12 mb-6 text-green-600" />
              <h4 className="font-black text-2xl uppercase mb-4">TUV OK Home</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Certified to break down in backyard compost bins, allowing parents to dispose of waste responsibly at home.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="pink">INDUSTRY_DEEP_DIVE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            The New Standard in <span className="text-[#10b981]">Baby Food Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              When it comes to baby food packaging, there is zero room for error. Parents are increasingly vigilant about what goes into their children's bodies, and that scrutiny extends directly to the packaging that houses those organic purees, puffs, and formula powders. Historically, the baby food industry relied heavily on glass jars—which are heavy, fragile, and energy-intensive to ship—or multi-layer plastic squeeze pouches that are virtually impossible to recycle.
            </p>
            <p>
              At POUCH.ECO, we are bridging the gap between uncompromising safety and environmental responsibility with our certified home-compostable baby food pouches. We provide packaging that protects the purity of your product while ensuring a healthier planet for the next generation.
            </p>
            
            <ClickableImage 
              src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
              alt="Baby food pouch packaging safety features" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption="Zero leaching. Zero microplastics. 100% peace of mind."
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Eradicating Chemical Leaching</h3>
            <p>
              The primary concern for any baby food brand is migration—the transfer of chemicals from the packaging material into the food. Traditional plastics, even those labeled "BPA-free," can sometimes leach alternative bisphenols (like BPS or BPF) or phthalates when subjected to the high heat of pasteurization or hot-fill processes.
            </p>
            <p>
              Our compostable laminations are fundamentally different. They are synthesized from plant-based biopolymers (like PLA and PBAT) and utilize advanced, low-migration, water-based adhesives. Every component is rigorously tested against both FDA 21 CFR and strict EU 10/2011 standards. This guarantees that our packaging imparts absolutely zero chemicals, odors, or microplastics into your sensitive organic purees or formula.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Hot-Fill Process and Structural Integrity</h3>
            <p>
              Many baby food purees undergo a hot-fill process (filling at temperatures up to 95°C / 203°F) to ensure commercial sterility. Standard compostable materials often warp, delaminate, or fail under these extreme conditions. 
            </p>
            <p>
              Through intensive R&D, POUCH.ECO has engineered heat-stable compostable films. Our high-barrier structures maintain their mechanical strength and seal integrity during hot-filling and subsequent cooling baths. Furthermore, our anti-choke spout technology and reinforced gussets ensure that the pouch can withstand the dropping, squeezing, and throwing that inevitably happens during feeding time.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Empowering Startup Brands</h3>
            <p>
              The organic baby food market is being disrupted by agile, health-conscious startup brands. However, these brands are often blocked by massive Minimum Order Quantities (MOQs) imposed by traditional packaging suppliers.
            </p>
            <p>
              We level the playing field. With digital printing technology, we offer custom-printed, high-barrier, compostable baby food pouches starting at just 500 units. This allows you to test new flavor profiles, launch seasonal purees, and iterate on your branding without tying up crucial capital in excess inventory. Scale your brand sustainably from day one.
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
              <h4 className="font-black text-xl mb-2">Are your pouches safe for infant food?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, 100%. Our materials undergo rigorous testing to guarantee zero migration of harmful chemicals, ensuring total safety for infant food contact.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are the spouts and caps also compostable?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We offer both standard food-grade spouts and innovative bio-polymer spouts that are fully compostable within 180 days.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can these pouches be used for hot-filling?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, our high-barrier structures are heat stable up to 95°C, making them safe for standard hot-fill puree processes.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">What is the MOQ for custom printed baby food pouches?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We support startup organic brands with low MOQs starting at just 500 units for digitally printed, custom-branded bags.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">Protect Their<br/>Future.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Empowering next-gen baby food startups with low MOQ, high-safety packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">Get Safety Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white" href="https://calendly.com/30-min-free-packaging-consultancy">Consult Safety Expert</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">Keep Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/frozen-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/frozen_food_hero.jpg"
                  alt="Frozen Food Packaging"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Frozen Food
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Arctic-grade durability. Puncture resistant.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/packaging/spout-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
                  alt="Spout Pouches Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Spout Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Spout pouches. Leak-proof. Compostable.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/eco-friendly-food-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
                  alt="Food Packaging Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Food Safe Guide
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Safety protocols for food brands.
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
