import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Leaf, Zap, Shield, Wrench, Sparkles, X, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { SortableOptionsTable, CLOSURE_OPTIONS, SURFACE_OPTIONS } from '../../../components/SortableOptionsTable'

// Surface finish gallery data
const SURFACE_GALLERY = [
  { id: 'matte', name: 'Matte Finish', description: 'Sophisticated & non-reflective', image: '/imgs/surface/a_matte_finish_detail_7483118.webp' },
  { id: 'gloss', name: 'Gloss Finish', description: 'High-shine & vibrant', image: '/imgs/surface/a_gloss_finish_detail_5685549.webp' },
  { id: 'spot-matte', name: 'Spot Matte', description: 'Contrast glossy & matte', image: '/imgs/surface/spot-matte-finish.webp' },
  { id: 'spot-uv', name: 'Spot UV Finish', description: 'Glossy spots over matte', image: '/imgs/surface/spot-uv-pouch.png' },
  { id: 'soft-touch', name: 'Soft Touch', description: 'Velvet-like tactile feel', image: '/imgs/surface/a_softtouch_pouch_correct_7961783.webp' },
  { id: 'metallic', name: 'Metallic Gold', description: 'Luxurious premium look', image: '/imgs/surface/a_metallic_gold_closeup_5151764.webp' },
  { id: 'embossed', name: 'Embossed', description: 'Raised 3D texture', image: '/imgs/surface/a_embossed_navy_9933981.webp' },
  { id: 'foil', name: 'Foil Stamping', description: 'Metallic accents', image: '/imgs/surface/a_foil_green_charcoal_7632386.webp' },
]

// Reclosure gallery data
const RECLOSURE_GALLERY = [
  { id: 'press-zipper', name: 'Press-to-Close', description: 'Standard zipper', image: '/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp' },
  { id: 'spout', name: 'Spout Cap', description: 'For liquids & pastes', image: '/imgs/reclose/a_spout_closure_closeup_detail_2705813.webp' },
  { id: 'tintie', name: 'Tin Tie', description: 'Coffee classic', image: '/imgs/reclose/a_tintie_coffee_pouch_correct_4114906.webp' },
  { id: 'valve', name: 'Degassing Valve', description: 'Freshness vent', image: '/imgs/store/additional/valve.webp' },
]

// Surface finish comparison data
const SURFACE_COMPARISON = [
  { finish: 'Gloss', visual: 'Shiny, vibrant', tactile: 'Smooth', bestFor: 'Snacks, Candy', cost: 'Base Cost', costColor: 'text-green-600' },
  { finish: 'Matte', visual: 'Elegant, subtle', tactile: 'Smooth, dry', bestFor: 'Organic, Premium', cost: 'Base Cost', costColor: 'text-green-600' },
  { finish: 'Spot Matte', visual: 'Contrast effect', tactile: 'Mixed texture', bestFor: 'Coffee, Luxury', cost: '+$0.05-0.10/unit', costColor: 'text-amber-600' },
  { finish: 'Soft-Touch', visual: 'Rich, ultra-matte', tactile: 'Velvety', bestFor: 'Luxury, Cosmetics', cost: '+10-15%', costColor: 'text-amber-600' },
  { finish: 'Spot UV', visual: 'Contrast highlights', tactile: 'Textured', bestFor: 'Brand emphasis', cost: '+$0.02-0.05/unit', costColor: 'text-purple-600' },
  { finish: 'Hot Foil', visual: 'Metallic shine', tactile: 'Smooth metallic', bestFor: 'Luxury, Awards', cost: '+$0.05-0.15/unit', costColor: 'text-purple-600' },
]

// Reclosure comparison data
const RECLOSURE_COMPARISON = [
  { type: 'Press Zipper', convenience: 3, sealing: 4, bestFor: 'Snacks, Dry Goods', cost: '+5%', costColor: 'text-green-600' },
  { type: 'Slider Zipper', convenience: 5, sealing: 4, bestFor: 'Premium Snacks', cost: '+15%', costColor: 'text-amber-600' },
  { type: 'Spout', convenience: 4, sealing: 5, bestFor: 'Baby Food, Liquids', cost: '+30%', costColor: 'text-purple-600' },
  { type: 'Tin Tie', convenience: 2, sealing: 3, bestFor: 'Coffee, Bakery', cost: '+10%', costColor: 'text-amber-600' },
]

// FAQ data
const FAQ_DATA = [
  {
    question: 'Can I combine multiple finishes on one pouch?',
    answer: 'Yes! Popular combinations include matte lamination + spot UV for contrast, or soft-touch + hot foil for luxury. We can help you design the optimal finish combination for your brand positioning.'
  },
  {
    question: 'Are zippers available on all pouch sizes?',
    answer: 'Yes, we can apply press-to-close zippers to almost any custom printed pouch size. Sliders and spouts have some size restrictions depending on the pouch geometry.'
  },
  {
    question: 'Do spout pouches cost more than zipper pouches?',
    answer: 'Spout pouches typically cost 20-40% more than zipper pouches due to the spout component and additional sealing process. However, they offer unique functionality for liquid and semi-liquid products that zippers cannot provide.'
  },
  {
    question: 'Are these options available for compostable pouches?',
    answer: 'Absolutely. We offer certified compostable zippers (PLA-based) and water-based matte/gloss coatings that meet EN 13432 standards. The zipper material always matches the pouch material for proper end-of-life processing.'
  },
]

// Star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <span className="text-[#10B981]">
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
  </span>
)

export default function SurfaceAndReclosureOptionsPage() {
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  

  return (
    <PouchLayout>
      <Helmet>
        <title>Premium Customization Options | Surface Finishes & Reclosures | POUCH.ECO</title>
        <meta name="description" content="Explore our premium surface finishes (Matte, Gloss, Soft-Touch, Spot UV) and reclosure options (Zippers, Spouts, Tin-Ties) for sustainable flexible packaging." />
        <link rel="canonical" href="https://pouch.eco/options/surface-and-reclosure" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Customization Options | Surface Finishes & Reclosures | POUCH.ECO" />
        <meta property="og:description" content="Explore our premium surface finishes (Matte, Gloss, Soft-Touch, Spot UV) and reclosure options (Zippers, Spouts, Tin-Ties) for sustainable flexible packaging." />
        <meta property="og:url" content="https://pouch.eco/options/surface-and-reclosure" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pouch.eco/imgs/surface/a_achieve_pack_main_kv_six_finishes_3535755.webp" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Premium Customization Options: Surface Finishes & Reclosures for Sustainable Packaging",
            "description": "Complete guide to premium surface finishes and reclosure options for eco-friendly compostable pouches",
            "author": {
              "@type": "Organization",
              "name": "POUCH.ECO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "datePublished": "2024-01-01T00:00:00Z",
            "dateModified": new Date().toISOString()
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[4px] text-[#10B981] font-bold mb-4">
              ELEVATE YOUR BRAND · FUNCTIONAL DESIGN · PREMIUM AESTHETICS
            </p>
            <h1 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Complete Customization Guide:
              <span className="text-[#10B981]"> Surface Finishes & Reclosures</span>
            </h1>
            <p className="text-lg md:text-xl font-['JetBrains_Mono'] mb-8 text-gray-300">
              Your packaging is your silent salesman. Choosing the right surface finish can elevate your brand's perceived value, while the correct reclosure option ensures product freshness and customer convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/materials"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#10B981] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                Browse Materials
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: SURFACE FINISHES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              Part 1: Surface <span className="text-[#10B981]">Finishes</span>
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600">
              Transform your sustainable packaging into a premium shelf presence.
            </p>
          </div>

          {/* Main KV Image */}
          <div 
            className="lb-img cursor-zoom-in relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 cursor-zoom-in group"
            
          >
            <img 
              src="/imgs/surface/a_achieve_pack_main_kv_six_finishes_3535755.webp" 
              alt="Six premium surface finishes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-center font-['JetBrains_Mono'] text-sm">
              Explore our six premium finishes: Matte, Gloss, Soft-Touch, Spot UV, Foil, and Embossing.
            </p>
          </div>

          {/* Surface Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {SURFACE_GALLERY.map((item) => (
              <div 
                key={item.id}
                className="lb-img cursor-zoom-in bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#10B981] transition-all cursor-pointer group"
                
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Effect Finishes */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-4 border-black">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#10B981]" />
              Special Effect Finishes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3">Spot UV Varnish</h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                  Apply a high-gloss coating to specific areas (like your logo) over a matte background. This creates a striking contrast and visual depth that draws the eye immediately.
                </p>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Highlight logos and text</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Create subtle texture patterns</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Best combined with matte base</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Hot Foil Stamping</h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                  Metallic foil transfer for the ultimate premium look. Available in gold, silver, copper, and rose gold. Perfect for award seals and luxury branding.
                </p>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Reflective metallic shine</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Premium perception</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Ideal for limited editions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Surface Comparison Table */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center">Finish Comparison Guide</h3>
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">Finish</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Visual Effect</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Tactile Feel</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Best For</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Cost Impact</th>
                </tr>
              </thead>
              <tbody>
                {SURFACE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                    <td className="border border-gray-300 p-3 font-bold">{row.finish}</td>
                    <td className="border border-gray-300 p-3">{row.visual}</td>
                    <td className="border border-gray-300 p-3">{row.tactile}</td>
                    <td className="border border-gray-300 p-3">{row.bestFor}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${row.costColor}`}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sortable Options Table */}
          <div className="mb-12">
            <SortableOptionsTable 
              options={SURFACE_OPTIONS} 
              title="Surface Finishes Database" 
              categoryColor="purple"
              type="surface"
            />
          </div>

          {/* Surface Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Leaf className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Eco-Friendly</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                All surface finishes compatible with compostable and recyclable materials.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> EN13432 Certified</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Home Compostable</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> BPI Certified</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Wrench className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Premium Quality</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                High-quality finishes that enhance brand image and product appeal.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Vibrant Color</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Scratch Resistant</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Durable</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 border-4 border-black rounded-xl">
              <Sparkles className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Customizable</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                Mix and match finishes to create unique packaging solutions.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Combination Options</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Brand Integration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Special Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: RECLOSURE OPTIONS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              Part 2: Re-<span className="text-[#10B981]">Closure</span> Options
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600">
              Keep products fresh and consumers happy with functional closures.
            </p>
          </div>

          {/* Reclosure Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {RECLOSURE_GALLERY.map((item) => (
              <div 
                key={item.id}
                className="lb-img cursor-zoom-in bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#10B981] transition-all cursor-pointer group"
                
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Zipper & Spout Types */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-4 border-black">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#10B981]" />
              Zipper & Spout Types
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">Press-to-Close Zipper</h4>
                <p className="text-sm text-gray-600">The most economical option. Reliable sealing for 500+ open/close cycles. Available on almost all pouch formats.</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">Slider Zipper</h4>
                <p className="text-sm text-gray-600">Premium one-hand operation with a tactile "click". Ideal for snacks and pet food where convenience is key.</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">Child-Resistant</h4>
                <p className="text-sm text-gray-600">ASTM D3475 certified. Required for cannabis and pharmaceutical packaging. Push-and-slide mechanism.</p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-bold mb-2">Spout Caps</h4>
                <p className="text-sm text-gray-600">Essential for liquids. Available in various diameters (8.6mm to 33mm). Tamper-evident options available.</p>
              </div>
            </div>
          </div>

          {/* Reclosure Comparison Table */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center">Reclosure Comparison</h3>
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">Type</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Convenience</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Sealing</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Best For</th>
                  <th className="border border-gray-300 p-3 text-left font-bold">Cost Impact</th>
                </tr>
              </thead>
              <tbody>
                {RECLOSURE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                    <td className="border border-gray-300 p-3 font-bold">{row.type}</td>
                    <td className="border border-gray-300 p-3"><StarRating rating={row.convenience} /></td>
                    <td className="border border-gray-300 p-3"><StarRating rating={row.sealing} /></td>
                    <td className="border border-gray-300 p-3">{row.bestFor}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${row.costColor}`}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sortable Options Table */}
          <div className="mb-12">
            <SortableOptionsTable 
              options={CLOSURE_OPTIONS} 
              title="Re-closure Options Database" 
              categoryColor="blue"
              type="closure"
            />
          </div>

          {/* Reclosure Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Zap className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Easy Access</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                Re-closure options designed for convenient product access and resealing.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> One-Hand Operation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Secure Seal</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Child-Resistant</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Shield className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Product Protection</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                Advanced sealing technologies to maintain freshness and quality.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Oxygen Barrier</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Moisture Protection</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Extended Shelf Life</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 border-4 border-black rounded-xl">
              <Package className="w-10 h-10 text-[#10B981] mb-3" />
              <h3 className="text-xl font-black uppercase mb-3">Versatile</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-3">
                Suitable for various industries and product types.
              </p>
              <ul className="space-y-1 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Food & Beverages</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Pharmaceuticals</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#10B981]" /> Consumer Goods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-8 text-center">
            Frequently Asked <span className="text-[#10B981]">Questions</span>
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-4 border-black rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#10B981]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="p-5 bg-white border-t-2 border-gray-200">
                    <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#10B981] border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-4">
            Ready to Create Your Custom Pouch?
          </h2>
          <p className="text-lg font-['JetBrains_Mono'] mb-8">
            Start with a free consultation or request samples to see and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] transition-all"
            >
              <Package className="w-6 h-6" />
              Start Your Custom Order
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="https://calendly.com/pouch-eco/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Shield className="w-6 h-6" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}