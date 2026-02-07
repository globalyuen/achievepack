import { Leaf, Shield, Eye, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
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

export default function PouchMaterialCatalogPage() {
  const MATERIALS = [
    {
      id: 'kraft-triplex',
      name: 'Kraft Triplex',
      tagline: 'Premium Eco Look with Max Protection',
      barrier: 'High',
      shelf: '12-24 months',
      price: '$$$',
      color: 'bg-amber-100',
      icon: Shield,
      features: ['Natural kraft exterior', 'Clear window option', 'Aluminum foil barrier', 'Maximum freshness'],
      bestFor: ['Premium coffee', 'Supplements', 'Baby food', 'Pharmaceuticals'],
      link: '/materials/cello-kraft-triplex'
    },
    {
      id: 'kraft-duplex',
      name: 'Kraft Duplex',
      tagline: 'Natural Look, Medium Protection',
      barrier: 'Medium',
      shelf: '6-12 months',
      price: '$$',
      color: 'bg-amber-50',
      icon: Leaf,
      features: ['Kraft paper base', 'Metallized barrier', 'Great value', 'Eco-friendly vibe'],
      bestFor: ['Coffee', 'Tea', 'Nuts', 'Dried fruits'],
      link: '/materials/kraft-duplex'
    },
    {
      id: 'clear-high',
      name: 'Clear High Barrier',
      tagline: 'See Your Product, Keep It Fresh',
      barrier: 'High',
      shelf: '12-18 months',
      price: '$$$',
      color: 'bg-blue-100',
      icon: Eye,
      features: ['Transparent', 'Aluminum-free metallic', 'Show off product', 'Strong barrier'],
      bestFor: ['Colorful snacks', 'Granola', 'Pet treats', 'Visual appeal products'],
      link: '/materials'
    },
    {
      id: 'clear-medium',
      name: 'Clear Medium Barrier',
      tagline: 'Visibility + Good Protection',
      barrier: 'Medium',
      shelf: '6-12 months',
      price: '$$',
      color: 'bg-blue-50',
      icon: Eye,
      features: ['Crystal clear', 'Metallized layer', 'Cost-effective', 'Product visibility'],
      bestFor: ['Cookies', 'Candy', 'Trail mix', 'Healthy snacks'],
      link: '/materials'
    },
    {
      id: 'matte-white',
      name: 'Matte White',
      tagline: 'Clean Canvas for Your Brand',
      barrier: 'Medium',
      shelf: '6-12 months',
      price: '$$',
      color: 'bg-gray-100',
      icon: Sparkles,
      features: ['Smooth matte finish', 'Premium feel', 'Print-friendly', 'Modern aesthetic'],
      bestFor: ['Wellness brands', 'Organic products', 'Minimalist design', 'Premium positioning'],
      link: '/materials'
    },
    {
      id: 'black-matte',
      name: 'Black Matte',
      tagline: 'Bold & Luxurious',
      barrier: 'Medium',
      shelf: '6-12 months',
      price: '$$',
      color: 'bg-gray-900',
      icon: Sparkles,
      features: ['Deep black', 'Luxury appeal', 'Matte texture', 'Striking shelf presence'],
      bestFor: ['Premium coffee', 'Protein powder', 'High-end snacks', 'Luxury brands'],
      link: '/materials',
      textColor: 'text-white'
    }
  ]

  const QUICK_GUIDE = [
    {
      question: 'Want natural eco vibe?',
      answer: 'Kraft Duplex or Kraft Triplex',
      color: 'bg-amber-100'
    },
    {
      question: 'Need to show product?',
      answer: 'Clear High or Medium Barrier',
      color: 'bg-blue-100'
    },
    {
      question: 'Want premium/luxury feel?',
      answer: 'Black Matte or Matte White',
      color: 'bg-gray-100'
    },
    {
      question: 'Maximum shelf life?',
      answer: 'Kraft Triplex or Clear High',
      color: 'bg-purple-100'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Material Catalog | Choose the Perfect Pouch Material | POUCH.ECO</title>
        <meta name="description" content="Compare all pouch materials! Kraft paper, clear films, matte finishes. Find the perfect combo of look, barrier, and price for your product." />
        <link rel="canonical" href="https://pouch.eco/materials/catalog" />
        <meta property="og:title" content="Material Catalog | All Pouch Materials Compared" />
        <meta property="og:description" content="Kraft, Clear, Matte - compare all materials side by side!" />
        <meta property="og:url" content="https://pouch.eco/materials/catalog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Material Catalog | Pouch Materials" />
        <meta name="twitter:description" content="Compare kraft, clear, and matte materials for your pouches" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">MATERIAL CATALOG</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Material Catalog<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Find Your Perfect Match</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            <strong>Not sure which material to choose?</strong> Compare all our options side-by-side! We'll help you find the perfect combo of look, protection, and price.
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Get Expert Help
            </NeoButton>
            <NeoButton variant="secondary">Request Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Quick Decision Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {QUICK_GUIDE.map((item, idx) => (
              <NeoCard key={idx} color={item.color}>
                <h3 className="font-black text-xl mb-2">{item.question}</h3>
                <p className="text-gray-700 text-lg">→ <strong>{item.answer}</strong></p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Material Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">All Materials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIALS.map((material) => (
              <NeoCard key={material.id} color={material.color} className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <material.icon className={`w-10 h-10 ${material.textColor || 'text-gray-800'}`} />
                  <div className="flex flex-col items-end gap-2">
                    <NeoBadge color={
                      material.barrier === 'High' ? 'bg-purple-300' :
                      material.barrier === 'Medium' ? 'bg-blue-300' :
                      'bg-green-300'
                    }>
                      {material.barrier} Barrier
                    </NeoBadge>
                    <span className="font-mono font-black text-lg">{material.price}</span>
                  </div>
                </div>

                <h3 className={`font-black text-2xl mb-2 ${material.textColor || 'text-gray-800'}`}>
                  {material.name}
                </h3>
                <p className={`text-sm mb-4 ${material.textColor || 'text-gray-600'}`}>
                  {material.tagline}
                </p>

                <div className={`bg-white border-2 border-black p-3 mb-4 ${material.textColor ? 'bg-opacity-90' : ''}`}>
                  <p className="font-bold text-sm">Shelf Life: {material.shelf}</p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className={`font-bold text-sm mb-2 ${material.textColor || 'text-gray-800'}`}>
                    Features:
                  </p>
                  <ul className="space-y-1">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-1 ${material.textColor || 'text-gray-700'}`}>
                        <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className={`font-bold text-sm mb-2 ${material.textColor || 'text-gray-800'}`}>
                    Best for:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {material.bestFor.map((item, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 border ${material.textColor ? 'border-white text-white' : 'border-black'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={material.link} className="block">
                  <div className={`flex items-center justify-between px-4 py-2 border-2 border-black ${material.textColor ? 'bg-white text-black' : 'bg-black text-white'} hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                    <span className="font-bold text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">Side-by-Side Comparison</h2>
          
          <NeoCard className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left p-3 font-black">Material</th>
                  <th className="text-center p-3 font-black">Barrier</th>
                  <th className="text-center p-3 font-black">Shelf Life</th>
                  <th className="text-center p-3 font-black">Look</th>
                  <th className="text-center p-3 font-black">Price</th>
                </tr>
              </thead>
              <tbody>
                {MATERIALS.map((material, idx) => (
                  <tr key={material.id} className={idx !== MATERIALS.length - 1 ? 'border-b border-black' : ''}>
                    <td className="p-3 font-bold">{material.name}</td>
                    <td className="p-3 text-center">{material.barrier}</td>
                    <td className="p-3 text-center">{material.shelf}</td>
                    <td className="p-3 text-center text-xs">{material.tagline.split(',')[0]}</td>
                    <td className="p-3 text-center font-mono">{material.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </NeoCard>
        </div>
      </section>

      {/* Still Not Sure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <h2 className="font-black text-3xl mb-4">Still Not Sure?</h2>
            <p className="text-xl text-gray-700 mb-6">
              We can send you <strong>FREE physical samples</strong> of any material so you can touch, feel, and see the quality yourself!
            </p>
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">Sample Kit Includes:</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 3-5 material samples of your choice</li>
                <li>✓ Printed examples (if available)</li>
                <li>✓ Size reference guide</li>
                <li>✓ Material specification sheet</li>
              </ul>
            </div>
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Request Free Samples
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            Found Your Perfect Material?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a free consultation and we'll help you finalize your choice!
          </p>
          <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
            Get Started Now
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
