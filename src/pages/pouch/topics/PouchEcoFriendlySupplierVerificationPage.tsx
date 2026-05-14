import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Factory, CheckCircle, Award, Zap, Globe, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, ClipboardCheck, Users, FileSearch } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlySupplierVerificationPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const AUDIT_METRICS = [
    { label: 'Social Compliance', value: '100%', unit: 'SMETA', desc: 'Ethical labor and wage verification.' },
    { label: 'Quality Score', value: 'A', unit: 'BRCGS', desc: 'Highest global hygiene benchmark.' },
    { label: 'Material Trace', value: 'LINKED', unit: 'GRS/ISCC', desc: 'Verified recycled content trail.' },
    { label: 'On-Site Presence', value: 'LOCAL', unit: 'Auditors', desc: 'Physical verification in major hubs.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco-Friendly Supplier Verification | Supply Chain Engineering | Pouch.eco</title>
        <meta name="description" content="Technical guide to sustainable supplier verification. 800+ words of research on SMETA audits, GRS traceability, and BRCGS food safety compliance." />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-supplier-verification`} />
        <meta name="keywords" content="eco-friendly supplier verification, sustainable supply chain, packaging audit, GRS traceability, SMETA audit" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="green">SUPPLY_CHAIN_V2.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Verify.<br/>Audit.<br/><span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Secure.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Sustainability without verification is just marketing. We engineer trust through rigorous SEDEX/SMETA audits and batch-level GRS traceability, ensuring your brand stays bulletproof against greenwashing risks.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/about">Our Audit Standards</NeoButton>
            <NeoButton variant="secondary" href="https://calendly.com/30-min-free-packaging-consultancy">Request a Supplier Audit</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Audit Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="High-Tech Verified Packaging Factory" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">TECHNICAL_ACCOUNTABILITY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Evidence Based<br/>Trust.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Trust is a byproduct of transparency. We perform <strong>4-Pillar SMETA audits</strong> on our core manufacturing facilities to verify ethical labor, occupational health, and environmental performance. By integrating <strong>ISO 14001</strong> environmental management systems and <strong>BRCGS Grade A</strong> hygiene protocols, we ensure your packaging is manufactured to the world's most demanding technical specifications.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {AUDIT_METRICS.map((p, i) => (
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

      {/* Deep Dive: Material Traceability */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">TRACEABILITY_ENGINE</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">The Chain of<br/>Custody.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. GRS Verified</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Global Recycled Standard. We provide the Transaction Certificates (TC) required to prove the specific percentage of post-consumer waste in your film structure. No guesses. Just data.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. ISCC PLUS</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Mass-balance traceability for bio-circular resins. This system tracks sustainable materials through the complex chemical recycling and co-extrusion supply chain.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. SEDEX/SMETA</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Social and ethical audit verification. We ensure that every person in the Achieve Pack supply chain is treated with dignity, paid fairly, and works in a safe environment.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. BRCGS Grade A</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Global Standard for Food Safety. Our facilities are audited annually to ensure the highest levels of hygiene and contamination control in the flexible packaging industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">PHYSICAL_VALIDATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">On-Site.<br/>In Real-Time.</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                We maintain an active on-the-ground presence in all our primary manufacturing hubs. This allows us to perform unannounced audits, verify <strong>batch-level quality control</strong>, and ensure that the documented sustainability standards are being met in daily operations. We don't just trust the certificate; we trust our eyes.
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <ClipboardCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Batch QA Analysis</h4>
                    <p className="text-sm opacity-60">Every production run is sampled and tested for barrier performance and material purity.</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Users className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">Ethical Oversight</h4>
                    <p className="text-sm opacity-60">Continuous monitoring of labor rights and safety standards through our local audit teams.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="On-site Supplier Verification" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Radical Transparency */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">AUDIT_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Supply Chain<br/>Clarity.</h2>
          <div className="space-y-4">
            {[
              { q: "How do you handle supplier non-compliance?", a: "We maintain a 'Zero-Tolerance' policy for major ethical or safety breaches. For minor deviations, we implement a Corrective Action Plan (CAP) with a mandatory re-audit within 90 days." },
              { q: "Can I join an on-site audit of my packaging production?", a: "Yes. For our enterprise clients, we facilitate site visits and third-party audits of their specific production lines to ensure total transparency." },
              { q: "What is an EcoVadis score and why is it important?", a: "EcoVadis is the world's most trusted business sustainability rating. We use it to benchmark our suppliers against global peers in Environment, Labor & Human Rights, and Ethics." },
              { q: "How do you verify PCR content claims?", a: "We require Transaction Certificates (TC) linked to the Global Recycled Standard (GRS) for every batch. This provides a forensic trail back to the recycling facility." }
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
      <section className="py-24 bg-emerald-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">AUDIT_ACTION_PLAN</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Verified.<br/>Valued.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a transparent, ethical supply chain for your brand? Let's discuss your verification requirements today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/about" className="!bg-white !text-emerald-900">Review Our Standards</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to an Auditor
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierVerificationPage
