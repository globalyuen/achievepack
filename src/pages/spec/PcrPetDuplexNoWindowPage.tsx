import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, EyeOff } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetDuplexNoWindowPage: React.FC = () => {
  const structureName = 'PET12 / 30% PCR-PE (PET Duplex)'
  const thickness = '90 micron or 3.5 mil'
  const otr = '<200'
  const wvtr = '<15'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-duplex-nowindow.webp"
              alt="PCR PET Duplex No Window Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PET Duplex No Window Structure"
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
                <p className="text-sm text-neutral-500">Barrier Level</p>
                <p className="font-semibold text-neutral-700">Low Barrier</p>
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
                <p className="text-sm text-blue-700">12-micron clear PET film without K-coating. Provides excellent printability and mechanical strength but lower barrier than KPET.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene sealant layer with recycled or bio-based content.</p>
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
          <p>This low-barrier structure is designed for products with shorter shelf life or lower barrier requirements.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic protection - suitable for products with short turnover.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Moderate moisture protection for dry goods.</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Low Barrier Notice</h4>
            <p className="text-sm text-yellow-700">This structure is best for products consumed within 3-6 months or those with inherent stability. For extended shelf life, consider our <Link to="/spec/pcr-pet-duplex-clear" className="text-primary-600 hover:underline">KPET mid-barrier option</Link>.</p>
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
                <span><strong>Simpler Structure:</strong> Two layers = potentially easier future recycling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>No PVDC Coating:</strong> Standard PET without K-coating</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio Content:</strong> Sustainable sealant layer options</span>
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
          <p>Best for fast-moving products with shorter shelf life requirements:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Fresh-roasted coffee', 'Artisan baked goods', 'Seasonal snacks', 'Sample packs', 'Event giveaways', 'Non-food items', 'Craft supplies', 'Bath products', 'Short-shelf treats'].map((item, idx) => (
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
      title: 'Finding Low-Barrier Eco Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cost-effective</strong> – Simpler structure, competitive pricing</li>
            <li><strong>Full print area</strong> – No window = maximum branding space</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse eco pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Affordable sustainable pouch for short shelf life products"</li>
              <li>• "PET duplex eco packaging low MOQ"</li>
              <li>• "Basic barrier pouch with recycled content"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why no window option?', answer: 'This structure uses standard PET without the K-coating needed for clear barrier windows. For window capability with better barrier, see our KPET structures.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 3-6 months for most dry goods. Products with natural stability (non-fat, low moisture) may last longer.' },
    { question: 'Is this cheaper than mid-barrier options?', answer: 'Yes, the simpler structure without K-coating typically offers 10-15% cost savings compared to KPET variants.' },
    { question: 'Can I upgrade to better barrier later?', answer: 'Yes, you can easily switch to our KPET or metalised structures for future orders if you need extended shelf life.' },
    { question: 'What printing options are available?', answer: 'Full-color rotogravure or digital printing with matte/gloss finish options. No window means 100% printable surface.' }
  ]

  const relatedLinks = [
    { title: "Shop Eco Pouches", url: "/store", description: "Browse sustainable packaging" },
    { title: "Mid-Barrier KPET", url: "/spec/pcr-pet-duplex-clear", description: "Upgrade to better oxygen barrier" },
    { title: "PP Duplex No Window", url: "/spec/pcr-pp-duplex-nowindow", description: "Better moisture barrier option" },
    { title: "Barrier Comparison", url: "/features/barrier-options", description: "Compare all barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PCR PET Duplex No Window | Low Barrier Sustainable Packaging"
      description="PCR PET Duplex No Window: PET12 / PCR-PE. Low barrier, 90 micron, full print coverage. Cost-effective eco packaging for short shelf life products. OTR <200."
      heroTitle="PCR PET Duplex No Window Structure"
      heroSubtitle="PET12 / 30% PCR-PE - Low Barrier Full Print"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A cost-effective duplex structure without barrier coating, ideal for products with shorter shelf life requirements. Provides 100% printable surface for maximum branding impact."
      keywords={[
        'PET duplex no window',
        'low barrier sustainable pouch',
        'PCR PET packaging',
        'cost-effective eco packaging',
        'short shelf life pouch',
        'full print pouch',
        'basic barrier packaging',
        'sustainable flexible packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-duplex-nowindow"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetDuplexNoWindowPage
