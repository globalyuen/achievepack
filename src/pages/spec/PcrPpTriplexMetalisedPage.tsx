import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const PcrPpTriplexMetalisedPage: React.FC = () => {
  const structureName = 'OPP20 / Metalised PET12 / 30% PCR-PE (PP Triplex)'
  const thickness = '110 micron or 4.3 mil'
  const otr = '<1'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: 'What Is This Material Structure?',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <ClickableImage
              src="/imgs/spec/pcr-pp-triplex-metalised.webp"
              alt="PCR PP Triplex Metalised Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="PCR PP Triplex Metalised Structure"
            />
            <h3 className="text-xl font-bold text-purple-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-600">High Barrier - Best Moisture Protection</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Thickness</p>
                <p className="font-semibold text-purple-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">OTR</p>
                <p className="font-semibold text-purple-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">WVTR</p>
                <p className="font-semibold text-purple-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Key Benefit</p>
                <p className="font-semibold text-purple-700">Superior Moisture + High O2 Barrier</p>
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
                <p className="font-semibold text-blue-800">OPP20 (Outer Layer)</p>
                <p className="text-sm text-blue-700">20-micron oriented polypropylene provides excellent moisture barrier, clarity, and print surface with inherent low WVTR.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-purple-800">Metalised PET12 (Middle Layer)</p>
                <p className="text-sm text-purple-700">Vacuum-metalised PET creates exceptional oxygen barrier while the combination with OPP achieves the lowest WVTR in the metalised category.</p>
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
          <p>This PP-based metalised structure offers the best moisture barrier in the high-barrier sustainable category.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Oxygen Barrier</h4>
              <p className="text-2xl font-bold text-purple-600">{otr} cc/m²/day</p>
              <p className="text-sm text-purple-700 mt-1">Exceptional - near-zero oxygen transmission.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Moisture Barrier</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">Superior - 50% better than PET metalised structure.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Why PP + Metalised?</h4>
            <p className="text-sm text-green-700">Combining OPP's inherent moisture resistance with metalised PET's oxygen barrier creates the ultimate protection for hygroscopic products that are also oxygen-sensitive (e.g., instant coffee, powdered milk).</p>
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
                <span><strong>Minimal Metal:</strong> Microscopic aluminum layer (50nm) vs 7μm foil</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>PCR/Bio-PE:</strong> Sustainable sealant layer reduces virgin plastic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Reduced Waste:</strong> Maximum shelf life = less food waste</span>
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
          <p>Best for products requiring both excellent oxygen AND moisture protection:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {['Instant coffee', 'Powdered milk', 'Protein isolates', 'Freeze-dried fruits', 'Dehydrated meals', 'Nutritional powders', 'Premium spices', 'Matcha powder', 'Collagen peptides'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-purple-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding PP Metalised High-Barrier Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Best moisture + oxygen barrier</strong> – OTR &lt;1, WVTR &lt;0.5</li>
            <li><strong>Maximum shelf life</strong> – 18-24+ months possible</li>
            <li><strong>Shop now</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse premium barrier pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Suggestions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best barrier packaging for instant coffee powder"</li>
              <li>• "Moisture-proof high barrier eco pouch"</li>
              <li>• "Premium sustainable packaging for protein powder"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'Why is PP metalised better for powders?', answer: 'PP provides inherently lower moisture transmission than PET. Combined with metalised layer, it achieves WVTR <0.5 vs <1 for PET metalised - critical for hygroscopic powders.' },
    { question: 'What shelf life can I expect?', answer: 'With proper sealing, products typically achieve 18-24+ months shelf life, depending on the specific product and storage conditions.' },
    { question: 'Can I have a window with this structure?', answer: 'No, the metalised layer blocks visibility. For products requiring visibility, consider our KPET mid-barrier structures with window capability.' },
    { question: 'Is this suitable for freezer use?', answer: 'Yes, both OPP and PE layers maintain flexibility at freezer temperatures, making this suitable for frozen products.' },
    { question: 'How does printing look on OPP?', answer: 'OPP provides excellent print quality with high gloss and vibrant colors. Matte finish is also available for premium soft-touch appearance.' }
  ]

  const relatedLinks = [
    { title: "Shop High-Barrier Pouches", url: "/store", description: "Browse premium packaging" },
    { title: "PET Metalised Triplex", url: "/spec/pcr-pet-triplex-metalised", description: "Compare PET-based option" },
    { title: "Aluminum Foil Structure", url: "/spec/pcr-pp-triplex-aluminum", description: "Maximum barrier option" },
    { title: "Barrier Comparison", url: "/features/high-barrier", description: "Compare all high-barrier options" }
  ]

  return (
    <SEOPageLayout
      title="PCR PP Metalised Triplex | Best Moisture High-Barrier Eco Packaging"
      description="PCR PP Metalised Triplex: OPP20 / Metalised PET12 / PCR-PE. Superior moisture barrier (WVTR <0.5) + high oxygen barrier (OTR <1). 110 micron. Best for powders, instant coffee."
      heroTitle="PCR PP Metalised Triplex Structure"
      heroSubtitle="OPP20 / Metalised PET12 / PCR-PE - Ultimate Moisture High-Barrier"
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary="The best moisture barrier in the high-barrier sustainable category. Combines OPP's inherent moisture resistance with metalised PET oxygen barrier for ultimate protection. Ideal for instant coffee, protein powders, and hygroscopic products."
      keywords={[
        'PP metalised packaging',
        'best moisture barrier pouch',
        'VMPET OPP structure',
        'high barrier powder packaging',
        'instant coffee pouch',
        'protein powder packaging',
        'PCR high barrier',
        'premium sustainable packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pp-triplex-metalised"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPpTriplexMetalisedPage
