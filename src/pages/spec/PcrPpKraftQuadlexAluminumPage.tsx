import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpKraftQuadlexAluminumPage: React.FC = () => {
  const structureName = 'OPP20 / Kraft Paper 50gsm / AL7 / 30% PCR-PE (PP Kraft Paper Quad-lex)'
  const thickness = '155 micron or 6.1 mil'
  const otr = '<0.5'
  const wvtr = '<0.3'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-pp-kraft-quadlex-aluminum.webp"
              alt="PP Kraft Quadlex Aluminum Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Premium PP Kraft with Aluminum - Lowest WVTR"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-amber-600">Premium Kraft + Ultimate Moisture Barrier</span>
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
                <p className="font-semibold text-amber-700">Lowest WVTR + Natural Look</p>
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
                <p className="font-semibold text-blue-800">OPP20 (Outer Layer)</p>
                <p className="text-sm text-blue-700">20-micron oriented polypropylene adds inherent moisture resistance and protects the kraft paper from humidity.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Second Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper for premium tactile feel, stiffness, and natural appearance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">AL7 (Third Layer)</p>
                <p className="text-sm text-gray-700">7-micron aluminum foil for absolute oxygen, moisture, and light barrier.</p>
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
      title: 'What Barrier Protection Does It Offer?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>This ultimate kraft structure combines OPP's moisture resistance with foil barrier for the lowest WVTR in natural packaging.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">Maximum - complete oxygen exclusion.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Ultimate - lowest WVTR in kraft category.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Why PP + Kraft + Foil?</h4>
            <p className="text-sm text-green-700">This combination provides: Natural kraft aesthetics + OPP moisture protection (seals/edges) + Aluminum absolute barrier = perfect for hygroscopic premium products.</p>
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
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Maximum Protection:</strong> Minimum product waste</span>
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
          <p>Perfect for premium hygroscopic products requiring natural aesthetics:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Premium instant coffee', 'Specialty matcha powder', 'Luxury protein powders', 'Artisan cocoa powder', 'Premium powdered milk', 'High-end supplement powders', 'Specialty baking mixes', 'Premium collagen', 'Freeze-dried luxury items'].map((item, idx) => (
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
      title: 'Finding Ultimate Kraft Barrier Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Natural + ultimate barrier</strong> – Best moisture + natural look</li>
            <li><strong>Premium positioning</strong> – Maximum stiffness and substance</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse premium kraft pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best moisture barrier kraft packaging for powder"</li>
              <li>• "Premium natural pouch with aluminum foil"</li>
              <li>• "Luxury protein powder packaging natural look"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why choose PP kraft quadlex over PET kraft quadlex?', answer: 'PP kraft quadlex achieves WVTR <0.3 vs <0.5 for PET. For extremely hygroscopic products like instant coffee or protein isolates, this 40% improvement matters.' },
    { question: 'Is this the most expensive structure?', answer: 'Yes, the 4-layer PP kraft + foil is premium-priced. It is justified for luxury products where natural aesthetics and maximum protection are both essential.' },
    { question: 'What printing options are available?', answer: 'Print on OPP inner surface for vibrant colors with kraft visible through clear areas, or direct kraft printing with white underbase for natural feel.' },
    { question: 'Can I add a resealable zipper?', answer: 'Yes, high-quality press-to-close and slider zippers are available. The thick structure supports robust zipper performance.' },
    { question: 'What is the minimum order?', answer: 'Due to the premium structure, MOQ is typically 10,000 pieces for plate printing. Contact us for digital print options at lower quantities.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft packaging" },
    { title: "PET Kraft Quadlex", url: "/spec/pcr-pet-kraft-quadlex-aluminum", description: "Compare PET-based option" },
    { title: "Kraft VMPET", url: "/spec/pcr-kraft-vmpet", description: "More affordable metalised option" },
    { title: "Barrier Guide", url: "/features/high-barrier", description: "Compare all barriers" }
  ]

  return (
    <SEOPageLayout
      title="PP Kraft Quadlex Aluminum | Ultimate Moisture Barrier Natural Packaging"
      description="PP Kraft Quadlex Aluminum: OPP20 / Kraft 50gsm / AL7 / PCR-PE. Ultimate moisture barrier (WVTR <0.3) with natural kraft aesthetics. 155 micron. Ideal for premium powders, luxury products."
      heroTitle="PP Kraft Quadlex Aluminum Structure"
      heroSubtitle="OPP20 / Kraft 50gsm / AL7 / PCR-PE - Ultimate Moisture Barrier with Natural Look"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The ultimate kraft packaging structure combining OPP moisture protection, natural paper aesthetics, and aluminum foil barrier. Achieves the lowest WVTR (<0.3 g/m²/day) in the kraft category for premium hygroscopic products."
      keywords={[
        'PP kraft aluminum foil',
        'lowest WVTR kraft packaging',
        'premium natural barrier pouch',
        'luxury powder packaging',
        'quadlex kraft structure',
        'matcha powder packaging',
        'premium protein pouch',
        'ultimate kraft barrier'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-kraft-quadlex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpKraftQuadlexAluminumPage
