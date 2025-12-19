import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioCelloTriplexMetalisedPage: React.FC = () => {
  const structureName = 'Cellulose or PLA 25gsm / Metalised Cellulose or PLA / PBAT60 (Cellulose Triplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<2'
  const wvtr = '<5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/bio-cello-triplex-metalised.webp"
              alt="Bio Cellulose Triplex Metalised Compostable"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Metalised Compostable - High Barrier"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Sparkles className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">High Barrier - Fully Compostable</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-green-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-green-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-green-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Barrier Level</p>
                <p className="font-semibold text-green-700">High Barrier</p>
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
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-green-800">Cellulose or PLA 25gsm (Outer Layer)</p>
                <p className="text-sm text-green-700">Standard clarity cellulose or PLA film (non-high barrier) provides printability and product protection.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">Metalised Cellulose or PLA (Middle Layer)</p>
                <p className="text-sm text-purple-700">Vacuum-metalised bio-based film provides the primary oxygen and moisture barrier while remaining fully compostable.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-amber-800">PBAT60 (Inner/Sealant Layer)</p>
                <p className="text-sm text-amber-700">Biodegradable polyester provides heat-seal performance and additional protection.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Difference from Highest Barrier</h4>
            <p className="text-sm text-blue-700">Uses standard cellulose outer (not high-barrier coated), offering good performance at slightly lower cost. OTR &lt;2 vs &lt;1 for highest barrier variant.</p>
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
          <p>This metalised compostable structure offers high barrier suitable for most demanding food applications.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">High - metalised layer provides excellent protection.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Very good - suitable for most moisture-sensitive products.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Compostability & Certifications',
      icon: <Sprout className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Certified Industrial Compostable</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>TUV OK Compost:</strong> Industrial composting certified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>BPI Certified:</strong> US ASTM D6400 standard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Full Breakdown:</strong> 90-180 days in industrial facilities</span>
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
          <p>Suitable for products requiring high barrier with compostable end-of-life:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Coffee beans', 'Tea blends', 'Protein powders', 'Dried fruits', 'Nuts & seeds', 'Granola', 'Supplements', 'Spices', 'Organic snacks'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-green-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Metalised Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>High barrier compostable</strong> – Metalised bio-based film</li>
            <li><strong>Value option</strong> – Good performance at competitive price</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse compostable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Metalised compostable coffee packaging"</li>
              <li>• "High barrier biodegradable stand-up pouch"</li>
              <li>• "BPI certified cellulose triplex"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'How is this different from the highest barrier option?', answer: 'Uses standard cellulose outer layer instead of high-barrier coated version. OTR is <2 vs <1, but at lower cost. Suitable when <2 OTR meets product requirements.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 9-12 months for most products. The metalised layer provides good protection for extended freshness.' },
    { question: 'Is this suitable for specialty coffee?', answer: 'Yes, OTR <2 is suitable for most coffee applications. For ultra-premium single-origin requiring maximum protection, consider the highest barrier variant.' },
    { question: 'Can I print metallic effects?', answer: 'The metalised middle layer is not visible from outside. For metallic appearance, consider metallic ink effects on the outer cellulose layer.' },
    { question: 'How do I communicate compostability to consumers?', answer: 'Include certified logos (TUV, BPI, Seedling) and clear disposal instructions directing to industrial composting.' }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse biodegradable options" },
    { title: "Highest Barrier Bio", url: "/spec/bio-cello-triplex-highest", description: "Maximum protection option" },
    { title: "Clear Compostable", url: "/spec/bio-cello-duplex-clear", description: "Window-capable option" },
    { title: "Compostable Guide", url: "/materials/compostable", description: "Learn about composting" }
  ]

  return (
    <SEOPageLayout
      title="Bio Cellulose Triplex Metalised | High Barrier Compostable Packaging"
      description="Bio Cellulose Triplex Metalised: Cellulose / Metalised Cellulose / PBAT (100 micron). High barrier compostable (OTR <2, WVTR <5). TUV/BPI certified. Ideal for coffee, tea, snacks."
      heroTitle="Bio Cellulose Triplex Metalised - High Barrier"
      heroSubtitle="Cellulose / Metalised Cellulose / PBAT - Excellent Protection"
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary="A high barrier metalised compostable structure offering excellent protection at competitive pricing. Standard cellulose outer with metalised middle layer delivers OTR <2 while maintaining full industrial compostability certification."
      keywords={[
        'metalised compostable packaging',
        'high barrier biodegradable',
        'cellulose triplex pouch',
        'BPI certified packaging',
        'compostable coffee bag',
        'bio-based metalised film',
        'TUV compostable',
        'PLA packaging high barrier'
      ]}
      canonicalUrl="https://achievepack.com/spec/bio-cello-triplex-metalised"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioCelloTriplexMetalisedPage
