import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Award, CheckCircle, Package, Sparkles, Heart, Star, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../../utils/domain'

// Neo-Brutalist Components
const NeoButton = ({ children, onClick, variant = 'primary', className = '', href }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  
  if (href) {
    return <a href={href} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className} inline-block text-center`}>{children}</a>
  }
  
  return <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>{children}</button>
}

const NeoCard = ({ children, className = '' }: any) => (
  <motion.div 
    className={`relative p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
    whileHover={{ y: -4, x: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
  >
    {children}
  </motion.div>
)

const NeoBadge = ({ children, color = 'lime' }: any) => {
  const colors = {
    lime: 'bg-[#D4FF00] text-black',
    cyan: 'bg-[#00FFFF] text-black',
    magenta: 'bg-[#FF00FF] text-white',
    amber: 'bg-amber-400 text-black'
  }
  return <span className={`inline-block px-4 py-2 text-sm font-black uppercase border-2 border-black ${colors[color as keyof typeof colors]}`}>{children}</span>
}

export default function PouchCelloKraftPage() {
  const baseUrl = getBaseUrl()

  const FEATURES = [
    { icon: Leaf, title: 'Natural Look', desc: 'Premium kraft paper exterior—customers love the eco-friendly vibe', color: 'bg-amber-100' },
    { icon: Shield, title: 'Long Lasting', desc: '12-24 months shelf life with aluminum foil protection', color: 'bg-blue-100' },
    { icon: Award, title: 'Pro Grade', desc: 'Same quality used by top coffee & supplement brands', color: 'bg-purple-100' },
    { icon: Heart, title: 'Eco Appeal', desc: 'Perfect for brands that care about sustainability', color: 'bg-green-100' },
  ]

  const APPLICATIONS = [
    'Premium coffee beans',
    'Protein powder',
    'Supplements & vitamins',
    'Freeze-dried snacks',
    'Organic tea',
    'Pet treats',
    'Probiotics',
    'Emergency food',
    'Baby formula',
    'High-end spices'
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco</title>
        <meta name="description" content="Premium kraft pouches with clear window & aluminum foil. Perfect for coffee, supplements & organic products. 12-24 month shelf life. From 500 units!" />
        <link rel="canonical" href={`${baseUrl}/materials/cello-kraft-triplex`} />
        
        <meta property="og:title" content="Cello Kraft Triplex Pouches | Premium High-Barrier | Pouch.eco" />
        <meta property="og:description" content="Premium kraft pouches with clear window for coffee, supplements & organic products. From 500 units!" />
        <meta property="og:url" content={`${baseUrl}/materials/cello-kraft-triplex`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`${baseUrl}/imgs/material-kraft-high-barrier.webp`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cello Kraft Triplex Pouches | Pouch.eco" />
        <meta name="twitter:description" content="Premium kraft with clear window. 12-24 month shelf life." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cello Kraft Triplex Pouch",
            "description": "Premium kraft paper pouches with clear cellophane window and aluminum foil barrier",
            "brand": { "@type": "Brand", "name": "Pouch.eco" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "0.70",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "87"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <NeoBadge color="amber">POPULAR</NeoBadge>
                <NeoBadge color="lime">HIGH BARRIER</NeoBadge>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
                Cello Kraft<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Triplex Pouch</span>
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8">
                <strong>The perfect combo:</strong> Natural kraft paper exterior with a clear window to show off your product, plus aluminum foil barrier for 12-24 months of freshness!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <NeoButton variant="primary">Get Samples</NeoButton>
                <NeoButton variant="secondary">See Pricing</NeoButton>
              </div>
              
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4FF00] text-[#D4FF00]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">4.8/5 from 87 brands</p>
                </div>
                <div className="border-l-2 border-black pl-8">
                  <p className="font-black text-2xl">500 units</p>
                  <p className="text-sm text-gray-600">Low MOQ</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <NeoCard className="bg-gradient-to-br from-amber-50 to-white">
                <img 
                  src="https://achievepack.com/imgs/material-kraft-window.webp" 
                  alt="Cello Kraft Triplex Pouch with Clear Window"
                  className="w-full rounded-lg"
                />
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Why Brands <span className="text-amber-600">Love It</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It's not just packaging—it's how you make your first impression!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <NeoCard key={index}>
                <div className={`inline-block p-4 ${feature.color} border-4 border-black mb-4`}>
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Tech Details</span>
            </h2>
            <p className="text-xl text-gray-600">
              (Don't worry, we'll explain it in plain English!)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <NeoCard className="bg-amber-50/50">
              <h3 className="font-black text-2xl mb-4 text-amber-900">What's Inside?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Outer Layer: Kraft Paper (100-140g)</p>
                    <p className="text-sm text-gray-600">Natural, eco-friendly look your customers love</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Window: Clear Cellophane</p>
                    <p className="text-sm text-gray-600">Show off your beautiful product!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Barrier: Aluminum Foil (25-40µm)</p>
                    <p className="text-sm text-gray-600">Blocks oxygen, moisture & light—keeps products fresh for 12-24 months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Inner Layer: PE Sealant (60-80µm)</p>
                    <p className="text-sm text-gray-600">Strong, airtight seal that doesn't leak</p>
                  </div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-blue-50/50">
              <h3 className="font-black text-2xl mb-4 text-blue-900">Protection Power</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">Moisture Protection</p>
                  <p className="text-sm text-gray-600">Less than 0.5 g/m²/day (basically waterproof!)</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">Oxygen Protection</p>
                  <p className="text-sm text-gray-600">Less than 1.0 cc/m²/day (your products won't go stale)</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">Shelf Life</p>
                  <p className="text-sm text-gray-600">12-24+ months depending on your product</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold mb-1">Light Blocking</p>
                  <p className="text-sm text-gray-600">100% opaque (except the window area)</p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Perfect For Your Products
            </h2>
            <p className="text-xl text-gray-600">
              If you sell any of these, this pouch is made for you!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {APPLICATIONS.map((app, index) => (
              <div key={index} className="flex items-center gap-3 bg-amber-50 border-2 border-black p-4 hover:bg-amber-100 transition">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="font-bold text-sm">{app}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NeoCard className="inline-block max-w-3xl">
              <div className="flex items-start gap-6">
                <Sparkles className="w-12 h-12 text-amber-500 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-black text-2xl mb-2">Not Sure If It's Right for You?</h3>
                  <p className="text-gray-600 mb-4">
                    Our packaging experts can help you choose the perfect material for your product. Free consultation, no pressure!
                  </p>
                  <NeoButton variant="primary" className="text-sm py-3 px-6">
                    Chat With an Expert
                  </NeoButton>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            Ready to Start?<br/>
            <span className="text-[#D4FF00]">Order Just 500 Units!</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            No crazy minimums. Fast turnaround. Perfect for startups & small brands.
          </p>
          <p className="text-2xl font-bold text-[#D4FF00] mb-12">
            From $0.70/pouch · Includes custom printing
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">Get Free Samples</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              Download Spec Sheet
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
