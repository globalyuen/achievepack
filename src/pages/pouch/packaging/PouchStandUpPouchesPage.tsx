import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Package, Leaf, Zap, ShoppingCart, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

export default function PouchStandUpPouchesPage() {
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

  const title = "Stand-Up Pouches - Eco Packaging for Startups | POUCH.ECO"
  const description = "Custom printed stand-up pouches with low MOQ from 500 units. Compostable and recyclable options. High shelf presence for food, coffee, and pet treats."

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/stand-up-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">PACKAGING_TYPE: SUP_01</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Stand.<br/>
                Deliver.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Dominate.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                &gt; Maximum shelf impact.<br/>
                &gt; Resealable & Durable.<br/>
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
          <NeoCard color="bg-white">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Shelf Presence</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Our bottom gusset technology ensures your brand stays upright and visible. 360° of printable surface for maximum messaging.
            </p>
            <NeoBadge color="bg-[#D4FF00]">RETAIL_READY</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Barrier Tech</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              High-barrier structures for coffee, snacks, and treats. O2 and moisture blocking protocol keeping products fresh for 12+ months.
            </p>
            <NeoBadge color="bg-[#00FFFF]">CERTIFIED_BARRIER</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Leaf className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Eco_Matrix</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Available in Home Compostable, Industrial Compostable, and Recyclable Mono-Material structures.
            </p>
            <NeoBadge color="bg-white">100%_SUSTAINABLE</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-center text-[#D4FF00]">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Coffee & Tea', 'Pet Treats', 'Dry Snacks', 'Baby Food'].map((industry) => (
              <div key={industry} className="border-4 border-white p-6 bg-black hover:bg-[#D4FF00] hover:text-black transition-colors group">
                <h4 className="font-black text-2xl uppercase mb-4 tracking-tighter">{industry}</h4>
                <p className="font-['JetBrains_Mono'] text-sm opacity-80 group-hover:opacity-100 mb-6">
                  Optimized barrier and resealable options specifically for {industry} startups.
                </p>
                <ArrowRight className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
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
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span>WIDTH:</span>
                <span>70mm - 300mm</span>
              </div>
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span>HEIGHT:</span>
                <span>100mm - 400mm</span>
              </div>
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span>GUSSET:</span>
                <span>30mm - 150mm</span>
              </div>
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span>CAPACITY:</span>
                <span>20g - 2kg+</span>
              </div>
            </div>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-6">Standard Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Press-to-Close Zipper',
                'Tear Notches',
                'Euro Slots',
                'Rounded Corners',
                'Clear Windows',
                'Matte/Gloss Finish',
                'Soft Touch',
                'Foil Stamping'
              ].map(feature => (
                <div key={feature} className="flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-[#D4FF00]" />
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
            The Ultimate Guide to <span className="text-[#00FFFF]">Stand-Up Pouches</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Stand-up pouches (SUP) have revolutionized the flexible packaging industry. Also known as Doypacks, these innovative bags feature a bottom gusset that allows them to stand upright on retail shelves, maximizing brand visibility and shelf appeal. Whether you're packaging artisanal coffee, organic pet treats, or premium granola, stand-up pouches offer a versatile and cost-effective solution compared to rigid containers like glass jars or metal tins.
            </p>
            
            <img 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Custom printed stand up pouch displaying high quality graphics" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

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

            <img 
              src="/imgs/pouch-shape/eco-stand-up-pouch.png" 
              alt="Premium Eco-Friendly Sustainable Stand-Up Pouch" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />
            
            <img 
              src="/imgs/materials/comp_film_2.png" 
              alt="Compostable film layers for sustainable stand up pouches" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#FF00FF]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity for custom stand-up pouches?',
                a: 'Our minimum order quantity (MOQ) for custom printed stand-up pouches is exceptionally low, starting at just 500 units. This is ideal for startups, limited editions, or market testing.'
              },
              {
                q: 'Can stand-up pouches hold liquids?',
                a: 'Yes, we offer specialized stand-up pouches with spout fitments specifically designed for liquids, purees, and beverages. These feature specialized high-barrier films and reinforced seals to prevent leaks.'
              },
              {
                q: 'Are your stand-up pouches food safe?',
                a: 'Absolutely. All our pouches are manufactured using FDA-approved, food-safe materials. We provide COAs (Certificates of Analysis) to guarantee the safety and compliance of your packaging.'
              },
              {
                q: 'Do you offer eco-friendly stand-up pouches?',
                a: 'Yes, sustainability is our core focus. We offer fully home compostable stand-up pouches, as well as recyclable mono-material options, allowing you to reduce your environmental impact.'
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
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Start Your Batch</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            Custom printed stand-up pouches with startup-friendly MOQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Book Consultation</NeoButton>
            <NeoButton variant="dark">Price Calculator</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
