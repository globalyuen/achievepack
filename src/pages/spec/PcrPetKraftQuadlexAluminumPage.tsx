import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetKraftQuadlexAluminumPage: React.FC = () => {
  const structureName = 'PET12 / Kraft Paper 50gsm / AL7 / 30% PCR-PE (PET Kraft Paper Quad-lex)'
  const thickness = '150 micron or 6 mil'
  const otr = '<0.5'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-kraft-quadlex-aluminum.webp"
              alt="PET Kraft Quadlex Aluminum Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Premium Kraft Paper with Aluminum Foil"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-amber-600">Premium Kraft + Maximum Barrier</span>
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
                <p className="text-sm text-neutral-500">Layers</p>
                <p className="font-semibold text-amber-700">4-Layer Quad-lex</p>
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
                <p className="text-sm text-blue-700">12-micron clear PET provides excellent printability, gloss, and protects the kraft paper from moisture and abrasion.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Second Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper provides premium tactile feel, excellent stiffness, and natural eco-friendly appearance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">AL7 (Third Layer)</p>
                <p className="text-sm text-gray-700">7-micron aluminum foil provides absolute barrier to oxygen, moisture, and light.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
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
          <p>This premium quad-layer structure combines natural kraft aesthetics with ultimate barrier protection.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Maximum - complete oxygen exclusion.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Complete moisture protection despite paper layer.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Premium Shelf Presence</h4>
            <p className="text-sm text-amber-700">The 150 micron thickness and kraft paper layer create a substantial, premium feel that stands out on shelf. The stiffness ensures excellent stand-up performance.</p>
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
            <h4 className="font-semibold text-green-800 mb-3">Eco-Friendly Elements</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper option available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Consumer Appeal:</strong> Natural kraft signals eco-consciousness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Food Waste:</strong> Maximum protection = minimum waste</span>
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
          <p>Perfect for premium products requiring natural aesthetics and maximum protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty single-origin coffee', 'Premium loose leaf tea', 'Artisan chocolate', 'Luxury dried fruits', 'Gourmet spices', 'Premium nuts', 'High-end pet treats', 'Specialty powders', 'Gift packaging'].map((item, idx) => (
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
            <li><strong>Natural + maximum barrier</strong> – Best of both worlds</li>
            <li><strong>Premium shelf presence</strong> – Stiff, substantial feel</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft foil pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Kraft paper coffee bag with aluminum foil barrier"</li>
              <li>• "Premium natural packaging with maximum shelf life"</li>
              <li>• "Luxury eco packaging for specialty foods"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why 4 layers instead of 3?', answer: 'The kraft paper adds premium aesthetics and stiffness, while the PET outer protects the paper from moisture and provides a printable/glossy surface. The AL7 handles barrier duties.' },
    { question: 'Can I print directly on the kraft?', answer: 'Yes, you can choose to print on the kraft paper (showing through clear PET) or print on the inner surface of the PET for a more vibrant look with kraft texture visible.' },
    { question: 'What shelf life can I expect?', answer: 'With aluminum foil barrier, expect 24-36 months shelf life depending on product sensitivity and storage conditions.' },
    { question: 'Is this structure very expensive?', answer: 'The 4-layer structure is premium-priced but competitive for luxury products. The perceived value and shelf impact often justify the cost for premium brands.' },
    { question: 'Can I add a window?', answer: 'Yes, clear window panels can be incorporated in the kraft area. The window section uses clear PET/aluminum-free material for visibility.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper packaging" },
    { title: "PP Kraft Quadlex", url: "/spec/pcr-pp-kraft-quadlex-aluminum", description: "Better moisture barrier" },
    { title: "Kraft VMPET", url: "/spec/pcr-kraft-vmpet", description: "Metalised alternative" },
    { title: "Barrier Guide", url: "/features/high-barrier", description: "Compare barrier options" }
  ]

  return (
    <SEOPageLayout
      title="PET Kraft Quadlex Aluminum | Premium Natural Maximum Barrier Packaging"
      description="PET Kraft Quadlex Aluminum: PET12 / Kraft Paper 50gsm / AL7 / PCR-PE. Premium 4-layer structure with maximum barrier (OTR <0.5, WVTR <0.5). 150 micron. Ideal for specialty coffee, luxury foods."
      heroTitle="PET Kraft Quadlex Aluminum Structure"
      heroSubtitle="PET12 / Kraft Paper 50gsm / AL7 / PCR-PE - Premium Natural Maximum Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A premium four-layer structure combining natural kraft paper aesthetics with aluminum foil's absolute barrier. The ultimate choice for luxury products requiring both natural appeal and maximum shelf life protection."
      keywords={[
        'kraft paper aluminum foil',
        'premium kraft packaging',
        'quadlex structure pouch',
        'specialty coffee kraft bag',
        'luxury food packaging',
        'natural maximum barrier',
        'FSC kraft foil pouch',
        'premium eco packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-kraft-quadlex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetKraftQuadlexAluminumPage
