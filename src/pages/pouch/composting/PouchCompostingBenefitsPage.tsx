import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Leaf, Droplets, Shield, Recycle, HelpCircle, ChevronDown, CheckCircle, Award, Target, Zap, Clock } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchCompostingBenefitsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "The Environmental Benefits of Composting: Circular Packaging | Pouch.eco"
  const description = "Discover how composting diverts waste, cuts carbon emissions, enriches soils, and how certified compostable packaging fits into the circular economy."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the MOQ for certified compostable stand-up pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity is just 500 units for custom digitally printed runs, perfect for emerging startup brands. Large-volume rotogravure printing starts at 5,000 units."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free physical sample packs to brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ship physical eco-sample packs containing different compostable films, bio-PE, and closure types worldwide via express carrier."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support fully custom pouch dimensions and shaped seals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create custom CAD dielines tailored to your filling operations and support customized dimensions and shaped seal options."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard manufacturing lead time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digitally printed orders are completed in 7-10 business days. Cylinder plate runs take 12-14 business days. Express shipping takes an additional 3-5 days."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications do your compostable bags carry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our compostable materials carry verified BPI (ASTM D6400) and TUV OK Compost HOME certifications, produced in Grade A BRCGS food safety compliant facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What is required to get a formal quotation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply let us know your required dimensions, estimated run size per design, material selection (e.g. kraft or clear compostable), and zip/valve features. We respond in under 24 hours."
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: "Disintegration Cycle",
      val: "90-180 Day Biodegradation",
      desc: "Designed to fully disintegrate inside industrial composting windrows, turning entirely into organic soil amendment without leaving trace polymers."
    },
    {
      label: "Lamination Quality",
      val: "Solvent-Free Adhesive",
      desc: "Processed using advanced solvent-free adhesive layers that meet stringent EN 13432 guidelines for chemical purity and compost safety."
    },
    {
      label: "Material Origin",
      val: "Non-GMO Plant Biomass",
      desc: "Derived from renewable agricultural feedstocks such as corn-starch and sugarcane, reducing reliance on conventional fossil fuels."
    },
    {
      label: "Environmental Yield",
      val: "Circular Carbon Pathway",
      desc: "Diverts soiled packaging from landfills where anaerobic decomposition would otherwise release high-impact methane emissions."
    }
  ]

  const faqs = [
    {
      q: "What is the MOQ for certified compostable stand-up pouches?",
      a: "For custom digitally printed orders, our MOQ starts at just 500 units per SKU with zero setup cylinder fees. For high-volume production, rotogravure plate runs start at 5,000 units."
    },
    {
      q: "Do you supply free physical samples of compostable materials?",
      a: "Yes. We offer free tactile eco-sample kits containing our compostable kraft structures, bio-PE, and closures so you can run test sealing runs on your own machinery. We ship globally via express."
    },
    {
      q: "Do you support custom sizing and OEM blueprints?",
      a: "Yes, we support bespoke dimensions, shaped seal profiles, and supply custom CAD dieline drawings based on your roasted beans, snack, or retail volume blueprints."
    },
    {
      q: "What is the production and shipping lead time?",
      a: "Custom digital orders require 7-10 business days. Traditional cylinder runs take 12-14 business days. Standard international air express takes 3-5 business days."
    },
    {
      q: "What food-safe and eco certifications do you have?",
      a: "Our materials are manufactured in BRCGS Grade A certified food-contact facilities and hold verified TUV OK Compost HOME, BPI (ASTM D6400), GRS recycled, and FSC paper compliance certificates."
    },
    {
      q: "What info is required to receive an accurate pricing quote?",
      a: "Simply specify your desired pouch dimensions, estimated volume, material stacking preference (e.g. kraft or clear PLA), and additions like degassing valves. We return price sheets in 24 hours."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="composting benefits, environmental composting, compostable packaging, reduce emissions, soil health, commercial composting, EN 13432, ASTM D6400, sustainable packaging, organic waste" />
        <link rel="canonical" href="https://pouch.eco/composting/composting-benefits" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
            <span>/</span>
            <Link to="/learn" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Academy</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Composting Benefits</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  CIRCULARITY_01
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  BRCGS COMPLIANT
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Emissions Cut.<br/>
                Soil Enriched.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Composted.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Diverting FOGO waste streams.<br/>
                &gt; Methane emission mitigation.<br/>
                &gt; 20%+ soil moisture retention.<br/>
                &gt; Certified organic soil feed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Free Consultation
                </NeoButton>
                <NeoButton variant="secondary" href="#benefits">
                  Explore Benefits
                </NeoButton>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/benefits/hero.webp" 
                alt="Enriched composting soil for packaging applications" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section id="benefits" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">THE_IMPACT</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Key Environmental Benefits</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Recycle className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Zero Landfill Waste</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Organic waste is diverted from active landfills, reducing municipal load and avoiding anaerobic pockets that lock away carbon resources.
            </p>
            <NeoBadge color="bg-[#10b981] text-white">WASTE_DIVERSION</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Zap className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">Methane Mitigation</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              Aerobic composting avoids landfill methane emissions (which are 28x more greenhouse potent than standard CO2 over a 100-year cycle).
            </p>
            <NeoBadge color="bg-[#D4FF00]">CLIMATE_POSITIVE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Droplets className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Soil Moisture Yield</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Adding organic compost enriches topsoils and increases water retention by approximately 20%, heavily reducing irrigation needs.
            </p>
            <NeoBadge color="bg-white">REGENERATIVE</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Industrial vs Backyard Composting */}
      <section className="py-24 bg-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <NeoBadge color="cyan">INFRASTRUCTURE_METRICS</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase">Backyard vs. Industrial Facility Composting</h2>
              <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                Knowing the operational scale defines the success of your brand's end-of-life packaging story:
              </p>

              <div className="space-y-4">
                <div className="border-4 border-black p-4 bg-neutral-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    Backyard Composting (Home)
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    Ambient temperature bins. Processes standard kitchen scraps, leaves, and TUV OK Compost HOME certified packaging over 6-12 months.
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-[#D4FF00]/10">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    Industrial Facilities (Commercial)
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    Controlled windrows exceeding 140°F (60°C). Safely decomposes tough certified bioplastics (PLA/PBAT), starches, and FSC papers in 90-180 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/benefits/a_achievepack_composting_locator_hero_9733153.webp" 
                alt="Global composting facility map and locator screenshot mockup" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Spec Value Translation */}
      <section className="py-24 bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <NeoBadge color="magenta">VALUE_TRANSLATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                Circularity Specs Matrix
              </h2>
            </div>
            <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              STANDARDS_COMPLIANCE_2026
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specTranslations.map((s, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
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
        </div>
      </section>

      {/* Deep-Dive Rich Content */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            How Compostable Packaging Enriches Our <span className="text-[#FF00FF]">Eco-Systems</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Composting organic material is a natural, elegant solution to massive landfill accumulation. When food residues are left inside standard multi-layer PE packaging, those materials cannot be recycled and must be sent to landfill or incinerated.
            </p>
            <p>
              By utilizing certified compostable stand-up bags, roasters, snack brands, and retailers enable their consumers to compost both the residual food waste and the bag together. In commercial windrows, these organic polymers break down alongside yard waste, developing highly fertile organic compost that is returned to enrich agricultural fields.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <ClickableImage
                src="/imgs/composting/benefits/Educational cross-section.webp"
                alt="Educational cross-section explaining landfill anaerobic vs compost aerobic cycles"
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <ClickableImage
                src="/imgs/composting/benefits/Commercial composting facility illustration.webp"
                alt="Detailed schematic of a commercial composting windrow operation"
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">Supporting Regional Infrastructure</h3>
            <p>
              As cities worldwide deploy organic waste collection (FOGO - Food Organics and Garden Organics) programs, compostable packaging is gaining active support. Direct collaborations between sustainable manufacturers, local composting facilities, and brand managers ensure maximum waste diversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">EXPERT_FAQ</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6 text-center">
              Procurement & Circularity FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              Clear, honest answers to help your procurement managers make informed decisions.
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
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <NeoBadge color="bg-black text-white">REGENERATIVE_FUTURE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Start Your Custom Run
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Certified compostable packaging with startup-friendly MOQ starting from 500 units.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              Request Free Eco Sample Kit
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consult Packaging Engineer
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>Seeking high-volume commercial wholesale runs?</strong><br/>
            For high-volume retail supply contracts (10,000+ units), custom rotogravure cylinder sets, or enterprise corporate quotes, please visit our enterprise portal:{" "}
            <a 
              href="https://achievepack.com/composting/composting-benefits" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/composting/composting-benefits →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
