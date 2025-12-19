import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Home } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioKraftPbatLowPage: React.FC = () => {
  const structureName = 'Kraft Paper 50gsm / PBAT60 (Kraft Paper Duplex)'
  const thickness = '110 micron or 4.3 mil'
  const otr = '<300'
  const wvtr = '<15'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/bio-kraft-pbat-low.webp"
              alt="Bio Kraft PBAT Low Barrier Compostable"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Simple Kraft Compostable - Home Compost Possible"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Home className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-600">Simple Structure - Home Compostable Potential</span>
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
      title: 'Layer-by-Layer Breakdown',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Outer Layer)</p>
                <p className="text-sm text-amber-700">Natural unbleached kraft paper provides authentic eco-friendly appearance and excellent printability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">PBAT60 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">Biodegradable polyester provides heat-seal capability, grease barrier, and basic moisture protection while being fully compostable.</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Simple = Faster Composting</h4>
            <p className="text-sm text-green-700">The simple two-layer structure breaks down faster than metalised alternatives. Some variants may qualify for home composting certification.</p>
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
          <p>This simple structure provides basic protection suitable for fast-moving products.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic - suitable for short shelf life products.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Moderate - PBAT protects kraft from moisture.</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Best for Fast Turnover</h4>
            <p className="text-sm text-yellow-700">This low-barrier structure is ideal for products sold within 3-6 months. For extended shelf life, consider our <Link to="/spec/bio-kraft-vm-cello" className="text-primary-600 hover:underline">high-barrier kraft compostable</Link>.</p>
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
            <h4 className="font-semibold text-green-800 mb-3">Composting Certifications</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>TUV OK Compost Industrial:</strong> Certified for industrial facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Home Compost Potential:</strong> Simpler structure may qualify (check specs)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Faster Breakdown:</strong> 60-120 days vs 90-180 for metalised</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>FSC Kraft:</strong> Sustainable paper sourcing available</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg flex items-start gap-3">
            <Home className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Home Composting</h4>
              <p className="text-sm text-amber-700">Some PBAT formulations are certified TUV OK Compost HOME. Contact us for specific home-compostable options.</p>
            </div>
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
          <p>Best for fast-moving natural products with short consumption cycles:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Fresh-roasted coffee', 'Farmers market products', 'Bakery items', 'Fresh-baked goods', 'Artisan snacks', 'Soap & bath bombs', 'Garden seeds', 'Craft items', 'Event packaging'].map((item, idx) => (
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
      title: 'Finding Simple Kraft Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Maximum sustainability</strong> – Simple structure, fast composting</li>
            <li><strong>Home compost potential</strong> – Check availability</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse compostable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Home compostable kraft paper bag"</li>
              <li>• "Simple biodegradable packaging for farmers market"</li>
              <li>• "Fast-composting eco pouch for bakery"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is this home compostable?', answer: 'Some PBAT formulations are home-compostable certified. The simpler structure breaks down faster than metalised alternatives. Contact us for specific home-compost options.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 3-6 months for most dry goods. This is ideal for fast-moving products at farmers markets, bakeries, or local retail.' },
    { question: 'How does this compare to conventional kraft-PE?', answer: 'Similar performance and appearance, but the PBAT inner layer is fully compostable while conventional PE is not biodegradable.' },
    { question: 'Can I print on the kraft?', answer: 'Yes, high-quality printing with compostable inks is available. Up to 8 colors with water-based inks.' },
    { question: 'Is this suitable for oily products?', answer: 'The PBAT layer provides good grease resistance. Suitable for moderately oily products like cookies or baked goods.' }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse biodegradable options" },
    { title: "High Barrier Kraft Bio", url: "/spec/bio-kraft-vm-cello", description: "Extended shelf life option" },
    { title: "Home Compostable Guide", url: "/materials/home-compostable", description: "Learn about home composting" },
    { title: "Compostable Guide", url: "/materials/compostable", description: "Composting overview" }
  ]

  return (
    <SEOPageLayout
      title="Bio Kraft PBAT Low Barrier | Simple Home Compostable Packaging"
      description="Bio Kraft PBAT: Kraft Paper 50gsm / PBAT60 (110 micron). Simple low-barrier compostable. Home compost potential. Fast breakdown (60-120 days). Ideal for bakeries, farmers markets."
      heroTitle="Bio Kraft PBAT - Simple Compostable Structure"
      heroSubtitle="Kraft 50gsm / PBAT60 - Potential Home Compostable"
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary="The simplest compostable kraft structure offering fast breakdown (60-120 days) and potential home composting certification. Perfect for fast-moving products at farmers markets, bakeries, and artisan retailers."
      keywords={[
        'home compostable kraft',
        'simple biodegradable packaging',
        'kraft PBAT pouch',
        'low barrier compostable',
        'farmers market packaging',
        'bakery compostable bag',
        'fast composting packaging',
        'eco kraft paper bag'
      ]}
      canonicalUrl="https://achievepack.com/spec/bio-kraft-pbat-low"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioKraftPbatLowPage
