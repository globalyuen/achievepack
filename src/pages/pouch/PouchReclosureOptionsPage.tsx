import { Helmet } from 'react-helmet-async'
import { Lock, RefreshCw, Package, CheckCircle, Heart, Sparkles, Star, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

// Neo-Brutalist Components
const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
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
    purple: 'bg-purple-400 text-white'
  }
  return <span className={`inline-block px-4 py-2 text-sm font-black uppercase border-2 border-black ${colors[color as keyof typeof colors]}`}>{children}</span>
}

export default function PouchReclosureOptionsPage() {
  const baseUrl = getBaseUrl()

  const CLOSURE_TYPES = [
    {
      name: 'Press-to-Close Zipper',
      desc: 'The most popular choice! Easy to use, reliable, and budget-friendly.',
      features: ['500+ open/close cycles', 'Works on all pouch styles', 'Clear or colored options', 'Most economical'],
      bestFor: 'Snacks, coffee, tea, pet treats',
      color: 'bg-[#D4FF00]',
      icon: RefreshCw
    },
    {
      name: 'Slider Zipper',
      desc: 'Premium one-handed opening—customers love the satisfying "click"!',
      features: ['One-hand operation', 'Tactile confirmation', 'Higher perceived value', '1000+ cycle durability'],
      bestFor: 'Pet food, granola, premium snacks',
      color: 'bg-[#00FFFF]',
      icon: Lock
    },
    {
      name: 'Child-Resistant Zipper',
      desc: 'Safety first! Required for cannabis, pharma, and certain supplements.',
      features: ['ASTM D3475 certified', 'Push-and-slide mechanism', 'Senior-friendly design', 'Legal compliance'],
      bestFor: 'Cannabis, supplements, medications',
      color: 'bg-[#FF00FF]',
      icon: Shield
    },
    {
      name: 'Spout with Cap',
      desc: 'Perfect for liquids and powders—pour control without the mess!',
      features: ['Screw-cap seal', 'No-drip design', 'Reusable cap', 'Easy portioning'],
      bestFor: 'Baby food, sauces, smoothie mixes',
      color: 'bg-purple-400',
      icon: Package
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Reclosure Options | Keep Products Fresh & Customers Happy | Pouch.eco</title>
        <meta name="description" content="Choose the perfect closure for your pouches! Zippers, sliders, spouts & child-resistant options. From just 500 units. Easy freshness, happy customers!" />
        <link rel="canonical" href={`${baseUrl}/reclosure-options`} />
        
        <meta property="og:title" content="Reclosure Options | Keep Products Fresh | Pouch.eco" />
        <meta property="og:description" content="Zippers, sliders, spouts & child-resistant closures. From 500 units!" />
        <meta property="og:url" content={`${baseUrl}/reclosure-options`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/reclosure-options-og.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reclosure Options | Pouch.eco" />
        <meta name="twitter:description" content="Keep products fresh with the right closure. From 500 units!" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Reclosure Options for Eco Pouches",
            "description": "Complete guide to reclosure options for eco-friendly pouches",
            "url": `${baseUrl}/reclosure-options`
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <NeoBadge color="purple">KEEP IT FRESH</NeoBadge>
            <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none">
              Choose Your<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Closure Type</span>
            </h1>
            <p className="mt-8 text-2xl text-gray-700 max-w-4xl mx-auto">
              The right closure keeps your products fresh and makes your customers' lives easier. Let's find your perfect match!
            </p>
          </div>

          {/* Quick Selector */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <NeoCard className="text-center bg-gradient-to-br from-white to-green-50">
              <Heart className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Everyday Products</h3>
              <p className="text-gray-600 text-sm mb-4">Snacks, coffee, pet treats</p>
              <NeoBadge color="lime">Press-to-Close</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-blue-50">
              <Sparkles className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Premium Brands</h3>
              <p className="text-gray-600 text-sm mb-4">Pet food, granola, artisan goods</p>
              <NeoBadge color="cyan">Slider Zipper</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-purple-50">
              <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Safety Required</h3>
              <p className="text-gray-600 text-sm mb-4">Cannabis, supplements, meds</p>
              <NeoBadge color="magenta">Child-Resistant</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Closure Types Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              All Your Options
            </h2>
            <p className="text-xl text-gray-600">
              Each closure type has its superpowers—pick what works for your product!
            </p>
          </div>

          <div className="space-y-8">
            {CLOSURE_TYPES.map((closure, index) => (
              <NeoCard key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${closure.color} border-4 border-black`}>
                        <closure.icon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="font-black text-3xl mb-2">{closure.name}</h3>
                        <p className="text-gray-700 text-lg">{closure.desc}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {closure.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 border-2 border-black p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-black text-gray-500 mb-2">BEST FOR</p>
                      <p className="font-bold text-lg mb-4">{closure.bestFor}</p>
                    </div>
                    <NeoButton variant="secondary" className="w-full text-sm py-3">
                      See Examples
                    </NeoButton>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Why Resealable = <span className="text-green-600">Better Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Happy Customers", desc: "Products stay fresh = customers come back for more" },
              { icon: Star, title: "Premium Feel", desc: "Resealable packaging feels more valuable" },
              { icon: CheckCircle, title: "Fewer Returns", desc: "Products stay fresh longer, less waste" },
              { icon: Sparkles, title: "Stand Out", desc: "Better packaging = shelf appeal" }
            ].map((benefit, index) => (
              <NeoCard key={index} className="text-center">
                <benefit.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="font-black text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            Not Sure Which<br/>
            <span className="text-[#D4FF00]">Closure to Pick?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Order a free sample pack with all closure types, or chat with our team—we'll help you choose!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">Order Sample Pack</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              Chat With Expert
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
