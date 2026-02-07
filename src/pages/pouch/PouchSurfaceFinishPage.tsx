import { Helmet } from 'react-helmet-async'
import { Sparkles, Eye, Star, Heart, CheckCircle, Award, Gem, Palette } from 'lucide-react'
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
    gold: 'bg-yellow-400 text-black'
  }
  return <span className={`inline-block px-4 py-2 text-sm font-black uppercase border-2 border-black ${colors[color as keyof typeof colors]}`}>{children}</span>
}

export default function PouchSurfaceFinishPage() {
  const baseUrl = getBaseUrl()

  const FINISHES = [
    {
      name: "Gloss Lamination",
      tagline: "Shine Bright Like a Diamond!",
      desc: "Super shiny finish that makes colors pop—your packaging will practically glow on the shelf!",
      features: ["Maximum color vibrancy", "Easy to clean", "Eye-catching shine"],
      bestFor: "Snacks, beverages, colorful products",
      price: "Standard (no extra cost)",
      color: "bg-blue-100",
      icon: Sparkles
    },
    {
      name: "Matte Lamination",
      tagline: "Sophisticated & Smooth",
      desc: "Non-shiny, elegant finish—think luxury brands. Feels premium, looks expensive!",
      features: ["Elegant, modern look", "No fingerprints", "Premium feel"],
      bestFor: "Organic, premium, wellness brands",
      price: "Standard (no extra cost)",
      color: "bg-purple-100",
      icon: Eye
    },
    {
      name: "Soft-Touch Coating",
      tagline: "Feels Like Velvet",
      desc: "This is the one customers can't stop touching! Silky-smooth, velvety texture that screams luxury.",
      features: ["Velvety tactile feel", "Ultra-premium", "Unforgettable experience"],
      bestFor: "High-end supplements, cosmetics, luxury goods",
      price: "+$0.08-0.12/pouch",
      color: "bg-pink-100",
      icon: Heart
    },
    {
      name: "Hot Foil Stamping",
      tagline: "Add Some Bling!",
      desc: "Metallic gold, silver, or copper accents on your logo—because sometimes you need that extra sparkle!",
      features: ["Gold/silver/copper options", "Premium positioning", "Catches light beautifully"],
      bestFor: "Gift products, premium coffee, high-end treats",
      price: "+$0.05-0.15/pouch",
      color: "bg-yellow-100",
      icon: Star
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Surface Finish Options | Make Your Pouch Pop! | Pouch.eco</title>
        <meta name="description" content="Choose the perfect finish for your eco pouches! Gloss, matte, soft-touch, or hot foil. Make your packaging stand out on the shelf. From 500 units!" />
        <link rel="canonical" href={`${baseUrl}/options/surface-finish`} />
        
        <meta property="og:title" content="Surface Finish Options | Make Your Pouch Pop! | Pouch.eco" />
        <meta property="og:description" content="Gloss, matte, soft-touch, or hot foil finishes. Make your eco packaging unforgettable!" />
        <meta property="og:url" content={`${baseUrl}/options/surface-finish`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/surface-finish-og.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Surface Finish Options | Pouch.eco" />
        <meta name="twitter:description" content="Make your packaging unforgettable with the right finish!" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Surface Finish Options",
            "description": "Complete guide to surface finish options for eco-friendly pouches",
            "url": `${baseUrl}/options/surface-finish`
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <NeoBadge color="gold">PREMIUM FINISHES</NeoBadge>
            <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none">
              Make Your Pouches<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-600">Irresistible!</span>
            </h1>
            <p className="mt-8 text-2xl text-gray-700 max-w-4xl mx-auto">
              The right finish doesn't just protect your product—it makes customers stop, pick it up, and say "Ooh, I need this!"
            </p>
          </div>

          {/* Quick Decision Guide */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <NeoCard className="text-center bg-gradient-to-br from-white to-blue-50">
              <Sparkles className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Want Eye-Catching?</h3>
              <p className="text-gray-600 text-sm mb-4">Bright colors that POP!</p>
              <NeoBadge color="cyan">Go Gloss</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-purple-50">
              <Eye className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Want Sophisticated?</h3>
              <p className="text-gray-600 text-sm mb-4">Elegant & modern</p>
              <NeoBadge color="magenta">Go Matte</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-pink-50">
              <Heart className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="font-black text-xl mb-2">Want Luxury?</h3>
              <p className="text-gray-600 text-sm mb-4">Unforgettable touch</p>
              <NeoBadge>Go Soft-Touch</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* All Finishes Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Your Finish Options
            </h2>
            <p className="text-xl text-gray-600">
              Each finish has its own personality—pick the one that matches your brand!
            </p>
          </div>

          <div className="space-y-8">
            {FINISHES.map((finish, index) => (
              <NeoCard key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${finish.color} border-4 border-black`}>
                        <finish.icon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="font-black text-3xl mb-2">{finish.name}</h3>
                        <p className="text-xl text-gray-600 italic mb-3">{finish.tagline}</p>
                        <p className="text-gray-700 text-lg">{finish.desc}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      {finish.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gray-50 border-2 border-black p-6">
                      <p className="text-xs font-black text-gray-500 mb-2">BEST FOR</p>
                      <p className="font-bold text-lg mb-4">{finish.bestFor}</p>
                      
                      <div className="pt-4 border-t-2 border-black">
                        <p className="text-xs font-black text-gray-500 mb-1">PRICING</p>
                        <p className="font-black text-2xl text-green-600">{finish.price}</p>
                      </div>
                    </div>
                    
                    <NeoButton variant="secondary" className="w-full text-sm py-3">
                      See Real Examples
                    </NeoButton>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Add-Ons Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Want to Go <span className="text-yellow-600">EXTRA</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Premium effects that make your pouches truly one-of-a-kind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <NeoCard className="bg-gradient-to-br from-white to-yellow-50">
              <div className="flex items-start gap-4 mb-4">
                <Gem className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-2xl mb-2">Spot UV</h3>
                  <p className="text-gray-600">Selectively shiny areas that create amazing contrast!</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Highlight your logo in high-gloss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Works best on matte backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Adds tactile dimension</span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-black">+$0.02-0.05 per pouch</p>
              </div>
            </NeoCard>

            <NeoCard className="bg-gradient-to-br from-white to-purple-50">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-2xl mb-2">Embossing</h3>
                  <p className="text-gray-600">3D raised patterns you can feel—super tactile and memorable!</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Your logo in 3D relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Unique texture patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Can combine with hot foil</span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-black">+$0.03-0.08 per pouch</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Comparison Helper Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Still Not Sure?
            </h2>
            <p className="text-xl text-gray-600">
              Here's a super simple way to decide!
            </p>
          </div>

          <NeoCard className="bg-gradient-to-br from-gray-50 to-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-2xl mb-4">Choose Gloss If...</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span>Your brand is colorful and fun</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span>You want maximum shelf pop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span>You're targeting kids or mainstream retail</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-black text-2xl mb-4">Choose Matte If...</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <span>Your brand is premium or organic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <span>You want a sophisticated look</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <span>You're targeting health-conscious consumers</span>
                  </li>
                </ul>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            Ready to Make Your<br/>
            <span className="text-[#D4FF00]">Packaging Shine?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Order a sample pack with different finishes so you can see and feel the difference yourself!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">Order Sample Pack</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              Talk to Expert
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
