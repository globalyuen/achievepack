import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Droplets, Zap, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchSaucesPage() {
  // Scroll detection
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  const canonicalUrl = 'https://pouch.eco/industry/sauces-condiments'
  const title = 'Spouted Pouches for Sauces & Condiments | Eco-Friendly Packaging'
  const metaDescription = 'Leak-proof, spouted pouches for sauces, condiments, and liquids. High-barrier protection. 500 MOQ, custom digital printing. Safe, durable, and sustainable.'

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Spouted Pouches for Sauces",
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.60",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "64"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your sauce pouches leak-proof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our spouted pouches are engineered with reinforced welded seals and high-strength films to guarantee 100% leak-proof performance during transit and daily use."
        }
      },
      {
        "@type": "Question",
        "name": "Can these pouches be used for hot-filling sauces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer specialized heat-stable film structures that can withstand hot-fill processes up to 95°C (203°F) without warping or delaminating."
        }
      },
      {
        "@type": "Question",
        "name": "What sizes do spouted pouches come in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer sizes ranging from small 50ml sample pouches up to 5-liter bulk catering bags. Our most popular retail sizes are 250ml, 500ml, and 1 liter."
        }
      },
      {
        "@type": "Question",
        "name": "Are compostable spouted pouches available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are actively developing fully compostable spouted pouches. Currently, we offer highly recyclable Mono-PE spouted pouches as our primary sustainable solution for liquids."
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://pouch.eco/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-red-50">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Droplets className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">Sauce & Condiment Packaging</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Spouted Pouches for <span className="text-[#FF0000]">Liquid Foods</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto text-black bg-white inline-block px-4 py-2 border-2 border-black">
              Leak-proof. Hot-fill ready. Space-saving.
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              For sauces, marinades, and condiments. Custom printed from 500 pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF0000] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Get Your Quote
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                See Options
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Minimum Order', value: '500', unit: 'pieces', icon: Package },
              { label: 'Spout Sizes', value: '8.5-33', unit: 'mm', icon: Droplets },
              { label: 'Hot Fill', value: '95', unit: '°C max', icon: Zap },
              { label: 'Leak Rate', value: '0.01', unit: '%', icon: Shield }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#FF0000]" />
                <div className="text-4xl font-['Space_Grotesk'] font-black text-[#FF0000] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-['JetBrains_Mono'] uppercase text-gray-600">
                  {stat.unit}
                </div>
                <div className="text-xs font-['JetBrains_Mono'] uppercase text-gray-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="red">INDUSTRY_DEEP_DIVE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            The Liquid Revolution in <span className="text-[#FF0000]">Sauce Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              For decades, the sauce and condiment industry has been bound to heavy, rigid packaging—glass jars that break during transit, and thick plastic bottles that require massive amounts of warehouse space before they are even filled. Today, forward-thinking culinary brands are embracing a much smarter, more sustainable alternative: the spouted stand-up pouch.
            </p>
            <p>
              At POUCH.ECO, we engineer high-performance liquid pouches that provide superior barrier protection, complete leak-proof reliability, and an incredible reduction in logistical carbon footprint compared to rigid alternatives. 
            </p>
            
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt="Spouted pouch for liquid sauces and condiments" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption="Engineered for liquids: robust seals, precise pouring, and space-saving efficiency."
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">The Engineering of a Leak-Proof Seal</h3>
            <p>
              Packaging liquids is fundamentally different from packaging dry goods. The hydraulic pressure exerted by a sauce or marinade during transport can easily cause standard pouch seals to fail, resulting in disastrous leaks. 
            </p>
            <p>
              Our spouted pouches are constructed using specialized high-strength LLDPE (Linear Low-Density Polyethylene) sealant webs. Furthermore, the integration of the rigid plastic spout into the flexible film requires immense precision. We utilize advanced ultrasonic and thermal welding technology to create a molecular bond between the spout and the pouch film, guaranteeing a 100% leak-proof seal that can withstand dropping, squeezing, and compression.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Hot-Fill Processing and Barrier Tech</h3>
            <p>
              Many sauces, broths, and condiments require a "hot-fill" process to ensure commercial sterility and extended shelf life without preservatives. Standard flexible films will warp, shrink, or completely delaminate when exposed to liquids at 85°C to 95°C.
            </p>
            <p>
              We solve this by laminating heat-stable polymers (like BOPA/Nylon or specialized PET) that maintain their structural integrity at near-boiling temperatures. Additionally, these structures incorporate high-barrier layers (such as EVOH or AL/Foil) to block oxygen and UV light, preventing oxidation and ensuring that your spicy BBQ sauce or delicate salad dressing retains its vibrant color and intended flavor profile for months on the shelf.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Unmatched Logistical Efficiency</h3>
            <p>
              The environmental and economic benefits of switching from glass jars to spouted pouches are staggering. Empty glass jars are shipped full of air, requiring numerous trucks to transport a single production run's worth of packaging. Conversely, flexible pouches ship completely flat. 
            </p>
            <p>
              A single pallet of our flat spouted pouches holds the equivalent volume of packaging as an entire truckload of empty glass jars. This translates to an immediate, massive reduction in your brand's Scope 3 carbon emissions and warehouse storage costs. Furthermore, the pouches are significantly lighter, reducing shipping costs when delivering the final product to distributors and consumers. 
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-12 italic">
            Common <span className="text-[#FF0000]">Questions</span>
          </h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">Q:</span> Are your sauce pouches leak-proof?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">A:</span> Yes, our spouted pouches are engineered with reinforced welded seals and high-strength films to guarantee 100% leak-proof performance during transit and daily use.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">Q:</span> Can these pouches be used for hot-filling sauces?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">A:</span> Absolutely. We offer specialized heat-stable film structures that can withstand hot-fill processes up to 95°C (203°F) without warping or delaminating.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">Q:</span> What spout sizes are available?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">A:</span> We offer various spout diameters. 8.5mm is standard for thin liquids, while 15mm, 22mm, and 33mm are perfect for thick sauces, marinades, and chunky condiments.</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">Q:</span> Do you offer recyclable options for liquids?</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">A:</span> Yes. We manufacture "Mono-PE" spouted pouches. Because the spout, cap, and pouch body are all made from Polyethylene, the entire unit is recyclable at store drop-off locations.</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF0000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="white">POUR_WITH_PRECISION</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">Ditch the Glass.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl max-w-2xl mx-auto">
            Switch to lightweight, shatterproof, high-barrier spouted pouches. Save on shipping, reduce your carbon footprint, and stand out on the shelf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-[#FF0000]">Get Liquid Samples</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">Consultation</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#FF0000] text-white px-2">Keep Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/packaging/spout-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
                  alt="Spout Pouches Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  Spout Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Technical specs for liquid food packaging.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/baby-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/baby_food_hero.jpg"
                  alt="Safe Baby Food Packaging"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  Baby Food Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Safety-first packaging for liquid baby food.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/eco-packaging-regulations-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
                  alt="Packaging Regulations Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  Compliance Guide
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  FDA & international liquid food regulations.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
