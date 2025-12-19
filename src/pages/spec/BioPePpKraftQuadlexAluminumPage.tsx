import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPePpKraftQuadlexAluminumPage: React.FC = () => {
  const structureName = 'OPP20 / Kraft Paper 50gsm / AL7 / 100% Bio-PE80 (PP Kraft Quadlex)'
  const thickness = '155 micron or 6.1 mil'
  const otr = '<0.5'
  const wvtr = '<0.3'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/biope-pp-kraft-quadlex-aluminum.webp"
              alt="Bio-PE PP Kraft Quadlex Aluminum - Best Moisture Premium"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Ultimate Kraft - Best Moisture + Ultimate Barrier"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Zap className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-amber-600">Ultimate Kraft - Lowest WVTR + Plant-Based</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-amber-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-amber-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-amber-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-amber-700">Lowest WVTR + Natural</p>
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
                <p className="font-semibold text-purple-800">OPP20 (Outer Layer)</p>
                <p className="text-sm text-purple-700">20-micron OPP adds inherent moisture barrier and protects kraft from humidity.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Second Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper provides premium stiffness and natural appearance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">AL7 (Third Layer)</p>
                <p className="text-sm text-gray-700">7-micron aluminum foil provides absolute oxygen, moisture, and light barrier.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-green-800">100% Bio-PE80 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">80-micron plant-based PE from sugarcane for sustainable sealing.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Why OPP + Kraft + Foil?</h4>
            <p className="text-sm text-blue-700">This combination achieves WVTR &lt;0.3 - the absolute lowest moisture barrier in kraft packaging. OPP protects kraft from humidity while foil provides ultimate barrier.</p>
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
          <p>This is the ultimate kraft structure with the lowest WVTR available in natural packaging.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Ultimate - foil blocks virtually all O2.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Best in Kraft - OPP + foil achieves lowest.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Multi-Layer Sustainability',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Ultimate Sustainable</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Bio-PE Sealant:</strong> 100% plant-based from sugarcane</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Carbon Negative:</strong> Bio-PE captures CO2 during production</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Maximum Protection:</strong> Zero product waste</span>
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
          <p>Essential for ultra-hygroscopic luxury products with natural positioning:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Premium instant coffee', 'Luxury matcha powder', 'Artisan protein powders', 'Premium cocoa powder', 'Specialty powdered milk', 'High-end collagen', 'Luxury freeze-dried', 'Premium superfood powders', 'Craft supplement powders'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-amber-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Ultimate Kraft Moisture Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lowest WVTR in kraft</strong> – &lt;0.3 g/m²/day</li>
            <li><strong>Premium natural look</strong> – Maximum stiffness</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Ultimate kraft packaging powder Bio-PE"</li>
              <li>• "Best moisture kraft bag plant-based"</li>
              <li>• "Premium matcha packaging natural"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'Compare All Bio-PE Structures',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">Compare all 14 Bio-PE structures:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-green-100"><th className="p-2 text-left border">Structure</th><th className="p-2 text-center border">OTR</th><th className="p-2 text-center border">WVTR</th><th className="p-2 text-left border">Best For</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-duplex-clear" className="text-primary-600 hover:underline">PET Duplex Clear</Link></td><td className="p-2 text-center border">&lt;8</td><td className="p-2 text-center border">&lt;12</td><td className="p-2 border">Window bags</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-duplex-clear" className="text-primary-600 hover:underline">PP Duplex Clear</Link></td><td className="p-2 text-center border">&lt;1500</td><td className="p-2 text-center border">&lt;5</td><td className="p-2 border">Best moisture</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-kraft-triplex-clear" className="text-primary-600 hover:underline">PET Kraft Triplex</Link></td><td className="p-2 text-center border">&lt;8</td><td className="p-2 text-center border">&lt;10</td><td className="p-2 border">Natural + window</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-kraft-triplex-clear" className="text-primary-600 hover:underline">PP Kraft Triplex</Link></td><td className="p-2 text-center border">&lt;1500</td><td className="p-2 text-center border">&lt;4</td><td className="p-2 border">Kraft + moisture</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-duplex-nowindow" className="text-primary-600 hover:underline">PET No Window</Link></td><td className="p-2 text-center border">&lt;8</td><td className="p-2 text-center border">&lt;12</td><td className="p-2 border">Light-sensitive</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-duplex-nowindow" className="text-primary-600 hover:underline">PP No Window</Link></td><td className="p-2 text-center border">&lt;1500</td><td className="p-2 text-center border">&lt;5</td><td className="p-2 border">Moisture + light</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-triplex-metalised" className="text-primary-600 hover:underline">PET Metalised</Link></td><td className="p-2 text-center border">&lt;1</td><td className="p-2 text-center border">&lt;1</td><td className="p-2 border">High barrier</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-triplex-metalised" className="text-primary-600 hover:underline">PP Metalised</Link></td><td className="p-2 text-center border">&lt;1</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Best moisture high</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-kraft-vmpet" className="text-primary-600 hover:underline">Kraft VMPET</Link></td><td className="p-2 text-center border">&lt;1</td><td className="p-2 text-center border">&lt;1</td><td className="p-2 border">Natural high barrier</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-triplex-aluminum" className="text-primary-600 hover:underline">PET Aluminum</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Ultimate barrier</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-triplex-aluminum" className="text-primary-600 hover:underline">PP Aluminum</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.3</td><td className="p-2 border">Ultimate + moisture</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PET Kraft Quadlex</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Natural + max</td></tr>
                <tr className="bg-green-50 font-semibold"><td className="p-2 border"><Link to="/spec/biope-pp-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PP Kraft Quadlex</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.3</td><td className="p-2 border">Natural + ultimate</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-kraft-duplex-low" className="text-primary-600 hover:underline">Kraft Duplex Low</Link></td><td className="p-2 text-center border">&lt;2000</td><td className="p-2 text-center border">&lt;15</td><td className="p-2 border">Dry goods</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why choose PP kraft over PET kraft quadlex?', answer: 'PP version achieves WVTR <0.3 vs <0.5 for PET. This 40% improvement is critical for ultra-hygroscopic products like instant coffee or protein isolates.' },
    { question: 'Is this the most expensive structure?', answer: 'Yes, the 4-layer PP kraft + foil is our most premium structure. Justified for luxury products where natural aesthetics and maximum protection are both essential.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 24-36 months. This structure provides maximum protection for the longest shelf life.' },
    { question: 'Can kraft paper handle humid environments?', answer: 'Yes, the OPP outer layer protects the kraft from ambient humidity. The foil layer provides absolute internal barrier.' },
    { question: 'What printing options are available?', answer: 'Print on OPP surface for vibrant colors with kraft visible through clear areas. Full-coverage or partial printing available.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft options" },
    { title: "PET Kraft Quadlex", url: "/spec/biope-pet-kraft-quadlex-aluminum", description: "Standard option" },
    { title: "Kraft VMPET", url: "/spec/biope-kraft-vmpet", description: "More affordable" },
    { title: "Bio-PE Guide", url: "/materials/bio-pe", description: "Learn about Bio-PE" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE PP Kraft Quadlex Aluminum | Ultimate Moisture Natural Packaging"
      description="Bio-PE PP Kraft Quadlex: OPP20 / Kraft 50gsm / AL7 / 100% Bio-PE80 (155 micron). Lowest WVTR in kraft (<0.3). Plant-based. Ideal for premium instant coffee, luxury matcha, protein powders."
      heroTitle="Bio-PE PP Kraft Quadlex Aluminum Structure"
      heroSubtitle="OPP20 / Kraft 50gsm / AL7 / 100% Bio-PE80 - Lowest WVTR Natural"
      heroLogo="/eco-logo/white-bkg/eco-logo-biope.png"
      heroLogoAlt="I'm Green™ Bio-PE Certified"
      introSummary="The ultimate kraft structure with the lowest moisture barrier available. OPP outer layer combined with aluminum foil achieves WVTR <0.3 while kraft paper provides premium natural aesthetics."
      keywords={[
        'PP kraft quadlex Bio-PE',
        'lowest WVTR kraft',
        'ultimate kraft barrier',
        'matcha packaging premium',
        'instant coffee kraft bag',
        'FSC kraft foil',
        'premium powder packaging',
        'plant-based kraft pouch'
      ]}
      canonicalUrl="https://achievepack.com/spec/biope-pp-kraft-quadlex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioPePpKraftQuadlexAluminumPage
