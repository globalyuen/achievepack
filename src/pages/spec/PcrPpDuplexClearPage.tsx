import React from 'react'
import { Layers, Shield, Recycle, Leaf, CheckCircle, MessageCircle, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpDuplexClearPage: React.FC = () => {
  const structureName = 'KOPP20 / 30% PCR-PE (PP Duplex)'
  const thickness = '100 micron or 4 mil'
  const otr = '<10'
  const wvtr = '<6'
  const materialCategory = 'PCR or Bio Plastic'
  const barrierType = 'Mid Clear Mid Barrier (Optional Window)'
  const stiffness = 'Without Paper Lining (Softer)'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/pcr-pp-duplex-clear.webp"
              alt="PCR PP Duplex Clear Structure - KOPP20 / 30% PCR-PE"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PP Duplex Clear Structure"
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
                <p className="font-semibold text-blue-800">KOPP20 (Outer Layer)</p>
                <p className="text-sm text-blue-700">20-micron K-coated OPP film provides excellent clarity and moisture barrier. The PVDC coating enhances oxygen barrier while maintaining a brilliant, glossy finish.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner/Sealant Layer)</p>
                <p className="text-sm text-green-700">Sustainable polyethylene containing either recycled or bio-based content. Provides reliable heat-seal performance and moisture protection.</p>
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
          <p>This PP-based structure offers superior moisture barrier with good oxygen protection, ideal for moisture-sensitive products.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good protection for products with moderate oxygen sensitivity.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Excellent moisture protection - superior to PET-based structures.</p>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">PP vs PET Comparison</h4>
            <p className="text-sm">OPP offers better moisture barrier (lower WVTR) while PET provides better oxygen barrier. Choose based on your product's primary sensitivity.</p>
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
                <span><strong>PCR Option:</strong> 30% post-consumer recycled content reduces virgin plastic demand</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Bio-PE Option:</strong> 50% renewable sugarcane-based polyethylene</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Reduced Footprint:</strong> Lower carbon impact vs conventional structures</span>
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
          <p>The PP duplex structure excels for moisture-sensitive products requiring excellent clarity:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Crackers & cookies', 'Dried pasta', 'Sugar & salt', 'Powdered drinks', 'Candy & confectionery', 'Baked goods', 'Cereals', 'Rice & grains', 'Spice blends'].map((item, idx) => (
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
      title: 'Finding PP-Based Sustainable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Moisture sensitivity</strong> – PP structures offer better WVTR than PET</li>
            <li><strong>Clarity needs</strong> – OPP provides brilliant optical properties</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse PP-based eco pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best moisture barrier sustainable pouch for crackers"</li>
              <li>• "PP-based eco-friendly packaging with recycled content"</li>
              <li>• "Clear stand-up pouch with low WVTR"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What is KOPP20?', answer: 'KOPP20 is a 20-micron oriented polypropylene (OPP) film with a K-coating (PVDC barrier) that provides enhanced oxygen and moisture barrier while maintaining excellent clarity.' },
    { question: 'Why choose PP over PET structure?', answer: 'PP structures offer superior moisture barrier (lower WVTR) which is better for moisture-sensitive products. PET is preferred when oxygen barrier is the priority.' },
    { question: 'Is this structure suitable for freezer use?', answer: 'Yes, OPP-based structures maintain flexibility at low temperatures, making them suitable for frozen food applications.' },
    { question: 'Can I customize the print finish?', answer: 'Yes, we offer matte, gloss, and soft-touch finishes on the OPP outer layer to match your brand aesthetic.' },
    { question: 'What certifications are available?', answer: 'Our materials meet FDA and EU food contact standards. Additional certifications like FSC (for paper variants) available upon request.' }
  ]

  const relatedLinks = [
    { title: "Shop Eco Pouches", url: "/store", description: "Browse sustainable packaging - MOQ 500 pieces" },
    { title: "PCR Materials Guide", url: "/materials/pcr", description: "Learn about recycled content options" },
    { title: "Barrier Comparison", url: "/features/barrier-options", description: "Compare barrier levels" },
    { title: "PET Duplex Structure", url: "/spec/pcr-pet-duplex-clear", description: "Compare with PET-based option" }
  ]

  return (
    <SEOPageLayout
      title="PCR PP Duplex Clear Structure | KOPP20 / Bio-PE Sustainable Packaging"
      description="PCR PP Duplex Clear structure: KOPP20 / 30% PCR-PE. Superior moisture barrier, optional window, 100 micron. Ideal for moisture-sensitive foods. OTR <10, WVTR <6."
      heroTitle="PCR PP Duplex Clear Structure"
      heroSubtitle="KOPP20 / 30% PCR-PE - Superior Moisture Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A PP-based sustainable structure offering excellent moisture barrier (WVTR <6) with optional window capability. Perfect for moisture-sensitive products like crackers, cookies, and powdered goods."
      keywords={[
        'PCR PP packaging',
        'KOPP20 structure',
        'sustainable OPP pouch',
        'moisture barrier packaging',
        'bio-PE flexible packaging',
        'recycled PP pouch',
        'clear window sustainable pouch',
        'low WVTR packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-duplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpDuplexClearPage
