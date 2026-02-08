import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Coffee, Leaf, CheckCircle, Calendar, ArrowRight, Package, Shield, Clock, Sparkles, TrendingUp, Heart } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'

export default function PouchCoffeeTeaPage() {
  // Scroll detection for animations
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

  const canonicalUrl = 'https://pouch.eco/industry/coffee-tea'
  const title = 'Compostable Coffee & Tea Pouches | Certified Home Compostable'
  const metaDescription = 'Compostable coffee pouches with degassing valves. TUV certified, breaks down in 180 days. Low 500 MOQ, fast digital printing. Perfect for specialty roasters and tea brands.'

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Compostable Coffee & Tea Pouches",
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.50",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are compostable coffee pouches suitable for freshly roasted beans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our compostable coffee pouches come with one-way degassing valves that release CO2 from freshly roasted beans while preventing oxygen from entering. The high-barrier plant-based materials protect aroma and flavor for 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order quantity for custom printed coffee pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 500 pieces with digital printing, or 5,000 pieces for rotogravure printing. Perfect for specialty roasters and small tea brands starting out."
        }
      },
      {
        "@type": "Question",
        "name": "How long do compostable coffee bags take to break down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our TUV OK Home certified pouches break down completely in 180 days in home composting conditions. Industrial composting takes 90 days. Zero plastic residue."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a resealable zipper to compostable coffee bags?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer compostable zipper closures, tin ties, and label seals. All options are certified home compostable and maintain product freshness after opening."
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
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://pouch.eco/all-product-photos/IMG_4363.webp" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-coffee-tea"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Hero Content */}
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
              <Coffee className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">Coffee & Tea Packaging</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Compostable Pouches for <span className="text-[#D4FF00]">Coffee & Tea</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              Degassing valves. High-barrier protection. Home compostable. 
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              Perfect for specialty roasters and tea brands. Start with 500 pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pouch-eco/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Get Your Quote
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                View Materials
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
              { label: 'Breakdown Time', value: '180', unit: 'days', icon: Leaf },
              { label: 'Shelf Life', value: '18', unit: 'months', icon: Shield },
              { label: 'Turnaround', value: '2-3', unit: 'weeks', icon: Clock }
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

      {/* Is This For You? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
              Is This <span className="text-[#D4FF00]">For You?</span>
            </h2>

            <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
                Perfect for specialty coffee roasters, tea brands, and cafes who want eco-packaging without compromise.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Specialty Roasters',
                    desc: 'Degassing valves + premium branding from 500 pcs',
                    icon: Coffee
                  },
                  {
                    title: 'Tea Brands',
                    desc: 'Resealable pouches for loose-leaf and sachets',
                    icon: Leaf
                  },
                  {
                    title: 'Cafes & Startups',
                    desc: 'Low MOQ lets you test before committing big',
                    icon: Sparkles
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
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            What Makes Our Coffee Pouches <span className="text-[#10b981]">Different?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'One-Way Degassing Valves',
                desc: 'Release CO2 from freshly roasted beans without letting oxygen in. Keeps coffee fresh for 12-18 months.',
                icon: Coffee
              },
              {
                title: 'High-Barrier Protection',
                desc: 'Plant-based materials block oxygen, moisture, and light. Protects aroma and flavor naturally.',
                icon: Shield
              },
              {
                title: 'Resealable Closures',
                desc: 'Compostable zippers, tin ties, or label seals. All certified home compostable.',
                icon: Package
              },
              {
                title: 'Custom Digital Printing',
                desc: 'Full-color printing from 500 pieces. Your brand, your way. Fast turnaround.',
                icon: Sparkles
              },
              {
                title: 'Multiple Formats',
                desc: 'Stand-up pouches, flat bottom bags, side gusset. All with premium finish options.',
                icon: TrendingUp
              },
              {
                title: 'TUV Certified Compostable',
                desc: 'Breaks down in 180 days at home. ASTM D6400 and EN 13432 certified. Zero plastic guilt.',
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

      {/* Material Options */}
      <section className="py-24 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Choose Your <span className="text-[#10b981]">Material</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#D4FF00] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">
                Home Compostable
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>Kraft paper + PLA film (plant-based)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>TUV OK Home certified - breaks down in 180 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>Perfect for premium specialty coffee brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>Natural kraft look or white matte finish</span>
                </li>
              </ul>
              <a 
                href="/materials/cello-kraft-triplex"
                className="inline-block mt-6 px-6 py-3 bg-black text-[#D4FF00] font-black uppercase border-4 border-black hover:translate-x-1 transition-all"
              >
                Learn More →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">
                Industrial Compostable
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>PBAT + PLA multilayer structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>ASTM D6400 & EN 13432 certified - 90 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>Higher barrier for extended shelf life</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>Premium white or transparent window options</span>
                </li>
              </ul>
              <a 
                href="/materials/catalog"
                className="inline-block mt-6 px-6 py-3 bg-[#10b981] text-white font-black uppercase border-4 border-black hover:translate-x-1 transition-all"
              >
                View Catalog →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products You Can Package */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            What Can You <span className="text-[#D4FF00]">Package?</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'Whole Coffee Beans',
              'Ground Coffee',
              'Coffee Capsule Refills',
              'Drip Coffee Bags',
              'Cold Brew Packs',
              'Loose-Leaf Tea',
              'Tea Sachets',
              'Matcha Powder',
              'Herbal Infusions',
              'Chai Blends',
              'Instant Coffee',
              'Coffee Alternatives'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 bg-gray-50 px-4 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="font-['JetBrains_Mono'] text-sm font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Technical <span className="text-[#10b981]">Specs</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#10b981]" />
                Barrier Performance
              </h3>
              <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                <div>
                  <div className="font-bold text-[#10b981] mb-1">Oxygen Transmission Rate (OTR)</div>
                  <div className="text-gray-700">{'<'} 1.0 cc/m²/24hr</div>
                </div>
                <div>
                  <div className="font-bold text-[#10b981] mb-1">Moisture Vapor Transmission (MVTR)</div>
                  <div className="text-gray-700">{'<'} 2.0 g/m²/24hr</div>
                </div>
                <div>
                  <div className="font-bold text-[#10b981] mb-1">Shelf Life Extension</div>
                  <div className="text-gray-700">12-18 months for sealed products</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#10b981]" />
                Certifications
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">TUV OK Home (Home Compostable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">ASTM D6400 (US Standard)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">EN 13432 (European Standard)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">FDA Food Contact Approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">BRC Certified Factory</span>
                </li>
              </ul>
            </div>
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
                q: 'Are compostable coffee pouches suitable for freshly roasted beans?',
                a: 'Yes! Our compostable coffee pouches come with one-way degassing valves that release CO2 from freshly roasted beans while preventing oxygen from entering. The high-barrier plant-based materials protect aroma and flavor for 12-18 months.'
              },
              {
                q: "What's the minimum order quantity for custom printed coffee pouches?",
                a: 'Just 500 pieces with digital printing, or 5,000 pieces for rotogravure printing. Perfect for specialty roasters and small tea brands starting out.'
              },
              {
                q: 'How long do compostable coffee bags take to break down?',
                a: 'Our TUV OK Home certified pouches break down completely in 180 days in home composting conditions. Industrial composting takes 90 days. Zero plastic residue.'
              },
              {
                q: 'Can I add a resealable zipper to compostable coffee bags?',
                a: 'Yes! We offer compostable zipper closures, tin ties, and label seals. All options are certified home compostable and maintain product freshness after opening.'
              },
              {
                q: 'What sizes are available for coffee and tea pouches?',
                a: 'Common sizes: 100g, 250g, 500g, 1kg, and 2kg. Custom sizes available from 500 pieces. Use our size guide calculator to find the perfect fit for your product.'
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
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              Ready to Go Compostable?
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              Start with 500 pieces. Fast digital printing. Premium degassing valves. Zero plastic guilt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pouch-eco/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Your Call Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/size-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                Calculate Your Size
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
              href="/industry/pet-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <img 
                  src="/all-product-photos/IMG_4365.webp"
                  alt="Compostable Pet Food Pouches"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Pet Food Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Heavy-duty. Pet-safe. Home compostable.
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/snacks"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <img 
                  src="/all-product-photos/IMG_4376.webp"
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
              href="/blog/coffee-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <img 
                  src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
                  alt="Coffee Packaging Guide"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Coffee Packaging Guide
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Complete guide for specialty roasters.
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
