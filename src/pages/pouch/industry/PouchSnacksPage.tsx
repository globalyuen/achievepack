import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Zap, Sparkles, Star, Cookie } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'

export default function PouchSnacksPage() {
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

  const canonicalUrl = 'https://pouch.eco/industry/snacks'
  const title = 'Compostable Snack Pouches | Eco-Friendly Chip & Snack Bags'
  const metaDescription = 'Home compostable snack pouches with grease-resistant barrier. For chips, nuts, granola. 500 MOQ, digital printing. TUV certified, breaks down in 180 days. Resealable closures available.'

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Compostable Snack Pouches",
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.40",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can compostable pouches handle greasy snacks like chips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our pouches have grease-resistant inner layers that protect against oil migration. Perfect for chips, nuts, and oil-containing snacks. Maintains crunch and freshness."
        }
      },
      {
        "@type": "Question",
        "name": "Do compostable snack bags have resealable closures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Choose from compostable zippers, press-to-close seals, or tin ties. All options are TUV certified home compostable and keep your snacks fresh after opening."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order for custom printed snack pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 500 pieces with digital printing. Perfect for indie snack brands, farmers market products, or new flavor launches. Get full-color custom designs."
        }
      },
      {
        "@type": "Question",
        "name": "How long do snacks stay fresh in compostable pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our high-barrier compostable pouches maintain freshness for 6-12 months depending on product. Moisture and oxygen protection comparable to traditional packaging."
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
        <meta property="og:image" content="https://pouch.eco/all-product-photos/IMG_4376.webp" />
        
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
            key="hero-video-snacks"
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
              <Cookie className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">Snack Packaging</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Compostable Snack <span className="text-[#D4FF00]">Pouches</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              Grease-resistant. Keeps crunch. Home compostable.
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              For chips, nuts, granola. Start with 500 pieces.
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
              { label: 'Shelf Life', value: '6-12', unit: 'months', icon: Shield },
              { label: 'Compost Time', value: '180', unit: 'days', icon: Leaf },
              { label: 'Custom Colors', value: '10', unit: 'colors', icon: Sparkles }
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

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Perfect For <span className="text-[#D4FF00]">Snack Brands</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              Whether you're launching organic chips or scaling your granola brand.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Chips & Snacks',
                  desc: 'Grease-resistant barrier for crunchy products. Resealable zippers keep freshness.',
                  icon: Cookie
                },
                {
                  title: 'Granola & Cereal',
                  desc: 'Clear windows show premium product. Stand-up pouches for retail display.',
                  icon: Sparkles
                },
                {
                  title: 'Dried Fruits & Nuts',
                  desc: 'High-barrier protection against moisture and oxidation. 6-12 month shelf life.',
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
            Why Snack Brands <span className="text-[#10b981]">Choose These</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Grease-Resistant Barrier',
                desc: 'Inner layers stop oil migration. Perfect for chips, nuts, and fried snacks.',
                icon: Shield
              },
              {
                title: 'Keeps Crunch Fresh',
                desc: 'Moisture and oxygen barrier maintains texture for 6-12 months.',
                icon: Star
              },
              {
                title: 'Resealable Closures',
                desc: 'Compostable zippers or press-to-close seals. Daily use friendly.',
                icon: Zap
              },
              {
                title: 'Vibrant Printing',
                desc: 'Up to 10-color digital printing. Eye-catching shelf presence.',
                icon: Sparkles
              },
              {
                title: 'Clear Windows Available',
                desc: 'Show product inside. Perfect for granola, trail mix, and dried fruits.',
                icon: Package
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
                category: 'Chips & Crisps',
                items: ['Potato Chips', 'Corn Chips', 'Veggie Chips', 'Puffs & Extruded']
              },
              {
                category: 'Nuts & Seeds',
                items: ['Mixed Nuts', 'Trail Mix', 'Roasted Seeds', 'Nut Butters']
              },
              {
                category: 'Dried Fruits',
                items: ['Dried Mango', 'Banana Chips', 'Freeze-Dried', 'Fruit Leather']
              },
              {
                category: 'Meat Snacks',
                items: ['Beef Jerky', 'Meat Sticks', 'Dried Meat', 'Biltong']
              },
              {
                category: 'Confectionery',
                items: ['Chocolates', 'Gummies', 'Cookies', 'Energy Bars']
              },
              {
                category: 'Breakfast',
                items: ['Granola', 'Muesli', 'Oatmeal', 'Protein Oats']
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

      {/* Customization Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Customization <span className="text-[#D4FF00]">Options</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Resealable Zipper', desc: 'Keep snacks fresh' },
              { name: 'Tear Notch', desc: 'Easy opening' },
              { name: 'Hang Hole', desc: 'Retail display' },
              { name: 'Clear Window', desc: 'Show product' },
              { name: 'Matte Finish', desc: 'Premium feel' },
              { name: 'Spot UV', desc: 'Highlight logo' },
              { name: 'Embossing', desc: 'Tactile brand' },
              { name: 'QR Code', desc: 'Digital link' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-[#10b981]" />
                <h3 className="font-['Space_Grotesk'] font-bold uppercase text-sm mb-1">
                  {feature.name}
                </h3>
                <p className="text-xs font-['JetBrains_Mono'] text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Common <span className="text-[#D4FF00]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can compostable pouches handle greasy snacks like chips?',
                a: 'Yes! Our pouches have grease-resistant inner layers that protect against oil migration. Perfect for chips, nuts, and fried snacks. Maintains crunch and freshness for 6-12 months.'
              },
              {
                q: 'Do compostable snack bags have resealable closures?',
                a: 'Absolutely. Choose from compostable zippers, press-to-close seals, or tin ties. All options are TUV certified home compostable and keep your snacks fresh after opening.'
              },
              {
                q: "What's the minimum order for custom printed snack pouches?",
                a: 'Just 500 pieces with digital printing. Perfect for indie snack brands, farmers market products, or new flavor launches. Get full-color custom designs with your logo and branding.'
              },
              {
                q: 'How long do snacks stay fresh in compostable pouches?',
                a: 'Our high-barrier compostable pouches maintain freshness for 6-12 months depending on product type. Moisture and oxygen protection is comparable to traditional packaging.'
              },
              {
                q: 'Can I get clear windows to show my product?',
                a: 'Yes! Clear PLA (plant-based plastic) windows are TUV certified home compostable. Perfect for granola, trail mix, and products where visibility sells. The window breaks down with the rest of the pouch.'
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
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              Your Snacks Deserve Better Packaging
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              Grease-resistant. Keeps crunch. Home compostable. Start with 500 pieces.
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
    </PouchLayout>
  )
}
