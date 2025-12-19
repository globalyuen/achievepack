import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPePpDuplexClearPage: React.FC = () => {
  const structureName = 'BOPP20 / 100% Bio-PE80 (PP Duplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<100'
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
              src="/imgs/spec/biope-pp-duplex-clear.webp"
              alt="Bio-PE PP Duplex Clear Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="100% Bio-PE PP Duplex - Superior Moisture Barrier"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">100% Plant-Based PE - Best Moisture Protection</span>
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
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-green-700">Best Moisture Barrier</p>
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
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-purple-800">BOPP20 (Outer Layer)</p>
                <p className="text-sm text-purple-700">20-micron bi-axially oriented polypropylene provides excellent moisture barrier, stiffness, and brilliant clarity for window applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">100% Bio-PE80 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">80-micron plant-based polyethylene from sugarcane. Carbon-negative production with identical seal performance to fossil PE.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Why PP + Bio-PE?</h4>
            <p className="text-sm text-blue-700">BOPP's inherent low WVTR combined with Bio-PE sealant creates the best moisture barrier in the Bio-PE category. Ideal for moisture-sensitive products like crackers and chips.</p>
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
          <p>This structure excels in moisture protection while offering plant-based sustainability.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Moderate - suitable for shorter shelf life products.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent - BOPP provides superior moisture protection.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Bio-PE Sustainability Benefits',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Plant-Based Advantages</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Carbon Negative:</strong> Sugarcane captures CO2 during growth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>I'm Green™ Certified:</strong> Verified bio-based content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Renewable Source:</strong> Brazilian sugarcane - sustainable agriculture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>70% Less Emissions:</strong> Significant carbon footprint reduction</span>
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
          <p>Perfect for moisture-sensitive products with sustainability focus:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Crackers & cookies', 'Chips & crisps', 'Candy & confectionery', 'Baked goods', 'Cereal & granola', 'Rice cakes', 'Dried pasta', 'Pet treats', 'Bath products'].map((item, idx) => (
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
      title: 'Finding Bio-PE PP Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture + sustainable</strong> – WVTR &lt;5 with plant-based PE</li>
            <li><strong>Great clarity</strong> – BOPP for brilliant windows</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse Bio-PE pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Bio-PE cracker packaging low moisture"</li>
              <li>• "Plant-based candy bag supplier"</li>
              <li>• "Sustainable snack packaging best barrier"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'Compare All Bio-PE Structures',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">Compare all 14 Bio-PE structures by barrier level, features, and best applications:</p>
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
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-duplex-clear" className="text-primary-600 hover:underline">PET Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;12</td>
                  <td className="p-2 border">Window bags, visibility</td>
                </tr>
                <tr className="bg-green-50 font-semibold">
                  <td className="p-2 border"><Link to="/spec/biope-pp-duplex-clear" className="text-primary-600 hover:underline">PP Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 border">Best moisture barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-kraft-triplex-clear" className="text-primary-600 hover:underline">PET Kraft Triplex</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;10</td>
                  <td className="p-2 border">Natural look + window</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pp-kraft-triplex-clear" className="text-primary-600 hover:underline">PP Kraft Triplex</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;4</td>
                  <td className="p-2 border">Kraft + moisture barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-duplex-nowindow" className="text-primary-600 hover:underline">PET Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;12</td>
                  <td className="p-2 border">Light-sensitive products</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pp-duplex-nowindow" className="text-primary-600 hover:underline">PP Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 border">Moisture + light barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-triplex-metalised" className="text-primary-600 hover:underline">PET Triplex Metalised</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">High barrier, coffee</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pp-triplex-metalised" className="text-primary-600 hover:underline">PP Triplex Metalised</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Best moisture high barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-kraft-vmpet" className="text-primary-600 hover:underline">Kraft VMPET</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">Premium natural look</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-triplex-aluminum" className="text-primary-600 hover:underline">PET Triplex Aluminum</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Ultimate barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pp-triplex-aluminum" className="text-primary-600 hover:underline">PP Triplex Aluminum</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.3</td>
                  <td className="p-2 border">Ultimate + best WVTR</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pet-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PET Kraft Quadlex ALU</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Premium natural + max barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-pp-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PP Kraft Quadlex ALU</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.3</td>
                  <td className="p-2 border">Ultimate kraft + moisture</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/biope-kraft-duplex-low" className="text-primary-600 hover:underline">Kraft Duplex Low</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;15</td>
                  <td className="p-2 border">Dry goods, short shelf</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Need Window?</p>
              <p className="font-semibold text-green-700">PET or PP Duplex Clear</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Max Barrier?</p>
              <p className="font-semibold text-amber-700">Aluminum Triplex/Quadlex</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Best Moisture?</p>
              <p className="font-semibold text-blue-700">PP-based structures</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why is WVTR lower than PET duplex?', answer: 'BOPP has inherently lower water vapor transmission than PET. When combined with Bio-PE sealant, this structure achieves WVTR <5 vs <12 for PET-based alternatives.' },
    { question: 'Is this suitable for chips and crackers?', answer: 'Yes, the excellent moisture barrier keeps crispy products fresh. The WVTR <5 is ideal for maintaining crispness and preventing staleness.' },
    { question: 'Can I have a window with this structure?', answer: 'Yes, BOPP provides excellent clarity for window applications while maintaining the superior moisture barrier.' },
    { question: 'What is the shelf life?', answer: 'Typically 6-9 months for most dry snacks. The excellent moisture barrier extends shelf life compared to standard PE-based structures.' },
    { question: 'Is Bio-PE more expensive?', answer: 'Bio-PE has a modest premium over fossil PE, typically 10-15%. Many brands offset this through sustainability marketing and consumer willingness to pay for eco-friendly options.' }
  ]

  const relatedLinks = [
    { title: "Shop Bio-PE Pouches", url: "/store", description: "Browse plant-based options" },
    { title: "PET Bio-PE Duplex", url: "/spec/biope-pet-duplex-clear", description: "Better oxygen barrier" },
    { title: "Bio-PE Materials", url: "/materials/bio-pe", description: "Learn about plant-based PE" },
    { title: "Kraft Bio-PE", url: "/spec/biope-kraft-duplex-low", description: "Natural kraft option" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE PP Duplex Clear | Best Moisture Barrier Plant-Based Packaging"
      description="Bio-PE PP Duplex: BOPP20 / 100% Bio-PE80 (100 micron). Best moisture barrier (WVTR <5) with plant-based sugarcane PE. I'm Green certified. Ideal for crackers, chips, candy."
      heroTitle="Bio-PE PP Duplex Clear Structure"
      heroSubtitle="BOPP20 / 100% Bio-PE80 - Superior Moisture + Plant-Based"
      heroLogo="/eco-logo/white-bkg/eco-logo-biope.png"
      heroLogoAlt="I'm Green™ Bio-PE Certified"
      introSummary="The best moisture barrier in plant-based packaging. BOPP outer layer delivers WVTR <5 while 100% Bio-PE sealant reduces carbon footprint by 70%. Perfect for moisture-sensitive snacks and confectionery."
      keywords={[
        'Bio-PE PP packaging',
        'plant-based snack bag',
        'low moisture barrier',
        'BOPP Bio-PE',
        'sustainable cracker packaging',
        'Im Green certified pouch',
        'candy bag plant-based',
        'eco chip bag'
      ]}
      canonicalUrl="https://achievepack.com/spec/biope-pp-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioPePpDuplexClearPage
