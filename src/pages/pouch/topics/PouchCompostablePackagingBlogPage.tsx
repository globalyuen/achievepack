import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, ShieldCheck, Thermometer, Droplets, CheckCircle, HelpCircle, ArrowRight, Globe, BarChart3, FlaskConical, FileText, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostablePackagingBlogPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>The Science of Compostable Packaging: Deep Guide | Pouch.eco</title>
        <meta name="description" content="Technical deep-dive into compostable polymer science, biodegradation kinetics, and soil health. 800+ words of expertise on biological packaging loops." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">BIO_LOOP_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            BIOLOGICAL<br/>
            RECOVERY<br/>
            PURE_COMPOST
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Returning packaging to the earth. We engineer high-performance biological barriers using PBS and NK technology. This is the 800+ word science of the compostable loop.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">START_COMPOST_PROJECT</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">MATERIAL_LAB</NeoButton>
          </div>
        </div>
      </section>

      {/* Biodegradation Section */}
      <section className="py-24 bg-white border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">THE_KINETICS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Thermal<br/>Hydrolysis</h2>
            <p className="mt-8 text-xl text-gray-800 leading-relaxed">
              Compostability isn't a magic trick; it's a <strong>biological reaction</strong>. Industrial composting requires temperatures of 58°C to break the ester bonds in plant-based polymers like <strong>PLA</strong> and <strong>Bio-PBS</strong>.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Thermometer className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Disintegration</h4>
                    <p className="mt-2 text-sm text-gray-600">The package must physically fragment into pieces smaller than 2mm within 12 weeks of exposure to industrial compost conditions.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <FlaskConical className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Ecotoxicity</h4>
                    <p className="mt-2 text-sm text-gray-600">The final biomass must pass a <strong>Cress Test</strong> to ensure it supports healthy plant growth without heavy metal residue.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/compostable_blog.png" 
                alt="Compostable Material Science" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Research Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">The Barrier Matrix: NK & Bio-PBS</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Protecting your product while ensuring biological recovery is the ultimate engineering challenge. We utilize a <strong>Triple-Layer Matrix</strong>: FSC-certified NatureKraft for structure, Metallized Cellulose for high-barrier protection (OTR &lt; 1.0), and Bio-PBS for high-integrity sealing.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Our materials are strictly certified under <strong>EN13432</strong> and <strong>ASTM D6400</strong>, ensuring they meet the world's most rigorous benchmarks for fragmentation, biodegradation, and soil safety.
              </p>
              
              <div className="my-12 p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" /> Operational Specs
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span><strong>Shelf Life:</strong> 12-18 months in controlled storage environments.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span><strong>Compatibility:</strong> Drop-in replacement for PET/PE on most VFFS/HFFS lines.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span><strong>OTR Performance:</strong> &lt; 0.5 cc/m²/day for metallized cellulose grades.</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-black text-4xl uppercase italic mb-8">Home vs. Industrial Composting</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Transparency is key. Most high-barrier pouches are currently <strong>Industrial Compostable</strong>. While home composting is a goal, the high-performance polymers required to protect food often need the consistent 60°C heat of a municipal facility to disintegrate efficiently.
              </p>
            </div>
            
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-emerald-400" /> BIODIGEST_STATS</h4>
                <div className="space-y-4 text-xs font-black">
                  <div>
                    <p className="mb-1 uppercase">Fragmentation (90 Days)</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 uppercase">Bio-Carbon Content</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                <NeoButton variant="primary" className="mt-8 !bg-emerald-400 !text-white w-full border-2 border-white" to="/quote">START_BIO_TRANSITION</NeoButton>
              </NeoCard>
              
              <div className="bg-white p-8 border-4 border-black font-black uppercase text-xs">
                <h4 className="text-xl mb-4">SOIL_SAFE</h4>
                <div className="p-2 border-2 border-black mb-2">NON-GMO FEEDSTOCK</div>
                <div className="p-2 border-2 border-black mb-2">HEAVY METAL FREE</div>
                <div className="p-2 border-2 border-black">ECOTOXICITY TESTED</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-6xl md:text-9xl uppercase italic mb-16 text-center">COMPOST_INTEL</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What if it goes to a landfill?",
                a: "In an anaerobic landfill, compostable bags will remain intact for a very long time. They are designed for aerobic biological recovery."
              },
              {
                q: "Is it suitable for oily foods?",
                a: "Yes. Our Bio-PBS sealant layer has high fat-resistance, making it perfect for nuts, seeds, and granola."
              },
              {
                q: "Why is it better than paper?",
                a: "Unlike paper, our compostable films provide an airtight oxygen barrier that keeps food fresh for 12+ months."
              },
              {
                q: "How to tell customers?",
                a: "We recommend using the 'Seedling' logo or 'OK Compost' mark with your unique license number for full transparency."
              }
            ].map((faq, i) => (
              <NeoCard key={i} color="bg-[#F0F0F0]" className="border-4 border-black p-8 hover:bg-emerald-600 hover:text-white transition-all group">
                <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-emerald-600 group-hover:text-white" /> {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-gray-600 group-hover:text-white">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            GROW_NOT<br/>
            <span className="text-emerald-400">WASTE_V2</span>
          </h2>
          <NeoButton variant="primary" className="!bg-emerald-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            GET_COMPOSTABLE_GUIDE
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostablePackagingBlogPage
