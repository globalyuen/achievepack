import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Recycle, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const MonoPpDuplexClearPage: React.FC = () => {
  const structureName = 'OPP30 / CPP60 (PP Duplex)'
  const thickness = '90 micron or 3.5 mil'
  const otr = '<200'
  const wvtr = '<5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <ClickableImage
              src="/imgs/spec/mono-pp-duplex-clear.webp"
              alt="Mono PP Duplex Clear Recyclable Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Mono PP Duplex - Fully Recyclable"
            />
            <h3 className="text-xl font-bold text-purple-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-600">100% PP - Recyclable in PP Stream</span>
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
                <p className="font-semibold text-purple-700">Best Moisture + Recyclable</p>
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
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-purple-800">OPP30 (Outer Layer)</p>
                <p className="text-sm text-purple-700">30-micron oriented polypropylene provides excellent clarity, stiffness, and superior moisture barrier. Perfect for window applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">CPP60 (Inner Layer)</p>
                <p className="text-sm text-green-700">60-micron cast polypropylene provides reliable heat sealing while maintaining 100% PP composition for recyclability.</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">PP vs PE Recyclability</h4>
            <p className="text-sm text-green-700">PP (polypropylene) recycles separately from PE. PP recycling infrastructure is growing, with some municipalities now accepting PP in curbside programs.</p>
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
          <p>PP offers the best moisture barrier among recyclable mono-material options, with moderate oxygen protection.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Moderate - better than PE, suitable for many dry goods.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - 50% better than PE, best in recyclable category.</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg mt-4 flex items-start gap-3">
            <Eye className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-purple-800 mb-1">Superior Clarity</h4>
              <p className="text-sm text-purple-700">OPP provides brilliant optical clarity for window applications - clearer than PE alternatives.</p>
            </div>
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
            <h4 className="font-semibold text-green-800 mb-3">PP Recycling Pathway</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Mono-Material:</strong> 100% PP for proper recycling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PP Stream:</strong> Recyclable where PP is accepted</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Growing Infrastructure:</strong> PP recycling expanding rapidly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>High Value:</strong> PP is a valuable recycling commodity</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Check Local Recycling</h4>
            <p className="text-sm text-amber-700">PP recycling acceptance varies by region. Some areas accept PP in curbside, others require drop-off. Include recycling instructions on packaging.</p>
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
          <p>Best for moisture-sensitive products prioritizing recyclability:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Crackers & cookies', 'Candy & confectionery', 'Baked goods', 'Dry pasta', 'Rice cakes', 'Cereal', 'Snack foods', 'Dried fruits', 'Pet treats'].map((item, idx) => (
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
      title: 'Finding Recyclable Mono-PP Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture in recyclable</strong> – WVTR &lt;5 beats PE</li>
            <li><strong>Superior clarity</strong> – OPP for brilliant windows</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse recyclable PP pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Recyclable PP pouch with low moisture transmission"</li>
              <li>• "Mono-material packaging for crackers"</li>
              <li>• "Clear recyclable stand-up pouch best barrier"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is PP recyclable everywhere?', answer: 'PP recycling is growing but varies by region. Some curbside programs accept PP, while others require drop-off. Always include local recycling guidance.' },
    { question: 'PP vs PE - which is better for recyclability?', answer: 'PE has more established recycling (store drop-off), while PP offers better moisture barrier. Choose based on product needs and target market recycling infrastructure.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 6-9 months for most dry goods. The excellent moisture barrier helps maintain crispness for crackers and similar products.' },
    { question: 'Can I use hot-fill with PP?', answer: 'CPP has higher heat resistance than PE. For hot-fill applications above 85°C, contact us for high-temperature PP options.' },
    { question: 'What printing options are available?', answer: 'We offer rotogravure and digital printing on OPP with matte, gloss, or soft-touch finishes. Water-based inks available.' }
  ]

  const relatedLinks = [
    { title: "Shop Recyclable Pouches", url: "/store", description: "Browse mono-material options" },
    { title: "Mono-PE Alternative", url: "/spec/mono-pe-duplex-clear", description: "Compare with PE structure" },
    { title: "PP No Window", url: "/spec/mono-pp-duplex-nowindow", description: "Opaque version" },
    { title: "Recyclable Guide", url: "/materials/recyclable-mono-pp", description: "Learn about PP recycling" }
  ]

  return (
    <SEOPageLayout
      title="Mono PP Duplex Clear | Best Moisture Barrier Recyclable Packaging"
      description="Mono PP Duplex: OPP30 / CPP60 (90 micron). 100% PP mono-material recyclable. Best moisture barrier in recyclable category (WVTR <5). Brilliant clarity. Ideal for crackers, candy, snacks."
      heroTitle="Mono PP Duplex Clear - Best Barrier Recyclable"
      heroSubtitle="OPP30 / CPP60 - 100% PP with Superior Moisture Protection"
      heroLogo="/eco-logo/white-bkg/eco-logo-recycle.png"
      heroLogoAlt="Store Drop-off Recyclable"
      introSummary="The best moisture barrier available in recyclable mono-material packaging. 100% polypropylene structure with WVTR <5 g/m²/day and brilliant optical clarity for premium window applications."
      keywords={[
        'mono PP packaging',
        'recyclable PP pouch',
        'OPP CPP duplex',
        'best moisture recyclable',
        'PP mono-material',
        'clear recyclable pouch',
        'cracker packaging recyclable',
        'sustainable PP packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/mono-pp-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default MonoPpDuplexClearPage
