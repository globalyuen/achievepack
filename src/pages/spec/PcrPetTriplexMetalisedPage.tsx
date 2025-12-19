import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetTriplexMetalisedPage: React.FC = () => {
  const structureName = 'PET12 / Metalised PET12 / 30% PCR-PE (PET Triplex)'
  const thickness = '105 micron or 4 mil'
  const otr = '<1'
  const wvtr = '<1'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-triplex-metalised.webp"
              alt="PCR PET Triplex Metalised Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PET Triplex Metalised Structure"
            />
            <h3 className="text-xl font-bold text-purple-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-600">High Barrier - Metalised Layer</span>
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
                <p className="text-sm text-neutral-500">Barrier Level</p>
                <p className="font-semibold text-purple-700">High Barrier</p>
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
                <p className="font-semibold text-blue-800">PET12 (Outer Layer)</p>
                <p className="text-sm text-blue-700">12-micron clear PET provides excellent printability, mechanical strength, and surface gloss.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">Metalised PET12 (Middle Layer)</p>
                <p className="text-sm text-purple-700">Vacuum-metalised PET with aluminum coating provides exceptional oxygen and moisture barrier. This layer creates the high-barrier performance.</p>
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
          <p>This high-barrier metalised structure offers premium protection for oxygen and moisture-sensitive products.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">Exceptional - virtually impermeable to oxygen.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - near-total moisture protection.</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">Metalised vs Aluminum Foil</h4>
            <p className="text-sm text-purple-700">Metalised PET provides barrier close to aluminum foil but with better sustainability profile. It uses a microscopic aluminum layer (50nm) compared to 7-12 micron foil, reducing metal usage by 99%.</p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability Features',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Eco-Friendly Benefits</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Minimal Metal:</strong> 99% less aluminum than foil structures</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio Content:</strong> Sustainable sealant layer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Extended Shelf Life:</strong> Less food waste due to better protection</span>
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
          <p>Perfect for products requiring maximum barrier protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Premium tea', 'Protein powders', 'Dried fruits', 'Beef jerky', 'Freeze-dried foods', 'Nutritional supplements', 'Spice blends', 'Dehydrated meals'].map((item, idx) => (
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
      title: 'Finding High-Barrier Metalised Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Maximum protection</strong> – OTR and WVTR both &lt;1</li>
            <li><strong>Long shelf life</strong> – 12-24 months possible</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse high-barrier pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "High barrier coffee pouch with recycled content"</li>
              <li>• "Metalised sustainable packaging for protein powder"</li>
              <li>• "Best oxygen barrier eco-friendly pouch"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Can this structure have a window?', answer: 'No, the metalised layer blocks visibility. For window with mid-barrier, see our KPET structures. For premium presentation, consider our kraft paper options.' },
    { question: 'What shelf life can I expect?', answer: 'With proper sealing, products typically achieve 12-24 months shelf life depending on the specific product and storage conditions.' },
    { question: 'Is metalised PET recyclable?', answer: 'The thin metal layer makes recycling more challenging than clear structures, but the minimal aluminum content (vs foil) improves end-of-life impact.' },
    { question: 'How does this compare to aluminum foil?', answer: 'Similar barrier performance with 99% less metal content. Foil structures offer slightly better barrier but at higher environmental cost.' },
    { question: 'Can I get matte finish on metalised structure?', answer: 'Yes, we offer matte varnish over the outer PET layer for a premium soft-touch finish while maintaining the metalised barrier.' }
  ]

  const relatedLinks = [
    { title: "Shop High-Barrier Pouches", url: "/store", description: "Browse premium barrier packaging" },
    { title: "Aluminum Foil Structure", url: "/spec/pcr-pet-triplex-aluminum", description: "Maximum barrier option" },
    { title: "PP Metalised Triplex", url: "/spec/pcr-pp-triplex-metalised", description: "Better moisture barrier" },
    { title: "High Barrier Guide", url: "/features/high-barrier", description: "Compare barrier options" }
  ]

  return (
    <SEOPageLayout
      title="PCR PET Metalised Triplex | High Barrier Sustainable Packaging"
      description="PCR PET Metalised Triplex: PET12 / Metalised PET12 / PCR-PE. High barrier (OTR <1, WVTR <1). 105 micron. Ideal for coffee, protein, premium foods. 99% less metal than foil."
      heroTitle="PCR PET Metalised Triplex Structure"
      heroSubtitle="PET12 / Metalised PET12 / PCR-PE - High Barrier Sustainable"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A high-barrier sustainable structure using vacuum-metalised PET to achieve exceptional oxygen and moisture protection. Uses 99% less metal than aluminum foil while delivering similar barrier performance."
      keywords={[
        'metalised PET packaging',
        'high barrier sustainable pouch',
        'VMPET packaging',
        'oxygen barrier eco pouch',
        'coffee packaging metalised',
        'protein powder pouch',
        'PCR high barrier',
        'premium food packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-triplex-metalised"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetTriplexMetalisedPage
