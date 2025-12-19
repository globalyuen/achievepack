import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPetKraftTriplexClearPage: React.FC = () => {
  const structureName = 'KPET12 / Kraft Paper 50gsm / 30% PCR-PE (PET Kraft Paper Triplex)'
  const thickness = '140 micron or 5.5 mil'
  const otr = '<8'
  const wvtr = '<12'

  const sections = [
    {
      id: 'structure-overview',
      title: 'Material Structure Overview',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-kraft-triplex-clear.webp"
              alt="PCR PET Kraft Triplex Clear Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PET Kraft Triplex Clear Structure"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
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
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-blue-800">KPET12 (Outer Layer)</p>
                <p className="text-sm text-blue-700">12-micron K-coated PET provides oxygen barrier, excellent printability, and window capability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Middle Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper adds stiffness, premium tactile feel, and eco-friendly appearance. Great for shelf presence.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable sealant layer with recycled or bio-based content.</p>
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
          <p>This triplex structure combines barrier performance with premium kraft paper aesthetics.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good oxidation protection for extended shelf life.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Effective moisture protection for dry goods.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Premium Kraft Paper Feel</h4>
            <p className="text-sm">The 50gsm kraft paper layer provides excellent stand-up rigidity and a natural, artisanal appearance that appeals to eco-conscious consumers.</p>
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
                <span><strong>Kraft Paper:</strong> FSC-certified paper option available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Natural Look:</strong> Communicates sustainability to consumers</span>
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
          <p>Perfect for premium products requiring shelf presence and eco-friendly aesthetics:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Specialty coffee', 'Artisan tea', 'Organic snacks', 'Premium nuts', 'Craft granola', 'Natural pet treats', 'Dried superfoods', 'Herbal supplements', 'Gourmet spices'].map((item, idx) => (
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
      title: 'Finding Kraft Paper Sustainable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Premium feel</strong> – Kraft paper adds tactile appeal</li>
            <li><strong>Shelf presence</strong> – Stiffer structure stands better on shelves</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft paper pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Kraft paper stand-up pouch with window for coffee"</li>
              <li>• "Premium eco-friendly packaging with recycled content"</li>
              <li>• "Natural look sustainable pouch low MOQ"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Can I have a window with kraft paper?', answer: 'Yes, the KPET outer layer supports clear window panels that allow product visibility while the kraft paper provides the natural aesthetic around the window.' },
    { question: 'Is the kraft paper FSC certified?', answer: 'FSC-certified kraft paper is available upon request. Contact us for sustainable sourcing options.' },
    { question: 'Why is this structure stiffer?', answer: 'The 50gsm kraft paper middle layer adds significant stiffness compared to duplex structures, providing better shelf presence and premium feel.' },
    { question: 'What printing options are available?', answer: 'We offer up to 10-color rotogravure printing on the outer KPET layer with matte or gloss varnish options.' },
    { question: 'Is this suitable for oily products?', answer: 'Yes, the inner PE layer provides grease resistance, protecting the kraft paper from oil migration.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper packaging options" },
    { title: "PET Duplex (Softer)", url: "/spec/pcr-pet-duplex-clear", description: "Compare with non-paper variant" },
    { title: "PP Kraft Triplex", url: "/spec/pcr-pp-kraft-triplex-clear", description: "Compare with PP-based option" },
    { title: "Kraft Barrier Guide", url: "/materials/kraft-high-barrier", description: "Learn about kraft barriers" }
  ]

  return (
    <SEOPageLayout
      title="PCR PET Kraft Triplex Clear | Premium Kraft Paper Sustainable Packaging"
      description="PCR PET Kraft Triplex structure: KPET12 / Kraft Paper 50gsm / PCR-PE. Premium kraft paper feel with window option. 140 micron thickness. Ideal for specialty coffee, artisan products."
      heroTitle="PCR PET Kraft Triplex Clear Structure"
      heroSubtitle="KPET12 / Kraft Paper 50gsm / PCR-PE - Premium Natural Feel"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="A three-layer premium structure combining PET oxygen barrier with natural kraft paper for tactile appeal and stiffness. Ideal for specialty coffee, artisan products, and premium foods requiring natural aesthetics."
      keywords={[
        'kraft paper pouch',
        'PET kraft triplex',
        'sustainable kraft packaging',
        'premium eco pouch',
        'kraft window pouch',
        'PCR kraft packaging',
        'natural look packaging',
        'artisan food packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-kraft-triplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetKraftTriplexClearPage
