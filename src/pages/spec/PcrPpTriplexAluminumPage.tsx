import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpTriplexAluminumPage: React.FC = () => {
  const structureName = 'OPP20 / AL7 / 30% PCR-PE (PP Triplex)'
  const thickness = '105 micron or 4.1 mil'
  const otr = '<0.5'
  const wvtr = '<0.3'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <ClickableImage
              src="/imgs/spec/pcr-pp-triplex-aluminum.webp"
              alt="PCR PP Triplex Aluminum Foil Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PP Triplex with Aluminum Foil - Best Moisture"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Maximum Barrier - Best Moisture Protection</span>
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
                <p className="font-semibold text-gray-700">Lowest WVTR Available</p>
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
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-blue-800">OPP20 (Outer Layer)</p>
                <p className="text-sm text-blue-700">20-micron oriented polypropylene adds inherent moisture resistance on top of foil barrier, achieving the lowest WVTR possible.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">AL7 (Middle Layer)</p>
                <p className="text-sm text-gray-700">7-micron aluminum foil provides absolute barrier to oxygen, moisture, and light.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene sealant with recycled or bio-based content.</p>
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
          <p>This PP-foil combination achieves the absolute lowest WVTR available in flexible packaging.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Virtually zero - complete oxygen exclusion.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Lowest available - OPP + AL7 = ultimate moisture protection.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Why PP + Foil is Superior</h4>
            <p className="text-sm text-green-700">OPP's inherent low moisture permeability adds extra protection at seal areas and potential pinhole sites in the foil, achieving WVTR &lt;0.3 vs &lt;0.5 for PET-foil structures.</p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability Considerations',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Eco-Friendly Elements</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant reduces virgin plastic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Food Waste Reduction:</strong> Maximum protection = minimum waste</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Aluminum Value:</strong> High recycling value when separated</span>
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
          <p>Essential for extremely hygroscopic products requiring maximum moisture protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Powdered milk', 'Instant coffee', 'Protein isolates', 'Pharmaceutical powders', 'Hygroscopic chemicals', 'Desiccants', 'Freeze-dried products', 'Moisture-sensitive vitamins', 'Specialty powders'].map((item, idx) => (
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
      title: 'Finding PP Aluminum Foil Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lowest WVTR</strong> – Best for hygroscopic products</li>
            <li><strong>Complete protection</strong> – Oxygen + moisture + light</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse foil pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best moisture barrier packaging for powder products"</li>
              <li>• "Aluminum foil pouch with lowest WVTR"</li>
              <li>• "Packaging for hygroscopic pharmaceutical powders"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why choose PP-foil over PET-foil?', answer: 'PP-foil achieves WVTR <0.3 vs <0.5 for PET-foil. For extremely hygroscopic products (powdered milk, protein isolates), this 40% improvement is significant.' },
    { question: 'What shelf life can I expect?', answer: 'Maximum shelf life of 24-36+ months depending on product. Some pharmaceutical applications achieve 5+ years stability.' },
    { question: 'Is this suitable for hot-fill?', answer: 'For hot-fill applications above 85°C, contact us for high-temperature resistant variants with modified sealant layers.' },
    { question: 'Can the aluminum be recycled?', answer: 'The aluminum layer has high recycling value. While multi-layer recycling is challenging, aluminum recovery programs exist. The structure significantly reduces food waste.' },
    { question: 'What seal strength can I expect?', answer: 'The PCR/Bio-PE sealant provides excellent seal strength comparable to virgin PE, suitable for demanding distribution conditions.' }
  ]

  const relatedLinks = [
    { title: "Shop Foil Pouches", url: "/store", description: "Browse aluminum foil packaging" },
    { title: "PET Foil Triplex", url: "/spec/pcr-pet-triplex-aluminum", description: "Compare PET-based option" },
    { title: "Metalised Alternative", url: "/spec/pcr-pp-triplex-metalised", description: "More recyclable option" },
    { title: "Barrier Guide", url: "/features/high-barrier", description: "Compare barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PP Aluminum Foil Triplex | Lowest WVTR Maximum Barrier Packaging"
      description="PP Aluminum Foil Triplex: OPP20 / AL7 / PCR-PE. Lowest moisture barrier (WVTR <0.3). Maximum oxygen barrier (OTR <0.5). 105 micron. Ideal for powders, pharmaceuticals."
      heroTitle="PP Aluminum Foil Triplex Structure"
      heroSubtitle="OPP20 / AL7 / PCR-PE - Ultimate Moisture Protection"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The lowest moisture barrier available in flexible packaging, combining OPP's moisture resistance with aluminum foil's absolute barrier. Essential for extremely hygroscopic products like powdered milk, protein isolates, and pharmaceutical powders."
      keywords={[
        'PP aluminum foil packaging',
        'lowest WVTR pouch',
        'maximum moisture barrier',
        'OPP AL foil structure',
        'powder packaging foil',
        'pharmaceutical pouch',
        'hygroscopic product packaging',
        'PCR foil packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-triplex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpTriplexAluminumPage
