import { Shield, Clock, Target, Zap, Package, TrendingUp, HelpCircle, CheckCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'

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

export default function PouchBarrierOverviewPage() {
  const BARRIER_LEVELS = [
    {
      id: 'low',
      name: 'Low Barrier',
      shelf: '3-6 Months',
      otr: '50-100 cc/m²/day',
      mvtr: '10-20 g/m²/day',
      cost: '$',
      color: 'bg-green-100',
      borderColor: 'border-green-400',
      examples: ['Dry snacks', 'Cookies', 'Tea bags', 'Granola', 'Popcorn'],
      icon: Zap,
      tagline: 'Fast Turnover Products',
      desc: 'Great for products that sell quickly or have naturally long shelf life. Best eco-credentials!'
    },
    {
      id: 'medium',
      name: 'Medium Barrier',
      shelf: '6-12 Months',
      otr: '5-20 cc/m²/day',
      mvtr: '2-5 g/m²/day',
      cost: '$$',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      examples: ['Coffee', 'Nuts', 'Pet treats', 'Cereals', 'Dried fruits'],
      icon: Package,
      tagline: 'The Sweet Spot',
      desc: 'Most popular choice! Balances protection, cost, and sustainability perfectly.'
    },
    {
      id: 'high',
      name: 'High Barrier',
      shelf: '12-24 Months',
      otr: '<1 cc/m²/day',
      mvtr: '<1 g/m²/day',
      cost: '$$$',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      examples: ['Premium coffee', 'Supplements', 'Baby food', 'Protein powder', 'Pharmaceuticals'],
      icon: Shield,
      tagline: 'Maximum Protection',
      desc: 'For products that are super sensitive to oxygen and moisture. Premium positioning!'
    }
  ]

  const DECISION_HELPER = [
    {
      question: 'How fast does your product sell?',
      options: [
        { answer: 'Fast (within 3 months)', barrier: 'low', icon: TrendingUp },
        { answer: 'Moderate (6-12 months)', barrier: 'medium', icon: Clock },
        { answer: 'Slow (12+ months)', barrier: 'high', icon: Target }
      ]
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Barrier Options Guide | Choose the Right Protection for Your Product | POUCH.ECO</title>
        <meta name="description" content="Not sure which barrier level you need? Compare Low, Medium, and High barrier options. Get shelf life guidance for snacks, coffee, supplements, and more!" />
        <link rel="canonical" href="https://pouch.eco/barriers/overview" />
        <meta property="og:title" content="Barrier Options Guide | Choose Right Protection" />
        <meta property="og:description" content="Compare Low, Medium, High barrier levels. Find the perfect protection for your product!" />
        <meta property="og:url" content="https://pouch.eco/barriers/overview" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barrier Options Guide" />
        <meta name="twitter:description" content="Choose the right barrier level for your product - Low, Medium, or High" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">DECISION GUIDE</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Barrier Options<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Explained Simply</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            <strong>Not sure which barrier you need?</strong> No worries! We'll help you choose between Low, Medium, and High barrier based on your product type and shelf life goals.
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Get Expert Help
            </NeoButton>
            <NeoButton variant="secondary">Take the Quiz</NeoButton>
          </div>
        </div>
      </section>

      {/* What is Barrier? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">What's a "Barrier" Anyway?</h2>
          
          <NeoCard color="bg-[#00FFFF]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-2xl mb-4">Think of it like sunscreen... 🧴</h3>
                <p className="text-gray-700 mb-4">
                  Just like sunscreen protects your skin from UV rays, barrier layers protect your product from:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🌬️ <strong>Oxygen</strong> - Makes food go stale or rancid</li>
                  <li>💧 <strong>Moisture</strong> - Causes products to clump or spoil</li>
                  <li>☀️ <strong>Light</strong> - Degrades vitamins and colors</li>
                  <li>👃 <strong>Odors</strong> - Keeps flavors in, bad smells out</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-black text-lg mb-4">The Golden Rule:</h4>
                <p className="text-gray-700 mb-4">
                  <strong>Higher barrier = Longer shelf life = Higher cost</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Pick the <em>minimum</em> barrier you need! Over-engineering costs money and might reduce recyclability.
                </p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">Compare All Three Levels</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {BARRIER_LEVELS.map((level) => (
              <NeoCard key={level.id} color={level.color} className={`${level.borderColor}`}>
                <div className="flex items-start justify-between mb-4">
                  <level.icon className="w-10 h-10" />
                  <div className="font-mono font-black text-lg">{level.cost}</div>
                </div>

                <h3 className="font-black text-2xl mb-2">{level.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{level.tagline}</p>
                
                <div className="bg-white border-2 border-black p-3 mb-4">
                  <p className="font-black text-3xl text-center">{level.shelf}</p>
                  <p className="text-xs text-center text-gray-600">Typical Shelf Life</p>
                </div>

                <p className="text-sm text-gray-700 mb-4">{level.desc}</p>

                <div className="space-y-2 mb-4 font-mono text-xs">
                  <div>
                    <span className="font-bold">OTR:</span> {level.otr}
                  </div>
                  <div>
                    <span className="font-bold">MVTR:</span> {level.mvtr}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">Best for:</p>
                  <div className="space-y-1">
                    {level.examples.map((ex, idx) => (
                      <div key={idx} className="text-xs bg-white border border-black px-2 py-1">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Tool */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">Which One Should You Pick?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-green-100" className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-black text-xl mb-2">Fast Sellers</h3>
              <p className="text-sm text-gray-700 mb-4">Product turns over in 3-6 months</p>
              <NeoBadge color="bg-green-300">Low Barrier</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">Examples: Cookies, tea, popcorn</p>
            </NeoCard>

            <NeoCard color="bg-blue-100" className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-black text-xl mb-2">Standard Products</h3>
              <p className="text-sm text-gray-700 mb-4">Need 6-12 months on shelf</p>
              <NeoBadge color="bg-blue-300">Medium Barrier</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">Examples: Coffee, nuts, pet food</p>
            </NeoCard>

            <NeoCard color="bg-purple-100" className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-black text-xl mb-2">Premium / Sensitive</h3>
              <p className="text-sm text-gray-700 mb-4">Need 12-24 months protection</p>
              <NeoBadge color="bg-purple-300">High Barrier</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">Examples: Supplements, baby food</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Real-World Examples</h2>
          
          <div className="space-y-6">
            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">LOW</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">Organic Tea Brand</h3>
                  <p className="text-gray-700 mb-2">
                    Loose leaf tea in 50g pouches. Product naturally stable, sells fast in local markets.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> Used Low Barrier kraft pouches, saved $0.10 per unit, maintained eco-friendly positioning.
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">MED</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">Specialty Coffee Roaster</h3>
                  <p className="text-gray-700 mb-2">
                    12oz bags of roasted whole beans. Needs to stay fresh through retail + online distribution.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> Medium Barrier with degassing valve, perfect 9-month shelf life, competitive pricing.
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">HIGH</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">Probiotic Supplement Brand</h3>
                  <p className="text-gray-700 mb-2">
                    Live cultures extremely sensitive to oxygen. International distribution needs 18+ months.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> High Barrier with aluminum foil, guaranteed 24-month shelf life, passed stability testing.
                  </p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">Still Not Sure?</h2>
            <p className="text-xl text-gray-700 mb-6">
              We offer <strong>FREE shelf-life testing</strong> to figure out exactly what barrier you need!
            </p>
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">What we'll test:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Oxygen permeability over time</li>
                <li>✓ Moisture absorption rates</li>
                <li>✓ Product stability at different temps</li>
                <li>✓ Actual vs theoretical shelf life</li>
              </ul>
            </div>
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Request Free Testing
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            Ready to Choose Your Barrier?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a consultation and we'll recommend the perfect option for your product!
          </p>
          <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
            Talk to an Expert
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
