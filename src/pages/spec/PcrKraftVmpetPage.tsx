import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrKraftVmpetPage: React.FC = () => {
  const structureName = 'Kraft Paper 50gsm / VMPET12 / PCR or Bio PE 80'
  const thickness = '140 micron or 5.5 mil'
  const otr = '<1'
  const wvtr = '<1'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-kraft-vmpet.webp"
              alt="PCR Kraft VMPET High Barrier Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Kraft Paper with VMPET High Barrier"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-600">Premium Kraft + High Barrier</span>
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
                <p className="text-sm text-neutral-500">Stiffness</p>
                <p className="font-semibold text-amber-700">With Paper Lining (Stiffer)</p>
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
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Outer Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper provides premium tactile feel, excellent stiffness, and eco-friendly appearance that appeals to conscious consumers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">VMPET12 (Middle Layer)</p>
                <p className="text-sm text-purple-700">Vacuum-metalised PET provides exceptional oxygen and moisture barrier while using minimal aluminum content.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">PCR or Bio PE 80 (Inner Layer)</p>
                <p className="text-sm text-green-700">80-micron sustainable polyethylene with recycled or bio-based content for reliable heat sealing.</p>
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
          <p>This structure combines the natural aesthetics of kraft paper with high-barrier protection.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">Exceptional - VMPET provides near-zero oxygen transmission.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - complete moisture protection despite paper outer layer.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Kraft + High Barrier</h4>
            <p className="text-sm text-amber-700">Don't let the natural paper appearance fool you - the VMPET middle layer provides full high-barrier protection equivalent to metalised plastic structures.</p>
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
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper option available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Minimal Metal:</strong> VMPET uses 99% less aluminum than foil</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio Content:</strong> Sustainable sealant layer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Consumer Appeal:</strong> Natural kraft signals sustainability</span>
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
          <p>Perfect for premium products needing high barrier with natural positioning:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Premium loose tea', 'Artisan granola', 'Organic dried fruits', 'Craft protein powders', 'Natural supplements', 'Premium pet treats', 'Gourmet spices', 'Superfood blends'].map((item, idx) => (
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
      title: 'Finding Kraft High-Barrier Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Natural + protected</strong> – Kraft aesthetics with full barrier</li>
            <li><strong>Premium positioning</strong> – Stiff structure for shelf presence</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft high-barrier pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Natural kraft paper pouch with high oxygen barrier"</li>
              <li>• "Premium coffee bag kraft with metalised layer"</li>
              <li>• "Eco-friendly high barrier packaging for artisan products"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Can I print on kraft paper?', answer: 'Yes, we offer high-quality printing directly on kraft paper with up to 10 colors. White ink underbase available for vibrant colors on the brown kraft surface.' },
    { question: 'Is this structure truly high barrier?', answer: 'Yes, the VMPET middle layer provides OTR and WVTR both <1, equivalent to full metalised plastic structures. The kraft outer layer is purely aesthetic.' },
    { question: 'What finishes are available?', answer: 'Matte varnish is most popular for kraft (enhances natural look). Spot gloss for logo highlights also available.' },
    { question: 'Is the kraft paper FSC certified?', answer: 'FSC-certified kraft paper is available upon request. Contact us for sustainable sourcing documentation.' },
    { question: 'Can I have a window with kraft?', answer: 'Yes, clear PET or cellulose windows can be incorporated. The window area uses clear material while kraft covers the rest.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper packaging" },
    { title: "Kraft Aluminum Structure", url: "/spec/pcr-pet-kraft-quadlex-aluminum", description: "Maximum barrier kraft option" },
    { title: "Low Barrier Kraft", url: "/spec/pcr-kraft-duplex-low", description: "Budget-friendly kraft option" },
    { title: "High Barrier Guide", url: "/features/high-barrier", description: "Compare barrier options" }
  ]

  return (
    <SEOPageLayout
      title="Kraft Paper VMPET High Barrier | Natural Look Premium Eco Packaging"
      description="Kraft Paper VMPET structure: Kraft 50gsm / VMPET12 / PCR-PE. Natural kraft aesthetics with full high barrier (OTR <1, WVTR <1). 140 micron. Ideal for specialty coffee, premium foods."
      heroTitle="Kraft Paper VMPET High Barrier Structure"
      heroSubtitle="Kraft Paper 50gsm / VMPET12 / PCR-PE - Natural Look Maximum Protection"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="Combines the natural, eco-friendly appearance of kraft paper with full high-barrier protection from vacuum-metalised PET. Perfect for premium products requiring both natural aesthetics and extended shelf life."
      keywords={[
        'kraft paper high barrier',
        'VMPET kraft packaging',
        'natural look eco pouch',
        'specialty coffee kraft bag',
        'premium kraft packaging',
        'sustainable kraft pouch',
        'artisan food packaging',
        'FSC kraft pouch'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-kraft-vmpet"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrKraftVmpetPage
