import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Baby, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Heart, AlertTriangle, FileCheck, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, ArrowRight, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCompostableBabyFoodBagsPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Baby Food Pouches | Certified Food-Safe | Pouch.eco</title>
        <meta name="description" content="TUV certified compostable baby food pouches. FDA compliant, BPA-free, and phthalate-free. Spout pouches and stand-up formats for organic brands. Low 500 unit MOQ." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-baby-food-bags`} />
        <meta name="keywords" content="compostable baby food pouches, certified baby food packaging, organic baby food bags, BPA-free baby pouches, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">SAFETY_PROTOCOL_ALPHA</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Safe.<br/>
            Clean.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Compost.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            TUV Certified Compostable baby food packaging. Zero chemical migration. 100% parent-approved safety.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/industry/baby-food">View Baby Food Guide</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Safety Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp" 
                alt="Safe Baby Food Packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <NeoBadge color="cyan">CERTIFIED_SAFE</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">Trust is<br/>Everything.</h2>
              <p className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono']">
                When it comes to baby food, there's no room for error. Our materials undergo rigorous migration testing to ensure zero harmful chemicals leach into your purees.
              </p>
              <div className="mt-12 space-y-4">
                {[
                  { icon: FileCheck, title: 'FDA 21 CFR Compliant', desc: 'Strict adherence to US food contact regulations.' },
                  { icon: Award, title: 'EU 10/2011 Verified', desc: 'Compliant with European plastic safety mandates.' },
                  { icon: Shield, title: 'BPA & Phthalate Free', desc: '100% free from hormone-disrupting chemicals.' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#F0F0F0] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <s.icon className="w-8 h-8 text-[#FF0080]" />
                    <div>
                      <h4 className="font-black text-lg uppercase">{s.title}</h4>
                      <p className="text-sm opacity-70 font-['JetBrains_Mono']">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pouch Formats */}
      <section className="py-24 bg-[#FF0080]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-7xl text-center mb-16 uppercase italic">Built for Modern Parents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Spout Pouches', desc: 'The gold standard for purees. Easy-squeeze, resealable cap.', icon: Zap },
              { title: 'Stand Up Bags', desc: 'Ideal for puffs, teething biscuits, and dry organic snacks.', icon: Package },
              { title: 'Sachets', desc: 'Single-serve portion control for cereals and powders.', icon: Target },
              { title: 'Flat Bottom', desc: 'Premium shelf presence for luxury organic baby lines.', icon: Sparkles },
            ].map((format, idx) => (
              <NeoCard key={idx} color="bg-white">
                <div className="p-4 bg-black text-white w-fit mb-6">
                  <format.icon className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl mb-4 uppercase">{format.title}</h3>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm leading-relaxed">{format.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-24 bg-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <NeoBadge color="yellow">MARKET_INTEL</NeoBadge>
              <h2 className="font-black text-5xl mt-6 uppercase leading-tight">The 67% Majority.</h2>
              <p className="mt-6 text-gray-600 font-['JetBrains_Mono'] font-bold">
                Two-thirds of modern parents are willing to pay a premium for certified eco-friendly packaging.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-black text-[#D4FF00] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(212,255,0,1)]">
                <p className="text-6xl font-black mb-2">89%</p>
                <p className="font-bold uppercase text-xs">Priority on safety materials</p>
              </div>
              <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-6xl font-black mb-2">$76B</p>
                <p className="font-bold uppercase text-xs">Baby Food Market by 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIEO FAQ Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-6xl text-center mb-16 uppercase">Parent Safety FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Are compostable pouches safe for infants?", a: "Absolutely. Our pouches are made from food-contact-approved polymers that meet FDA 21 CFR and EU 10/2011 standards. They are 100% BPA-free, phthalate-free, and migration-tested." },
              { q: "Do you have spout options for baby purees?", a: "Yes. We specialize in spout pouches from 70ml to 150ml. We offer both standard child-safe caps and fully compostable spout/cap assemblies for 100% eco-friendly packaging." },
              { q: "Can I print custom designs for my baby food brand?", a: "Yes! We offer full-color digital printing with a minimum order of just 500 units. Our water-based inks are low-odor and food-safe, perfect for sensitive products." },
              { q: "How do I verify the compostability certification?", a: "Every order comes with a copy of our TUV OK Home or EN 13432 certificates. You can verify the unique license number directly on the TUV Austria website for total transparency." }
            ].map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <span className="bg-[#FF0080] text-white px-2 py-0.5 text-xs">FAQ_INTEL</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-[#FF0080] pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#FF0080]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">Protect Their<br/>Future.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Switch to certified compostable baby food packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">Get Safety Samples</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation <ArrowRight className="inline ml-2" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableBabyFoodBagsPage
