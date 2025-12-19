import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPePpTriplexMetalisedPage: React.FC = () => {
  const structureName = 'OPP20 / VMPET12 / 100% Bio-PE80 (PP Triplex Metalised)'
  const thickness = '112 micron or 4.4 mil'
  const otr = '<1'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
            <ClickableImage
              src="/imgs/spec/biope-pp-triplex-metalised.webp"
              alt="Bio-PE PP Triplex Metalised High Barrier Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Bio-PE PP Triplex Metalised - Best Moisture High Barrier"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Sparkles className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">100% Bio-PE + Best Moisture High Barrier</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-gray-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-gray-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-gray-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-gray-700">Best Moisture in Metalised</p>
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
                <p className="text-sm text-purple-700">20-micron OPP adds inherent moisture barrier and protects metallisation from surface damage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">VMPET12 (Middle Layer)</p>
                <p className="text-sm text-gray-700">12-micron vacuum-metalised PET provides high oxygen and moisture barrier.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">100% Bio-PE80 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">80-micron plant-based PE provides sustainable sealing and additional moisture protection.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Why OPP + VMPET?</h4>
            <p className="text-sm text-blue-700">OPP's inherent low WVTR combined with VMPET barrier achieves WVTR &lt;0.5 - the best moisture protection in metalised Bio-PE category. Perfect for hygroscopic products.</p>
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
          <p>This structure provides the best moisture barrier in the metalised Bio-PE category.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">High - VMPET provides excellent O2 barrier.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - OPP + VMPET achieves best moisture.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Bio-PE Sustainability',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Ultimate Barrier + Sustainable</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Bio-PE Sealant:</strong> 100% plant-based from Brazilian sugarcane</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Carbon Negative:</strong> Sugarcane captures 3 tons CO2 per ton Bio-PE</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>I'm Green™:</strong> Certified bio-based content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Reduced Waste:</strong> Extended shelf life prevents food waste</span>
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
          <p>Best for hygroscopic products requiring maximum protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Instant coffee', 'Protein powders', 'Powdered milk', 'Cocoa powder', 'Matcha powder', 'Freeze-dried foods', 'Dehydrated soups', 'Premium spices', 'Collagen supplements'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Best Moisture Metalised Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture + high barrier</strong> – WVTR &lt;0.5</li>
            <li><strong>Plant-based sealant</strong> – Carbon negative Bio-PE</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse Bio-PE pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best moisture barrier coffee packaging Bio-PE"</li>
              <li>• "Metalised pouch for protein powder plant-based"</li>
              <li>• "Hygroscopic product packaging sustainable"</li>
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
                <tr className="bg-green-50 font-semibold"><td className="p-2 border"><Link to="/spec/biope-pp-triplex-metalised" className="text-primary-600 hover:underline">PP Metalised</Link></td><td className="p-2 text-center border">&lt;1</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Best moisture high</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-kraft-vmpet" className="text-primary-600 hover:underline">Kraft VMPET</Link></td><td className="p-2 text-center border">&lt;1</td><td className="p-2 text-center border">&lt;1</td><td className="p-2 border">Natural high barrier</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-triplex-aluminum" className="text-primary-600 hover:underline">PET Aluminum</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Ultimate barrier</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pp-triplex-aluminum" className="text-primary-600 hover:underline">PP Aluminum</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.3</td><td className="p-2 border">Ultimate + moisture</td></tr>
                <tr><td className="p-2 border"><Link to="/spec/biope-pet-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PET Kraft Quadlex</Link></td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 text-center border">&lt;0.5</td><td className="p-2 border">Natural + max</td></tr>
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
    { question: 'Why choose PP over PET metalised?', answer: 'PP metalised achieves WVTR <0.5 vs <1 for PET metalised. Choose PP for extremely hygroscopic products like instant coffee, protein powders, or powdered milk.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 12-24 months for most products. The exceptional moisture barrier protects hygroscopic products from humidity-induced degradation.' },
    { question: 'Is this suitable for instant coffee?', answer: 'Yes, this is our recommended structure for instant coffee. The WVTR <0.5 prevents moisture absorption and clumping.' },
    { question: 'Can this have a window?', answer: 'Metalised structures cannot have windows due to the opaque metalised layer. For window capability, consider non-metalised alternatives.' },
    { question: 'How does Bio-PE affect sealing?', answer: 'Bio-PE seals identically to fossil PE. No adjustments needed to sealing equipment or parameters.' }
  ]

  const relatedLinks = [
    { title: "Shop Bio-PE Pouches", url: "/store", description: "Browse plant-based options" },
    { title: "PET Metallised", url: "/spec/biope-pet-triplex-metalised", description: "Standard metalised" },
    { title: "Aluminum Foil", url: "/spec/biope-pp-triplex-aluminum", description: "Ultimate barrier" },
    { title: "Bio-PE Guide", url: "/materials/bio-pe", description: "Learn about Bio-PE" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE PP Triplex Metalised | Best Moisture High Barrier Packaging"
      description="Bio-PE PP Triplex Metalised: OPP20 / VMPET12 / 100% Bio-PE80 (112 micron). Best moisture barrier (WVTR <0.5) in metalised category. Plant-based. Ideal for instant coffee, protein powders."
      heroTitle="Bio-PE PP Triplex Metalised Structure"
      heroSubtitle="OPP20 / VMPET12 / 100% Bio-PE80 - Best Moisture + High Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-biope.png"
      heroLogoAlt="I'm Green™ Bio-PE Certified"
      introSummary="The best moisture barrier in metalised plant-based packaging. OPP outer layer combined with VMPET achieves WVTR <0.5 for hygroscopic products while Bio-PE sealant reduces carbon footprint by 70%."
      keywords={[
        'PP metalised Bio-PE',
        'best moisture metalised',
        'instant coffee packaging',
        'protein powder bag Bio-PE',
        'hygroscopic packaging',
        'WVTR low metalised',
        'plant-based high barrier',
        'powder packaging sustainable'
      ]}
      canonicalUrl="https://achievepack.com/spec/biope-pp-triplex-metalised"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioPePpTriplexMetalisedPage
