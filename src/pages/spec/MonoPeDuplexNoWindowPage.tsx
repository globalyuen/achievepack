import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Recycle, EyeOff } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const MonoPeDuplexNoWindowPage: React.FC = () => {
  const structureName = 'PE60 / PE60 (PE Duplex) No Window'
  const thickness = '120 micron or 4.7 mil'
  const otr = '<300'
  const wvtr = '<10'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <ClickableImage
              src="/imgs/spec/mono-pe-duplex-nowindow.webp"
              alt="Mono PE Duplex No Window Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Mono PE Duplex No Window - Fully Recyclable"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-5 w-5 text-blue-500" />
              <EyeOff className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-blue-600">100% PE Recyclable - Full Print Coverage</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-blue-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-blue-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-blue-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Print Area</p>
                <p className="font-semibold text-blue-700">100% Coverage</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layer-breakdown',
      title: 'How Is Each Layer Built?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-blue-800">PE60 (Outer Layer)</p>
                <p className="text-sm text-blue-700">60-micron polyethylene with full-surface printing. Opaque white or reverse-printed for complete brand coverage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">PE60 (Inner Layer)</p>
                <p className="text-sm text-green-700">60-micron polyethylene sealant maintains 100% PE mono-material for recyclability.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-properties',
      title: 'What Barrier Protection Does It Offer?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Same barrier performance as clear PE duplex, with added light barrier from opaque printing.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic - inherent PE limitation.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Good - PE natural moisture resistance.</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">Added Light Barrier</h4>
            <p className="text-sm text-purple-700">Opaque printing provides light protection, helping products sensitive to light degradation (some vitamins, oils).</p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Recyclability & Sustainability',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Circular Economy Ready</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Mono-Material:</strong> 100% PE composition</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Store Drop-off:</strong> Recycles with PE films</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>How2Recycle:</strong> Eligible for Store Drop-off label</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'What Products Is This Best For?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Best for products needing full branding coverage with recyclability:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Pet food bags', 'Rice & grains', 'Fertilizer', 'Ice bags', 'Lawn products', 'Mulch bags', 'E-commerce mailers', 'Retail packaging', 'Industrial parts'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Opaque Recyclable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Full branding</strong> – 100% printable surface</li>
            <li><strong>Recyclable</strong> – Store drop-off compatible</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse recyclable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Recyclable opaque pouch for pet food"</li>
              <li>• "Mono-PE packaging full print coverage"</li>
              <li>• "How2Recycle compatible stand-up pouch"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What is the difference from clear PE duplex?', answer: 'Same structure and recyclability, but with opaque/printed outer layer instead of clear. Provides full branding coverage and light protection.' },
    { question: 'Does printing affect recyclability?', answer: 'Standard PE-compatible inks do not significantly affect recyclability. The pouch remains store drop-off compatible.' },
    { question: 'Can I get matte or gloss finish?', answer: 'Yes, we offer both matte and gloss varnish options over the printed PE surface.' },
    { question: 'What colors are available for base film?', answer: 'White PE is most common for full-color printing. Clear with reverse print also available for premium look.' },
    { question: 'Is this suitable for heavy products?', answer: 'Yes, PE has good puncture resistance. For very heavy loads (>5kg), we can increase film thickness.' }
  ]

  const relatedLinks = [
    { title: "Shop Recyclable Pouches", url: "/store", description: "Browse mono-material options" },
    { title: "Clear PE Duplex", url: "/spec/mono-pe-duplex-clear", description: "Window-capable version" },
    { title: "PP No Window", url: "/spec/mono-pp-duplex-nowindow", description: "Better moisture barrier" },
    { title: "Recyclable Guide", url: "/materials/recyclable-mono-pe", description: "Learn about PE recycling" }
  ]

  return (
    <SEOPageLayout
      title="Mono PE Duplex No Window | Opaque Recyclable Packaging"
      description="Mono PE Duplex No Window: PE60/PE60 (120 micron). 100% PE recyclable, full print coverage, light barrier. Store drop-off compatible. Ideal for pet food, rice, industrial products."
      heroTitle="Mono PE Duplex No Window - Opaque Recyclable"
      heroSubtitle="PE60 / PE60 - Full Print Coverage with Store Drop-off Recycling"
      heroLogo="/eco-logo/white-bkg/eco-logo-recycle.png"
      heroLogoAlt="Store Drop-off Recyclable"
      introSummary="Opaque version of our recyclable mono-PE structure offering full branding coverage and light protection. 100% PE composition maintains store drop-off recyclability while providing complete design freedom."
      keywords={[
        'opaque mono PE packaging',
        'recyclable PE no window',
        'full print recyclable pouch',
        'store drop-off packaging',
        'PE mono-material opaque',
        'pet food bag recyclable',
        'industrial recyclable pouch',
        'How2Recycle packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/mono-pe-duplex-nowindow"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default MonoPeDuplexNoWindowPage
