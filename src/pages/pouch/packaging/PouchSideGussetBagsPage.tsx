import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Layers, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Coffee } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

export default function PouchSideGussetBagsPage() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY
      const d = document.documentElement.scrollHeight - window.innerHeight
      if (d > 0) setScrollPercent(s / d)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return
    const rect = heroCardRef.current.getBoundingClientRect()
    setTilt({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 30, y: ((e.clientY - rect.top) / rect.height - 0.5) * -30 })
  }

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = "Side Gusset Bags - Classic Coffee Packaging | POUCH.ECO"
  const description = "Custom side gusset bags (quad seal) for coffee, tea, and bulk products. Expandable side panels for high capacity. Low MOQ from 500 units. Tin tie, zipper, and valve options."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a side gusset bag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A side gusset bag (also called quad seal bag) features expandable side panels that provide high capacity while maintaining a compact footprint. When filled, the side gussets expand outward, creating four vertical seams and a classic rectangular shape popular for coffee, tea, and bulk products."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for custom side gusset bags?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity (MOQ) for custom printed side gusset bags is just 500 units, with digital printing enabling fast turnaround and no color limitations for small batches."
        }
      },
      {
        "@type": "Question",
        "name": "Can side gusset bags have a degassing valve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! One-way degassing valves are a popular add-on for freshly roasted coffee beans. The valve allows CO2 to escape without letting oxygen in, preserving coffee freshness."
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="side gusset bag, quad seal bag, coffee bag, side fold bag, gusset pouch, tin tie coffee bag, gusseted packaging, bulk food bag" />
        <link rel="canonical" href="https://pouch.eco/packaging/side-gusset-bags" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://pouch.eco/packaging/side-gusset-bags" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PACKAGING_TYPE: SGB_03</span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Classic.<br/>
                Quad.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Iconic.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; The classic coffee format.<br/>
                &gt; Expandable side gussets.<br/>
                &gt; 500 unit protocol active.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Get Quote</NeoButton>
                <NeoButton variant="secondary">View Specs</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]">
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/gusset-pouch.glb"
                tilt={tilt}
                scrollPercent={scrollPercent}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Side Gusset Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Coffee className="w-12 h-12 mb-4 text-[#D4FF00]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Coffee Heritage</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              The original specialty coffee format. Side gussets provide the classic silhouette that specialty roasters and consumers recognize and trust.
            </p>
            <NeoBadge color="bg-[#D4FF00]">CLASSIC_FORMAT</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]">
            <Layers className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">Quad Seal</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              Four side seams create a rigid, structured bag that stands tall and fills the shelf space confidently. Perfect for 250g to 1kg products.
            </p>
            <NeoBadge color="bg-[#D4FF00]">RIGID_STRUCTURE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Zap className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">High Volume</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Expandable gussets mean the bag grows with your product. More internal volume per footprint vs. flat pouches—ideal for bulk products.
            </p>
            <NeoBadge color="bg-white">MAX_CAPACITY</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Coffee & Tea', 'Rice & Grains', 'Pet Food', 'Dried Herbs'].map((industry) => (
              <div key={industry} className="border-4 border-white p-6 bg-black hover:bg-[#D4FF00] hover:text-black transition-colors group">
                <h4 className="font-black text-2xl uppercase mb-4 tracking-tighter">{industry}</h4>
                <p className="font-['JetBrains_Mono'] text-sm opacity-80 group-hover:opacity-100 mb-6">
                  Traditional side gusset bags optimized for {industry} applications.
                </p>
                <ArrowRight className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Technical<br/>Protocol
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            SPECS_V2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <NeoCard color="bg-white" className="space-y-6">
            <h3 className="font-black text-3xl uppercase">Size Parameters</h3>
            <div className="space-y-4 font-['JetBrains_Mono'] text-lg">
              {[
                ['WIDTH:', '80mm – 280mm'],
                ['HEIGHT:', '150mm – 450mm'],
                ['GUSSET_DEPTH:', '40mm – 120mm'],
                ['CAPACITY:', '100g – 5kg'],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between border-b-2 border-black pb-2">
                  <span>{label}</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]" className="text-black">
            <h3 className="font-black text-3xl uppercase mb-6">Closure Options</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Tin Tie Fold-Over',
                'Press-to-Close Zipper',
                '1-Way Degassing Valve',
                'Heat Seal (Permanent)',
                'Clear Window Panel',
                'Euro Hang Hole',
                'Tear Notch',
                'Rounded Corners',
              ].map(feature => (
                <div key={feature} className="flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-black" />
                  {feature}
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#FF00FF]">Side Gusset Bags</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Side gusset bags—also called quad seal bags or gusseted pouches—are one of the most recognizable and enduring packaging formats in the specialty coffee and bulk food industries. Their distinctive silhouette, with four vertical seams and expandable side panels, provides a high-volume, structurally sound package that works beautifully for products ranging from single-origin coffee beans to loose-leaf teas and rice.
            </p>

            <img
              src="/imgs/store/pouch shape/side-gusset.webp"
              alt="Side gusset bag showing quad seal construction and expandable side panels"
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <img
              src="/imgs/pouch-shape/side-gusset-pouch-eco.png"
              alt="Premium Side Gusset Coffee Bag"
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Why Side Gusset Bags Dominate Specialty Coffee</h3>
            <p>
              The side gusset format has become the industry standard for specialty coffee for several key reasons. First, the quad seal construction creates a flat front and back panel—maximizing your digital printing real estate for high-resolution label graphics and storytelling. Second, the gussets allow the bag to hold significantly more coffee beans or grounds compared to a flat pouch of equivalent footprint dimensions.
            </p>
            <p>
              One-way degassing valves are easily integrated into side gusset bags, allowing freshly roasted beans to off-gas CO2 naturally without the risk of oxidation. This combination of structure, branding area, and valve compatibility makes side gusset bags the format of choice for over 65% of specialty coffee brands globally.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Sustainable Side Gusset Options</h3>
            <p>
              At POUCH.ECO, we've developed side gusset bags in recyclable mono-PE structures, compostable PLA-based films, and kraft paper with aluminum-free barrier coatings—ensuring that the classic coffee packaging format can meet today's sustainability demands without sacrificing barrier performance or aesthetic quality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#D4FF00] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity for custom side gusset bags?',
                a: 'Our MOQ is just 500 units for custom printed side gusset bags using digital printing. This is ideal for startups, limited editions, or product testing without large inventory commitment.'
              },
              {
                q: 'What is the difference between side gusset and flat bottom bags?',
                a: 'Side gusset bags have expandable vertical side panels and a flat bottom seam, giving them the classic coffee bag shape. Flat bottom bags have a rigid, rectangular base with 5 printable panels and superior shelf stability. Side gusset bags are more traditional and cost-effective; flat bottom bags offer more premium shelf presence.'
              },
              {
                q: 'Can I add a degassing valve to a side gusset bag?',
                a: 'Absolutely. One-way degassing valves are a standard option on our side gusset bags—ideal for freshly roasted coffee. The valve releases CO2 while preventing oxygen from entering.'
              },
              {
                q: 'Are eco-friendly side gusset bags available?',
                a: 'Yes! We offer side gusset bags in recyclable mono-PE, kraft paper with barrier coatings, and certified compostable PLA-based films—all maintaining strong performance for food products.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#FF00FF] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#FF00FF]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Start Your Batch</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Classic side gusset bags with startup-friendly MOQ from 500 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Consultation</NeoButton>
            <NeoButton variant="dark">Order Samples</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
