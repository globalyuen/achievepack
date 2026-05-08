import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Rocket, Shield, Zap, ArrowRight, CheckCircle, Package, TrendingUp, BarChart3, Clock, DollarSign, MousePointer2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchLowMOQStartupPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const MOQ_TIERS = [
    { tier: 'Digital Short Run', moq: '100 - 500 units', bestFor: 'Market Testing, Seasonal SKUs', leadTime: '10 Days' },
    { tier: 'Standard Eco Run', moq: '2,000 units', bestFor: 'Emerging D2C Brands', leadTime: '15 Days' },
    { tier: 'Volume Production', moq: '10,000+ units', bestFor: 'Scale & Retail Expansion', leadTime: '20 Days' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Low MOQ Eco Packaging | Startup Sustainable Solutions | Pouch.eco</title>
        <meta name="description" content="Sustainable packaging from just 500 units. Perfect for startups and emerging brands. Digital printing, fast delivery, and certified eco materials." />
        <link rel="canonical" href={`${baseUrl}/topics/low-moq-startup-packaging`} />
        <meta name="keywords" content="low moq packaging, startup packaging, custom printed pouches small quantity, eco friendly bags startup" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">STARTUP_ACCELERATOR_V2.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">Start.<br/>Small.<br/><span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Scale.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Ditch the 10,000 unit inventory risk. Launch your sustainable brand today with industry-leading low MOQs from just 500 pieces.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">Request Startup Kit</NeoButton>
            <NeoButton variant="secondary" to="/quote">Get Low MOQ Quote</NeoButton>
          </div>
        </div>
      </section>

      {/* Logic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_cta_start_journey_banner_8370209.webp" 
                alt="Startup Packaging Journey" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">CASH_FLOW_OPTIMIZED</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Inventory<br/>is a Risk.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Startups die by inventory bloat. We help you stay lean with digital printing technology that requires zero plate costs and minimal setup fees. Test 5 different flavors in one 1,000-unit run.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-yellow-600 p-4">
                  <DollarSign className="text-yellow-600 w-8 h-8 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Save Up To $5k in Initial Plate Costs</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-50 border-l-8 border-blue-600 p-4">
                  <Clock className="text-blue-600 w-8 h-8 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">Ship in 10-15 Days - Zero Delays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">STARTUP_FAVORITES</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Visual<br/>Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Flat Bottom Bags"
            />
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt="Baby food pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Baby Food Pouches"
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt="DTC sustainable packaging" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="DTC Packaging"
            />
          </div>
        </div>
      </section>

      {/* MOQ Tier Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">MOQ Tiers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {MOQ_TIERS.map((tier, i) => (
              <NeoCard key={i} color="bg-white">
                <h4 className="font-black text-2xl uppercase mb-2">{tier.tier}</h4>
                <div className="text-3xl font-black text-magenta-600 mb-6">{tier.moq}</div>
                <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                  <div className="flex justify-between border-b border-black/10 pb-2">
                    <span>Target:</span>
                    <span className="font-bold">{tier.bestFor}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-2">
                    <span>Delivery:</span>
                    <span className="font-bold">{tier.leadTime}</span>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">DIGITAL_AGILITY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase">The Digital<br/>Workflow.</h2>
            <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
              Our automated workflow allows you to upload artwork and move to production in under 24 hours. No manual plate making. No long setup times.
            </p>
            <NeoButton variant="secondary" className="mt-8" to="/printing/digital">Explore Digital Tech</NeoButton>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black" />
            <img 
              src="/imgs/seo-photos/a_platform_digital_workflow_0276726.webp" 
              alt="Digital Workflow" 
              className="relative z-10 border-4 border-black w-full"
            />
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
              <h4 className="font-black text-xl mb-2">What is the minimum order quantity (MOQ)?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Our MOQ starts from just 500 units for digitally printed pouches, allowing you to test the market with minimal risk.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can I order different designs within the minimum quantity?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes! With digital printing, you can split your order across multiple SKUs (e.g., 500 units of 5 different flavors = 100 per flavor).</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are your materials certified eco-friendly?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we offer certified compostable (TUV), recyclable, and bio-based materials that meet strict international standards.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">How long does production take?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Standard production time is 10-15 business days after artwork approval.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">LAUNCH_READY</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Big.<br/>Start Small.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black opacity-80 max-w-2xl mx-auto">
            Ready to launch your sustainable brand without the 10,000 unit headache? Request our Startup Kit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Request Startup Kit</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Startup Consultation
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchLowMOQStartupPackagingPage
