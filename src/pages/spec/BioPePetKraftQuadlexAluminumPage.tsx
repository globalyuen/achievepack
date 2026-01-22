import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPePetKraftQuadlexAluminumPage: React.FC = () => {
  const structureName = 'PET12 / Kraft Paper 50gsm / AL7 / 100% Bio-PE80 (PET Kraft Quadlex)'
  const thickness = '149 micron or 5.9 mil'
  const otr = '<0.5'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/biope-pet-kraft-quadlex-aluminum.webp"
              alt="Bio-PE PET Kraft Quadlex Aluminum Premium Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Premium Kraft + Ultimate Barrier + Bio-PE"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Zap className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-600">Premium Kraft + Ultimate Barrier + Plant-Based</span>
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
                <p className="text-sm text-neutral-500">Structure</p>
                <p className="font-semibold text-amber-700">4-Layer Premium</p>
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
                <p className="font-semibold text-blue-800">PET12 (Outer Layer)</p>
                <p className="text-sm text-blue-700">12-micron PET protects kraft and provides excellent print surface.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Second Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper provides premium stiffness and natural aesthetics visible through clear areas.</p>
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
        </div>
      )
    },
    {
      id: 'barrier-properties',
      title: 'What Barrier Protection Does It Offer?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>This premium 4-layer structure combines natural aesthetics with ultimate barrier protection.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Ultimate - aluminum foil blocks all O2.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Ultimate - foil provides maximum protection.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Premium Stiffness</h4>
            <p className="text-sm text-amber-700">The kraft paper layer provides exceptional stiffness and shelf presence, making this structure ideal for premium retail positioning.</p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'How Do These Layers Work Together?',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Sustainable Premium</h4>
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
                <span><strong>Carbon Negative PE:</strong> Captures CO2 during production</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Zero Waste:</strong> Maximum protection prevents product waste</span>
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
          <p>Best for luxury natural products requiring maximum protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Premium single-origin coffee', 'Luxury tea', 'Gourmet chocolate', 'Premium protein', 'Artisan dried goods', 'High-end supplements', 'Specialty superfoods', 'Craft botanicals', 'Premium pet nutrition'].map((item, idx) => (
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
      title: 'Finding Premium Kraft Foil Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Premium natural look</strong> – Kraft + ultimate barrier</li>
            <li><strong>Maximum stiffness</strong> – 4-layer premium structure</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Premium kraft coffee bag with foil Bio-PE"</li>
              <li>• "Luxury natural packaging ultimate barrier"</li>
              <li>• "4-layer kraft pouch plant-based"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'How Do Bio-PE Structures Compare?',
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
                <tr className="bg-green-50 font-semibold"><td className="p-2 border"><Link to="/spec/biope-pet-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PET Kraft Quadlex</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Natural + max</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PP Kraft Quadlex</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.3</td><td className="p-2 border">Natural + ultimate</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-kraft-duplex-low" className="text-primary-600 hover:underline">Kraft Duplex Low</Link></td><td className="p-2 text-center border">&lt;2000</td><td className="p-2 text-center border">&lt;15</td><td className="p-2 border">Dry goods</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why choose quadlex over triplex?', answer: 'Quadlex adds kraft paper for premium stiffness and natural aesthetics. Choose when shelf presence and premium positioning are critical.' },
    { question: 'Is this the most premium structure?', answer: 'Yes, the 4-layer kraft + foil is our most premium Bio-PE structure. It combines maximum barrier with natural aesthetics and plant-based sustainability.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 24-36 months. Aluminum foil provides ultimate protection for maximum shelf life.' },
    { question: 'Can I add a window?', answer: 'Foil structures cannot have windows. For kraft with window, consider our kraft triplex clear structures with KPET instead of foil.' },
    { question: 'What printing options exist?', answer: 'Print on the PET outer layer with kraft visible through clear areas, or full-coverage printing for complete brand control.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft options" },
    { title: "PP Kraft Quadlex", url: "/spec/biope-pp-kraft-quadlex-aluminum", description: "Better moisture" },
    { title: "Kraft VMPET", url: "/spec/biope-kraft-vmpet", description: "More affordable" },
    { title: "Bio-PE Guide", url: "/materials/bio-pe", description: "Learn about Bio-PE" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE PET Kraft Quadlex Aluminum | Premium Natural Ultimate Barrier"
      description="Bio-PE PET Kraft Quadlex: PET12 / Kraft 50gsm / AL7 / 100% Bio-PE80 (149 micron). Premium 4-layer kraft with ultimate barrier (OTR/WVTR <0.5). Plant-based. Ideal for luxury coffee, premium organics."
      heroTitle="Bio-PE PET Kraft Quadlex Aluminum Structure"
      heroSubtitle="PET12 / Kraft 50gsm / AL7 / 100% Bio-PE80 - Premium Natural + Ultimate"
      heroLogo="/eco-logo/white-bkg/eco-logo-biope.png"
      heroLogoAlt="I'm Green™ Bio-PE Certified"
      introSummary="The most premium kraft structure with plant-based sustainability. 4-layer construction combines natural kraft aesthetics, ultimate aluminum barrier, and 100% Bio-PE sealant for luxury products."
      keywords={[
        'kraft quadlex Bio-PE',
        'premium kraft foil',
        'luxury coffee packaging',
        '4-layer kraft bag',
        'ultimate kraft barrier',
        'FSC kraft aluminum',
        'premium natural pouch',
        'plant-based luxury packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/biope-pet-kraft-quadlex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioPePetKraftQuadlexAluminumPage
