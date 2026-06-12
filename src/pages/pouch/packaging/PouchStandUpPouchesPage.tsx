import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Home, HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, FileText } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

import { useTranslation } from 'react-i18next'

export default function PouchStandUpPouchesPage() {
  const { t } = useTranslation()
  const [scrollPercent, setScrollPercent] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
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

  const title = t("seoPages.pages.standUpPouches.b2c.metaTitle", "Custom Stand-Up Pouches - Eco-Friendly Doypack Bags | Pouch.eco")
  const description = t("seoPages.pages.standUpPouches.b2c.metaDescription", "BRCGS certified custom stand-up pouches. Certified compostable PLA & recyclable Mono-PE bags. Low MOQ 500 units. Free design proofs. Technical gas barrier protection.")

  const translatedSpecs = [
    {
      field: "Barrier Layer Tech",
      raw: "NatureFlex™ Cellulose or Recyclable Mono-PE EVOH Stacks",
      b2b: "OTR & WVTR < 1.0. Guarantees absolute oxygen and moisture gas lock, keeping roasted coffee, dry foods, and powder formulas fresh for 12+ months."
    },
    {
      field: "OEM CAD Calibration",
      raw: "Custom Millimeter Dielines (Oval, Plow, or Heavy K-Seals)",
      b2b: "Precisely calibrated to your product volumetric density, preventing bottom gusset rupture and ensuring the pouch stands perfectly erect on retail shelves."
    },
    {
      field: "High-Speed Sealing",
      raw: "Seal strength > 35 N/15mm (PBAT/Mono-PE resins)",
      b2b: "Guarantees zero burst leakage under high-speed automatic VFFS/HFFS vertical and horizontal packaging lines operating up to 65+ bags/minute."
    },
    {
      field: "Export Logistics Packaging",
      raw: "Triple-layer double-wall export carton with polybags",
      b2b: "Protects finished pouches from humidity degradation and crushing during long-haul sea-freight and warehousing."
    }
  ]

  const faqs = [
    {
      q: "1. What is the Minimum Order Quantity (MOQ) for custom pouches?",
      a: "We support startups and new SKU launches with an industry-low digital printing MOQ of just 500 units. For larger wholesale volumes, we offer high-speed rotogravure plate printing from 5,000 units, providing the ultimate bulk cost efficiency."
    },
    {
      q: "2. Do you provide physical pre-production samples?",
      a: "Yes, we ship a free sustainable sample kit with 10 physical pouches to test barrier properties. For custom orders, we generate a 24-hour PDF soft proof and can build physical sample bags before bulk manufacture."
    },
    {
      q: "3. Can you manufacture stand-up pouches according to custom volumetric CAD drawings?",
      a: "Yes. Our material engineers analyze your product volumetric density and customize bottom gussets and dimensions down to the millimeter scale. We provide a custom dieline layout PDF within 24 hours."
    },
    {
      q: "4. What is the production and transit lead time for commercial runs?",
      a: "Digital runs finish in 7-10 business days; rotogravure plate orders take 12-14 days. Express DHL/FedEx air delivery to USA/EU takes 5-7 business days, and economical ocean freight is available in 20-30 days."
    },
    {
      q: "5. What certifications are available to verify eco-friendly compliance?",
      a: "Our biopolymers carry official certificate numbers from BPI (Biodegradable Products Institute #10529618) and TÜV Austria (OK Compost HOME). Stacks comply with ASTM D6400 (US) and EN 13432 (EU) compostability guidelines."
    },
    {
      q: "6. What details must be submitted to receive a wholesale quotation?",
      a: "Please provide estimated volumetric capacity (or exact dimensions), material preference (compostable kraft, mono-PE recyclable, high barrier), zip/degassing valve requirements, number of SKUs, and vector artwork."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/stand-up-pouches" />
      </Helmet>

      {/* Clickable Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 font-['JetBrains_Mono'] text-xs flex flex-wrap items-center gap-2">
        <Link to="/" className="text-black hover:underline flex items-center gap-1 font-bold">
          <Home className="w-3.5 h-3.5" /> HOME
        </Link>
        <span className="text-black font-black">/</span>
        <span className="text-neutral-500 font-bold uppercase">SUSTAINABLE_PACKAGING</span>
        <span className="text-black font-black">/</span>
        <span className="bg-[#D4FF00] text-black border border-black px-2 py-0.5 font-black uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          STAND_UP_POUCHES
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PACKAGING_TYPE: SUP_01</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t("seoPages.pages.standUpPouches.b2c.hero.titlePart1", "Custom Stand-Up")}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {t("seoPages.pages.standUpPouches.b2c.hero.titlePart2", "Pouches.")}
                </span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-base md:text-lg max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                &gt; BRCGS Certified Factory Line<br/>
                &gt; Recyclable & Compostable Eco-Films<br/>
                &gt; Low MOQ: 500 Unit Protocol Active
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="/sample" variant="primary">Free Sample Kit</NeoButton>
                <NeoButton href="/free-mockup" variant="secondary">Upload Blueprint</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]" ref={heroCardRef} onMouseMove={handleMouseMove}>
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/stand-up-pouch2.glb"
                tilt={tilt}
                scrollPercent={scrollPercent}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SUP Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white" className="text-left">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Shelf Presence</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Our precision-folded bottom gusset technology ensures your brand stands tall and stays visible. 360° of customizable surface real estate for striking graphics and compliance badges.
            </p>
            <NeoBadge color="bg-[#D4FF00]">RETAIL_READY</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]" className="text-left">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Barrier Tech</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Industrial high-barrier coatings keep your coffee beans, ingredients, or organic snacks safe. Dynamic gas-barrier properties ensure full O2 and moisture defense for up to 12+ months.
            </p>
            <NeoBadge color="bg-[#00FFFF]">CERTIFIED_BARRIER</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]" className="text-left">
            <Leaf className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Eco Matrix</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Fully aligned with green retail standards. Available in certified Home Compostable, Industrial Compostable, and Curbside Recyclable Mono-Material structures.
            </p>
            <NeoBadge color="white">100%_SUSTAINABLE</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">
            Target Application Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Coffee & Tea', desc: 'EVOH high gas-lock combined with one-way degassing valves to lock out moisture and preserve roasting freshness.' },
              { title: 'Pet Food & Treats', desc: 'Heavy-duty K-seal bottoms calibrated for heavy weights (up to 2kg) with anti-scuff, grease-proof layer structures.' },
              { title: 'Dry Snacks & Granola', desc: 'Certified BPI & OK Compost plant biopolymers matching strict retail shelf stability and structural integrity.' },
              { title: 'Powdered Ingredients', desc: 'Static-free PLA coatings and leak-proof press-to-close zippers preventing powder sifting and seam rupture.' }
            ].map((useCase) => (
              <div key={useCase.title} className="border-4 border-white p-6 bg-black hover:bg-[#D4FF00] hover:text-black transition-colors group text-left">
                <h4 className="font-black text-2xl uppercase mb-4 tracking-tighter">{useCase.title}</h4>
                <p className="font-['JetBrains_Mono'] text-xs opacity-80 group-hover:opacity-100 mb-6 leading-relaxed">
                  {useCase.desc}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-['JetBrains_Mono'] text-[10px] font-bold underline uppercase group-hover:text-black">Spec Sheet Active</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Translated Matrix */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-left">
            Technical Specs<br/>& Purchasing Value
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            SPECS_V2026_COMPLIANT
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {translatedSpecs.map((spec, i) => (
            <NeoCard key={i} color="bg-white" className="text-left space-y-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <h4 className="font-black text-xl uppercase text-black">{spec.field}</h4>
                <NeoBadge color="cyan">Verified</NeoBadge>
              </div>
              <div className="font-['JetBrains_Mono'] text-sm font-bold text-[#FF00FF]">
                [RAW LAB SPEC]: {spec.raw}
              </div>
              <div className="bg-neutral-50 p-4 border-2 border-dashed border-neutral-300 font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                <span className="font-bold text-black uppercase block mb-1">🛒 Commercial Buying Utility:</span>
                {spec.b2b}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#00FFFF]">Stand-Up Pouches</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Stand-up pouches (SUP) have revolutionized the flexible packaging industry. Also known as Doypacks, these innovative bags feature a bottom gusset that allows them to stand upright on retail shelves, maximizing brand visibility and shelf appeal. Whether you're packaging packaging specialty coffee, organic pet treats, or premium granola, stand-up pouches offer a versatile and cost-effective solution compared to rigid containers like glass jars or metal tins.
            </p>
            
            {/* Visual Showcase 1: Premium Product Lifestyle Cover */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" 
                alt="Premium Achieve Pack custom printed stand-up pouches in a real-world lifestyle retail scene" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                Figure 1: Custom printed physical stand-up pouches showcasing vivid eco-friendly digital graphics
              </span>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Why Brands Prefer Stand-Up Pouches</h3>
            <p>
              The primary advantage of the stand-up pouch is its structural design. The bottom gusset expands when the bag is filled, creating a sturdy base. This not only allows the product to act as its own billboard on crowded retail shelves but also makes the pouch incredibly space-efficient during shipping and storage. Before filling, these pouches lie flat, taking up a fraction of the space required for rigid packaging, which significantly reduces shipping costs and carbon footprint.
            </p>
            <p>
              Additionally, stand-up pouches are highly customizable. With our digital printing technology, brands can achieve photo-quality graphics, vibrant colors, and sharp text. You can incorporate clear windows to showcase your product, resealable zippers to maintain freshness after opening, and tear notches for easy consumer access.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Sustainability: Compostable and Recyclable Options</h3>
            <p>
              At POUCH.ECO, we understand the critical shift towards sustainable packaging. Traditional stand-up pouches often rely on mixed-material plastics that are impossible to recycle. We've engineered our pouches to meet the highest sustainability standards without compromising on barrier properties or aesthetic appeal.
            </p>

            {/* Visual Showcase 2: Certified Compostable Pouch */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-shape/eco-stand-up-pouch.png" 
                alt="Premium Eco-Friendly Sustainable Stand-Up Pouch made from FSC kraft paper" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                Figure 2: Natural FSC Kraft high moisture barrier stand-up pouches
              </span>
            </div>
            
            {/* Visual Showcase 3: Certified Compostable Multi-Layer Stacks */}
            <div className="my-8">
              <img 
                src="/imgs/pouch-hero/pouch_compost_hero.png" 
                alt="Compostable film layers stack for high-performance sustainable stand up pouches" 
                className="w-full h-auto max-h-[450px] object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                onError={(e) => {
                  // Fallback if path prefix needs adjustment
                  (e.target as HTMLImageElement).src = "/imgs/pouch/materials/pouch_compost_hero.png";
                }}
              />
              <span className="text-[10px] text-neutral-500 font-bold block mt-2 text-center uppercase tracking-wider">
                Figure 3: Multi-layer certified compostable barrier cellulose film stacks
              </span>
            </div>

            <p>
              Our product lineup includes TUV-certified home compostable pouches that break down into organic matter within 180 days in a backyard compost bin. For brands requiring different end-of-life solutions, we also offer mono-material recyclable pouches (PE/PE or PP/PP) that are fully compatible with soft plastic recycling streams. By offering these eco-friendly alternatives, we help startup brands align their packaging with their environmental values and meet the growing consumer demand for plastic-free alternatives.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Low MOQ for Startups and Emerging Brands</h3>
            <p>
              Historically, custom printed packaging required massive minimum order quantities (MOQs) of 10,000 to 50,000 units, creating a significant barrier to entry for small businesses. We leverage state-of-the-art digital printing to offer MOQs starting at just 500 units. This allows startups to test new products, launch seasonal flavors, and run promotional campaigns without tying up capital in excessive packaging inventory.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 6-Pillar B2B FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 text-center">
            Frequently Asked <span className="text-[#FF00FF]">Questions</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 text-center mb-16 max-w-xl mx-auto">
            Professional B2B buyers require detailed verification. Expand the accordions below to audit our standard commercial policy:
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left font-['Space_Grotesk'] font-black text-lg uppercase flex items-center justify-between hover:bg-neutral-50 transition"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#FF00FF] flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 border-t-4 border-dashed border-black font-['JetBrains_Mono'] text-sm text-gray-700 bg-amber-50/20 pl-14">
                          <span className="font-bold text-[#FF00FF] block mb-2">A:</span> {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Ready to Start?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-base md:text-xl max-w-2xl mx-auto">
            Get premium custom printed stand-up pouches tailored to your exact CAD volume specifications. Low 500 unit MOQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="/sample" variant="primary">
              Request Free Sample Kit
            </NeoButton>
            <NeoButton href="/free-mockup" variant="secondary">
              Upload CAD Dieline
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="dark">
              Book Free Call
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
