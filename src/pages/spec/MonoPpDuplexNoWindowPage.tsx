import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Recycle, EyeOff } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const MonoPpDuplexNoWindowPage: React.FC = () => {
  const structureName = 'OPP30 / CPP60 (PP Duplex) No Window'
  const thickness = '90 micron or 3.5 mil'
  const otr = '<200'
  const wvtr = '<5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <ClickableImage
              src="/imgs/spec/mono-pp-duplex-nowindow.webp"
              alt="Mono PP Duplex No Window Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Mono PP Duplex No Window - Best Moisture Recyclable"
            />
            <h3 className="text-xl font-bold text-purple-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-5 w-5 text-purple-500" />
              <EyeOff className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-600">100% PP Recyclable - Full Print Coverage</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-purple-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-purple-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-purple-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-purple-700">Best Barrier + Recyclable</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layer-breakdown',
      title: 'Layer-by-Layer Breakdown',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-purple-800">OPP30 (Outer Layer)</p>
                <p className="text-sm text-purple-700">30-micron oriented polypropylene with opaque/white base or reverse printing for full brand coverage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">CPP60 (Inner Layer)</p>
                <p className="text-sm text-green-700">60-micron cast polypropylene sealant maintains 100% PP mono-material composition.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-properties',
      title: 'Barrier Properties & Performance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Best moisture barrier available in recyclable mono-material category, with added light protection.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Moderate - better than PE alternatives.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Best in class - lowest WVTR for recyclable.</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">Complete Light Barrier</h4>
            <p className="text-sm text-purple-700">Opaque PP provides 100% light protection, extending shelf life for light-sensitive products like vitamins, oils, and certain snacks.</p>
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
            <h4 className="font-semibold text-green-800 mb-3">PP Recycling Benefits</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Mono-Material:</strong> 100% PP for proper recycling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>High Value:</strong> PP is a valuable recycling commodity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Growing Programs:</strong> PP recycling expanding rapidly</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Best for moisture-sensitive products needing full branding and recyclability:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Crackers & cookies', 'Candy bags', 'Chip bags', 'Cereal', 'Granola', 'Snack mixes', 'Pet treats', 'Bath products', 'Retail packaging'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-purple-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Opaque Recyclable PP Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture + recyclable</strong> – WVTR &lt;5</li>
            <li><strong>Full branding</strong> – Complete print coverage</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse recyclable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Recyclable snack bag best moisture barrier"</li>
              <li>• "PP mono-material cracker packaging"</li>
              <li>• "Opaque recyclable stand-up pouch"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is PP or PE better for recyclability?', answer: 'Both can be recycled as mono-materials. PE has more established drop-off programs currently. PP offers better moisture barrier. Choose based on product needs.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 6-9 months for dry goods. The excellent moisture barrier keeps crackers and snacks crispy longer than PE alternatives.' },
    { question: 'Can I hot-fill with this structure?', answer: 'CPP has moderate heat resistance. For temperatures above 85°C, contact us for high-temperature PP options.' },
    { question: 'What print finishes are available?', answer: 'Matte, gloss, and soft-touch finishes available on the OPP outer layer. Spot effects also possible.' },
    { question: 'Is white or metalized OPP base better?', answer: 'White OPP provides excellent ink holdout for vibrant colors. For metallic effects without losing recyclability, consider ink effects rather than metallization.' }
  ]

  const relatedLinks = [
    { title: "Shop Recyclable Pouches", url: "/store", description: "Browse mono-material options" },
    { title: "Clear PP Duplex", url: "/spec/mono-pp-duplex-clear", description: "Window-capable version" },
    { title: "PE No Window", url: "/spec/mono-pe-duplex-nowindow", description: "Alternative material" },
    { title: "Recyclable Guide", url: "/materials/recyclable-mono-pp", description: "Learn about PP recycling" }
  ]

  return (
    <SEOPageLayout
      title="Mono PP Duplex No Window | Best Barrier Recyclable Packaging"
      description="Mono PP Duplex No Window: OPP30/CPP60 (90 micron). 100% PP recyclable, best moisture barrier (WVTR <5), full print coverage. Ideal for crackers, candy, snacks."
      heroTitle="Mono PP Duplex No Window - Best Barrier Opaque"
      heroSubtitle="OPP30 / CPP60 - Ultimate Moisture + Full Print Coverage"
      heroLogo="/eco-logo/white-bkg/eco-logo-recycle.png"
      heroLogoAlt="Store Drop-off Recyclable"
      introSummary="The best moisture barrier in opaque recyclable packaging. 100% PP mono-material with WVTR <5 g/m²/day, complete light protection, and full-surface printing capability for maximum branding impact."
      keywords={[
        'opaque mono PP packaging',
        'recyclable PP no window',
        'best barrier recyclable pouch',
        'PP mono-material opaque',
        'snack bag recyclable',
        'cracker packaging recyclable',
        'candy bag PP recyclable',
        'moisture barrier recyclable'
      ]}
      canonicalUrl="https://achievepack.com/spec/mono-pp-duplex-nowindow"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default MonoPpDuplexNoWindowPage
