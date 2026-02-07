import { Cpu, Zap, Palette, CheckCircle, X, DollarSign, Clock, Sparkles } from 'lucide-react'
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

export default function PouchDigitalPrintingPage() {
  const ADVANTAGES = [
    {
      icon: Zap,
      title: "Start with Just 500!",
      desc: "No $1,500 plate fees like traditional printing",
      color: "text-yellow-600"
    },
    {
      icon: Palette,
      title: "Unlimited Colors",
      desc: "Full-color CMYK printing at no extra cost",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Super Fast",
      desc: "2-3 weeks turnaround vs 6-8 weeks traditional",
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      title: "Easy Updates",
      desc: "Change designs anytime—no new plates needed!",
      color: "text-purple-600"
    }
  ]

  const PERFECT_FOR = [
    "Startups testing the market",
    "Multiple product flavors/SKUs",
    "Seasonal or limited editions",
    "Batch codes & QR codes",
    "Small batch artisan brands",
    "Crowdfunding projects",
    "Colorful photography designs",
    "Frequent design changes"
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Digital Printing for Pouches | Start with 500 Units | POUCH.ECO</title>
        <meta name="description" content="Print full-color pouches from just 500 units! No plate fees, unlimited colors, fast turnaround. Perfect for startups and small brands testing products." />
        <link rel="canonical" href="https://pouch.eco/printing/digital" />
        <meta property="og:title" content="Digital Printing for Pouches | Low MOQ from 500" />
        <meta property="og:description" content="Full-color digital printing with no plate fees! Start from 500 units with fast turnaround." />
        <meta property="og:url" content="https://pouch.eco/printing/digital" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Printing | Low MOQ Pouches" />
        <meta name="twitter:description" content="Start with 500 units, no plate fees, unlimited colors!" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#00FFFF]">DIGITAL PRINTING</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Digital Printing<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">From Just 500 Units!</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            <strong>No plate fees. Unlimited colors. Fast turnaround.</strong> Perfect for startups, small brands, and anyone who wants beautiful full-color pouches without breaking the bank!
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Get Free Quote
            </NeoButton>
            <NeoButton variant="secondary">See Examples</NeoButton>
          </div>
        </div>
      </section>

      {/* Why Digital? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Why Choose Digital Printing?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ADVANTAGES.map((adv, idx) => (
              <NeoCard key={idx} className="flex gap-4">
                <adv.icon className={`w-12 h-12 flex-shrink-0 ${adv.color}`} />
                <div>
                  <h3 className="font-black text-xl mb-2">{adv.title}</h3>
                  <p className="text-gray-700">{adv.desc}</p>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Digital vs Traditional */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">Digital vs Traditional Printing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital */}
            <NeoCard color="bg-green-100" className="border-green-400">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-green-600" />
                <h3 className="font-black text-2xl">Digital</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">MOQ: 500 units</p>
                    <p className="text-sm text-gray-600">Perfect for testing!</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">No plate fees</p>
                    <p className="text-sm text-gray-600">Save $1,500 upfront</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Unlimited colors</p>
                    <p className="text-sm text-gray-600">CMYK + White ink</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">2-3 weeks lead time</p>
                    <p className="text-sm text-gray-600">Fast turnaround</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Easy design changes</p>
                    <p className="text-sm text-gray-600">No re-plating needed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-black text-lg mb-1">Best for:</p>
                <p className="text-sm">500-5,000 units per run, multiple SKUs, frequent updates</p>
              </div>
            </NeoCard>

            {/* Traditional */}
            <NeoCard color="bg-blue-100" className="border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-10 h-10 text-blue-600" />
                <h3 className="font-black text-2xl">Traditional</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">MOQ: 10,000+ units</p>
                    <p className="text-sm text-gray-600">Too much for testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Plate fees: $1,500+</p>
                    <p className="text-sm text-gray-600">Per color, per design</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Pantone colors</p>
                    <p className="text-sm text-gray-600">Exact brand matching</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">6-8 weeks lead time</p>
                    <p className="text-sm text-gray-600">Longer wait</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Design changes costly</p>
                    <p className="text-sm text-gray-600">New plates required</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-black text-lg mb-1">Best for:</p>
                <p className="text-sm">10,000+ units, exact Pantone matching, lower per-unit cost</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">Perfect For...</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PERFECT_FOR.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#D4FF00] border-2 border-black px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Example */}
      <section className="py-16 px-4 bg-[#00FFFF]">
        <div className="max-w-4xl mx-auto">
          <NeoCard className="bg-white">
            <h2 className="font-black text-3xl mb-8 text-center">Pricing Example</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-green-600">500</p>
                  <p className="text-sm">units</p>
                </div>
                <p className="font-bold">$0.80/unit</p>
                <p className="text-sm text-gray-600">Total: $400</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-blue-600">1,000</p>
                  <p className="text-sm">units</p>
                </div>
                <p className="font-bold">$0.65/unit</p>
                <p className="text-sm text-gray-600">Total: $650</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-purple-600">2,000</p>
                  <p className="text-sm">units</p>
                </div>
                <p className="font-bold">$0.55/unit</p>
                <p className="text-sm text-gray-600">Total: $1,100</p>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-black p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">Prices include full-color printing on both sides</p>
              <p className="text-xs text-gray-500">Actual pricing depends on size, material, and features</p>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">What's Included</h2>
          
          <NeoCard className="bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-black text-xl mb-4">✅ Included in Every Order:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Full CMYK color printing (both sides)</li>
                  <li>• White ink underbase (on dark materials)</li>
                  <li>• Free design file review</li>
                  <li>• Digital proof before production</li>
                  <li>• Quality check photos</li>
                  <li>• Standard resealable zipper</li>
                  <li>• Tear notch</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-black text-xl mb-4">💰 Optional Add-Ons:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Degassing valve (+$0.05/unit)</li>
                  <li>• Hang hole (+$0.02/unit)</li>
                  <li>• Custom sizes (free)</li>
                  <li>• Metallic printing effect (+$0.10/unit)</li>
                  <li>• Matte/Gloss lamination (free)</li>
                  <li>• Batch codes & QR codes (free)</li>
                </ul>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            Ready to Print Your Pouches?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free quote in 24 hours! Upload your design or start from scratch.
          </p>
          <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
            Get Free Quote Now
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
