import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioCelloTriplexHighestPage: React.FC = () => {
  const structureName = 'High Barrier Cellulose or PLA 25gsm / Metalised Cellulose or PLA 15 / PBAT60 (Cellulose Triplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<1'
  const wvtr = '<3'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/bio-cello-triplex-highest.webp"
              alt="Bio Cellulose Triplex Highest Barrier Compostable"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Highest Barrier Compostable Structure"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Sparkles className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">Maximum Barrier - Fully Compostable</span>
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
                <p className="font-semibold text-green-700">Highest Compostable</p>
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
                <p className="font-semibold text-green-800">High Barrier Cellulose or PLA 25gsm (Outer Layer)</p>
                <p className="text-sm text-green-700">Clear, printable bio-based film provides oxygen barrier and excellent surface for branding.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">Metalised Cellulose or PLA 15 (Middle Layer)</p>
                <p className="text-sm text-purple-700">Bio-based film with compostable metallization provides exceptional oxygen and moisture barrier. The thin metal layer composts completely.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-amber-800">PBAT60 (Inner/Sealant Layer)</p>
                <p className="text-sm text-amber-700">Biodegradable polyester provides reliable heat sealing and additional moisture protection.</p>
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
          <p>This is the highest barrier structure available in compostable packaging, approaching conventional film performance.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">Exceptional - metalised layer provides near-zero transmission.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - best moisture barrier in compostable category.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Compostable Metallization</h4>
            <p className="text-sm text-green-700">The aluminum metallization layer is microscopic (50nm) and fully approved for composting under industrial conditions. The metal content is negligible and breaks down into mineral components.</p>
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
                <span><strong>TUV OK Compost Industrial:</strong> European composting standard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>BPI Certified:</strong> US composting standard (ASTM D6400)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>EN 13432:</strong> European packaging composting standard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Seedling Logo:</strong> Eligible for European seedling certification</span>
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
          <p>Best for premium products requiring extended shelf life with compostable end-of-life:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Premium tea', 'Protein powders', 'Superfood blends', 'Dried fruits', 'Premium nuts', 'Organic supplements', 'Medicinal herbs', 'Gourmet spices'].map((item, idx) => (
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
      title: 'Finding High-Barrier Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Maximum compostable barrier</strong> – OTR &lt;1, WVTR &lt;3</li>
            <li><strong>Long shelf life</strong> – 12-18 months possible</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse compostable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Highest barrier compostable coffee bag"</li>
              <li>• "BPI certified metalised biodegradable pouch"</li>
              <li>• "Premium compostable packaging long shelf life"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is metalised compostable really compostable?', answer: 'Yes, the aluminum layer is microscopic (50nm) and approved under all major composting standards. It represents negligible metal content that breaks down into minerals.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 12-18 months for most products, approaching conventional packaging performance. The metalised layer provides exceptional protection.' },
    { question: 'Can this have a window?', answer: 'The metalised middle layer blocks visibility. For window capability, see our duplex compostable structure which trades some barrier for transparency.' },
    { question: 'Is this home compostable?', answer: 'This structure is certified for industrial composting only. The metalised layer requires higher temperatures for proper breakdown.' },
    { question: 'How does cost compare to conventional packaging?', answer: 'Premium pricing applies due to specialized bio-based materials. Many brands offset through sustainability messaging and consumer willingness to pay.' }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse biodegradable options" },
    { title: "Clear Compostable", url: "/spec/bio-cello-duplex-clear", description: "Window-capable option" },
    { title: "Kraft Compostable", url: "/spec/bio-kraft-vm-cello", description: "Natural kraft look" },
    { title: "Compostable Guide", url: "/materials/compostable", description: "Learn about composting" }
  ]

  return (
    <SEOPageLayout
      title="Bio Cellulose Triplex Highest Barrier | Premium Compostable Packaging"
      description="Bio Cellulose Triplex: High Barrier Cellulose / Metalised Cellulose / PBAT (100 micron). Highest compostable barrier (OTR <1, WVTR <3). TUV/BPI certified. Ideal for specialty coffee, premium products."
      heroTitle="Bio Cellulose Triplex - Highest Barrier Compostable"
      heroSubtitle="High Barrier Cellulose / Metalised Cellulose / PBAT - Maximum Protection"
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary="The highest barrier structure available in compostable packaging, approaching conventional film performance. Metalised bio-based middle layer delivers OTR <1 and WVTR <3 while remaining fully certified compostable."
      keywords={[
        'highest barrier compostable',
        'metalised compostable packaging',
        'premium biodegradable pouch',
        'BPI certified high barrier',
        'TUV compostable metalised',
        'specialty coffee compostable bag',
        'best compostable packaging',
        'cellulose triplex'
      ]}
      canonicalUrl="https://achievepack.com/spec/bio-cello-triplex-highest"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioCelloTriplexHighestPage
