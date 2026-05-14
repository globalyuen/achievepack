import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, ShieldCheck, Info, ClipboardCheck, Search, Zap, Globe, FileCheck, HelpCircle, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchFoodPackagingSupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>Food-Safe Supplier Auditing: GFSI Standards | Pouch.eco</title>
        <meta name="description" content="A master guide to auditing food packaging suppliers. Learn about BRCGS, SQF, migration testing (OML/SML), and clean-room production hygiene for professional food brands." />
        <link rel="canonical" href={`${baseUrl}/topics/food-packaging-supplier`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-lime-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">SAFETY_FIRST_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic text-black drop-shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            TRUST_IS_NOT<br/>
            AN_AUDIT_GRADE<br/>
            IT_IS_THE_FLOOR
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-white max-w-4xl bg-black border-4 border-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            Choosing a supplier is a safety decision. We'll show you how to look past the ISO certificates to verify actual clean-room performance and migration safety.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">BOOK_SITE_AUDIT</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">AUDIT_CHECKLIST</NeoButton>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">THE_CERTIFICATIONS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Global Food<br/>Safety Initiative</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              We only collaborate with production facilities that hold <strong>GFSI-recognized</strong> certifications. This is the minimum bar for E-E-A-T in food packaging.
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">BRCGS (Grade AA)</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">The highest operational standard for hygiene, hazard analysis (HACCP), and senior management commitment.</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <FileCheck className="w-8 h-8 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">SQF Level 3</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">Comprehensive food safety and quality management, with rigorous third-party auditing of production systems.</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-lime-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/generated/food_supplier.png" 
                alt="Clean-Room Factory Environment" 
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
              <h3 className="font-black text-4xl uppercase italic mb-8">Migration Safety: The Invisible Danger</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                A "food grade" resin is only safe if it's processed correctly. We conduct <strong>Overall Migration Limit (OML)</strong> and <strong>Specific Migration Limit (SML)</strong> testing using simulant liquids (3% Acetic Acid, 10% Ethanol, Vegetable Oil). This ensures that chemical transfer from the pouch to the food remains well below EFSA/FDA thresholds.
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(163,230,53,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Zap className="text-lime-500" /> Low-Migration Ink Systems
                </h4>
                <p className="text-lg leading-relaxed mb-6">
                  Exterior printing can migrate through the substrate into your food. We utilize <strong>Nestlé-compliant</strong> and Swiss Ordinance approved low-migration inks and adhesives. By using solvent-free lamination, we eliminate the risk of residual odor and chemical taint, protecting the organoleptic properties of your product.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">Class 100k Clean Room</h5>
                    <p className="text-xs">Positive pressure environment to prevent airborne contamination during bag conversion.</p>
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black">
                    <h5 className="font-black uppercase mb-2">Batch Traceability</h5>
                    <p className="text-xs">Every pallet is traced back to the specific resin lot and machine operator for 100% accountability.</p>
                  </div>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">Auditing the Audits</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                We believe in Authoritativeness. Don't just trust a certificate image. Ask for the full audit report. Look for corrective actions. A supplier that is transparent about their improvements is a partner that will protect your brand during a crisis.
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(163,230,53,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><ClipboardCheck className="text-lime-400" /> AUDIT_KPIs</h4>
                <div className="space-y-4 text-xs font-black uppercase">
                  <div className="flex justify-between border-b-2 border-white pb-2">
                    <span>HACCP Verified</span>
                    <CheckCircle className="w-4 h-4 text-lime-400" />
                  </div>
                  <div className="flex justify-between border-b-2 border-white pb-2">
                    <span>Pest Control</span>
                    <CheckCircle className="w-4 h-4 text-lime-400" />
                  </div>
                  <div className="flex justify-between border-b-2 border-white pb-2">
                    <span>Social Audit</span>
                    <span className="text-lime-400">Sedex/BSCI</span>
                  </div>
                </div>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><HelpCircle /> EXPERT_ADVICE</h4>
                <p className="text-sm">"The cheapest quote often skips the migration testing. In the food industry, that's a risk your brand can't afford to take."</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            FOOD_SAFE<br/>
            <span className="text-lime-400">AUDIT_READY</span>
          </h2>
          <NeoButton variant="primary" className="!bg-lime-400 !text-black !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            GET_AUDIT_CHECKLIST
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchFoodPackagingSupplierServicePage
