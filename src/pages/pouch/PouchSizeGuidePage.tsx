import { Helmet } from 'react-helmet-async'
import { Ruler, Package, Download, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

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
    magenta: 'bg-[#FF00FF] text-white'
  }
  return <span className={`inline-block px-4 py-2 text-sm font-black uppercase border-2 border-black ${colors[color as keyof typeof colors]}`}>{children}</span>
}

export default function PouchSizeGuidePage() {
  const baseUrl = getBaseUrl()

  const SIZES = [
    { name: 'MINI', dimension: '3.5" × 5.5"', capacity: '50g', volume: '85ml', bestFor: 'Samples, Single servings', moq: '500 units', price: '$0.50-0.70' },
    { name: 'SMALL', dimension: '5" × 8"', capacity: '100g', volume: '170ml', bestFor: 'Tea, Spices, Snacks', moq: '500 units', price: '$0.65-0.85' },
    { name: 'MEDIUM', dimension: '6" × 9"', capacity: '200g', volume: '340ml', bestFor: 'Coffee, Nuts, Pet treats', moq: '500 units', price: '$0.80-1.10' },
    { name: 'LARGE', dimension: '7" × 10"', capacity: '350g', volume: '590ml', bestFor: 'Protein powder, Supplements', moq: '500 units', price: '$1.00-1.30' },
    { name: 'XL', dimension: '8" × 12"', capacity: '500g', volume: '850ml', bestFor: 'Bulk snacks, Granola', moq: '500 units', price: '$1.20-1.50' },
  ]

  const FEATURES = [
    { icon: CheckCircle, title: 'Round Corner & Tear Notch', desc: 'Easy opening experience for your customers' },
    { icon: Zap, title: 'Reclosable Zipper', desc: 'Keeps products fresh after opening' },
    { icon: Package, title: 'Strong Seal', desc: 'Airtight protection for your products' },
    { icon: Ruler, title: 'Bottom Gusset', desc: 'Stands up perfectly on shelves' },
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Pouch Size Guide | Find Your Perfect Fit | Pouch.eco</title>
        <meta name="description" content="Easy size guide for eco pouches. From mini samples to XL bulk packs. All sizes available from just 500 units with custom printing included." />
        <link rel="canonical" href={`${baseUrl}/size-guide`} />
        
        <meta property="og:title" content="Pouch Size Guide | Find Your Perfect Fit | Pouch.eco" />
        <meta property="og:description" content="Easy size guide for eco pouches. From mini samples to XL bulk packs. All sizes available from just 500 units." />
        <meta property="og:url" content={`${baseUrl}/size-guide`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/size-guide-og.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pouch Size Guide | Find Your Perfect Fit | Pouch.eco" />
        <meta name="twitter:description" content="Easy size guide for eco pouches. From mini samples to XL bulk packs." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pouch Size Guide",
            "description": "Comprehensive size guide for eco-friendly pouches",
            "url": `${baseUrl}/size-guide`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": SIZES.map((size, index) => ({
                "@type": "Product",
                "@id": `${baseUrl}/size-guide#${size.name}`,
                "name": `${size.name} Eco Pouch`,
                "description": size.bestFor,
                "offers": {
                  "@type": "Offer",
                  "price": size.price.split('-')[0].replace('$', ''),
                  "priceCurrency": "USD"
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <NeoBadge color="lime">START HERE</NeoBadge>
            <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none">
              Pick Your<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF]">Perfect Size</span>
            </h1>
            <p className="mt-8 text-2xl text-gray-600 max-w-3xl mx-auto">
              Not sure what size you need? We make it simple. Compare sizes to a soda can, check capacity, and download dielines for your designer—all in one place!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary">Download All Dielines</NeoButton>
            <NeoButton variant="secondary">Get Free Sample</NeoButton>
          </div>
        </div>
      </section>

      {/* Quick Comparison Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              <span className="text-[#2cbc63]">Size Comparison</span> at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All sizes compared to a standard 355ml cola can for easy reference
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {SIZES.map((size, index) => (
              <NeoCard key={index}>
                <div className="text-center">
                  <NeoBadge color={index === 2 ? 'lime' : 'cyan'}>{size.name}</NeoBadge>
                  <div className="mt-6 mb-4">
                    <Ruler className="w-12 h-12 mx-auto text-black" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-black text-lg">{size.dimension}</p>
                    <p className="text-gray-600">Holds: <span className="font-bold text-black">{size.capacity}</span></p>
                    <p className="text-gray-600">Volume: <span className="font-bold text-black">{size.volume}</span></p>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-black">
                    <p className="text-xs text-gray-500 mb-2">BEST FOR</p>
                    <p className="font-bold text-sm">{size.bestFor}</p>
                  </div>
                  <div className="mt-4 p-3 bg-[#D4FF00]/20 border-2 border-black">
                    <p className="text-xs font-black">{size.price}/unit</p>
                    <p className="text-xs text-gray-600">From {size.moq}</p>
                  </div>
                  <NeoButton variant="dark" className="mt-4 w-full text-sm py-3 px-4">
                    <Download className="inline w-4 h-4 mr-2" />
                    Dieline
                  </NeoButton>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pouch Features Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Every Pouch Comes With
            </h2>
            <p className="text-xl text-gray-600">
              Premium features included—no extra cost!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FEATURES.map((feature, index) => (
              <NeoCard key={index}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 bg-[#D4FF00] border-2 border-black">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <NeoCard className="inline-block">
              <div className="flex items-center gap-6">
                <div className="text-left">
                  <p className="font-black text-2xl mb-2">Plus: Custom Full-Color Printing</p>
                  <p className="text-gray-600">Your design, digitally printed on every pouch. No setup fees!</p>
                </div>
                <div className="flex-shrink-0">
                  <NeoBadge color="lime">INCLUDED</NeoBadge>
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
            Still Not Sure?<br/>
            <span className="text-[#D4FF00]">We're Here to Help!</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Order a free sample pack with all 5 sizes, or chat with our team to find the perfect fit for your product.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">Order Sample Pack</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              Chat With Us <ArrowRight className="inline ml-2 w-5 h-5" />
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
