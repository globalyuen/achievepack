import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Zap, Palette, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2, Printer } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const DigitalPrintingEcoPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Digital Printing: The Agile Engine of Sustainable Packaging',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Digital printing is no longer just for small batches; it is the <strong>most sustainable manufacturing protocol</strong> for modern agile brands. By eliminating plates, chemicals, and excessive waste, digital printing aligns perfectly with 2026 circularity goals.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-600">
                <h4 className="font-semibold text-cyan-800">Traditional Print Waste</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• High set-up waste (hundreds of meters)</li>
                  <li>• Expensive and toxic metal plates</li>
                  <li>• Solvent-based ink emissions (VOCs)</li>
                  <li>• Mandatory high MOQs (dead inventory)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">The Digital Advantage</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Zero Plate Fees & Zero Plate Waste</li>
                  <li>• HP Indigo ElectroInk (Food Safe/Compostable)</li>
                  <li>• Low MOQ (500 units) = No Dead Stock</li>
                  <li>• 100% Variable Data & Hyper-Personalization</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we utilize the <strong>HP Indigo 25K</strong>—the world's most advanced digital press for flexible packaging. This technology allows us to provide brands with ultra-high resolution (1200 DPI), G7-certified color accuracy, and a significantly lower environmental footprint than traditional rotogravure or flexographic printing.
          </p>
        </div>
      )
    },
    {
      id: 'print-science',
      title: 'The Science of Digital: HP Indigo ElectroInk',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The secret to digital sustainability lies in the ink. Unlike traditional solvent-based inks, <strong>HP Indigo ElectroInk</strong> is designed for the circular economy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Food Safe Purity</h4>
              <p className="text-sm text-neutral-600">Meets the strictest FDA and EFSA regulations for direct and indirect food contact. Solvent-free and low-odor.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Compostable Ready</h4>
              <p className="text-sm text-neutral-600">Certified for industrial and home compostable structures. The ink breaks down fully during the composting cycle.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Palette className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">G7 Color Accuracy</h4>
              <p className="text-sm text-neutral-600">Spectrophotometer-controlled color consistency (Delta-E &lt; 2.0) across all material substrates.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High resolution digital printing on custom pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Digital printing eliminates the environmental and financial burden of traditional plate manufacturing"
            />
          </div>
        </div>
      )
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Sustainability: Zero Inventory Waste',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The biggest waste in the packaging industry is <strong>obsolescence</strong>. Traditional printing forces brands to order 20,000+ units, much of which ends up in landfills due to SKU changes or rebranding.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Lean Packaging Model</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Just-In-Time (JIT) Production</h5>
                  <p className="text-xs text-neutral-600 mt-1">Order only what you need. Reduce warehouse storage and capital tie-up.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Rapid Prototyping</h5>
                  <p className="text-xs text-neutral-600 mt-1">Test new market concepts or seasonal flavors without the risk of high upfront costs.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Variable Data (VDP)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Print unique QR codes, serial numbers, or personalized graphics on every single unit.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Carbon Footprint Reduction</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By eliminating the energy-intensive process of plate making and reducing setup waste by &gt; 90%, digital printing is the most carbon-efficient method for medium and short-run production.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'print-capability',
      title: 'The Achieve Pack Digital Fleet',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            We operate the most advanced digital manufacturing facility for eco-friendly pouches. Our technology stack is designed for <strong>speed, quality, and circularity</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/topics/digital-printing-press-hero.png" 
                alt="Digital printing production line" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Agile Manufacturing: HP Indigo 25K Digital Press for low-waste flexible packaging"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Technical Benchmarks</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-600" />
                  <span><strong>Resolution:</strong> Up to 1200 DPI for photographic-quality results.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-600" />
                  <span><strong>Substrates:</strong> Mono-PE, Mono-PP, Kraft, and Compostable films.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-600" />
                  <span><strong>Finishes:</strong> In-line spot varnish, matte, gloss, and soft-touch.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Sustainable SKUs Faster',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-cyan-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Zero Plates. Zero Waste. Total Precision.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to experience the power of digital printing? Our technical team will help you optimize your artwork for our HP Indigo fleet today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-cyan-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Print Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Digital Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            HP INDIGO 25K • G7 CERTIFIED • FOOD SAFE INKS • NO PLATE FEES
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are digital inks recyclable?",
      answer: "Yes. HP Indigo ElectroInk is designed to be fully compatible with standard plastic recycling streams. It does not compromise the quality of the recovered resin."
    },
    {
      question: "Can I print metallic colors digitally?",
      answer: "Yes. We offer high-performance metallic silver inks and 'Silver-under-CMYK' techniques that replicate the look of traditional foil stamping without the environmental cost of metal plates."
    },
    {
      question: "What is the turnaround time for digital orders?",
      answer: "Because there are no plates to manufacture, our digital turnaround time is typically 3-4 weeks—significantly faster than the 8-12 weeks required for traditional rotogravure."
    },
    {
      question: "Can you handle variable data for track-and-trace?",
      answer: "Absolutely. We can print unique QR codes, batch numbers, or even personalized customer names on every single unit, enabling advanced supply chain transparency and marketing engagement."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Digital Printing for Eco-Packaging | HP Indigo 25K | Achieve Pack</title>
        <meta name="description" content="Master the technical benefits of digital printing. 800+ words on HP Indigo 25K technology, zero-plate sustainability, food-safe inks, and low-MOQ agility." />
        <link rel="canonical" href="https://achievepack.com/topics/digital-printing-eco-packaging" />
        <meta name="keywords" content="digital printing eco packaging, HP Indigo 25K flexible packaging, zero plate printing, sustainable packaging printing, low MOQ pouches, variable data packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#083344"
        title="Digital Printing: The Sustainable Agile Engine"
        description="Establishing technical authority in zero-plate, low-waste digital manufacturing for sustainable flexible packaging."
        keywords={['digital printing', 'HP Indigo 25K', 'sustainable manufacturing']}
        heroTitle="Fast. Precise. Pure."
        heroSubtitle="Zero Plate Fees | HP Indigo 25K | Food Safe Inks | Low MOQ (500)"
        introSummary="Digital printing is the technical solution to the packaging industry's waste problem. This guide outlines how we use the world's most advanced digital presses to eliminate plate waste, reduce dead inventory, and deliver ultra-high-resolution sustainable packaging for brands of all scales."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

const Leaf = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-3.6 11.2A7 7 0 0 1 11 20z" />
    <path d="M11 20v-5" />
    <path d="M7 20h4" />
  </svg>
)

export default DigitalPrintingEcoPackagingPage
