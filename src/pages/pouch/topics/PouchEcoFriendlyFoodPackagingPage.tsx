import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const SIZES = [
    { title: 'Certified Compostable', desc: 'Home & Industrial certified. TUV OK Home compliant. Breaks down in 90 days.', icon: Leaf, color: 'lime' },
    { title: 'Recyclable Mono-PE', desc: 'Single-material structure. Store drop-off compatible. Verified by How2Recycle.', icon: Recycle, color: 'cyan' },
    { title: 'Bio-Based Sugarcane', desc: ' Sugarcane-derived, carbon-negative production. Fossil-free.', icon: Globe, color: 'magenta' },
    { title: 'PCR Recycled Content', desc: '30-100% post-consumer recycled plastic. FDA food-safe approved.', icon: Package, color: 'yellow' },
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Food Packaging | Sustainable Pouches | Pouch.eco</title>
        <meta name="description" content="Certified sustainable food packaging. Compostable, recyclable, and bio-based pouches. Food-safe, FDA/EU compliant. Low MOQ from 500 units. Design for 2026 regulations." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-food-packaging`} />
        <meta name="keywords" content="eco-friendly food packaging, sustainable pouches, compostable food bags, recyclable food packaging, bio-based packaging, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">SUSTAINABLE_REVOLUTION_2026</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Food.<br/>
            Planet.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Protected.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Certified eco-friendly packaging for food brands. 100% food-safe. High barrier. Low 500 unit MOQ.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/materials/catalog">View Material Catalog</NeoButton>
            <NeoButton variant="secondary" to="/sample">Order Test Pack</NeoButton>
          </div>
        </div>
      </section>

      {/* Content Section: Material Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="cyan">MATERIAL_INTEL</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">Beyond Plastic:<br/>The Future of Food</h2>
              <p className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono']">
                Stop compromising between sustainability and shelf life. Our advanced barriers protect your food while protecting the planet.
              </p>
              <div className="mt-12 space-y-4">
                {SIZES.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border-2 border-black hover:bg-gray-50 transition-colors">
                    <div className={`p-3 bg-${s.color} border-2 border-black`}>
                      <s.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg uppercase">{s.title}</h4>
                      <p className="text-sm opacity-70 font-['JetBrains_Mono']">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp" 
                alt="Sustainable Food Packaging" 
                className="relative z-10 border-4 border-black w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl text-center mb-16 uppercase italic">Built for Your Industry</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Coffee & Tea', desc: 'Oxygen-free barrier with degassing valves for peak aroma.', route: '/industry/coffee-tea' },
              { title: 'Snacks & Nuts', desc: 'Puncture-resistant films with nitrogen flush capability.', route: '/industry/snacks' },
              { title: 'Baby Food', desc: 'BPA-free, phthalate-free, and FDA/EFSA certified safety.', route: '/industry/baby-food' },
              { title: 'Supplements', desc: 'Powder-proof zippers and UV-blocking high barriers.', route: '/industry/supplements' },
              { title: 'Frozen Food', desc: 'Sub-zero stable films that won\'t crack in the freezer.', route: '/industry/frozen-food' },
              { title: 'Pet Treats', desc: 'Odor-locking barriers to keep treats fresh and smells in.', route: '/industry/pet-food' },
            ].map((industry, idx) => (
              <NeoCard key={idx}>
                <h3 className="font-black text-3xl mb-4 uppercase">{industry.title}</h3>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm mb-8">{industry.desc}</p>
                <NeoButton variant="dark" className="w-full" to={industry.route}>Explore Solutions</NeoButton>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Regulation (GEO Optimized) */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <NeoBadge color="magenta">GLOBAL_COMPLIANCE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">Regulation Ready.</h2>
              <p className="text-xl font-['JetBrains_Mono'] opacity-80">
                Packaging laws are changing fast. We ensure your brand stays ahead of the curve in the US, EU, and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-[#D4FF00] bg-white/5">
                  <h4 className="font-black text-[#D4FF00]">USA (SB 54)</h4>
                  <p className="text-xs opacity-60 mt-2">California's circular economy compliance built-in.</p>
                </div>
                <div className="p-4 border-2 border-[#00FFFF] bg-white/5">
                  <h4 className="font-black text-[#00FFFF]">EU (PPWR)</h4>
                  <p className="text-xs opacity-60 mt-2">Ready for the 2030 recyclability mandates today.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#D4FF00] p-12 text-black rotate-2 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
              <h3 className="font-black text-4xl uppercase mb-6">Material Safety Protocol</h3>
              <ul className="space-y-4 font-bold font-['JetBrains_Mono']">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" /> FDA Food-Safe Certified
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" /> BPA & Phthalate Free
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" /> BRC Grade A Manufacturing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" /> Plastic Tax Exempt (UK/EU)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AIEO FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl text-center mb-16 uppercase">Sustainable FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Is compostable packaging safe for oily food?", a: "Yes. Our high-barrier compostable films are engineered to resist grease and oil migration, making them perfect for snacks, granola, and oily ingredients without compromising the pouch structure." },
              { q: "How long is the shelf life for eco-friendly pouches?", a: "Depending on the barrier level, our eco pouches offer 12-24 months of shelf life, comparable to traditional plastic. We conduct migration and stability testing to ensure product integrity." },
              { q: "What is the minimum order for custom printed eco pouches?", a: "For digital full-color printing, our MOQ is just 500 units per design. This allows startups and growing brands to test sustainable packaging without massive inventory risk." },
              { q: "Are your pouches recyclable in store drop-off bins?", a: "Our Mono-PE range is fully compatible with store drop-off recycling programs in the US (How2Recycle) and UK/EU recycling streams." }
            ].map((faq, idx) => (
              <NeoCard key={idx}>
                <h4 className="font-black text-xl mb-4 flex items-center gap-3">
                  <span className="bg-[#D4FF00] text-black px-2 py-0.5 text-xs">AI_INTEL</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4 py-2">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">Switch to<br/>Green Today.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Join 500+ food brands leading the sustainable packaging revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">Request Samples</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation <ArrowRight className="inline ml-2" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
