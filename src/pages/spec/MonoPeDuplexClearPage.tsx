import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Recycle, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import SortableMaterialStructuresTable, { MONO_PE_PP_STRUCTURES } from '../../components/SortableMaterialStructuresTable'

const MonoPeDuplexClearPage: React.FC = () => {
  const structureName = 'PE60 / PE60 (PE Duplex)'
  const thickness = '120 micron or 4.7 mil'
  const otr = '<300'
  const wvtr = '<10'

  const sections = [
    {
      id: 'all-mono-overview',
      title: 'All Mono-Material Structures at a Glance',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <SortableMaterialStructuresTable
          structures={MONO_PE_PP_STRUCTURES}
          title="All Mono PE/PP Structures - Sortable & Filterable"
          categoryColor="green"
        />
      )
    },
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <ClickableImage
              src="/imgs/spec/mono-pe-duplex-clear.webp"
              alt="Mono PE Duplex Clear Recyclable Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Mono PE Duplex - Fully Recyclable"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-blue-600">100% PE - Recyclable in PE Stream</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-blue-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-blue-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-blue-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Recyclability</p>
                <p className="font-semibold text-blue-700">PE Recycling Stream</p>
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
                <p className="font-semibold text-blue-800">PE60 (Outer Layer)</p>
                <p className="text-sm text-blue-700">60-micron polyethylene provides printability, clarity for window applications, and maintains mono-material recyclability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">PE60 (Inner Layer)</p>
                <p className="text-sm text-green-700">60-micron polyethylene sealant layer provides reliable heat sealing while maintaining 100% PE composition.</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Why Mono-Material Matters</h4>
            <p className="text-sm text-green-700">100% PE construction allows recycling in existing PE recycling streams. Multi-material structures cannot be recycled in standard facilities.</p>
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
          <p>PE provides good moisture barrier but limited oxygen barrier - suitable for products with moderate shelf life needs.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Basic - PE has inherently low oxygen barrier.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Good - PE provides natural moisture resistance.</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4 flex items-start gap-3">
            <Eye className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Window Capability</h4>
              <p className="text-sm text-blue-700">This clear PE structure supports full-window or partial-window designs while maintaining recyclability.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Recyclability & Sustainability',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Circular Economy Ready</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Mono-Material:</strong> 100% PE for easy recycling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PE Stream Compatible:</strong> Recycles with PE films (LDPE/HDPE)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Store Drop-off:</strong> Compatible with grocery store film recycling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>How2Recycle:</strong> Eligible for "Store Drop-off" label</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Recycling Instructions for Consumers</h4>
            <p className="text-sm text-blue-700">Empty, clean, and dry the pouch. Drop off at participating retail stores that collect plastic bags and films. Check How2Recycle.info for locations.</p>
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
          <p>Best for products prioritizing recyclability over extended shelf life:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Fresh produce', 'Frozen vegetables', 'Ice', 'Rice & grains', 'Pet food (large bags)', 'Lawn & garden', 'Hardware & parts', 'Textiles', 'E-commerce mailers'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Recyclable Mono-PE Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>True recyclability</strong> – Recycles in existing PE streams</li>
            <li><strong>Clear or printed</strong> – Window-capable mono-material</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse recyclable pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Recyclable mono-material stand-up pouch"</li>
              <li>• "PE recyclable flexible packaging with window"</li>
              <li>• "How2Recycle compatible pouch supplier"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'Compare All Mono-Material Structures',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">Compare all 4 mono-material recyclable structures:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 text-left border">Structure</th>
                  <th className="p-2 text-center border">OTR</th>
                  <th className="p-2 text-center border">WVTR</th>
                  <th className="p-2 text-left border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50 font-semibold">
                  <td className="p-2 border"><Link to="/spec/mono-pe-duplex-clear" className="text-primary-600 hover:underline">PE Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 border">Frozen, produce, e-commerce</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/mono-pp-duplex-clear" className="text-primary-600 hover:underline">PP Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;1800</td>
                  <td className="p-2 text-center border">&lt;4</td>
                  <td className="p-2 border">Best moisture, snacks</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/mono-pe-duplex-nowindow" className="text-primary-600 hover:underline">PE Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 border">Full print, light barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/mono-pp-duplex-nowindow" className="text-primary-600 hover:underline">PP Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;1800</td>
                  <td className="p-2 text-center border">&lt;4</td>
                  <td className="p-2 border">Light + moisture barrier</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">100% Recyclable</p>
              <p className="font-semibold text-blue-700">Store Drop-off Ready</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Best Moisture?</p>
              <p className="font-semibold text-amber-700">PP Structures (WVTR &lt;4)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Freezer Safe?</p>
              <p className="font-semibold text-green-700">All PE/PP Mono</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Is this really recyclable?', answer: 'Yes, 100% PE structures are accepted in PE film recycling streams. Most grocery stores collect PE films including bags and pouches. Check store drop-off locations.' },
    { question: 'What is the expected shelf life?', answer: 'Typically 3-6 months for most dry goods. PE has limited oxygen barrier, so products sensitive to oxidation may have shorter shelf life.' },
    { question: 'Can I print on mono-PE?', answer: 'Yes, we offer high-quality flexographic and rotogravure printing on PE films. Water-based inks available for enhanced sustainability.' },
    { question: 'Is this suitable for freezer use?', answer: 'Yes, PE maintains flexibility at freezer temperatures. Mono-PE is commonly used for frozen vegetables and ice products.' },
    { question: 'Does this support resealable zippers?', answer: 'Yes, PE-based zippers maintain mono-material status. Press-to-close and slider options available.' }
  ]

  const relatedLinks = [
    { title: "Shop Recyclable Pouches", url: "/store", description: "Browse mono-material options" },
    { title: "Mono-PP Alternative", url: "/spec/mono-pp-duplex-clear", description: "Compare with PP structure" },
    { title: "PE No Window", url: "/spec/mono-pe-duplex-nowindow", description: "Opaque version" },
    { title: "Recyclable Materials Guide", url: "/materials/recyclable-mono-pe", description: "Learn about PE recycling" }
  ]

  return (
    <SEOPageLayout
      title="Mono PE Duplex Clear | Fully Recyclable Sustainable Packaging"
      description="Mono PE Duplex: PE60 / PE60 (120 micron). 100% PE mono-material recyclable in PE streams. Clear window capable. Good moisture barrier. Ideal for frozen foods, produce, e-commerce."
      heroTitle="Mono PE Duplex Clear - Fully Recyclable"
      heroSubtitle="PE60 / PE60 - 100% PE Mono-Material for Store Drop-off Recycling"
      heroLogo="/eco-logo/white-bkg/eco-logo-recycle.png"
      heroLogoAlt="Store Drop-off Recyclable"
      introSummary="A truly recyclable mono-material structure using 100% polyethylene. Compatible with existing PE film recycling streams and store drop-off programs. Clear window capable with good moisture barrier."
      keywords={[
        'mono PE packaging',
        'recyclable mono-material pouch',
        'PE recyclable stand-up pouch',
        'How2Recycle packaging',
        'store drop-off recyclable',
        'sustainable PE packaging',
        'mono-material flexible packaging',
        'circular economy packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/mono-pe-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default MonoPeDuplexClearPage
