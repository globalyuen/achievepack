import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Utensils } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const FOOD_METRICS = [
    { label: 'O2 Barrier', value: '< 1.0', unit: 'cc/m²', desc: 'Oxygen Transmission Rate (OTR).' },
    { label: 'Moist Barrier', value: '< 1.0', unit: 'g/m²', desc: 'Water Vapor Transmission Rate (WVTR).' },
    { label: 'Compliance', value: 'FDA', unit: 'EFSA', desc: 'Direct food contact certified.' },
    { label: 'Seal Window', value: '±10°C', unit: 'Wide', desc: 'Optimized for high-speed filling.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Food Packaging | High-Barrier Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to eco-friendly food packaging. 800+ words of research on high-barrier engineering, FDA compliance, and sustainable food safety." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-food-packaging`} />
        <meta name="keywords" content="eco-friendly food packaging, high barrier pouches, food safe sustainable packaging, FDA compliant pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">FOOD_SAFE_V1.0</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">Fresh.<br/>Pure.<br/><span className="text-emerald-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Planet.</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                Sustainability must not compromise safety. We engineer high-barrier, food-safe pouches that protect your product's shelf life while meeting the world's strictest environmental standards.
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">Browse Food Solutions</NeoButton>
                <NeoButton variant="secondary" to="/sample">Request Lab Evidence</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp" 
                alt="Eco-Friendly Food Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Barrier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="High Barrier Food Packaging Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">BARRIER_TECH_AUDIT</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>For Freshness.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                The most sustainable package is the one that prevents food waste. We utilize <strong>High-Barrier engineering</strong> (EVOH, AlOx, and Metalized PET) to ensure that your product's Oxygen and Moisture transmission rates remain below critical thresholds. Every material structure in our catalog—including our <strong>Mono-PE</strong> and <strong>Home-Compostable</strong> lines—is tested for <strong>Migration (OML/SML)</strong> to ensure absolute compliance with FDA and EFSA food-contact regulations. We don't just sell bags; we engineer shelf-life security for a circular economy.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FOOD_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Food Safety Protocols */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">SAFETY_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Zero Migration.<br/>Zero Waste.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. PFAS-Free Guarantee</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Absolute elimination of 'forever chemicals.' We utilize advanced aqueous grease-proof barriers that exceed California AB 1200 and EU REACH standards.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Food-Grade PCR</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                We only use FDA/EFSA compliant post-consumer resins that have been purified through certified decontamination processes for direct food contact.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. BRCGS A-Grade</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Our manufacturing facilities are certified to the highest hygiene standards, ensuring your food packaging is produced in a sterile, audited environment.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Hermetic Seals</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Engineering precision seal layers (Bio-PBS or LLDPE) to ensure zero leakers and 100% barrier integrity for liquid and powder food products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">MATERIAL_LAB_VERIFY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Verified.<br/>To the Micron.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                Sustainability is a technical specification. We perform <strong>Fourier-transform infrared spectroscopy (FTIR)</strong> and <strong>Differential Scanning Calorimetry (DSC)</strong> on all material batches to verify polymer purity and barrier performance. For our compostable food bags, we ensure every layer—including the degassing valves and zippers—is certified to <strong>EN 13432</strong> standards for biological safety. We provide the <strong>Declaration of Compliance (DoC)</strong> for every SKU, giving your brand absolute legal and technical security.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Migration Tested</h4>
                    <p className="text-sm opacity-60">SML and OML testing performed to verify zero chemical leaching into food products.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Beaker className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Aroma Lock</h4>
                    <p className="text-sm opacity-60">High-performance lamination ensures maximum preservation of volatile food aromatics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_c_4560298.webp" 
                alt="Technical Food Pouch Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Food Safety Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">FOOD_SAFETY_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "Are your sustainable pouches suitable for freezing?", a: "Yes. We engineer high-ductility internal layers that remain flexible at -18°C, preventing brittle failure and seal leaks in frozen food applications." },
              { q: "What is EVOH and why do I need it?", a: "Ethylene Vinyl Alcohol is a high-performance barrier resin used in thin layers to block oxygen. It is essential for extending the shelf life of snacks and meats while keeping the package thin and recyclable." },
              { q: "Can compostable bags hold hot liquids?", a: "Standard compostable films have lower heat resistance. For hot-fill applications, we recommend our heat-stabilized Bio-PBS or Mono-PP structures." },
              { q: "Do you offer BPA-free food packaging?", a: "100% of our pouches are BPA-free and manufactured using solvent-free lamination, ensuring zero VOC residues and absolute chemical purity." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">FOOD_SAFE_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Fresh.<br/>Impact Pure.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a food-safe, sustainable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-950">Order Food Safe Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Barrier Engineer
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
