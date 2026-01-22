import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpKraftTriplexClearPage: React.FC = () => {
  const structureName = 'KOPP20 / Kraft Paper 50gsm / 30% PCR-PE (PP Kraft Paper Triplex)'
  const thickness = '140 micron or 5.5 mil'
  const otr = '<10'
  const wvtr = '<6'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-pp-kraft-triplex-clear.webp"
              alt="PCR PP Kraft Triplex Clear Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PP Kraft Triplex Clear Structure"
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
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-amber-700">Best Moisture + Kraft Feel</p>
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
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-blue-800">KOPP20 (Outer Layer)</p>
                <p className="text-sm text-blue-700">20-micron K-coated OPP for superior moisture barrier and brilliant clarity in window areas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">Kraft Paper 50gsm (Middle Layer)</p>
                <p className="text-sm text-amber-700">Natural kraft paper for premium aesthetics and stiffness.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-green-800">30% PCR-PE (Inner Layer)</p>
                <p className="text-sm text-green-700">Sustainable heat-seal layer with recycled or bio-based content.</p>
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
          <p>This PP-based kraft triplex offers the best moisture protection in the kraft paper category.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">Good protection for moderately oxygen-sensitive products.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Superior moisture protection - best for humidity-sensitive products.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Why Choose PP over PET for Kraft?</h4>
            <p className="text-sm">If your product is more sensitive to moisture than oxygen (e.g., crackers, powder supplements), the PP-based structure offers 50% better WVTR than PET-based alternatives.</p>
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
                <span><strong>FSC Kraft:</strong> Sustainably sourced paper option</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio Content:</strong> Reduced virgin plastic usage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Consumer Appeal:</strong> Natural kraft look signals sustainability</span>
              </li>
            </ul>
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
          <p>Best for moisture-sensitive premium products with natural positioning:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Protein powders', 'Flour & baking mixes', 'Instant coffee', 'Dried milk products', 'Sugar & sweeteners', 'Crackers', 'Cereals', 'Bath salts', 'Powdered supplements'].map((item, idx) => (
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
      title: 'Finding PP Kraft Sustainable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Superior moisture barrier</strong> – Best WVTR in kraft category</li>
            <li><strong>Premium kraft aesthetics</strong> – Natural, artisan appeal</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse kraft pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best kraft paper pouch for powder products"</li>
              <li>• "Low moisture transmission kraft packaging"</li>
              <li>• "Premium sustainable pouch for supplements"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'PP vs PET kraft - which is better?', answer: 'Choose PP (this structure) for moisture-sensitive products (WVTR <6). Choose PET for oxygen-sensitive products (OTR <8). Both offer similar premium kraft aesthetics.' },
    { question: 'Can this structure have a window?', answer: 'Yes, clear window panels can be incorporated. The OPP layer provides excellent clarity in window areas.' },
    { question: 'What is the minimum order quantity?', answer: 'Our standard MOQ starts from 500 pieces for digitally printed pouches, or 10,000 for plate printing.' },
    { question: 'Is the kraft paper recyclable?', answer: 'The multi-layer structure requires specialized recycling. However, using PCR/Bio-PE content significantly reduces environmental impact.' },
    { question: 'What shelf life can I expect?', answer: 'Properly sealed products typically achieve 9-15 months shelf life depending on the specific product and storage conditions.' }
  ]

  const relatedLinks = [
    { title: "Shop Kraft Pouches", url: "/store", description: "Browse kraft paper options" },
    { title: "PET Kraft Triplex", url: "/spec/pcr-pet-kraft-triplex-clear", description: "Compare PET-based option" },
    { title: "PP Duplex (No Paper)", url: "/spec/pcr-pp-duplex-clear", description: "Softer PP option" },
    { title: "Barrier Guide", url: "/features/barrier-options", description: "Compare barrier levels" }
  ]

  return (
    <SEOPageLayout
      title="PCR PP Kraft Triplex Clear | Premium Kraft Paper Low WVTR Packaging"
      description="PCR PP Kraft Triplex: KOPP20 / Kraft Paper 50gsm / PCR-PE. Best moisture barrier in kraft category (WVTR <6). 140 micron. Ideal for powders, supplements, moisture-sensitive products."
      heroTitle="PCR PP Kraft Triplex Clear Structure"
      heroSubtitle="KOPP20 / Kraft Paper 50gsm / PCR-PE - Best Moisture Barrier Kraft"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The best moisture barrier in the kraft paper category, combining PP's inherent moisture resistance with premium kraft aesthetics. Ideal for protein powders, instant coffee, and moisture-sensitive products."
      keywords={[
        'PP kraft triplex',
        'low WVTR kraft pouch',
        'moisture barrier kraft packaging',
        'sustainable kraft paper pouch',
        'premium eco packaging',
        'powder packaging kraft',
        'PCR kraft pouch',
        'supplement packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-kraft-triplex-clear"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpKraftTriplexClearPage
