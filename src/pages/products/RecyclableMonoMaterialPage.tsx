import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, Award, CheckCircle, Shield, Clock, Leaf, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecyclableMonoMaterialPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: 'Recyclable Mono-Material Pouches',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's recyclable mono-material pouches</strong> are designed for curbside recycling compatibility. Made from a single polymer type (mono-PE or mono-PP), these pouches can be recycled through existing plastic recycling infrastructure.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Why Choose Mono-Material Recyclable:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• <strong>Curbside recyclable</strong> – Works with existing PE recycling streams</li>
              <li>• <strong>High barrier available</strong> – Up to 12+ months shelf life</li>
              <li>• <strong>Store drop-off compatible</strong> – Accepted at major retailers</li>
              <li>• <strong>Lower carbon footprint</strong> – vs virgin plastic alternatives</li>
              <li>• <strong>Full print capability</strong> – Premium graphics and finishes</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">⚡ When to Choose Recyclable vs Compostable:</h4>
            <p className="text-sm text-amber-700">
              <strong>Choose recyclable mono-material</strong> if your customers have better access to plastic recycling than composting facilities. Mono-PE pouches work with store drop-off programs at Walmart, Target, and other major retailers across the US.
            </p>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/4-infograhic/recyc.webp" 
              alt="Recyclable mono-material pouch infographic" 
              className="w-full rounded-lg shadow-md"
              caption="Recyclable mono-material packaging overview"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Mono-Material Options',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Mono-PE (Polyethylene)</h4>
              <p className="text-sm mb-2">100% PE structure compatible with LDPE recycling streams.</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• Store drop-off recyclable (How2Recycle)</li>
                <li>• Clear, white, or kraft-look options</li>
                <li>• Medium to high barrier</li>
                <li>• Best for: Snacks, coffee, dry goods</li>
              </ul>
              <Link to="/materials/recyclable-mono-pe" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">View Mono-PE specs →</Link>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Mono-PP (Polypropylene)</h4>
              <p className="text-sm mb-2">100% PP structure for #5 plastic recycling.</p>
              <ul className="text-xs space-y-1 text-purple-700">
                <li>• Higher heat resistance than PE</li>
                <li>• Better clarity options</li>
                <li>• Medium to high barrier</li>
                <li>• Best for: Hot fill, microwaveable</li>
              </ul>
              <Link to="/materials/recyclable-mono-pp" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">View Mono-PP specs →</Link>
            </div>
          </div>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Structure</th>
                  <th className="p-3 text-left">Barrier</th>
                  <th className="p-3 text-left">Recyclability</th>
                  <th className="p-3 text-left">Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Mono-PE Clear</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">Store drop-off</td>
                  <td className="p-3">Snacks, candy, nuts</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Mono-PE + EVOH</td>
                  <td className="p-3">High</td>
                  <td className="p-3">Store drop-off</td>
                  <td className="p-3">Coffee, tea, supplements</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Mono-PP Clear</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">#5 recycling</td>
                  <td className="p-3">Ready meals, snacks</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Mono-PP Metalised</td>
                  <td className="p-3">High</td>
                  <td className="p-3">#5 recycling</td>
                  <td className="p-3">Coffee, chips, pet food</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recyclable Materials Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Recyclable Mono-Material Packaging Samples</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable mono-material pouch certification infographic" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Recyclable Certified"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_pcr_store_drop_off_recycling_1908718.webp" 
                alt="Store drop-off recycling station for flexible packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Store Drop-Off"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp" 
                alt="Mono-material recyclable packaging certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Recyclability Compliance"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_grs_mono_material_luxury_texture_1597149.webp" 
                alt="Luxury recyclable mono-material pouch texture" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Premium Texture"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: 'How Mono-Material Recycling Works',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Understanding the recycling pathway helps you communicate effectively with consumers:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl mb-2">🏪</div>
              <h4 className="font-semibold text-green-800">Store Drop-Off</h4>
              <p className="text-xs mt-1 text-green-700">PE pouches can be recycled at store drop-off bins at Walmart, Target, Kroger, etc.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl mb-2">♻️</div>
              <h4 className="font-semibold text-blue-800">LDPE Stream</h4>
              <p className="text-xs mt-1 text-blue-700">Collected with plastic bags and film, then recycled into composite lumber, playground equipment.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-semibold text-purple-800">New Products</h4>
              <p className="text-xs mt-1 text-purple-700">Recycled into decking, fencing, and new packaging products.</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Labeling for Consumer Clarity</h4>
            <p className="text-sm text-amber-700">We can help you add How2Recycle labels to your packaging to clearly communicate recycling instructions. This reduces confusion and increases recycling rates.</p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Applications & Industries',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/industry/coffee-tea" className="block bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">☕ Coffee & Tea</h4>
              <p className="text-sm text-amber-700">High-barrier mono-PE with degassing valves for fresh roast protection.</p>
            </Link>
            <Link to="/industry/snacks-food" className="block bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">🥜 Snacks & Dry Goods</h4>
              <p className="text-sm text-green-700">Chips, nuts, granola – excellent barrier and shelf appeal.</p>
            </Link>
            <Link to="/industry/pet-food" className="block bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">🐕 Pet Food & Treats</h4>
              <p className="text-sm text-blue-700">High-barrier options for pet food with extended shelf life.</p>
            </Link>
            <Link to="/industry/supplements-powders" className="block bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">💪 Supplements</h4>
              <p className="text-sm text-purple-700">Protein powders, vitamins – moisture barrier critical.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Recyclability Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our mono-material pouches are designed for compatibility with major recycling programs:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">How2Recycle</h4>
              <p className="text-xs text-neutral-600 mt-1">Store drop-off label eligible</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏪</div>
              <h4 className="font-semibold text-neutral-800">Store Drop-Off</h4>
              <p className="text-xs text-neutral-600 mt-1">Walmart, Target, Kroger compatible</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌎</div>
              <h4 className="font-semibold text-neutral-800">APR Design Guide</h4>
              <p className="text-xs text-neutral-600 mt-1">Meets recyclability criteria</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">PCR Content Available</h4>
            <p className="text-sm text-green-700">Add post-consumer recycled content to your pouches. We offer 30%, 50%, and up to 100% PCR options for even greater sustainability credentials.</p>
            <Link to="/materials/pcr" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn about PCR options →</Link>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'Ordering & Pricing',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">100</div>
              <div className="text-sm text-green-600 font-medium">Minimum Order</div>
              <p className="text-xs mt-2 text-neutral-600">Digital printed</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">7-10</div>
              <div className="text-sm text-blue-600 font-medium">Days Production</div>
              <p className="text-xs mt-2 text-neutral-600">After approval</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">15-20</div>
              <div className="text-sm text-purple-600 font-medium">Days to USA</div>
              <p className="text-xs mt-2 text-neutral-600">Door-to-door</p>
            </div>
          </div>
          
          <div className="mt-4 bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-2">Competitive Pricing:</h4>
            <p className="text-sm text-neutral-600">Mono-material pouches are priced similarly to conventional multi-layer pouches, making the switch to recyclable packaging cost-neutral for most brands.</p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Get Recyclable Mono-Material Pouches',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready for recyclable packaging?</h4>
          <p className="text-neutral-700 mb-6">
            Get a quote for mono-PE or mono-PP pouches. We'll help you choose the right structure for your product and recycling goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-200">
            <p className="text-sm text-neutral-600">
              <strong>Related:</strong>{' '}
              <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">Mono-PE Details</Link> |{' '}
              <Link to="/materials/recyclable-mono-pp" className="text-primary-600 hover:underline">Mono-PP Details</Link> |{' '}
              <Link to="/materials/pcr" className="text-primary-600 hover:underline">PCR Content</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>Recyclable Mono-Material Pouches | Mono-PE & Mono-PP | Store Drop-Off | Achieve Pack</title>
        <meta name="description" content="Recyclable mono-material pouches made from 100% PE or PP. Curbside and store drop-off recyclable. High barrier options available. Low MOQ from 100 pieces." />
        <link rel="canonical" href="https://achievepack.com/products/recyclable-mono-material-pouches" />
        <meta property="og:title" content="Recyclable Mono-Material Pouches | Achieve Pack" />
        <meta property="og:description" content="100% recyclable mono-PE and mono-PP pouches. Store drop-off compatible. Low MOQ from 100 pieces." />
        <meta property="og:url" content="https://achievepack.com/products/recyclable-mono-material-pouches" />
        <meta name="keywords" content="recyclable pouches, mono-material packaging, mono-PE pouches, mono-PP pouches, store drop-off recyclable, How2Recycle, sustainable packaging, recyclable coffee bags, recyclable snack bags" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Recyclable Mono-Material Pouches",
            "description": "100% recyclable mono-PE and mono-PP pouches for food packaging. Store drop-off compatible with How2Recycle labeling.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" },
            "category": "Recyclable Packaging",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.40",
              "highPrice": "1.10",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Recyclable Mono-Material Pouches | Store Drop-Off Recyclable | Achieve Pack"
        description="100% recyclable mono-PE and mono-PP pouches. Store drop-off recyclable flexible packaging. Custom printed with low MOQ from 100 pieces."
        keywords={['recyclable mono-material pouches', 'mono-PE packaging', 'mono-PP bags', 'store drop-off recyclable', 'sustainable flexible packaging']}
        heroTitle="Recyclable Mono-Material Pouches"
        heroSubtitle="100% Mono-PE & Mono-PP | Store Drop-Off Recyclable | Low MOQ"
        introSummary="Our mono-material pouches are made from 100% single polymer (PE or PP) for easy recycling at store drop-off locations. Available custom printed from just 100 pieces minimum order."
        sections={sections}
        heroImage="/imgs/4-infograhic/recyc.webp"
      />
    </>
  )
}

export default RecyclableMonoMaterialPage
