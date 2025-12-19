import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, EyeOff } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpDuplexNoWindowPage: React.FC = () => {
  const structureName = 'OPP20 / 30% PCR-PE or 50% Bio-PE80 (PP Duplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<250'
  const wvtr = '<8'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
            <ClickableImage
              src="/imgs/spec/pcr-pp-duplex-nowindow.webp"
              alt="PCR PP Duplex No Window Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PP Duplex No Window Structure"
            />
            <h3 className="text-xl font-bold text-neutral-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <EyeOff className="h-5 w-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">No Window - Full Print Coverage</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-neutral-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-neutral-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-neutral-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Key Feature</p>
                <p className="font-semibold text-neutral-700">Best Moisture in Low Barrier</p>
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
                <p className="text-sm text-blue-700">20-micron oriented polypropylene without K-coating. Provides excellent moisture barrier, clarity, and printability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE or 50% Bio-PE80 (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene heat-seal layer with recycled or bio-based content.</p>
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
          <p>This low-barrier PP structure offers the best moisture protection in the budget-friendly category.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic oxygen protection - suitable for short shelf life.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Good moisture protection - better than PET low-barrier.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">PP Advantage</h4>
            <p className="text-sm text-green-700">OPP naturally has better moisture barrier than PET. Even without K-coating, this structure offers WVTR of &lt;8 vs &lt;15 for PET duplex.</p>
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
                <span><strong>Simple Structure:</strong> Two layers for potential future recyclability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Barrier Coating:</strong> Standard OPP without PVDC</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer reduces virgin plastic</span>
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
          <p>Best for moisture-sensitive products with faster turnover:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Crackers & cookies', 'Candy', 'Popcorn', 'Rice cakes', 'Dry pasta', 'Sugar & salt', 'Bath salts', 'Soap bars', 'Non-food items'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-neutral-500 flex-shrink-0" />
                <span className="text-sm text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding PP Low-Barrier Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture in budget</strong> – OPP beats PET for WVTR</li>
            <li><strong>Full branding</strong> – 100% printable surface</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse PP eco pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Budget-friendly moisture barrier eco pouch"</li>
              <li>• "OPP sustainable packaging for crackers"</li>
              <li>• "Low cost recyclable content pouch"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why choose PP over PET for low barrier?', answer: 'OPP provides better inherent moisture barrier (WVTR <8 vs <15) even without barrier coatings. Choose PP for moisture-sensitive products with shorter shelf life.' },
    { question: 'What is the expected shelf life?', answer: 'Typically 3-6 months for most dry goods. The better moisture barrier helps products like crackers stay crispy longer.' },
    { question: 'Can I get matte or gloss finish?', answer: 'Yes, we offer both matte and gloss varnish options on the OPP outer layer for different brand aesthetics.' },
    { question: 'Is this suitable for oily products?', answer: 'Yes, the PE inner layer provides good grease resistance for products with moderate oil content.' },
    { question: 'What MOQ is required?', answer: 'Digital printing starts at 500 pieces. Plate printing requires minimum 10,000 pieces for optimal cost efficiency.' }
  ]

  const relatedLinks = [
    { title: "Shop Eco Pouches", url: "/store", description: "Browse sustainable packaging" },
    { title: "PP Mid-Barrier", url: "/spec/pcr-pp-duplex-clear", description: "Upgrade to KOPP with better oxygen barrier" },
    { title: "PET Low-Barrier", url: "/spec/pcr-pet-duplex-nowindow", description: "Better oxygen protection option" },
    { title: "Barrier Guide", url: "/features/barrier-options", description: "Compare all barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PCR PP Duplex No Window | Low-Barrier Moisture-Resistant Eco Packaging"
      description="PCR PP Duplex No Window: OPP20 / PCR-PE or Bio-PE. Best moisture barrier in low-barrier category (WVTR <8). 100 micron. Cost-effective for crackers, candy, dry goods."
      heroTitle="PCR PP Duplex No Window Structure"
      heroSubtitle="OPP20 / 30% PCR-PE or 50% Bio-PE80 - Best Low-Barrier Moisture"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The best moisture barrier in the low-barrier sustainable category. OPP's inherent moisture resistance provides WVTR <8, making it ideal for crackers, candy, and moisture-sensitive products with shorter shelf life."
      keywords={[
        'OPP duplex packaging',
        'low barrier PP pouch',
        'moisture resistant eco packaging',
        'PCR PP pouch',
        'cost-effective sustainable packaging',
        'no window pouch',
        'cracker packaging',
        'candy pouch sustainable'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-duplex-nowindow"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpDuplexNoWindowPage
