import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioKraftVmCelloPage: React.FC = () => {
  const structureName = 'Kraft Paper 50gsm / VM cellulose or PLA15 / PBAT60'
  const thickness = '125 micron or 5 mil'
  const otr = '<2'
  const wvtr = '<5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/bio-kraft-vm-cello.webp"
              alt="Bio Kraft VM Cellulose Compostable Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Natural Kraft with Compostable Barrier"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-600">Natural Kraft + High Barrier + Compostable</span>
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
      title: 'Layer-by-Layer Breakdown',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Outer Layer)</p>
                <p className="text-sm text-amber-700">Natural unbleached kraft paper provides authentic eco-friendly appearance, excellent stiffness, and premium tactile feel.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">VM Cellulose or PLA15 (Middle Layer)</p>
                <p className="text-sm text-purple-700">Vacuum-metalised cellulose or PLA film provides high barrier protection while remaining fully compostable.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">PBAT60 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">Biodegradable polyester provides heat-seal and grease barrier to protect the kraft paper.</p>
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
          <p>This kraft-based structure combines natural aesthetics with high barrier performance, all while remaining compostable.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">High - VM layer provides excellent protection.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Very good - kraft protected by inner layers.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Premium Kraft Aesthetics</h4>
            <p className="text-sm text-amber-700">The natural kraft outer layer communicates sustainability to consumers, while the hidden VM layer provides full barrier protection.</p>
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
                <span><strong>BPI Certified:</strong> US composting standard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Full Biodegradation:</strong> All layers break down completely</span>
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
          <p>Perfect for premium natural products with compostable commitment:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Premium loose tea', 'Artisan granola', 'Organic dried fruits', 'Natural supplements', 'Craft protein', 'Premium pet treats', 'Gourmet spices', 'Superfood blends'].map((item, idx) => (
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
      title: 'Finding Kraft Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Natural + protected + compostable</strong> – Triple benefit</li>
            <li><strong>Premium positioning</strong> – Kraft stiffness and appeal</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft compostable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Kraft paper compostable coffee bag with barrier"</li>
              <li>• "Natural biodegradable stand-up pouch"</li>
              <li>• "Premium eco packaging kraft paper"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Can I print on the kraft paper?', answer: 'Yes, we offer high-quality printing on kraft with compostable inks. White underbase available for vibrant colors on brown kraft.' },
    { question: 'Is the kraft paper FSC certified?', answer: 'FSC-certified kraft is available upon request for brands requiring verified sustainable sourcing.' },
    { question: 'Can I add a window to kraft compostable?', answer: 'Yes, clear cellulose windows can be incorporated while maintaining full compostability.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 9-12 months for most products. The VM layer provides high barrier despite natural appearance.' },
    { question: 'Is this home compostable?', answer: 'This structure is certified for industrial composting. The kraft paper alone would home compost, but the complete structure requires industrial conditions.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper options" },
    { title: "Low Barrier Kraft Bio", url: "/spec/bio-kraft-pbat-low", description: "Simpler home-compostable option" },
    { title: "Clear Compostable", url: "/spec/bio-cello-duplex-clear", description: "Window-focused option" },
    { title: "Compostable Guide", url: "/materials/compostable", description: "Learn about composting" }
  ]

  return (
    <SEOPageLayout
      title="Bio Kraft VM Cellulose | Natural High Barrier Compostable Packaging"
      description="Bio Kraft VM Cellulose: Kraft 50gsm / VM Cellulose / PBAT (125 micron). Natural kraft with high barrier (OTR <2, WVTR <5). TUV/BPI certified compostable. Ideal for specialty coffee, premium organics."
      heroTitle="Bio Kraft VM Cellulose - Natural & Compostable"
      heroSubtitle="Kraft 50gsm / VM Cellulose / PBAT - Premium Look with High Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary="The perfect blend of natural kraft aesthetics and high barrier protection in a fully compostable structure. Hidden VM cellulose layer provides OTR <2 while kraft paper communicates sustainability to consumers."
      keywords={[
        'kraft paper compostable',
        'natural biodegradable packaging',
        'VM cellulose kraft',
        'high barrier kraft compostable',
        'premium eco kraft pouch',
        'BPI certified kraft bag',
        'FSC kraft compostable',
        'artisan food packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/bio-kraft-vm-cello"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioKraftVmCelloPage
