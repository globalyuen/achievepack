import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Droplets } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrKraftDuplexLowPage: React.FC = () => {
  const structureName = 'Kraft Paper 50gsm / 30% PCR-PE (Kraft Paper Duplex)'
  const thickness = '120 micron or 4.7 mil'
  const otr = '<400'
  const wvtr = '<20'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-kraft-duplex-low.webp"
              alt="PCR Kraft Duplex Low Barrier Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Natural Kraft Paper Duplex - Low Barrier"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-600">Natural Kraft + Cost-Effective</span>
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
                <p className="text-sm text-neutral-500">Barrier Level</p>
                <p className="font-semibold text-amber-700">Low Barrier</p>
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
                <p className="text-sm text-amber-700">Natural kraft paper provides authentic eco-friendly appearance, excellent printability, and good stiffness for shelf presentation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene sealant provides moisture resistance, grease barrier, and reliable heat sealing.</p>
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
          <p>This simple two-layer kraft structure offers basic protection with maximum natural appeal.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic - suitable for products with short shelf life.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Moderate - PE layer protects paper from grease/moisture.</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Best For Short Shelf Life</h4>
            <p className="text-sm text-yellow-700">This structure is ideal for products consumed within 3-6 months. For extended shelf life, consider our <Link to="/spec/pcr-kraft-vmpet" className="text-primary-600 hover:underline">Kraft VMPET high-barrier option</Link>.</p>
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
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper option</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Simple Structure:</strong> Two layers for easier recycling pathways</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio Content:</strong> Reduced virgin plastic usage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Metal/Barrier Coating:</strong> Simpler end-of-life</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Paper Recyclability</h4>
            <p className="text-sm text-blue-700">While the PE layer prevents paper recycling in standard streams, the simple structure is compatible with emerging paper/plastic separation technologies.</p>
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
          <p>Best for fast-moving products with natural/artisan positioning:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Fresh-roasted coffee', 'Artisan bread mixes', 'Farmers market products', 'Bakery items', 'Soap & bath products', 'Craft candies', 'Seeds & garden products', 'Non-food items', 'Gift packaging'].map((item, idx) => (
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
      title: 'Finding Simple Kraft Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Maximum natural appeal</strong> – Authentic kraft paper look</li>
            <li><strong>Cost-effective</strong> – Simple two-layer structure</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Simple kraft paper pouch for artisan products"</li>
              <li>• "Cost-effective natural packaging low MOQ"</li>
              <li>• "Eco-friendly kraft bag for farmers market"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is this structure waterproof?', answer: 'The PE inner layer provides splash resistance and grease barrier, but the kraft outer layer can absorb moisture from humid environments. Store in dry conditions.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 3-6 months for most dry goods. Products with inherent stability may last longer. For extended shelf life, consider adding a metalised layer.' },
    { question: 'Can I print on kraft paper?', answer: 'Yes, we offer high-quality printing directly on kraft with up to 10 colors. White underbase available for vibrant colors on brown kraft.' },
    { question: 'Is this suitable for oily products?', answer: 'Yes, the PE inner layer provides effective grease barrier to protect the kraft paper from oil migration.' },
    { question: 'What is the minimum order?', answer: 'Digital printing starts at 500 pieces. This simple structure offers competitive pricing even at low volumes.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper options" },
    { title: "Kraft High Barrier", url: "/spec/pcr-kraft-vmpet", description: "Add VMPET for better barrier" },
    { title: "Kraft Triplex Clear", url: "/spec/pcr-pet-kraft-triplex-clear", description: "Add window capability" },
    { title: "Kraft Medium Barrier", url: "/materials/kraft-medium-barrier", description: "Compare kraft options" }
  ]

  return (
    <SEOPageLayout
      title="Kraft Paper Duplex Low Barrier | Natural Eco-Friendly Packaging"
      description="Kraft Paper Duplex: Kraft 50gsm / PCR-PE. Simple two-layer natural structure. Low barrier for short shelf life products. 120 micron. Ideal for artisan foods, farmers market."
      heroTitle="Kraft Paper Duplex Low Barrier Structure"
      heroSubtitle="Kraft 50gsm / PCR-PE - Natural & Cost-Effective"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A simple two-layer kraft structure offering authentic natural appearance with basic protection. Perfect for fast-moving artisan products at farmers markets and local retail with 3-6 month shelf life."
      keywords={[
        'kraft paper pouch',
        'natural kraft packaging',
        'simple eco packaging',
        'artisan food packaging',
        'farmers market pouch',
        'low barrier kraft',
        'sustainable kraft bag',
        'PCR kraft packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-kraft-duplex-low"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrKraftDuplexLowPage
