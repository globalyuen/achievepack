import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Beaker, Sparkles, Star, Pill } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchSupplementsPage() {
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

  const canonicalUrl = 'https://pouch.eco/industry/supplements'
  const title = 'Compostable Supplement Pouches | Protein Powder & Superfood Bags'
  const metaDescription = 'Home compostable supplement pouches for protein powders, superfoods, sports nutrition. High-barrier moisture protection. 500 MOQ, TUV certified. FDA compliant.'

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Compostable Supplement Pouches",
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.55",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can compostable pouches protect protein powder from moisture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our high-barrier compostable pouches have moisture protection comparable to traditional packaging. MVTR below 1.0 g/m²/24hr keeps protein powders dry and clump-free."
        }
      },
      {
        "@type": "Question",
        "name": "Are compostable supplement bags FDA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All materials are FDA 21 CFR compliant for food and supplement contact. Migration tested and safe for sensitive ingredients like vitamins and proteins."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order for custom supplement pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 500 pieces with digital printing. Perfect for new supplement brands, product launches, or testing new flavors. Full-color custom designs available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer resealable closures for protein powder bags?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Choose from compostable zippers, press-to-close seals, or tin ties. All options maintain freshness for daily use and are certified home compostable."
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
        <meta property="og:image" content="https://pouch.eco/imgs/artifacts/compostable_protein_powder_pouch.jpg" />
        
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
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-supplements"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4FF00] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Pill className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">Supplement Packaging</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Compostable Supplement <span className="text-[#D4FF00]">Pouches</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              High-barrier. Moisture-proof. Home compostable.
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              For protein, superfoods, vitamins. Start with 500 pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
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
              { label: 'Moisture Barrier', value: '<1.0', unit: 'MVTR', icon: Shield },
              { label: 'FDA Compliant', value: '21CFR', unit: 'certified', icon: Star },
              { label: 'Compost Time', value: '180', unit: 'days', icon: Leaf }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#10b981]" />
                <div className="text-4xl font-['Space_Grotesk'] font-black text-[#10b981] mb-1">
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

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Supplements<br/>Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/artifacts/compostable_protein_powder_pouch.jpg" 
              alt="Compostable Protein Powder Pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Protein Pouches"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt="Superfood stand up pouch" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Superfood Bags"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt="Bulk supplement flat bottom bag" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Bulk Nutrition"
            />
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt="Supplement packaging barrier comparison" 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption="Barrier Tech"
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Perfect For <span className="text-[#D4FF00]">Health Brands</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              Whether you're launching a new protein line or scaling your superfood brand.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Protein Brands',
                  desc: 'High-barrier protection for whey, plant-based, and collagen powders.',
                  icon: Beaker
                },
                {
                  title: 'Superfood Companies',
                  desc: 'Moisture-proof for greens, adaptogens, and mushroom powders.',
                  icon: Sparkles
                },
                {
                  title: 'Sports Nutrition',
                  desc: 'Resealable closures for pre-workout, BCAA, and recovery formulas.',
                  icon: Star
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <item.icon className="w-12 h-12 text-[#10b981] mb-4" />
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Why Supplement Brands <span className="text-[#10b981]">Choose These</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'High-Barrier Protection',
                desc: 'MVTR <1.0 g/m²/24hr. Protects moisture-sensitive powders like protein and collagen.',
                icon: Shield
              },
              {
                title: 'Preserves Potency',
                desc: 'Oxygen and UV barriers maintain vitamins, probiotics, and active ingredients.',
                icon: Star
              },
              {
                title: 'Resealable Closures',
                desc: 'Compostable zippers or press-to-close seals. Daily use friendly for consumers.',
                icon: Package
              },
              {
                title: 'FDA 21 CFR Compliant',
                desc: 'Food and supplement contact certified. Migration tested. Safe for sensitive ingredients.',
                icon: CheckCircle
              },
              {
                title: 'Custom Sizes Available',
                desc: 'From single-serve sachets (10g) to bulk bags (5kg). All formats available.',
                icon: Beaker
              },
              {
                title: 'Home Compostable',
                desc: 'TUV certified - breaks down in 180 days. Plant-based, zero plastic guilt.',
                icon: Leaf
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products You Can Package */}
      <section className="py-24 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            What Can You <span className="text-[#10b981]">Package?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Protein & Sports',
                items: ['Whey Protein', 'Plant Protein', 'BCAA & Aminos', 'Pre-Workout']
              },
              {
                category: 'Superfood Powders',
                items: ['Green Powders', 'Collagen Peptides', 'Adaptogen Blends', 'Mushroom Powders']
              },
              {
                category: 'Functional Powders',
                items: ['Electrolytes', 'Fiber Supplements', 'Digestive Enzymes', 'Immunity Blends']
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-4 text-[#10b981]">
                  {cat.category}
                </h3>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            The Ultimate Guide to <span className="text-[#10b981]">Sustainable Supplement Packaging</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              The health and wellness industry is built on the promise of vitality, longevity, and taking care of one's body. Yet, ironically, a vast majority of the nutritional supplements on the market—from whey protein to organic superfood greens—are packaged in rigid plastic tubs or multi-layer plastic pouches that will outlive the consumer by centuries. At POUCH.ECO, we believe that products designed to improve human health shouldn't degrade planetary health. That's why we engineered high-barrier, home-compostable supplement pouches.
            </p>
            
            <ClickableImage 
              src="/imgs/artifacts/compostable_protein_powder_pouch.jpg" 
              alt="Sustainable protein powder packaging with moisture barrier" 
              className="w-full h-96 object-cover border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              caption="Click to enlarge"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Combating Moisture: The Enemy of Powders</h3>
            <p>
              When packaging powdered supplements, moisture is the primary threat. Whether it's a pre-workout formula loaded with hygroscopic (water-absorbing) ingredients or a delicate probiotic blend, exposure to ambient humidity causes clumping, degradation of active ingredients, and a drastically shortened shelf life.
            </p>
            <p>
              Traditionally, supplement brands rely on thick layers of fossil-fuel plastics (like PET and LLDPE) or aluminum foil to achieve the necessary Water Vapor Transmission Rate (WVTR). Our breakthrough lies in our certified compostable multi-layer laminations. By utilizing proprietary plant-based barrier coatings and metallized cellulose, we achieve an ultra-low WVTR that rivals conventional packaging, ensuring your powders remain dry and free-flowing.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">FDA Compliance and Food Contact Safety</h3>
            <p>
              Packaging supplements requires strict adherence to safety regulations. You need absolute certainty that the packaging material will not leach harmful chemicals into the product. This is known as "migration." 
            </p>
            <p>
              Our compostable materials, including the films, the adhesives used for lamination, and the digital inks used for printing, are rigorously tested and are fully FDA 21 CFR compliant for direct food and supplement contact. We use low-migration, water-based inks and BPA-free plant-based plastics (PLA) to ensure that your premium ingredients—from delicate collagen peptides to potent adaptogenic mushrooms—remain pure and untainted.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Flexible Formats vs. Rigid Tubs</h3>
            <p>
              The supplement industry has long been dominated by massive, rigid plastic tubs. These tubs are incredibly inefficient: they ship "air" when empty, taking up massive amounts of space in freight trucks and warehouses, which drastically increases your brand's carbon footprint before the product is even filled.
            </p>
            <p>
              Switching to flexible stand-up pouches is a game-changer. Pouches ship flat, dramatically reducing transportation emissions and storage costs. Furthermore, our pouches feature high-quality, compostable zip closures, allowing consumers to easily reseal the package daily while maintaining freshness. By offering a low Minimum Order Quantity (MOQ) of just 500 units, we make it easy for startup wellness brands to launch professionally, sustainably, and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Common <span className="text-[#D4FF00]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can compostable pouches protect protein powder from moisture?',
                a: 'Yes! Our high-barrier compostable pouches have moisture protection comparable to traditional packaging. MVTR below 1.0 g/m²/24hr keeps protein powders dry and clump-free for 12+ months.'
              },
              {
                q: 'Are compostable supplement bags FDA compliant?',
                a: 'Absolutely. All materials are FDA 21 CFR compliant for food and supplement contact. Migration tested and safe for sensitive ingredients like vitamins, proteins, and probiotics.'
              },
              {
                q: "What's the minimum order for custom supplement pouches?",
                a: 'Just 500 pieces with digital printing. Perfect for new supplement brands, product launches, or testing new flavors. Full-color custom designs with your branding.'
              },
              {
                q: 'Do you offer resealable closures for protein powder bags?',
                a: 'Yes! Choose from compostable zippers, press-to-close seals, or tin ties. All options maintain freshness for daily use and are certified home compostable.'
              },
              {
                q: 'What sizes are available for supplement pouches?',
                a: 'From single-serve sachets (10-50g) to bulk bags (5kg). Most popular: 250g, 500g, 1kg, 2kg stand-up pouches with resealable closures.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Pill className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              Your Supplements Deserve Better Packaging
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              High-barrier. Moisture-proof. Home compostable. Start with 500 pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Your Call Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                See Material Options
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">Keep Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/snacks"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_snack_pouch_window.jpg"
                  alt="Compostable Snack Pouches"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Snack Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Grease-resistant. Keeps crunch. Compostable.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/coffee-tea"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg"
                  alt="Compostable Coffee Pouches"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Coffee & Tea Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Degassing valves. High-barrier. Compostable.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/home-compostable-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/4-infograhic/compost.webp"
                  alt="Home Composting Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Home Composting Guide
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Complete guide to home composting.
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
