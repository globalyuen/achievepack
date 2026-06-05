import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Scale, CheckCircle, AlertTriangle, Recycle, ArrowRight, ShieldCheck, HelpCircle, Award, Shield, Factory } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { getBaseUrl } from '../../../utils/domain'
import EcoMaterialSourcingGuide from '../../../components/pouch/EcoMaterialSourcingGuide'

export default function PouchStampFoilRecyclabilityPage() {
  const baseUrl = getBaseUrl()

  const FAQS = [
    {
      q: "Will hot stamping a logo affect the recycling code on my pouch?",
      a: "No. As long as the primary composite polymer represents over 95% of the total package weight, the pouch can legally carry the Resin Code #4 (LDPE) or Code #5 (PP) recycling symbol and be designated as widely recyclable."
    },
    {
      q: "What is the limit for non-recyclable components in packaging?",
      a: "Most global recycling systems, including How2Recycle and Cyclos-HTP, require that at least 95% of the package weight consist of the main recyclable material. All inks, barriers (like EVOH), adhesives, and foil decorations combined must not exceed 5% of the total weight."
    },
    {
      q: "Are there biodegradable foil options?",
      a: "Yes! For compostable pouches, we offer certified compostable hot stamping foils that degrade alongside our PLA and cellulose structures. These are fully certified under EN13432 and ASTM D6400."
    },
    {
      q: "Can I print a purple metallic foil logo on my recyclable skincare pouch?",
      a: "Absolutely. By using MDO-PE and LLDPE as the base layers (>95% weight), we can apply a purple hot-stamp logo. For the absolute safest route, we can use our advanced metallic inks to mimic the purple foil effect."
    },
    {
      q: "What is the MOQ for hot-stamped custom pouches?",
      a: "Our low MOQ program on pouch.eco allows hot-stamped foil accents on stand-up pouches starting at 500 units per design. For high-volume wholesale orders requiring custom shapes, please contact our enterprise line on achievepack.com."
    },
    {
      q: "How much does hot stamping add to the manufacturing lead time?",
      a: "Since hot foil stamping requires an offline heat-press die cylinder step after lamination, it adds 2 to 3 business days to our standard digital turnaround, resulting in an overall lead time of 14 to 17 business days."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Does Foil Stamping Affect Packaging Recyclability? | Pouch.eco</title>
        <meta name="description" content="Learn how metallic foil stamping affects the recyclability of flexible mono-PE packaging. Discover the 95% weight threshold rule for single-stream circular packaging." />
        <link rel="canonical" href={`${baseUrl}/blog/stamp-foil-recyclability`} />
        <meta name="keywords" content="does foil stamping affect recyclability, metallic foil recyclable packaging, mono PE foil stamp, recyclable packaging weight rule, 95 percent recyclable mono material" />
        
        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Does Foil Stamping Affect Packaging Recyclability? | Pouch.eco",
            "description": "Learn how metallic foil stamping affects the recyclability of flexible mono-PE packaging. Discover the 95% weight threshold rule for single-stream circular packaging.",
            "url": `${baseUrl}/blog/stamp-foil-recyclability`,
            "datePublished": "2026-01-30T10:00:00Z",
            "dateModified": "2026-05-28T10:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "url": "https://www.linkedin.com/in/ryanwwc/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "image": `${baseUrl}/imgs/4-infograhic/recyclable.webp`
          })}
        </script>

        {/* Schema.org FAQ Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">RECYCLABILITY_GUIDE_v1.0</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase">Foil.<br/>Stamping.<br/><span className="text-[#3b82f6] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Recycled?</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Does foil stamping compromise circular packaging? Learn the international 95% weight threshold rule for certified Mono-PE and Mono-PP recyclability.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">Get Recyclable Quote</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Overview & Infographic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#3b82f6] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable Mono-PE Infographic - Complete guide to recyclable packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="green">95%_THRESHOLD_RULE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">The 95% Mono-PE Standard.</h2>
              <p className="mt-8 text-lg text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                According to global sorting and recycling standards (such as APR in North America and RecyClass in Europe), flexible pouches must contain <strong>at least 95% mono-polymer by weight</strong> to carry a certified "widely recyclable" label. Minor additives like inks, barriers, and hot-stamped foils are accepted under 5%.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-4 border-black p-4 bg-blue-50">
                  <div className="text-3xl font-black">&gt;95%</div>
                  <div className="text-xs font-bold uppercase">Mono-PE Core polymer</div>
                </div>
                <div className="border-4 border-black p-4 bg-green-50">
                  <div className="text-3xl font-black">&lt;5%</div>
                  <div className="text-xs font-bold uppercase">Foil & Ink Weight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-24 bg-[#fbfbfb] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">DESIGN_GUIDELINES</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Foil Guidelines.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-blue-50">
              <div className="flex items-center gap-4 mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
                <h3 className="font-black text-2xl uppercase">Targeted Size</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">Keep the foil logo or accent area to under 5% of the total pouch surface area to ensure NIR sensor recognition.</p>
            </NeoCard>
            <NeoCard color="bg-emerald-50">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h3 className="font-black text-2xl uppercase">Density Check</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">We engineer oriented PE films to verify correct sink/float performance during standard post-consumer processing.</p>
            </NeoCard>
            <NeoCard color="bg-purple-50">
              <div className="flex items-center gap-4 mb-4">
                <Recycle className="w-8 h-8 text-purple-600" />
                <h3 className="font-black text-2xl uppercase">Metal-Free Inks</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">Alternatively, choose our specialized metallic ink printing to achieve gold/purple/silver shine with 100% polymer purity.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Safe Foil Options */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">Foil Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-4 border-black">
              <thead className="bg-[#f0f0f0] border-b-4 border-black">
                <tr>
                  <th className="px-4 py-3 text-left font-black uppercase border-r-4 border-black">Option</th>
                  <th className="px-4 py-3 text-center font-black uppercase border-r-4 border-black">Recyclability Status</th>
                  <th className="px-4 py-3 text-left font-black uppercase">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y-4 divide-black font-['JetBrains_Mono']">
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">Hot Stamped Foil (&lt;5% area)</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600 border-r-4 border-black">✅ Approved (Recyclable)</td>
                  <td className="px-4 py-3">Luxury skincare, specialty coffee logos, organic brands</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">Metallic Ink Printing</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600 border-r-4 border-black">✅ 100% Recyclable</td>
                  <td className="px-4 py-3">Custom multi-color metallics without any non-polymer film</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">Heavy Full-Bleed Hot Foil</td>
                  <td className="px-4 py-3 text-center font-bold text-red-600 border-r-4 border-black">❌ Compromised (Landfill)</td>
                  <td className="px-4 py-3">Avoid full-surface stamping as it blinds NIR sorting sensors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B2B Wholesale Callout Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex flex-col md:flex-row items-center gap-6">
               <div className="bg-[#00FFFF] border-2 border-black p-4 shrink-0">
                 <Factory className="w-10 h-10 text-black" />
               </div>
               <div className="space-y-2 flex-1">
                 <h4 className="font-black text-2xl uppercase">Looking for Volume B2B Wholesale?</h4>
                 <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                   If your brand requires custom printed or hot-stamped recyclable pouches at wholesale scale (5,000+ units) with deep bulk volume discounts and custom dimensions, view our specialized B2B catalog on AchievePack.com.
                 </p>
                 <div className="pt-2">
                   <a 
                     href="https://achievepack.com/topics/stamp-foil-recyclability"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-black text-[#D4FF00] border-2 border-black px-4 py-2 font-['JetBrains_Mono'] font-bold text-xs uppercase hover:bg-white hover:text-black transition"
                   >
                     Request Custom MOQ & Wholesale Pricing →
                   </a>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contextual B2B Store Products */}
      <section className="py-6 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-4 border-black p-8 bg-neutral-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
              <span>🛒</span> Contextual B2B Store Products
            </h4>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-800 leading-relaxed">
              For packaging buyers planning their next production run, we recommend starting with our <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">B2B Biodegradable Sample Kit</a> to evaluate material thickness and barrier performance. For high-speed form-fill-seal automated packaging lines, check out our <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Custom Eco Rollstock Film</a>. If you are packaging confectionery or small items, our premium <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Cellophane Candy Wrapper</a> offers excellent clarity and compostability.
            </p>
          </div>

          <EcoMaterialSourcingGuide />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">FAQ_HUB</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Questions?</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h4 className="font-black text-xl uppercase font-['JetBrains_Mono'] flex items-center gap-2 text-black">
                    <span>{faq.q}</span>
                  </h4>
                  <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200 text-black">+</span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-neutral-800 font-['JetBrains_Mono']">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#3b82f6] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="dark">ACTION_REQUIRED</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-white">Go Circular.<br/>Design Smart.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-90 max-w-2xl mx-auto">
            Design beautiful premium B2B packaging with 100% confidence. Get custom recyclable quotes and mockups today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/quote">Get Custom Quote</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" to="/sample">
              Request Samples
            </NeoButton>
          </div>
        </div>
      </section>

      {/* E-E-A-T Authorship Section */}
      <section className="py-16 bg-[#F0F0F0] border-b-4 border-black px-6">
        <div className="max-w-4xl mx-auto">
          <NeoCard className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-lime-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                  alt="Ryan Wong - Sustainable Packaging Supply Chain Expert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/bottts/svg?seed=ryan"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-black">
                  <span className="font-black text-2xl uppercase">Ryan Wong</span>
                  <span className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-0.5 border border-black">
                    Supply Chain Director
                  </span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  Ryan Wong holds an Honours Degree in Global Supply Chain Management from Hong Kong Polytechnic University (PolyU). With 14+ years of industrial flexible packaging R&D, Ryan has engineered sustainable supply loops and certified packaging solutions for BCorp coffee brands, startups, and bulk manufacturers globally.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-['JetBrains_Mono'] font-bold text-neutral-500">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> PolyU Honours Degree</span>
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-[#10b981]" /> BPI & DIN CERTCO Auditor</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> GRS Certified PCR Expert</span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* AIEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PouchLayout>
  )
}
