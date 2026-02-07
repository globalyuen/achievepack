import { Leaf, Shield, Coffee, ShoppingBag, CheckCircle, AlertCircle, Calendar, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-6 py-3 font-black uppercase text-sm tracking-wider border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#00FFFF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

// ============================================
// MAIN PAGE
// ============================================

export default function PouchKraftDuplexPage() {
  const FEATURES = [
    {
      icon: Leaf,
      title: "Natural Kraft Look",
      desc: "That rustic, eco-friendly vibe your customers love",
      color: "text-amber-600"
    },
    {
      icon: Shield,
      title: "6-12 Month Freshness",
      desc: "Medium barrier keeps products fresh for most needs",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Great Value",
      desc: "More affordable than high barrier, better than low",
      color: "text-green-600"
    },
    {
      icon: Coffee,
      title: "Perfect for Coffee",
      desc: "The most popular choice for roasted coffee brands",
      color: "text-purple-600"
    }
  ]

  const APPLICATIONS = [
    "Roasted coffee beans",
    "Ground coffee",
    "Loose leaf tea",
    "Roasted nuts & seeds",
    "Dried fruits",
    "Protein powders",
    "Granola & cereal",
    "Spice blends",
    "Superfood powders",
    "Energy bars",
    "Chocolate & cocoa",
    "Pet treats"
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Kraft Duplex Pouches | Medium Barrier for Coffee & Snacks | POUCH.ECO</title>
        <meta name="description" content="Natural kraft paper pouches with medium barrier protection. Perfect for coffee, tea, nuts, and snacks. 6-12 month shelf life. Great eco-friendly look with real protection!" />
        <link rel="canonical" href="https://pouch.eco/materials/kraft-duplex" />
        <meta property="og:title" content="Kraft Duplex Pouches | Medium Barrier for Coffee & Snacks" />
        <meta property="og:description" content="Natural kraft paper pouches with medium barrier. 6-12 month shelf life for coffee, tea, nuts, and more!" />
        <meta property="og:url" content="https://pouch.eco/materials/kraft-duplex" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kraft Duplex Pouches | Medium Barrier" />
        <meta name="twitter:description" content="Natural kraft pouches with 6-12 month protection for coffee & snacks" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-amber-200">MEDIUM BARRIER</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Kraft Duplex<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Medium Barrier</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            <strong>The sweet spot!</strong> Natural kraft paper exterior with metallized barrier inside. Perfect for coffee, tea, and snacks that need 6-12 months of freshness without the high barrier price tag.
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Get Free Sample
            </NeoButton>
            <NeoButton variant="secondary">View Pricing</NeoButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Why Choose Kraft Duplex?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <NeoCard key={idx} className="flex gap-4">
                <feature.icon className={`w-12 h-12 flex-shrink-0 ${feature.color}`} />
                <div>
                  <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">What's Inside?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-amber-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">Outer Layer</h3>
                <p className="font-bold mb-1">Kraft Paper</p>
                <p className="text-sm text-gray-600">80-120g natural brown paper</p>
                <p className="text-xs text-gray-500 mt-2">That beautiful rustic look!</p>
              </div>
            </NeoCard>

            <NeoCard color="bg-blue-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">Barrier Layer</h3>
                <p className="font-bold mb-1">Metallized Film</p>
                <p className="text-sm text-gray-600">12-15µm aluminum coating</p>
                <p className="text-xs text-gray-500 mt-2">Blocks oxygen & moisture</p>
              </div>
            </NeoCard>

            <NeoCard color="bg-green-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">Inner Layer</h3>
                <p className="font-bold mb-1">PE Sealant</p>
                <p className="text-sm text-gray-600">Food-safe polyethylene</p>
                <p className="text-xs text-gray-500 mt-2">Heat-sealable, FDA approved</p>
              </div>
            </NeoCard>
          </div>

          <NeoCard className="mt-8 bg-white">
            <h3 className="font-black text-xl mb-4">📊 Performance Numbers</h3>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div>
                <p className="font-bold">Oxygen Barrier (OTR)</p>
                <p className="text-2xl font-black text-blue-600">5-20</p>
                <p className="text-gray-600">cc/m²/day</p>
              </div>
              <div>
                <p className="font-bold">Moisture Barrier (MVTR)</p>
                <p className="text-2xl font-black text-blue-600">2-5</p>
                <p className="text-gray-600">g/m²/day</p>
              </div>
              <div>
                <p className="font-bold">Shelf Life</p>
                <p className="text-2xl font-black text-green-600">6-12</p>
                <p className="text-gray-600">months</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">Perfect For...</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {APPLICATIONS.map((app, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#D4FF00] border-2 border-black px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-bold">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For vs Not For */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Is This Right for You?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-green-100">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <h3 className="font-black text-2xl">Best For</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Coffee & tea products</li>
                <li>✅ 6-12 month shelf life needs</li>
                <li>✅ Products sensitive to oxygen/moisture</li>
                <li>✅ Premium eco-friendly branding</li>
                <li>✅ Natural aesthetic appeal</li>
                <li>✅ Budget-conscious brands</li>
              </ul>
            </NeoCard>

            <NeoCard color="bg-amber-100">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <h3 className="font-black text-2xl">Not Ideal For</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>⚠️ 18+ month shelf life requirements</li>
                <li>⚠️ Extremely oxygen-sensitive items</li>
                <li>⚠️ High-moisture environments</li>
                <li>⚠️ Products needing clear windows</li>
                <li>⚠️ Maximum recyclability needs</li>
              </ul>
              <p className="text-sm text-amber-700 mt-4">
                💡 Need longer shelf life? Check out our <a href="/materials/cello-kraft-triplex" className="underline font-bold">High Barrier Kraft</a>
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">Typical Pricing</h2>
            <p className="text-xl text-gray-700 mb-6">
              <strong>$0.35 - $0.55 per pouch</strong> depending on size, quantity, and printing
            </p>
            <p className="text-gray-600 mb-6">
              MOQ: 2,000 units • Lead time: 6-8 weeks after approval
            </p>
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Get Exact Quote
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a free consultation and get samples within 2-3 weeks!
          </p>
          <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
            Book Free Consultation
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
