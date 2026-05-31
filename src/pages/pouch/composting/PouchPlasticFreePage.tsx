import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Leaf, AlertTriangle, CheckCircle, Award, Shield, Recycle, HelpCircle, ChevronDown, Layers, Zap, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchPlasticFreePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "Plastic-Free vs. Compostable Packaging: The Definitive Guide | Pouch.eco"
  const description = "Understand the critical differences between strictly plastic-free paper and certified compostable bioplastics. Make clean, compliant, and transparent brand claims."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the MOQ for custom plastic-free compostable pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity for custom-printed compostable pouches is just 500 units for digital printing, perfect for emerging startup brands. High-volume rotogravure printing starts at 5,000 units."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide free physical samples of compostable materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ship free physical sample kits worldwide. You can test our compostable kraft and clear films on your own packaging and heat-sealing lines before ordering."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support custom shaped seals and OEM blueprints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We supply custom CAD dieline templates tailored to your filling machinery and support fully custom dimensions and shaped seals for unique packaging aesthetics."
        }
      },
      {
        "@type": "Question",
        "name": "What is the production and delivery lead time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digitally printed orders are manufactured in 7-10 business days. High-volume rotogravure runs require 12-14 business days. Air express delivery takes an additional 3-5 days globally."
        }
      },
      {
        "@type": "Question",
        "name": "Are your compostable materials certified food-safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our pouches are manufactured in Grade A BRCGS food-contact facilities. The materials carry verified BPI (ASTM D6400) and TUV OK Compost HOME certifications."
        }
      },
      {
        "@type": "Question",
        "name": "What details do you need for a formal quotation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate pricing, please specify your desired pouch dimensions, estimated volume per SKU, closure selections (e.g., zipper, degassing valve), and preferred barrier level."
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: "Barrier Coating",
      val: "Aluminum-Free Metallization",
      desc: "An ultra-thin vapor-deposited mineral layer that preserves freshness (<1.5 cc/m²/24hr OTR) without leaving microplastics or toxic residues in municipal compost."
    },
    {
      label: "Material Stack",
      val: "Kraft Paper + NKME + PLA/PBAT",
      desc: "A fully certified three-layer plant-based structure designed to biodegrade entirely in 90-180 days in an industrial composting facility."
    },
    {
      label: "Seal Chemistry",
      val: "Starch-Based Heat Seal Resin",
      desc: "Low-temperature activation layer ensures airtight food-grade hermetic seals on standard automatic packaging lines, preventing air leaks."
    },
    {
      label: "Print Compliance",
      val: "Water-Based Eco Inks",
      desc: "Premium high-resolution printing using non-toxic water-based inks that disintegrate safely without chemical contamination of finished organic compost."
    }
  ]

  const faqs = [
    {
      q: "What is the MOQ for custom plastic-free compostable pouches?",
      a: "Our digital printing technology allows an industry-leading MOQ of just 500 units per custom design, meaning zero plate setup cylinders or expensive starting costs. For bulk supply runs, our high-speed rotogravure presses start at 5,000 units."
    },
    {
      q: "Are free physical samples available for testing?",
      a: "Yes. We offer free tactile sample kits containing our different compostable structures, bio-PE laminates, and closures so you can verify heat sealing strength and physical barrier properties on your own lines. We ship globally via express."
    },
    {
      q: "Do you support custom sizes and OEM drawings?",
      a: "Yes, we do not restrict you to generic sizes. We provide custom CAD dielines designed to fit your exact filling volume requirements and vertial form-fill-seal (VFFS) machinery blueprints perfectly."
    },
    {
      q: "What is the standard lead time for custom runs?",
      a: "Digital print runs are processed in 7-10 business days from graphic sign-off. Plate-based rotogravure orders require 12-14 business days. Standard air express delivers anywhere in the world within 3-5 days."
    },
    {
      q: "What composting and food safety certifications do you hold?",
      a: "All our packaging is produced in certified BRCGS Grade A facilities for clean food-safe contact. The materials hold fully verified certifications including BPI (ASTM D6400), TUV OK Compost HOME, GRS recycled content, and FSC-certified kraft paper."
    },
    {
      q: "What information is needed to request a formal quotation?",
      a: "Simply specify your bag dimensions, desired quantity per design, preferred material layer (e.g. kraft compostable or bio-recyclable PE), and custom additions like zippers or degassing valves. We return price sheets in under 24 hours."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="plastic free packaging, compostable vs plastic free, PLA packaging, PBAT bioplastic, conventional plastic free, biobased packaging, EN 13432, sustainable packaging claims" />
        <link rel="canonical" href="https://pouch.eco/composting/plastic-free" />
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
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Plastic Free vs Compostable</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  ACADEMY_DEBUNK_01
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  100% TRANSPARENT
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Plastic Free.<br/>
                Compostable.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Demystified.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Bioplastics vs. Fossil Polymers.<br/>
                &gt; Plant-based barrier mechanics.<br/>
                &gt; Curbside composting compliance.<br/>
                &gt; Verified BPI & TUV certifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Free Consultation
                </NeoButton>
                <NeoButton variant="secondary" href="#definitions">
                  Explore Definitions
                </NeoButton>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/plastic-free/hero.webp" 
                alt="Plastic-free vs compostable stand-up packaging comparison" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Definitions Cards */}
      <section id="definitions" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">THE_DIFFERENCE</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Understanding the Terms</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NeoCard color="bg-white">
            <Leaf className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">What is Compostable?</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              A material is certified compostable if it breaks down entirely into water, CO2, and nutrient-rich biomass under specified composting conditions, leaving zero toxic chemical residues or microplastics behind.
            </p>
            <div className="bg-neutral-50 border-2 border-black p-4 font-['JetBrains_Mono'] text-xs text-neutral-600">
              <strong>Note:</strong> Many certified compostable structures (like PLA or PBAT) are technically bioplastics (polymers). Thus, "compostable" does not automatically mean "zero polymers."
            </div>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Recycle className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">What is Plastic-Free?</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              In the strictest legislative sense, "plastic-free" refers to materials containing absolutely zero synthetic or bio-derived polymers. This restricts choices strictly to raw papers, cardboards, and natural bamboo fibers.
            </p>
            <div className="bg-black/20 border-2 border-white/20 p-4 font-['JetBrains_Mono'] text-xs text-white/90">
              <strong>Definition Check:</strong> Conventional-plastic-free allows compostable bioplastics (like corn-derived PLA) that act as replacements for traditional petroleum-based plastics (PE/PP).
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Three Layer Bag Cutaway Section */}
      <section className="py-24 bg-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <NeoBadge color="cyan">MATERIAL_ANATOMY</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase">Our Certified Multi-Layer Structure</h2>
              <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                Rather than using deceptive greenwashing slogans, we lay out exactly what goes into our high-performance sustainable barriers:
              </p>

              <div className="space-y-4">
                <div className="border-4 border-black p-4 bg-amber-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">01</span>
                    Outer Layer: FSC Certified Kraft Paper
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    Provides structural rigidity, a natural organic tactile aesthetic, and is 100% bio-based.
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-purple-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">02</span>
                    Middle Layer: Metallized Cellulose (NKME)
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    An ultra-thin vapor-deposited mineral barrier layer that matches standard PET foil freshness (&lt;1.0 cc/m²/24hr OTR/WVTR) without microplastics.
                  </p>
                </div>

                <div className="border-4 border-black p-4 bg-green-50">
                  <h4 className="font-black text-lg uppercase flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-xs font-['JetBrains_Mono']">03</span>
                    Inner Layer: PLA + PBAT Sealant
                  </h4>
                  <p className="text-xs font-['JetBrains_Mono'] text-neutral-600 mt-1">
                    Corn-starch derived polylactic acid (PLA) blended with biodegradable adipic acid polyester (PBAT) for flexible heat-sealing.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/plastic-free/a_three_layer_bag_cutaway_0455201.webp" 
                alt="Three-layer compostable bag cutaway diagram" 
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
              <NeoBadge color="magenta">PROCUREMENT_UTILITY</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                Value Specs Matrix
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

      {/* Detailed Informative Content */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            How Brands Navigate the <span className="text-[#FF00FF]">Eco-Packaging Spectrum</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Many retail food and consumer brands face regulatory pressure and customer demand to reduce single-use plastic waste. However, standard raw papers lack the barrier properties needed to block oxygen, light, and humidity. Without high barriers, product shelf life collapses, leading to spoilages and packaging rupture.
            </p>
            <p>
              To solve this, advanced bio-polymer stacks have emerged. These structures (such as PLA and PBAT) behave like standard plastic films during production and sealing, but disintegrate entirely into organic biomass inside industrial composting environments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <ClickableImage
                src="/imgs/composting/plastic-free/a_plastic_free_vs_compostable_split_2649647.webp"
                alt="Split view comparing strictly plastic free paper to certified compostable barrier films"
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <ClickableImage
                src="/imgs/composting/plastic-free/a_conventional_vs_compostable_2073987.webp"
                alt="Comparison chart between conventional and compostable plastics"
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">Drafting Compliance Claims</h3>
            <p>
              We highly recommend brands maintain complete honesty in their marketing to build long-term trust. Rather than using sweeping "100% plastic-free" labels that can get flagged by advertising standard authorities due to the starch-polymer layers, we suggest using transparent phrasing such as:
            </p>
            <div className="bg-neutral-50 border-4 border-black p-6 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-6">
              "Fully compostable packaging made from plant-based materials and certified biodegradable starches. 100% free of conventional fossil plastics (PE, PP, PET). Suitable for industrial composting systems."
            </div>
            <p>
              This builds absolute credibility with conscious consumers and aligns directly with regulatory guidance.
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
              Procurement & Compliance FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              Clear answers to your technical compliance and ordering questions.
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
          <NeoBadge color="bg-black text-white">ELEVATE_YOUR_BRAND</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Begin Your Custom Run
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            High-performance certified compostable packaging starting at 500 units.
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
            For high-volume retail supply runs (10,000+ units), custom rotogravure cylinder contracts, or enterprise pricing structures, please visit our enterprise portal:{" "}
            <a 
              href="https://achievepack.com/composting/plastic-free" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/composting/plastic-free →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
