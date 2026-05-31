import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Recycle, Shield, CheckCircle, HelpCircle, Award, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchRecyclableMonoPEPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "Recyclable Stand Up Pouches - Certified Mono-PE Single-Material Packaging | Pouch.eco"
  const description = "Technical guide to factory-direct recyclable mono-PE flexible pouches. FDA-compliant, curbside LDPE #4 recyclability, and EVOH gas barrier layers with startup MOQ 500."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a mono-PE recyclable pouch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mono-PE pouch is constructed entirely from a single polymer category (Polyethylene), making it 100% recyclable in curbside and retail drop-off streams, unlike conventional multi-layer laminates which go straight to landfill."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity (MOQ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a low MOQ of just 500 units for custom printed recyclable mono-PE stand-up pouches using digital printing, with zero plate setup costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can mono-PE achieve a high barrier for coffee and snacks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! By co-extruding a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) gas barrier, we achieve superior oxygen and moisture barrier performance, extending shelf life up to 12 months while keeping the pouch fully recyclable."
        }
      },
      {
        "@type": "Question",
        "name": "What are the standard manufacturing lead times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital printed orders require 7-10 business days. Large rotogravure orders require 12-14 business days. Worldwide express air delivery takes 3-5 days."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications do your recyclable pouches have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our recyclable mono-PE films are manufactured in Grade A BRCGS food safety compliant facilities. We provide certification reports matching US FDA and European food contact safety criteria."
        }
      },
      {
        "@type": "Question",
        "name": "What specifications are required for a quotation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To provide an accurate pricing sheet, please provide your required bag style (stand-up, flat bottom), exact dimensions in millimeters, closure types (degassing valve, zipper), and quantities."
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: "Polymer Matrix",
      val: "Single-Material Mono-PE",
      desc: "Constructed solely from Polyethylene resins (LDPE/LLDPE), ensuring complete compatibility with curbside and drop-off #4 recycling streams."
    },
    {
      label: "Active Barrier",
      val: "EVOH Gas Co-Extrusion (<1.5 cc)",
      desc: "Micro-thin co-extruded EVOH core layer provides gas barrier protection, keeping snacks and coffee perfectly fresh with no aluminum needed."
    },
    {
      label: "Seal Integrity",
      val: "Low-Temp Peeling Seal (110°C)",
      desc: "Specialized heat-seal layer seals quickly at lower temperatures, saving energy on automatic packaging lines and preventing zipper shrinkage."
    },
    {
      label: "Structural Fit",
      val: "Double-Wall Export Logistics",
      desc: "Packed inside robust double-wall cartons with an internal moisture barrier bag to block ambient humidity during sea shipping routes."
    }
  ]

  const faqs = [
    {
      q: 'What is a mono-PE recyclable pouch?',
      a: 'Traditional flexible pouches laminate multiple incompatible plastics (like PET, Nylon, and Aluminum) together, making recycling impossible. Mono-PE pouches use single-material Polyethylene throughout all laminated layers, allowing them to be fully melted down and recycled into new PE products.'
    },
    {
      q: 'What is the MOQ for custom printed mono-PE pouches?',
      a: 'We offer an ultra-low startup MOQ of just 500 units for digitally printed recyclable stand-up pouches. This is perfect for small businesses testing flavor SKUs without plate setup fees.'
    },
    {
      q: 'How do you maintain product freshness without aluminum?',
      a: 'We co-extrude a micro-thin layer of EVOH (Ethylene Vinyl Alcohol) between our PE film layers. This delivers outstanding oxygen and moisture protection (WVTR & OTR < 1.5), preserving coffee, pet treats, and food freshness for 9-12 months while keeping the film 100% recyclable.'
    },
    {
      q: 'What are the production and delivery lead times?',
      a: 'Our typical digital print production time is 7-10 business days from blueprint sign-off. Plate production takes 12-14 days. We ship worldwide via express courier (3-5 days) or sea freight (40-60 days).'
    },
    {
      q: 'Are these pouches food-grade certified?',
      a: 'Yes, all our recyclable mono-PE materials are manufactured in BRCGS Grade A certified facilities. They are 100% food-grade compliant with FDA and EU food contact safety regulations, featuring solvent-free lamination.'
    },
    {
      q: 'What details are needed for a precise quotation?',
      a: 'Simply tell us your pouch style (e.g., Stand-Up, Flat Pouch), external dimensions in millimeters, whether you require standard zippers or degassing valves, and your quantities. We provide pricing sheets in under 24 hours.'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="mono-PE pouch, recyclable pouch, single material packaging, PE recyclable, sustainable flexible packaging, mono material pouch, recyclable stand up pouch, polyethylene pouch" />
        <link rel="canonical" href="https://pouch.eco/materials/recyclable-mono-pe" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
            <span>/</span>
            <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Materials</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Recyclable Mono-PE</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  MATERIAL: MONO_PE_04
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  CURBSIDE #4 LDPE
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                100% Recyclable.<br/>
                Single Polymer.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Circular.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Curbside recycling ready.<br/>
                &gt; EVOH high gas barrier core.<br/>
                &gt; Startup MOQ of 500 units.<br/>
                &gt; FDA food-grade compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Material Consult
                </NeoButton>
                <NeoButton variant="secondary" href="#science">
                  View Barrier Science
                </NeoButton>
              </div>
            </div>

            {/* Premium Material Infographic Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable Mono-PE Material Infographic Structure" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Symbols Spotlight */}
      <section id="science" className="py-24 bg-white border-b-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/cert/logo-recycle-number-4-and-5.png" 
                alt="Recycling Code #4 LDPE and #5 PP Stamps" 
                className="relative z-10 border-4 border-black w-full shadow-2xl bg-neutral-100 p-8"
              />
            </div>
            
            <div className="space-y-8">
              <NeoBadge color="magenta">RECYCLABILITY_VERIFIED</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase leading-tight italic">Store Drop-off & Curbside Ready</h2>
              
              <div className="prose prose-lg font-['JetBrains_Mono'] text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Our mono-PE structures use single-material polyethylene resins, fully certified under standard recycling code **#4 LDPE**. This allows your packaging to be integrated into curbside collection programs and store drop-off bins worldwide.
                </p>
                <p>
                  By stamping our verified recycling logos on your custom pouch artwork, you clearly convey circular environmental actions directly to your consumer, boosting brand trust and retail placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Translations */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <NeoBadge color="lime">BARRIER_PERFORMANCE_SPECS</NeoBadge>
            <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Technical Specs</h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            MONO_PE_INTEGRITY
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specTranslations.map((s, idx) => (
            <div key={idx} className="bg-neutral-50 border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black font-['JetBrains_Mono']">
                {s.label}
              </span>
              <h4 className="font-black text-xl uppercase mt-4 mb-2">{s.val}</h4>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">MONO_PE_FAQ</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              Expert Procurement FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              Bespoke recyclable pouch guidance for professional startup buyers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="bg-black text-white">RECYCLE_MANDATE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Go Fully Recyclable
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Switch from complex non-recyclable laminates starting from 500 units.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              Request Free Recyclable Samples
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consult Packaging Engineer
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>Seeking high-volume B2B wholesale mono-PE laminated rollstocks?</strong><br/>
            For high-speed form-fill-seal (VFFS/HFFS) lines, structural co-extrusions, and bulk volume quotes, check our wholesale portal:{" "}
            <a 
              href="https://achievepack.com/materials/recyclable-mono-pe" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/materials/recyclable-mono-pe →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
