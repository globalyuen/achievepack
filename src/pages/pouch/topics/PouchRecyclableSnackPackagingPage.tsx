import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, Package, CheckCircle, Award, Zap, Cookie, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle, Wind, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecyclableSnackPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const PERFORMANCE_SPECS = [
    { title: 'Chips & Crisps', shelf: '12+ Months', desc: 'High oxygen barrier + Nitrogen flush.' },
    { title: 'Granola & Bars', shelf: '18+ Months', desc: 'Moisture barrier + Resealable zipper.' },
    { title: 'Nuts & Seeds', shelf: '24+ Months', desc: 'Dual barrier + UV protection.' },
    { title: 'Dried Fruits', shelf: '18+ Months', desc: 'Moisture protection + High clarity.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Recyclable Snack Packaging | Mono-Material Solutions | Pouch.eco</title>
        <meta name="description" content="Fully recyclable flexible packaging for snack brands. Mono-PE and Mono-PP pouches with high-barrier protection. Same shelf life, zero waste." />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-snack-packaging`} />
        <meta name="keywords" content="recyclable snack bags, mono-material pouches, sustainable chip bags, snack packaging recycling, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">RECYCLABLE_PROTOCOL_V4.2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Pure.<br/>Polymer.<br/>
            <span className="text-blue-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Circular.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Ditch multi-layer landfill bags. Our Mono-Material snack pouches offer elite barrier protection with a clear, verified recycling pathway. Same performance, zero waste guilt.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/materials/pcr">Explore Mono-PE</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Snack Kit</NeoButton>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
                alt="Recyclable Snack Packaging" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">BARRIER_TECH</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">Zero<br/>Sacrifice.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Traditional snack bags use mixed plastics and foil that are impossible to recycle. Our single-polymer science (Mono-PE) ensures your packaging is 100% recyclable while blocking moisture and oxygen with industrial precision.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Wind className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-black uppercase text-xs">Oxygen Block</h4>
                  <p className="text-[10px] font-bold">Prevents oxidation of fats and oils.</p>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Droplets className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-black uppercase text-xs">Moisture Shield</h4>
                  <p className="text-[10px] font-bold">Keeps snacks crisp and shelf-stable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Snack<br/>Formats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Stand up snack pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Stand Up Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Flat bottom box pouch for snacks" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Box Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/3-side.webp" 
              alt="Flat pouch for snacks" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Flat Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/side -seal.webp" 
              alt="Side gusset snack packaging" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Side Gusset Bags"
            />
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <ClickableImage src="/imgs/seo-photos/usa/snack/a_snacks_brand_sustainability_guide_7868632.webp" className="border-2 border-black w-full mb-6" alt="Snack Brand Guide" />
              <h4 className="font-black text-xl uppercase mb-2">Brand Loyalty</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">85% of snack consumers prefer brands that use verified recyclable packaging. Future-proof your shelf space.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(37,99,235,1)]">
              <ClickableImage src="/imgs/seo-photos/usa/snack/a_snacks_pouch_format_comparison_8281669.webp" className="border-2 border-black w-full mb-6" alt="Snack Formats" />
              <h4 className="font-black text-xl uppercase mb-2">Format Versatility</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">Available in stand-up pouches, flat bags, and rollstock for high-speed VFFS/HFFS automation lines.</p>
            </NeoCard>
            <NeoCard>
              <div className="p-8 bg-black text-[#D4FF00] h-full flex flex-col justify-center text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-6" />
                <h4 className="font-black text-3xl uppercase">Shelf Life Matrix</h4>
                <p className="text-xs font-bold mt-4 uppercase italic">Most snacks achieve 12-24 month stability with our recyclable high-barrier films.</p>
              </div>
            </NeoCard>
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
              <h4 className="font-black text-xl mb-2">How do mono-material bags keep snacks fresh?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">We engineer Mono-PE and Mono-PP with microscopic barrier coatings (like EVOH or AlOx) that block oxygen and moisture without compromising recyclability.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Are these recyclable in standard curbside bins?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Depending on the region, Mono-PE is typically recycled via "Store Drop-Off" programs, but infrastructure for curbside flexible plastic is rapidly expanding globally.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Can you handle nitrogen flushing?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes! Our seal integrity on recyclable films is excellent and fully compatible with nitrogen flushing to extend shelf life and prevent chip breakage.</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">Do you provide rollstock for automated packing lines?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">Yes, we provide fully customized, high-speed recyclable rollstock for Form-Fill-Seal (VFFS/HFFS) packaging machines.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="blue">CIRCULAR_READY</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-blue-400">Crisp.<br/>Clean.<br/>Recycled.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            Ready to transition your snack brand to 100% recyclable packaging? Let's build your circular story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-blue-600 !text-white">Order Recyclable Kit</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consultancy Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclableSnackPackagingPage
