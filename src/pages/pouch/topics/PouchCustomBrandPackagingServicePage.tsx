import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Palette, Zap, CheckCircle, Info, Settings, Layout, MousePointer2, FlaskConical, BarChart, Binary } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomBrandPackagingServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Brand Packaging: Structural Design & Engineering | Pouch.eco</title>
        <meta name="description" content="Expert guide to custom brand packaging. Learn about dieline engineering, Pantone color management, digital vs gravure printing, and premium tactile finishes for high-performance eco-brands." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-brand-solutions`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-magenta-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">BRAND_SYSTEM_V2</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            DESIGN_MEETS<br/>
            STRUCTURAL<br/>
            INTEGRITY
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Your brand is a visual asset. Our custom engineering ensures your packaging looks as good as it performs on the retail shelf.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">START_DESIGN_PROJECT</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">COLOR_GUIDE</NeoButton>
          </div>
        </div>
      </section>

      {/* Structural Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_GEOMETRY</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Dieline<br/>Engineering</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              We don't just print on bags. We engineer structures. From <strong>K-Seals</strong> to <strong>Round-Bottom Gussets</strong>, we design the physics of your pouch to ensure a perfect retail stand.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Binary className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Right-Sizing</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">Optimizing dimensions to your product density to eliminate 'slack-fill' and material waste.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Layout className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">Prototyping</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">High-fidelity 3D modeling and 'white samples' to verify fit and feel before mass production.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-magenta-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/custom_packaging.png" 
                alt="Custom Pouch Design Gallery" 
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
              <h3 className="font-black text-4xl uppercase italic mb-8">Color Authority & Delta-E Control</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Consistency is the signature of a premium brand. Our facilities utilize X-Rite spectrophotometers to maintain a <strong>Delta-E variance of &lt; 2.0</strong>, ensuring your brand colors look identical across every production batch, regardless of the substrate.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Palette className="text-magenta-500" /> Printing Technology Comparison
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-black uppercase">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="p-4 border-r border-white/20">Feature</th>
                        <th className="p-4 border-r border-white/20">Digital (HP Indigo)</th>
                        <th className="p-4">Gravure Printing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black">
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">Best For</td>
                        <td className="p-4 border-r border-black">Low MOQ / High SKU</td>
                        <td className="p-4">Mass Scale / Low Cost</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 border-r border-black">Plate Cost</td>
                        <td className="p-4 border-r border-black">$0 (Zero)</td>
                        <td className="p-4">$150 - $400 / Color</td>
                      </tr>
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">Lead Time</td>
                        <td className="p-4 border-r border-black">3-4 Weeks</td>
                        <td className="p-4">6-8 Weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Tactile Performance</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                We believe in the sensory experience of a brand. From <strong>Soft-Touch Matte</strong> coatings to <strong>Spot-UV</strong> contrast finishes, we provide the tactile layers that differentiate your product in a crowded retail environment. Our bio-compatible coatings ensure even your custom finishes meet compostability standards.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-magenta-400" /> ART_PREP</h4>
                <p className="text-sm">We provide technical dieline audits and ink opacity checks to ensure your art is 'Press-Ready' for sustainable substrates.</p>
                <NeoButton variant="primary" className="mt-8 !bg-magenta-400 !text-white w-full border-2 border-white" to="/quote">SUBMIT_ARTWORK</NeoButton>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><MousePointer2 /> FINISH_LAB</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-white border-2 border-black">Soft-Touch Matte</div>
                  <div className="p-2 bg-white border-2 border-black">Spot Gloss UV</div>
                  <div className="p-2 bg-white border-2 border-black">Holographic Elements</div>
                  <div className="p-2 bg-white border-2 border-black">Metallized Accents</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            DESIGN_WINS<br/>
            <span className="text-magenta-400">STAND_OUT</span>
          </h2>
          <NeoButton variant="primary" className="!bg-magenta-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            GET_CUSTOM_PROTOTYPE
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingServicePage
