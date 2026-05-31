import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Package, Award, Sparkles, CheckCircle, HelpCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchCustomBoxesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "Custom Printed Boxes - Premium Retail & E-commerce Gift Packaging | Pouch.eco"
  const description = "Factory-direct custom printed boxes with low 200-piece startup MOQ. Rigid boxes, corrugated mailers, and folding cartons with gold foil stamping and embossing."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the MOQ for custom printed boxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity (MOQ) for custom printed mailer and tuck boxes is just 200 units, making premium custom branding accessible to startup artisan brands."
        }
      },
      {
        "@type": "Question",
        "name": "Are your custom boxes eco-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our boxes are manufactured from FSC-certified recycled paper and corrugated cardboard. They are 100% recyclable in standard curbside municipal recycling streams."
        }
      },
      {
        "@type": "Question",
        "name": "What custom finishes and additions do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support hot foil gold/silver stamping, embossed logo structures, spot UV coatings, customized internal product inserts, and premium smooth matte lamination."
        }
      },
      {
        "@type": "Question",
        "name": "What are the standard lead times for custom box production?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Production takes approximately 30 days from artwork confirmation. Standard sea shipping takes 40-60 days (included in pricing). Air shipping is available for urgent orders."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free structural physical samples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can provide physical sample kits to verify paperboard thickness and lock structures before committing to your custom production."
        }
      },
      {
        "@type": "Question",
        "name": "What details do you need for a bespoke size quotation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please provide your required internal box dimensions (Length x Width x Height in millimeters), quantity (MOQ starts at 200), and custom print requirements."
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: "Material Grade",
      val: "FSC Kraft Cardboard",
      desc: "Sustainably-sourced, heavy-weight kraft paperboard providing rigid structure while supporting global circular economy compliance."
    },
    {
      label: "Dieline Geometry",
      val: "Custom CAD Blueprints",
      desc: "Millimeter-exact CAD blueprints designed to match your specific product shapes (chocolates, tea bags, jars) for perfect internal fit."
    },
    {
      label: "Finish Quality",
      val: "Matte Anti-Scratch Lamination",
      desc: "Ultra-premium matte lamination protecting your box surfaces from shipping wear, scuffs, and fingerprints."
    },
    {
      label: "Logistics Shield",
      val: "Heavy-Duty Master Cartons",
      desc: "Shipped in double-wall master export boxes with moisture-proof wrapping to protect paper layers during sea freight transport."
    }
  ]

  const faqs = [
    {
      q: 'What is the MOQ for custom printed boxes?',
      a: 'We offer an ultra-low MOQ of just 200 units for custom printed mailer and tuck boxes. This startup-friendly threshold lets you test product launches and holiday editions without large upfront cash outlays.'
    },
    {
      q: 'Are your box materials eco-friendly?',
      a: 'Absolutely. We use FSC (Forest Stewardship Council) certified recycled cardboard and paperboards. Our boxes contain zero forever-plastics and are 100% curbside recyclable by consumers.'
    },
    {
      q: 'What premium finishes can I add?',
      a: 'You can elevate your brand with hot metallic gold or silver foil stamping, raised logo embossing for textured depth, spot UV accents, and custom cut inserts to secure your items.'
    },
    {
      q: 'How long does production and shipping take?',
      a: 'Production takes 30 days from artwork approval. Sea freight (which is included in our transparent pricing sheets) takes 40-60 days. Total turnaround is 70-90 days, though express air freight can be arranged.'
    },
    {
      q: 'Do you offer physical samples to test?',
      a: 'Yes, we provide blank structural samples to test fit and thickness, as well as premium custom printed samples to verify color precision before starting a production run.'
    },
    {
      q: 'What specifications are required for a quote?',
      a: 'Please send us your required Length × Width × Height (internal dimensions) in millimeters, choice of tuck carton or corrugated mailer, and artwork files. We supply quotes within 24 hours.'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="custom boxes, rigid boxes, mailer boxes, tuck boxes, gift boxes, chocolate packaging, tea box packaging, coffee box packaging, gold foil boxes, FSC certified boxes, embossed packaging" />
        <link rel="canonical" href="https://pouch.eco/packaging/custom-boxes" />
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
            <Link to="/products" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Products</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Custom Printed Boxes</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  BOX_TYPE: CPB_04
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  FSC RECYCLED
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Premium.<br/>
                Rigid.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Bespoke.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Rigid tuck & mailers.<br/>
                &gt; Gold foil & embossed details.<br/>
                &gt; Startup MOQ of 200 units.<br/>
                &gt; FSC sustainable cardboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Box Design Call
                </NeoButton>
                <NeoButton variant="secondary" href="#details">
                  View Finishes
                </NeoButton>
              </div>
            </div>

            {/* Premium Mailer Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp" 
                alt="Premium Custom Printed Corrugated Mailer Box" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Box Styles Section */}
      <section id="details" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">BOX_STYLES_CATALOG</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Mailer & Tuck Formats</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Box Type 1: Corrugated Mailer */}
          <NeoCard color="bg-white" className="space-y-6">
            <ClickableImage 
              src="/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp" 
              alt="Custom Printed Corrugated Mailer Box" 
              className="w-full rounded-lg shadow-md border-2 border-black"
            />
            <h3 className="font-black text-3xl uppercase">Corrugated Mailer Boxes</h3>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">
              Heavy-duty mailer boards designed to protect premium coffee pouches, tea subscription boxes, and e-commerce goods during long-haul shipping.
            </p>
            <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-xs font-bold text-neutral-700 bg-neutral-100 p-4 border-2 border-black">
              <div>✓ 500g: 130 × 85 × 35mm</div>
              <div>✓ 1kg: 270 × 85 × 35mm</div>
              <div>✓ 100% Curbside Recyclable</div>
              <div>✓ Sturdy Double-Wall Fit</div>
            </div>
          </NeoCard>
          
          {/* Box Type 2: Tuck Box */}
          <NeoCard color="bg-[#FF00FF]" className="text-white space-y-6">
            <ClickableImage 
              src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
              alt="Custom Printed Tuck Box with Gold Foil" 
              className="w-full rounded-lg shadow-md border-2 border-black"
            />
            <h3 className="font-black text-3xl uppercase text-white">Tuck Boxes (Cartons)</h3>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-200">
              Elegant folding paperboard cartons customized with luxurious hot stamp foil and raised embossing. The perfect visual shell for premium chocolate bars, tea sachets, and macarons.
            </p>
            <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-xs font-bold text-white bg-black/20 p-4 border-2 border-white">
              <div>✓ 100g: 81 × 162 × 15mm</div>
              <div>✓ 250g Art Cardboard</div>
              <div>✓ Gold Hot Foil Stamping</div>
              <div>✓ Raised Textured Detail</div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Premium Finishes Spotlights */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <NeoBadge color="lime">LUXURY_FINISHES</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase leading-tight italic">Tactile Excellence.</h2>
              <p className="font-['JetBrains_Mono'] text-lg text-neutral-300 leading-relaxed">
                Artisan products demand an exceptional unboxing experience. We integrate premium finishing techniques directly into our production lines:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#D4FF00] pl-6 py-2">
                  <h4 className="font-black text-xl uppercase">✨ Hot Gold Foil Stamping</h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 mt-1">Hot-stamped metallic foil coordinates for shimmering branding details that attract eyes instantly.</p>
                </div>
                <div className="border-l-4 border-[#FF00FF] pl-6 py-2">
                  <h4 className="font-black text-xl uppercase">🎨 Raised Embossing</h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 mt-1">Structural pressing creates distinct tactile patterns and lettering, giving packaging dynamic texture.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Gold foil stamping on premium rigid box" 
                className="border-4 border-white w-full shadow-lg"
              />
              <ClickableImage 
                src="/imgs/store/surface/emboss.webp" 
                alt="Logo embossing detail on card package" 
                className="border-4 border-white w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Translation Table */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <NeoBadge color="magenta">SPECS_TRANSLATION_MATRIX</NeoBadge>
            <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Procurement Guide</h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            PAPER_INTEGRITY_V26
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
            <NeoBadge color="magenta">BOX_INTELLIGENCE_FAQ</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              Expert Procurement FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              Bespoke box packaging guidance for professional startup buyers.
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
          <NeoBadge color="bg-black text-white">BOX_MANDATE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Design Your Box Line
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Luxurious retail box presentation starting from just 200 units.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              Request Structural Samples
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consult Packaging Engineer
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>Seeking high-volume B2B wholesale carton manufacturing?</strong><br/>
            For industrial packaging lines, automatic folding cartoning setup compatibility, and volume contract quotes, see our wholesale portal:{" "}
            <a 
              href="https://achievepack.com/packaging/custom-boxes" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/packaging/custom-boxes →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
