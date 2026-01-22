import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import SortableMaterialStructuresTable, { COMPOSTABLE_STRUCTURES } from '../../components/SortableMaterialStructuresTable'

const BioCelloDuplexClearPage: React.FC = () => {
  const structureName = 'High Barrier Cellulose or PLA 25gsm / PBAT60 (Cello Duplex)'
  const thickness = '85 micron or 3.3 mil'
  const otr = '<5'
  const wvtr = '<10'

  const sections = [
    {
      id: 'all-compost-overview',
      title: 'What Compostable Structures Are Available?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <SortableMaterialStructuresTable
          structures={COMPOSTABLE_STRUCTURES}
          title="All Compostable Structures - Sortable & Filterable"
          categoryColor="green"
        />
      )
    },
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/bio-cello-duplex-clear.webp"
              alt="Bio Cellulose Duplex Clear Compostable Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Biodegradable Cellulose Duplex - Compostable"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Eye className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">100% Compostable - Clear Window Capable</span>
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
                <p className="text-sm text-neutral-500">Certification</p>
                <p className="font-semibold text-green-700">TUV OK Compost / BPI</p>
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
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-green-800">High Barrier Cellulose or PLA 25gsm (Outer Layer)</p>
                <p className="text-sm text-green-700">Cellulose (wood-pulp derived) or PLA (corn-based) film with barrier coating provides oxygen protection and clear window capability. 100% bio-based and compostable.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">PBAT60 (Inner/Sealant Layer)</p>
                <p className="text-sm text-amber-700">60-micron PBAT (polybutylene adipate terephthalate) is a biodegradable polyester that provides heat-seal and moisture barrier while fully composting.</p>
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
          <p>Here's the thing: this compostable structure gives you mid-level barrier—enough for many food applications without sacrificing your eco-credentials.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good - high barrier cellulose provides protection.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Moderate - PBAT layer provides moisture resistance.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4 flex items-start gap-3">
            <Eye className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-800 mb-1">Clear Window Capable</h4>
              <p className="text-sm text-green-700">Cellulose film provides beautiful clarity for window applications, letting consumers see your product while maintaining compostability.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Is It Certified Compostable?',
      icon: <Sprout className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Certified Compostable</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Industrial Composting:</strong> TUV OK Compost Industrial / BPI certified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Break-down Time:</strong> 90-180 days in industrial facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Bio-based Content:</strong> Cellulose from wood pulp, PLA from corn</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Microplastics:</strong> Fully biodegrades to CO2, water, biomass</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Composting Note</h4>
            <p className="text-sm text-amber-700">This structure requires industrial composting facilities (high heat, controlled conditions). Home composting is not recommended. Check local composting availability.</p>
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
          <p>This structure is perfect for eco-conscious brands that have access to composting infrastructure:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Coffee beans', 'Tea leaves', 'Dried fruits', 'Nuts & seeds', 'Granola', 'Organic snacks', 'Herbs & spices', 'Supplements', 'Pet treats'].map((item, idx) => (
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
      title: 'Need Help Finding Compostable Clear Packaging?',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Truly compostable</strong> – Certified industrial composting</li>
            <li><strong>Clear windows</strong> – Show your product beautifully</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse compostable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Compostable coffee bag with clear window"</li>
              <li>• "BPI certified stand-up pouch"</li>
              <li>• "Cellulose packaging for organic products"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'How Do Compostable Structures Compare?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">Compare all 5 compostable structures by barrier level and best applications:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-2 text-left border">Structure</th>
                  <th className="p-2 text-center border">OTR</th>
                  <th className="p-2 text-center border">WVTR</th>
                  <th className="p-2 text-left border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 font-semibold">
                  <td className="p-2 border"><Link to="/spec/bio-cello-duplex-clear" className="text-primary-600 hover:underline">Cellulose Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 text-center border">&lt;10</td>
                  <td className="p-2 border">Window bags, visibility</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-cello-triplex-highest" className="text-primary-600 hover:underline">Cellulose Triplex Highest</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;3</td>
                  <td className="p-2 border">Maximum barrier compostable</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-cello-triplex-metalised" className="text-primary-600 hover:underline">Cellulose Triplex Metalised</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">High barrier, coffee</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-kraft-vm-cello" className="text-primary-600 hover:underline">Kraft VM Cellulose</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">Premium natural look</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-kraft-pbat-low" className="text-primary-600 hover:underline">Kraft PBAT Low</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;15</td>
                  <td className="p-2 border">Home compostable option</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Need Window?</p>
              <p className="font-semibold text-green-700">Cellulose Duplex Clear</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Max Barrier?</p>
              <p className="font-semibold text-amber-700">Triplex Metalised</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Home Compost?</p>
              <p className="font-semibold text-blue-700">Kraft PBAT Low</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is this home compostable?', answer: 'This structure requires industrial composting (high heat facilities). For home compostable, see our kraft-based bio structures with specific home composting certifications.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 6-9 months for most dry goods. The high barrier cellulose provides good oxygen protection for extended freshness.' },
    { question: 'Can I print on cellulose film?', answer: 'Yes, we offer high-quality printing on cellulose with compostable inks. Up to 8 colors available.' },
    { question: 'Is this suitable for oily products?', answer: 'The PBAT layer provides moderate grease resistance. For very oily products, contact us for specific recommendations.' },
    { question: 'How do I display compostability on pack?', answer: 'We provide guidance on certification logos (TUV, BPI) and recommended disposal language for consumer education.' }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse biodegradable options" },
    { title: "Higher Barrier Bio", url: "/spec/bio-cello-triplex-highest", description: "Maximum compostable barrier" },
    { title: "Bio Kraft Option", url: "/spec/bio-kraft-vm-cello", description: "Natural kraft look" },
    { title: "Compostable Guide", url: "/materials/compostable", description: "Learn about composting" }
  ]

  return (
    <SEOPageLayout
      title="Bio Cellulose Duplex Clear | Compostable Window Packaging"
      description="Bio Cellulose Duplex: High Barrier Cellulose/PLA 25gsm / PBAT60 (85 micron). TUV/BPI certified compostable, clear window capable. OTR <5, WVTR <10. Ideal for coffee, tea, organic snacks."
      heroTitle="Bio Cellulose Duplex Clear - Compostable"
      heroSubtitle="High Barrier Cellulose / PBAT - TUV & BPI Certified"
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary="A certified compostable packaging structure with clear window capability. Combines high barrier cellulose or PLA outer layer with biodegradable PBAT sealant. Fully breaks down in industrial composting facilities."
      keywords={[
        'compostable packaging',
        'cellulose pouch',
        'biodegradable stand-up bag',
        'PLA packaging',
        'PBAT sealant',
        'BPI certified pouch',
        'TUV compostable',
        'clear compostable window'
      ]}
      canonicalUrl="https://achievepack.com/spec/bio-cello-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioCelloDuplexClearPage
