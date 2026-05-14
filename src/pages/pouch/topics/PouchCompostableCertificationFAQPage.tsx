import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostableCertificationFAQPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  
  const CERT_METRICS = [
    { label: 'Biodegradation', value: '90%', unit: '180 Days', desc: 'Conversion of carbon to CO2.' },
    { label: 'Disintegration', value: '12', unit: 'Weeks', desc: 'Physical breakdown to < 2mm.' },
    { label: 'Eco-Toxicity', value: 'PASS', unit: 'Plant Test', desc: 'Safe for plant growth and soil.' },
    { label: 'Standard', value: 'EN13432', unit: 'ASTM D6400', desc: 'Global industrial compliance.' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Certification FAQ | Technical Standards | Pouch.eco</title>
        <meta name="description" content="Technical guide to compostable packaging certifications. 800+ words of research on EN 13432, ASTM D6400, and TUV OK Compost standards." />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-certification-faq`} />
        <meta name="keywords" content="compostable certification, EN 13432, ASTM D6400, OK Compost HOME, BPI certified" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">CERT_VERIFY_V1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">Proven.<br/>Pure.<br/><span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Plant.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Compostability is not a marketing claim—it's a lab-verified technical specification. We break down the global standards (EN 13432, ASTM D6400) that separate authentic circular packaging from greenwashing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">Browse Certified Styles</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Lab Reports</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Testing Protocol */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/pouch-shape/a_kraft_coffee_bag_with_compostable_valve_6857122.webp" 
                alt="Compostability Testing Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">MATERIAL_LAB_VERIFY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Measured.<br/>To Zero.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                For a material to be truly compostable, it must undergo a rigorous 180-day <strong>Biodegradation Test</strong>. This process measures the conversion of the material's carbon content into CO2 by microorganisms. To pass <strong>EN 13432</strong> or <strong>ASTM D6400</strong>, the material must achieve 90% conversion within 6 months. We verify every component—from our Bio-PBS sealants to our water-based inks—ensuring they leave behind zero microplastics and pass the critical <strong>Summer Barley Eco-Toxicity</strong> growth test.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {CERT_METRICS.map((p, i) => (
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

      {/* Technical: Global Standards Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">CERT_TECH_STACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Global Safety<br/>Protocols.</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. EN 13432 (EU)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                The primary European industrial standard. Mandates disintegration to &lt; 2mm within 12 weeks and strict limits on heavy metals (Pb, Cd, Hg, Cr, Cu).
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. ASTM D6400 (US)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                The technical foundation for BPI certification in the United States. Focuses on the physical performance of bioplastics in industrial aerobic composting.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. OK HOME (TUV)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Home Compostability certification. Requires the material to break down at ambient temperatures (20-30°C), making it suitable for backyard disposal.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. AS 4736 (AU/NZ)</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                Includes the unique 'Worm Toxicity' test. This ensures the resulting compost is biologically safe for earthworm populations and long-term soil health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">CERT_VERIFICATION_MATRIX</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Trust the<br/>Analysis.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <Microscope className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Heavy Metal Audit</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">Laboratory screening for 12+ toxic metals to ensure 100% soil safety post-compost.</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
              <Beaker className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Eco-Toxicity Test</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">Certified cress and barley growth trials confirm zero negative impact on plant germination.</p>
            </NeoCard>
            <NeoCard>
              <Droplets className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">Solvent-Free</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">100% water-based lamination ensures no chemical residues inhibit the microbial decomposition process.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ: Certification Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">CERT_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert<br/>Intelligence.</h2>
          <div className="space-y-4">
            {[
              { q: "What is the difference between OK Compost HOME and INDUSTRIAL?", a: "Industrial certification (EN 13432) requires 60°C+ temperatures to break down. HOME certification (OK Compost HOME) guarantees the material will decompose in backyard piles at 20-30°C." },
              { q: "Do these certifications expire?", a: "Yes. TUV and BPI certificates are typically valid for 3-5 years and require regular re-testing of the material structure to maintain compliance." },
              { q: "Can I print the seedling logo on my bag?", a: "You can only use the logo if your specific pouch design is registered with the certifying body. We provide the technical data required for your application." },
              { q: "Are bioplastics always compostable?", a: "No. Some bioplastics like Bio-PET are molecularly identical to standard plastic and are recyclable, not compostable. You must verify the ASTM or EN standard number." }
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
          <NeoBadge color="lime">CERT_MANDATE</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Think Pure.<br/>Get Certified.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to secure a certified compostable supply chain for your brand? Let's start the technical audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-900">Order Certified Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to a Certification Expert
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableCertificationFAQPage
