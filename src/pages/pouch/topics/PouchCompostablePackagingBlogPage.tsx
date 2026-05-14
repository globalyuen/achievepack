import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Sprout, CheckCircle, Info, AlertTriangle, HelpCircle, FlaskConical, Recycle, Microscope } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostablePackagingBlogPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>The Science of Compostable Packaging: Real Truths | Pouch.eco</title>
        <meta name="description" content="A technical deep-dive into compostable packaging science, bio-polymer performance (PLA, PBS, PHA), and certification transparency for global brands." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-[#FF00FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">BIO_PUNK_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            COMPOSTABLE<br/>
            IS_NOT<br/>
            MAGIC_DUST
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Moving beyond vague 'biodegradable' marketing to evidence-based bio-polymer science. If it doesn't feed the soil, it's not compostable.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">GET_BIO_ADVICE</NeoButton>
            <NeoButton variant="secondary" to="/materials">SOIL_TESTS</NeoButton>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">THE_BIOLOGY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Biological<br/>Returns</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              True compostable materials don't just disappear; they are consumed by microbes. We use <strong>PBS</strong>, <strong>PLA</strong>, and <strong>NK</strong> structures to ensure 100% biodegradation.
            </p>
            <div className="mt-12 space-y-4">
              {[
                { name: "PLA", desc: "Plant-based stiffness and high clarity." },
                { name: "PBS", desc: "Superior heat resistance and seal strength." },
                { name: "NatureFlex", desc: "Wood-pulp barrier with extreme OTR protection." }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-[#F0F0F0] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-2xl uppercase italic">{item.name}</span>
                  <span className="text-xs font-['JetBrains_Mono'] text-gray-500 text-right max-w-[200px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF00FF] translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/compostable_blog.png" 
                alt="Compostable Material Breakdown" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">The Harsh Truth About Composting</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Most "compostable" bags on the market will not break down in your backyard. They are <strong>Industrially Compostable</strong>, meaning they require the sustained 58°C heat of a municipal facility. 
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-[#FF00FF]" /> The E-E-A-T Policy
                </h4>
                <p className="text-lg leading-relaxed mb-6">
                  At Pouch.eco, we practice radical transparency. We don't hide the disposal requirements. We provide clear labeling: "Industrially Compostable - Verify Local Collection." Trust is built on honesty about the waste stream.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">Soil Safety</h5>
                    <p className="text-xs">Zero microplastics. Zero toxins. We verify heavy metal compliance (EN13432) for every material batch.</p>
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">OTR Barrier</h5>
                    <p className="text-xs">Our NK/PBS structures match the barrier performance of PET, keeping your coffee fresh for 18 months.</p>
                  </div>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Feeding the Soil, Not the Ocean</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                While compostable packaging is not a solution for littering, it is the only packaging format that actively contributes to soil health when processed correctly. We are exploring PHA (Polyhydroxyalkanoates) structures for marine-degradable applications, representing the next frontier of biological materials.
              </p>
            </div>
            <aside className="space-y-8">
              <div className="bg-black text-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
                  <FlaskConical className="text-[#FF00FF]" /> BIO_METRICS
                </h4>
                <div className="space-y-4 font-black uppercase text-xs">
                  <div className="flex justify-between border-b-2 border-[#FF00FF] pb-2">
                    <span>90 Day Disintegration</span>
                    <CheckCircle className="w-4 h-4 text-[#FF00FF]" />
                  </div>
                  <div className="flex justify-between border-b-2 border-[#FF00FF] pb-2">
                    <span>Microplastic Free</span>
                    <CheckCircle className="w-4 h-4 text-[#FF00FF]" />
                  </div>
                  <div className="flex justify-between border-b-2 border-[#FF00FF] pb-2">
                    <span>PFAS Free</span>
                    <CheckCircle className="w-4 h-4 text-[#FF00FF]" />
                  </div>
                  <div className="flex justify-between border-b-2 border-[#FF00FF] pb-2">
                    <span>Bio-Based Content</span>
                    <span>&gt; 90%</span>
                  </div>
                </div>
              </div>
              <NeoCard color="bg-blue-400" className="border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4">Bio Audit</h4>
                <p className="text-sm">We provide full shelf-life testing for sensitive products in bio-structures.</p>
                <NeoButton variant="dark" className="mt-6 w-full" to="/quote">START_BIO_TRIAL</NeoButton>
              </NeoCard>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            SOIL_SAFE<br/>
            <span className="text-[#FF00FF]">FUTURE_PROOF</span>
          </h2>
          <NeoButton variant="primary" className="!bg-[#FF00FF] !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            RESERVE_BIO_STOCK
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostablePackagingBlogPage
