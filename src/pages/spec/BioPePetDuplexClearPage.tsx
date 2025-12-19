import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPePetDuplexClearPage: React.FC = () => {
  const structureName = 'KPET12 / 100% Bio-PE80 (PET Duplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<8'
  const wvtr = '<12'

  const sections = [
    {
      id: 'all-biope-overview',
      title: 'All Bio-PE Structures at a Glance',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-sm text-neutral-600">Compare all 14 Bio-PE structures with images, barrier levels, and key characteristics:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'PET Duplex Clear', img: '/imgs/spec/biope-pet-duplex-clear.webp', url: '/spec/biope-pet-duplex-clear', otr: '<8', wvtr: '<12', feature: 'Window' },
              { name: 'PP Duplex Clear', img: '/imgs/spec/biope-pp-duplex-clear.webp', url: '/spec/biope-pp-duplex-clear', otr: '<1500', wvtr: '<5', feature: 'Best Moisture' },
              { name: 'PET Kraft Triplex', img: '/imgs/spec/biope-pet-kraft-triplex-clear.webp', url: '/spec/biope-pet-kraft-triplex-clear', otr: '<8', wvtr: '<10', feature: 'Natural+Window' },
              { name: 'PP Kraft Triplex', img: '/imgs/spec/biope-pp-kraft-triplex-clear.webp', url: '/spec/biope-pp-kraft-triplex-clear', otr: '<1500', wvtr: '<4', feature: 'Kraft+Moisture' },
              { name: 'PET No Window', img: '/imgs/spec/biope-pet-duplex-nowindow.webp', url: '/spec/biope-pet-duplex-nowindow', otr: '<8', wvtr: '<12', feature: 'Light Barrier' },
              { name: 'PP No Window', img: '/imgs/spec/biope-pp-duplex-nowindow.webp', url: '/spec/biope-pp-duplex-nowindow', otr: '<1500', wvtr: '<5', feature: 'Moisture+Light' },
              { name: 'PET Metalised', img: '/imgs/spec/biope-pet-triplex-metalised.webp', url: '/spec/biope-pet-triplex-metalised', otr: '<1', wvtr: '<1', feature: 'High Barrier' },
              { name: 'PP Metalised', img: '/imgs/spec/biope-pp-triplex-metalised.webp', url: '/spec/biope-pp-triplex-metalised', otr: '<1', wvtr: '<0.5', feature: 'Best Moist+High' },
              { name: 'Kraft VMPET', img: '/imgs/spec/biope-kraft-vmpet.webp', url: '/spec/biope-kraft-vmpet', otr: '<1', wvtr: '<1', feature: 'Natural+High' },
              { name: 'PET Aluminum', img: '/imgs/spec/biope-pet-triplex-aluminum.webp', url: '/spec/biope-pet-triplex-aluminum', otr: '<0.5', wvtr: '<0.5', feature: 'Ultimate' },
              { name: 'PP Aluminum', img: '/imgs/spec/biope-pp-triplex-aluminum.webp', url: '/spec/biope-pp-triplex-aluminum', otr: '<0.5', wvtr: '<0.3', feature: 'Ultimate+Moist' },
              { name: 'PET Kraft Quadlex', img: '/imgs/spec/biope-pet-kraft-quadlex-aluminum.webp', url: '/spec/biope-pet-kraft-quadlex-aluminum', otr: '<0.5', wvtr: '<0.5', feature: 'Premium Natural' },
              { name: 'PP Kraft Quadlex', img: '/imgs/spec/biope-pp-kraft-quadlex-aluminum.webp', url: '/spec/biope-pp-kraft-quadlex-aluminum', otr: '<0.5', wvtr: '<0.3', feature: 'Ultimate Natural' },
              { name: 'Kraft Duplex Low', img: '/imgs/spec/biope-kraft-duplex-low.webp', url: '/spec/biope-kraft-duplex-low', otr: '<2000', wvtr: '<15', feature: 'Budget Kraft' }
            ].map((item, idx) => (
              <Link key={idx} to={item.url} className="group bg-white border rounded-lg p-2 hover:border-green-400 hover:shadow-md transition-all">
                <img src={item.img} alt={item.name} className="w-full h-20 object-cover rounded mb-2" />
                <p className="text-xs font-semibold text-green-800 group-hover:text-green-600 truncate">{item.name}</p>
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>OTR: {item.otr}</span>
                  <span>WVTR: {item.wvtr}</span>
                </div>
                <span className="text-[10px] bg-green-100 text-green-700 px-1 rounded mt-1 inline-block">{item.feature}</span>
              </Link>
            ))}
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Quick Selection Guide</h4>
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
              src="/imgs/spec/biope-pet-duplex-clear.webp"
              alt="Bio-PE PET Duplex Clear Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="100% Bio-PE PET Duplex - Plant-Based Sustainable"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">100% Plant-Based PE - I'm Green™ Certified</span>
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
                <p className="text-sm text-neutral-500">Bio-Based Content</p>
                <p className="font-semibold text-green-700">100% Bio-PE Sealant</p>
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
                <p className="text-sm text-blue-700">12-micron K-coated PET provides excellent oxygen barrier, printability, and clarity for window applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">100% Bio-PE80 (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">80-micron polyethylene derived from Brazilian sugarcane. Carbon-negative production process captures CO2 during cultivation.</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">What is Bio-PE?</h4>
            <p className="text-sm text-green-700">Bio-PE is chemically identical to fossil-based PE but made from renewable sugarcane ethanol. It's recyclable in existing PE streams and reduces carbon footprint by up to 70%.</p>
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
          <p>This mid-barrier structure provides excellent protection for products requiring moderate shelf life.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good - KPET coating provides oxygen protection.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Good - Bio-PE performs identically to conventional PE.</p>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Optional Window Feature</h4>
            <p className="text-sm">Clear KPET outer layer supports window panels for product visibility while maintaining barrier integrity.</p>
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
                <span><strong>Carbon Negative:</strong> Sugarcane absorbs CO2 during growth, offsetting production emissions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>I'm Green™ Certified:</strong> Braskem's verified bio-based PE certification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Renewable Source:</strong> Brazilian sugarcane - no deforestation, rain-fed agriculture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Recyclable:</strong> Identical to conventional PE - recycles in same streams</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Carbon Footprint Reduction</h4>
            <p className="text-sm text-blue-700">Bio-PE reduces greenhouse gas emissions by up to 70% compared to fossil-based PE. Each ton of Bio-PE captures approximately 3 tons of CO2.</p>
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
          <p>Perfect for eco-conscious brands seeking plant-based packaging with window visibility:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Premium tea', 'Organic snacks', 'Dried fruits', 'Natural supplements', 'Granola & muesli', 'Plant-based foods', 'Eco pet treats', 'Superfood powders'].map((item, idx) => (
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
      title: 'Finding Bio-PE Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Plant-based alternative</strong> – Same performance as fossil PE</li>
            <li><strong>Carbon negative production</strong> – Reduces environmental impact</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse Bio-PE pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Plant-based stand-up pouch with window"</li>
              <li>• "Bio-PE coffee packaging supplier"</li>
              <li>• "Carbon negative flexible packaging"</li>
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
                <tr className="bg-green-50 font-semibold">
                  <td className="p-2 border"><Link to="/spec/biope-pet-duplex-clear" className="text-primary-600 hover:underline">PET Duplex Clear</Link></td>
                  <td className="p-2 text-center border">&lt;8</td>
                  <td className="p-2 text-center border">&lt;12</td>
                  <td className="p-2 border">Window bags, visibility</td>
                </tr>
                <tr>
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
    { question: 'What is Bio-PE and how is it made?', answer: 'Bio-PE is polyethylene made from sugarcane ethanol instead of petroleum. Brazilian sugarcane is fermented into ethanol, then converted to ethylene and polymerized into PE. It is chemically identical to fossil PE.' },
    { question: 'Is Bio-PE recyclable?', answer: 'Yes, Bio-PE is 100% recyclable in existing PE recycling streams. It is chemically identical to conventional PE and can be recycled together.' },
    { question: 'What is the I\'m Green™ certification?', answer: 'I\'m Green™ is Braskem\'s certification for bio-based polyethylene, verifying that the material is derived from renewable sugarcane sources and meets sustainability standards.' },
    { question: 'Does Bio-PE perform differently from regular PE?', answer: 'No, Bio-PE has identical physical and barrier properties to fossil-based PE. The only difference is the renewable source of the raw materials.' },
    { question: 'What shelf life can I expect?', answer: 'Typically 6-12 months depending on product and storage conditions. The barrier properties are identical to conventional PET/PE structures.' }
  ]

  const relatedLinks = [
    { title: "Shop Bio-PE Pouches", url: "/store", description: "Browse plant-based options" },
    { title: "Bio-PE Materials", url: "/materials/bio-pe", description: "Learn about plant-based PE" },
    { title: "PP Bio-PE Duplex", url: "/spec/biope-pp-duplex-clear", description: "Compare PP-based option" },
    { title: "Sustainability Guide", url: "/materials/compostable", description: "Explore all eco options" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE PET Duplex Clear | Plant-Based Sustainable Packaging"
      description="Bio-PE PET Duplex: KPET12 / 100% Bio-PE80 (100 micron). Plant-based sugarcane PE, I'm Green certified. Carbon negative. Mid barrier with window. Ideal for coffee, snacks, organic products."
      heroTitle="Bio-PE PET Duplex Clear Structure"
      heroSubtitle="KPET12 / 100% Bio-PE80 - Plant-Based I'm Green™ Certified"
      heroLogo="/eco-logo/white-bkg/eco-logo-biope.png"
      heroLogoAlt="I'm Green™ Bio-PE Certified"
      introSummary="A sustainable duplex structure featuring 100% plant-based Bio-PE from Brazilian sugarcane. Carbon-negative production reduces greenhouse gas emissions by up to 70% while delivering identical performance to fossil-based PE."
      keywords={[
        'Bio-PE packaging',
        'plant-based pouch',
        'sugarcane PE',
        'Im Green certified',
        'carbon negative packaging',
        'renewable plastic',
        'sustainable coffee bag',
        'bio-based flexible packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/biope-pet-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default BioPePetDuplexClearPage
