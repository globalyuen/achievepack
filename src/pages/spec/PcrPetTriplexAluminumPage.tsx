import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetTriplexAluminumPage: React.FC = () => {
  const structureName = 'PET12 / AL7 / 30% PCR-PE (PET Triplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<0.5'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <ClickableImage
              src="/imgs/spec/pcr-pet-triplex-aluminum.webp"
              alt="PCR PET Triplex Aluminum Foil Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PET Triplex with Aluminum Foil"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Maximum Barrier - Aluminum Foil</span>
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
                <p className="text-sm text-neutral-500">Barrier Level</p>
                <p className="font-semibold text-gray-700">Highest Barrier</p>
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
                <p className="text-sm text-blue-700">12-micron clear PET provides excellent printability, puncture resistance, and protects the aluminum layer from abrasion.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">AL7 (Middle Layer)</p>
                <p className="text-sm text-gray-700">7-micron aluminum foil provides absolute barrier to oxygen, moisture, and light. This is the ultimate barrier material available.</p>
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
      title: 'What Barrier Protection Does It Offer?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Aluminum foil provides the absolute best barrier performance available in flexible packaging.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Virtually zero - complete oxygen exclusion.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Near zero - complete moisture exclusion.</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Light Barrier</h4>
            <p className="text-sm text-yellow-700">Aluminum foil also provides 100% light barrier, protecting light-sensitive products (vitamins, oils, coffee) from UV degradation.</p>
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
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer reduces virgin plastic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Aluminum Recycling:</strong> Aluminum is infinitely recyclable</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Extended Shelf Life:</strong> Maximum protection = minimum food waste</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Recycling Note</h4>
            <p className="text-sm text-amber-700">While aluminum is recyclable, the multi-layer structure requires specialized recycling. Consider metalised alternatives if recycling is a priority. For products requiring absolute barrier, foil structures reduce food waste significantly.</p>
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
          <p>Essential for products requiring absolute protection and maximum shelf life:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Ground coffee', 'Premium tea', 'Baby food', 'Pharmaceuticals', 'Medical devices', 'Military rations', 'Freeze-dried foods', 'Sensitive supplements', 'Retort meals'].map((item, idx) => (
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
      title: 'Finding Aluminum Foil Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Absolute barrier</strong> – Nothing passes through aluminum</li>
            <li><strong>Maximum shelf life</strong> – 24+ months possible</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse foil-lined pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Aluminum foil coffee bag with degassing valve"</li>
              <li>• "Maximum barrier packaging for sensitive products"</li>
              <li>• "Foil-lined pouch with recycled content sealant"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why use aluminum foil instead of metalised?', answer: 'Aluminum foil provides absolute barrier (OTR/WVTR <0.5) vs metalised (<1). For products requiring guaranteed long shelf life or sensitive to minute oxygen/moisture exposure, foil is essential.' },
    { question: 'Can I have a window with foil structure?', answer: 'No, aluminum foil is opaque. For products needing visibility, consider our metalised or KPET structures with window capability.' },
    { question: 'What is the expected shelf life?', answer: 'With proper sealing and storage, products can achieve 24-36 months shelf life. Some applications (military rations) exceed 5 years.' },
    { question: 'Is this suitable for retort processing?', answer: 'Yes, aluminum foil structures can withstand retort temperatures. Contact us for specific retort-grade specifications.' },
    { question: 'What degassing valve options are available?', answer: 'We offer one-way degassing valves for fresh-roasted coffee and other gas-emitting products. Available in multiple sizes and flow rates.' }
  ]

  const relatedLinks = [
    { title: "Shop Foil Pouches", url: "/store", description: "Browse aluminum foil packaging" },
    { title: "Metalised Alternative", url: "/spec/pcr-pet-triplex-metalised", description: "More eco-friendly high barrier" },
    { title: "PP Foil Triplex", url: "/spec/pcr-pp-triplex-aluminum", description: "Better moisture barrier" },
    { title: "Barrier Comparison", url: "/features/high-barrier", description: "Compare all barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PET Aluminum Foil Triplex | Maximum Barrier Sustainable Packaging"
      description="PET Aluminum Foil Triplex: PET12 / AL7 / PCR-PE. Maximum barrier (OTR <0.5, WVTR <0.5). 100 micron. Essential for coffee, baby food, pharmaceuticals. 24+ months shelf life."
      heroTitle="PET Aluminum Foil Triplex Structure"
      heroSubtitle="PET12 / AL7 / PCR-PE - Absolute Maximum Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The ultimate barrier structure using aluminum foil for absolute protection against oxygen, moisture, and light. Essential for products requiring guaranteed long shelf life like coffee, baby food, and pharmaceuticals."
      keywords={[
        'aluminum foil packaging',
        'maximum barrier pouch',
        'PET AL foil structure',
        'coffee foil bag',
        'pharmaceutical packaging',
        'highest barrier eco pouch',
        'long shelf life packaging',
        'PCR aluminum packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-triplex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetTriplexAluminumPage
