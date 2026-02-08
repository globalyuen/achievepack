import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Heart, Leaf, CheckCircle, Calendar, ArrowRight, Package, Shield, Clock, Sparkles, Star, PawPrint } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'

export default function PouchPetFoodPage() {
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

  const canonicalUrl = 'https://pouch.eco/industry/pet-food'
  const title = 'Compostable Pet Food Pouches | Eco-Friendly Dog & Cat Treat Bags'
  const metaDescription = 'Home compostable pet food pouches for kibble, treats & supplements. Heavy-duty, pet-safe materials. 500 MOQ with custom printing. TUV certified, breaks down in 180 days.'

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Compostable Pet Food Pouches",
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.45",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "93"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are compostable pet food bags safe for pets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our pouches use FDA-approved, pet-safe materials. No BPA, no harmful chemicals. TUV certified home compostable. Perfect for natural pet brands who care about pet health and the planet."
        }
      },
      {
        "@type": "Question",
        "name": "Can compostable pouches handle heavy kibble and treats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our heavy-duty construction uses reinforced seals and thick films. Tested with dense kibble, freeze-dried treats, and bone broth powder. Moisture barrier protects against fat oxidation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order for custom pet food pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 500 pieces with digital printing. Perfect for indie pet brands, new product launches, or testing the market. Get custom colors, logos, and designs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer resealable closures for pet treat bags?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Choose from compostable zippers, tin ties, or press-to-close seals. All options keep treats fresh and are certified home compostable."
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
        <meta property="og:image" content="https://pouch.eco/all-product-photos/IMG_4365.webp" />
        
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
            key="hero-video-pet-food"
          >
            <source src="/video/pouch-eco-marketing-videos/use.mp4" type="video/mp4" />
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
              <PawPrint className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">Pet Food Packaging</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Compostable Pet Food <span className="text-[#D4FF00]">Pouches</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              Heavy-duty. Pet-safe. Home compostable.
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              For kibble, treats, supplements. Start with 500 pieces.
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
              { label: 'Pet-Safe', value: 'FDA', unit: 'approved', icon: Shield },
              { label: 'Compost Time', value: '180', unit: 'days', icon: Leaf },
              { label: 'Seal Strength', value: '10+', unit: 'kg', icon: Star }
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
            Perfect For <span className="text-[#D4FF00]">Pet Brands</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              Whether you're launching a new treat line or scaling your natural pet food brand.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Indie Pet Brands',
                  desc: 'Low 500 MOQ for testing new products. Perfect for Kickstarter launches.',
                  icon: Sparkles
                },
                {
                  title: 'Premium Pet Food',
                  desc: 'Heavy-duty construction for dense kibble and freeze-dried raw.',
                  icon: Star
                },
                {
                  title: 'E-commerce Sellers',
                  desc: 'Resealable closures + clear windows for beautiful product photos.',
                  icon: Heart
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
            Why Pet Parents <span className="text-[#10b981]">Love These</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Heavy-Duty Construction',
                desc: 'Thick films + reinforced seals handle sharp kibble and dense treats. No tears, no leaks.',
                icon: Shield
              },
              {
                title: 'Moisture Barrier',
                desc: 'Locks in freshness, prevents fat oxidation. Keeps treats crunchy for months.',
                icon: Star
              },
              {
                title: 'Resealable Closures',
                desc: 'Compostable zippers, tin ties, or press-to-close. Daily use friendly.',
                icon: Package
              },
              {
                title: 'Pet-Safe Materials',
                desc: 'FDA approved, BPA-free, low-migration inks. Safe for furry friends.',
                icon: Heart
              },
              {
                title: 'Large Format Options',
                desc: 'From single-serve treats to 10kg bulk bags. All sizes available.',
                icon: PawPrint
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

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: 'Dry Pet Food',
                items: ['Dog Kibble', 'Cat Dry Food', 'Small Animal Food', 'Bird Seed']
              },
              {
                category: 'Pet Treats',
                items: ['Training Treats', 'Dental Chews', 'Jerky Treats', 'Freeze-Dried']
              },
              {
                category: 'Supplements',
                items: ['Joint Support', 'Skin & Coat', 'Digestive Health', 'CBD Products']
              },
              {
                category: 'Raw & Fresh',
                items: ['Freeze-Dried Raw', 'Dehydrated Meals', 'Bone Broth', 'Meal Toppers']
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

      {/* Safety Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Pet <span className="text-[#D4FF00]">Safety First</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-50 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-['Space_Grotesk'] font-semibold mb-6 text-center">
              All materials meet pet food safety standards:
            </p>

            <ul className="space-y-4 font-['JetBrains_Mono'] text-sm">
              {[
                { text: 'FDA 21 CFR Compliant - Food contact approved', icon: CheckCircle },
                { text: 'AAFCO Guidelines - Pet food packaging requirements', icon: CheckCircle },
                { text: 'Heavy Metal Testing - Below detection limits', icon: CheckCircle },
                { text: 'BPA-Free Materials - No harmful chemicals', icon: CheckCircle },
                { text: 'Low-Migration Inks - Pet-safe printing only', icon: CheckCircle }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Full documentation: COA (Certificate of Analysis) + SDS (Safety Data Sheets)
            </p>
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
                q: 'Are compostable pet food bags safe for pets?',
                a: 'Yes! Our pouches use FDA-approved, pet-safe materials. No BPA, no harmful chemicals. TUV certified home compostable. Perfect for natural pet brands who care about pet health and the planet.'
              },
              {
                q: 'Can compostable pouches handle heavy kibble and treats?',
                a: 'Absolutely. Our heavy-duty construction uses reinforced seals and thick films. Tested with dense kibble, freeze-dried treats, and bone broth powder. Moisture barrier protects against fat oxidation.'
              },
              {
                q: "What's the minimum order for custom pet food pouches?",
                a: 'Just 500 pieces with digital printing. Perfect for indie pet brands, new product launches, or testing the market. Get custom colors, logos, and designs.'
              },
              {
                q: 'Do you offer resealable closures for pet treat bags?',
                a: 'Yes! Choose from compostable zippers, tin ties, or press-to-close seals. All options keep treats fresh and are certified home compostable.'
              },
              {
                q: 'How long do compostable pet food bags take to break down?',
                a: 'TUV OK Home certified pouches break down in 180 days at home. Industrial composting takes 90 days. Zero plastic residue. Your packaging returns to nature, not landfills.'
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
            <PawPrint className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              Your Pets Deserve Better Packaging
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              Heavy-duty. Pet-safe. Home compostable. Start with 500 pieces.
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

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">Keep Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/coffee-tea"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <img 
                  src="/all-product-photos/IMG_4378.webp"
                  alt="Compostable Coffee Pouches"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  Coffee & Tea Pouches
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  Degassing valves. High-barrier. Home compostable.
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
              href="/blog/home-compostable-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <img 
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
