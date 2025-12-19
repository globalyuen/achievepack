import React from 'react'
import { Layers, Shield, Recycle, Leaf, CheckCircle, MessageCircle, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetDuplexClearPage: React.FC = () => {
  const structureName = 'KPET12 / 30% PCR-PE (PET Duplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<8'
  const wvtr = '<12'
  const materialCategory = 'PCR or Bio Plastic'
  const barrierType = 'Mid Clear Mid Barrier (Optional Window)'
  const stiffness = 'Without Paper Lining (Softer)'

  const sections = [
    {
      id: 'all-pcr-overview',
      title: 'All PCR Structures at a Glance',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-sm text-neutral-600">Compare all 14 PCR structures with images, barrier levels, and key characteristics:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'PET Duplex Clear', img: '/imgs/spec/pcr-pet-duplex-clear.webp', url: '/spec/pcr-pet-duplex-clear', otr: '<8', wvtr: '<12', feature: 'Window' },
              { name: 'PP Duplex Clear', img: '/imgs/spec/pcr-pp-duplex-clear.webp', url: '/spec/pcr-pp-duplex-clear', otr: '<1500', wvtr: '<5', feature: 'Best Moisture' },
              { name: 'PET Kraft Triplex', img: '/imgs/spec/pcr-pet-kraft-triplex-clear.webp', url: '/spec/pcr-pet-kraft-triplex-clear', otr: '<8', wvtr: '<10', feature: 'Natural+Window' },
              { name: 'PP Kraft Triplex', img: '/imgs/spec/pcr-pp-kraft-triplex-clear.webp', url: '/spec/pcr-pp-kraft-triplex-clear', otr: '<1500', wvtr: '<4', feature: 'Kraft+Moisture' },
              { name: 'PET No Window', img: '/imgs/spec/pcr-pet-duplex-nowindow.webp', url: '/spec/pcr-pet-duplex-nowindow', otr: '<8', wvtr: '<12', feature: 'Light Barrier' },
              { name: 'PP No Window', img: '/imgs/spec/pcr-pp-duplex-nowindow.webp', url: '/spec/pcr-pp-duplex-nowindow', otr: '<1500', wvtr: '<5', feature: 'Moisture+Light' },
              { name: 'PET Metalised', img: '/imgs/spec/pcr-pet-triplex-metalised.webp', url: '/spec/pcr-pet-triplex-metalised', otr: '<1', wvtr: '<1', feature: 'High Barrier' },
              { name: 'PP Metalised', img: '/imgs/spec/pcr-pp-triplex-metalised.webp', url: '/spec/pcr-pp-triplex-metalised', otr: '<1', wvtr: '<0.5', feature: 'Best Moist+High' },
              { name: 'Kraft VMPET', img: '/imgs/spec/pcr-kraft-vmpet.webp', url: '/spec/pcr-kraft-vmpet', otr: '<1', wvtr: '<1', feature: 'Natural+High' },
              { name: 'PET Aluminum', img: '/imgs/spec/pcr-pet-triplex-aluminum.webp', url: '/spec/pcr-pet-triplex-aluminum', otr: '<0.5', wvtr: '<0.5', feature: 'Ultimate' },
              { name: 'PP Aluminum', img: '/imgs/spec/pcr-pp-triplex-aluminum.webp', url: '/spec/pcr-pp-triplex-aluminum', otr: '<0.5', wvtr: '<0.3', feature: 'Ultimate+Moist' },
              { name: 'PET Kraft Quadlex', img: '/imgs/spec/pcr-pet-kraft-quadlex-aluminum.webp', url: '/spec/pcr-pet-kraft-quadlex-aluminum', otr: '<0.5', wvtr: '<0.5', feature: 'Premium Natural' },
              { name: 'PP Kraft Quadlex', img: '/imgs/spec/pcr-pp-kraft-quadlex-aluminum.webp', url: '/spec/pcr-pp-kraft-quadlex-aluminum', otr: '<0.5', wvtr: '<0.3', feature: 'Ultimate Natural' },
              { name: 'Kraft Duplex Low', img: '/imgs/spec/pcr-kraft-duplex-low.webp', url: '/spec/pcr-kraft-duplex-low', otr: '<2000', wvtr: '<15', feature: 'Budget Kraft' }
            ].map((item, idx) => (
              <Link key={idx} to={item.url} className="group bg-white border rounded-lg p-2 hover:border-blue-400 hover:shadow-md transition-all">
                <img src={item.img} alt={item.name} className="w-full h-20 object-cover rounded mb-2" />
                <p className="text-xs font-semibold text-blue-800 group-hover:text-blue-600 truncate">{item.name}</p>
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>OTR: {item.otr}</span>
                  <span>WVTR: {item.wvtr}</span>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-1 rounded mt-1 inline-block">{item.feature}</span>
              </Link>
            ))}
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Quick Selection Guide</h4>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white p-2 rounded"><strong>Need Window?</strong> PET/PP Duplex Clear</div>
              <div className="bg-white p-2 rounded"><strong>Best Moisture?</strong> PP structures</div>
              <div className="bg-white p-2 rounded"><strong>Max Barrier?</strong> Aluminum options</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-duplex-clear.webp"
              alt="PCR PET Duplex Clear Structure - KPET12 / 30% PCR-PE"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PET Duplex Clear Structure"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-green-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR (Oxygen Transmission Rate)</p>
                <p className="font-semibold text-green-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR (Water Vapor Transmission Rate)</p>
                <p className="font-semibold text-green-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Material Category</p>
                <p className="font-semibold text-green-700">{materialCategory}</p>
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
                <p className="font-semibold text-blue-800">KPET12 (Outer Layer)</p>
                <p className="text-sm text-blue-700">12-micron K-coated PET film provides excellent oxygen barrier and printability. The K-coating (PVDC) enhances barrier properties while maintaining clarity for window applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene made from either 30% post-consumer recycled content or 50% bio-based sugarcane sources. Provides excellent heat-seal properties and moisture barrier.</p>
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
          <p>This mid-barrier structure offers balanced protection suitable for a wide range of food products.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good protection against oxidation, suitable for snacks, dried foods, and moderate shelf-life products.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Effective moisture protection for products sensitive to humidity changes.</p>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Optional Window Feature</h4>
            <p className="text-sm">This structure supports clear window panels, allowing consumers to see the product inside while maintaining barrier integrity.</p>
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
                <span><strong>PCR Option:</strong> Contains 30% post-consumer recycled polyethylene, reducing virgin plastic usage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Bio-PE Option:</strong> 50% bio-based PE from renewable sugarcane sources</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Lower Carbon Footprint:</strong> Reduced environmental impact vs conventional plastics</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Recycling Information</h4>
            <p className="text-sm text-blue-700">This multi-layer structure is currently not widely recyclable in standard streams. However, the use of PCR/Bio-PE content significantly reduces the environmental footprint compared to 100% virgin materials.</p>
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
          <p>This PET duplex structure is ideal for products requiring moderate barrier protection with window visibility:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Coffee beans', 'Tea leaves', 'Dried fruits', 'Nuts & seeds', 'Snack foods', 'Granola & cereals', 'Protein powders', 'Dried herbs', 'Pet treats'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Sustainable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting PCR/Bio-PE packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Barrier requirements</strong> – Match OTR/WVTR to your product needs</li>
            <li><strong>Sustainability goals</strong> – PCR reduces waste, Bio-PE reduces fossil fuel use</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our eco-friendly pouches</Link></li>
            <li><strong>Window feature</strong> – Show off your product with clear panels</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best PCR packaging for coffee with window?"</li>
              <li>• "Sustainable stand-up pouch with medium barrier properties"</li>
              <li>• "Bio-based flexible packaging supplier low MOQ"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: 'Compare All PCR Structures',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">Compare all 14 PCR structures by barrier level and best applications:</p>
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
                  <td className="p-2 border"><Link to="/spec/pcr-pet-duplex-clear" className="text-primary-600 hover:underline">PET Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;12</td>
                  <td className="p-2 border">Window bags, visibility</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-duplex-clear" className="text-primary-600 hover:underline">PP Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 border">Best moisture barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pet-kraft-triplex-clear" className="text-primary-600 hover:underline">PET Kraft Triplex</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;10</td>
                  <td className="p-2 border">Natural look + window</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-kraft-triplex-clear" className="text-primary-600 hover:underline">PP Kraft Triplex</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;4</td>
                  <td className="p-2 border">Kraft + moisture barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pet-duplex-nowindow" className="text-primary-600 hover:underline">PET Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;12</td>
                  <td className="p-2 border">Light-sensitive products</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-duplex-nowindow" className="text-primary-600 hover:underline">PP Duplex No Window</Link></td>
                  <td className="p-2 text-center border">&lt;1500</td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 border">Moisture + light barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pet-triplex-metalised" className="text-primary-600 hover:underline">PET Triplex Metalised</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">High barrier, coffee</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-triplex-metalised" className="text-primary-600 hover:underline">PP Triplex Metalised</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Best moisture high barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-kraft-vmpet" className="text-primary-600 hover:underline">Kraft VMPET</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">Premium natural look</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pet-triplex-aluminum" className="text-primary-600 hover:underline">PET Triplex Aluminum</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Ultimate barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-triplex-aluminum" className="text-primary-600 hover:underline">PP Triplex Aluminum</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.3</td>
                  <td className="p-2 border">Ultimate + best WVTR</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pet-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PET Kraft Quadlex ALU</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 border">Premium natural + max barrier</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-pp-kraft-quadlex-aluminum" className="text-primary-600 hover:underline">PP Kraft Quadlex ALU</Link></td>
                  <td className="p-2 text-center border">&lt;0.5</td>
                  <td className="p-2 text-center border">&lt;0.3</td>
                  <td className="p-2 border">Ultimate kraft + moisture</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/pcr-kraft-duplex-low" className="text-primary-600 hover:underline">Kraft Duplex Low</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;15</td>
                  <td className="p-2 border">Dry goods, short shelf</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">30% PCR Content</p>
              <p className="font-semibold text-blue-700">Reduces Plastic Waste</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Max Barrier?</p>
              <p className="font-semibold text-amber-700">Aluminum Triplex/Quadlex</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">Best Moisture?</p>
              <p className="font-semibold text-green-700">PP-based structures</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What does KPET12 mean?', answer: 'KPET12 refers to a 12-micron polyester (PET) film with a K-coating (PVDC barrier coating) that enhances oxygen barrier properties while maintaining clarity.' },
    { question: 'Can I get this structure with a clear window?', answer: 'Yes, this mid-clear barrier structure is specifically designed to support window panels, allowing product visibility while maintaining protection.' },
    { question: 'What does 30% PCR-PE mean?', answer: 'PCR-PE uses 30% post-consumer recycled polyethylene, reducing plastic waste by incorporating recycled content while maintaining packaging performance and food safety compliance.' },
    { question: 'What shelf life can I expect with this structure?', answer: 'With proper sealing and storage conditions, products can typically achieve 6-12 months shelf life depending on the specific food product and storage environment.' },
    { question: 'Is this structure food-safe?', answer: 'Yes, all materials meet FDA and EU food contact regulations for direct food packaging applications.' }
  ]

  const relatedLinks = [
    { title: "Shop Eco-Friendly Pouches", url: "/store", description: "Browse sustainable packaging options - MOQ from 500 pieces" },
    { title: "PCR Recycled Materials", url: "/materials/pcr", description: "Learn about post-consumer recycled content" },
    { title: "Bio-PE Materials", url: "/materials/bio-pe", description: "Explore plant-based polyethylene options" },
    { title: "Barrier Options Guide", url: "/features/barrier-options", description: "Compare different barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PCR PET Duplex Clear Structure | KPET12 / PCR-PE Sustainable Packaging"
      description="PCR PET Duplex Clear packaging structure: KPET12 / 30% PCR-PE. Mid barrier, optional window, 100 micron thickness. Ideal for coffee, snacks, dried foods. OTR <8, WVTR <12."
      heroTitle="PCR PET Duplex Clear Structure"
      heroSubtitle="KPET12 / 30% PCR-PE - Mid Barrier with Optional Window"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A sustainable duplex structure combining K-coated PET for oxygen barrier with recycled or bio-based PE sealant. Ideal for coffee, snacks, and dried foods requiring mid-level barrier protection with window visibility option."
      keywords={[
        'PCR PET packaging',
        'KPET12 structure',
        'sustainable flexible packaging',
        'bio-PE pouch',
        'recycled content packaging',
        'mid barrier pouch',
        'clear window pouch',
        'eco-friendly food packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetDuplexClearPage
