import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Zap, Rocket, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const LowMOQStartupPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Low MOQ Startup Packaging: Engineering for Agile Growth',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              For startups, high <strong>Minimum Order Quantities (MOQs)</strong> are the biggest barrier to sustainable innovation. In 2026, agility is the key to market entry and circularity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
                <h4 className="font-semibold text-emerald-800">The Startup Barrier</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Traditional MOQs of 20,000+ units</li>
                  <li>• High upfront costs for printing plates</li>
                  <li>• Risk of dead inventory and waste</li>
                  <li>• Inability to test seasonal SKUs</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-800">The Achieve Pack Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• MOQs as low as 500 units per SKU</li>
                  <li>• Zero Plate Fees with Digital Printing</li>
                  <li>• Fast 3-4 week turnaround times</li>
                  <li>• Enterprise-grade sustainable materials</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we serve as the <strong>technical incubator</strong> for the next generation of sustainable brands. By utilizing <strong>HP Indigo Digital Technology</strong> and optimized supply chain logistics, we help startups launch with enterprise-quality sustainable packaging without the enterprise-level financial risk.
          </p>
        </div>
      )
    },
    {
      id: 'agile-manufacturing',
      title: 'Agile Manufacturing: Zero Plate Fees',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The secret to low MOQs is <strong>Digital Manufacturing</strong>. By eliminating the need for physical printing plates, we slash your upfront costs by thousands of dollars.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Digital Precision</h4>
              <p className="text-sm text-neutral-600">HP Indigo 25K technology ensures your startup looks like an industry leader from day one.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-teal-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Inventory Lean</h4>
              <p className="text-sm text-neutral-600">Order only what you can sell. Reduce warehouse liability and maximize your cash flow.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Scalable Quality</h4>
              <p className="text-sm text-neutral-600">The exact same high-barrier, certified materials used by global Fortune 500 brands.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
              alt="Premium low MOQ startup pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Low MOQ digital production eliminates the financial risk of sustainable market entry"
            />
          </div>
        </div>
      )
    },
    {
      id: 'market-testing',
      title: 'Rapid Market Testing: Fail Fast, Grow Faster',
      icon: <Rocket className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Startups need to pivot. Our low MOQ model allows you to <strong>test designs, flavors, and markets</strong> without being locked into a year's worth of inventory.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Agile Growth Loop</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Multi-SKU Variety Packs</h5>
                  <p className="text-xs text-neutral-600 mt-1">Combine multiple designs in a single run to launch your entire product line at once.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Iterative Design</h5>
                  <p className="text-xs text-neutral-600 mt-1">Update your branding or regulatory information between batches with zero penalty.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Seasonal Collections</h5>
                  <p className="text-xs text-neutral-600 mt-1">Launch limited-edition sustainable packaging for holidays or promotions with ease.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Sustainable Credibility</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By choosing <strong>Certified Recyclable or Compostable</strong> materials for your launch, you build an immediate bond of trust with conscious consumers. Achieve Pack provides the certifications you need to win shelf space and investor confidence.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Sustainable Brand Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-teal-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Start Small. Scale Sustainable.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to launch your product with enterprise-grade sustainable packaging? Our startup team will help you design your launch roadmap today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Startup Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Starter Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            MOQ 500 • NO PLATE FEES • DIGITAL PRECISION • FAST TURNAROUND
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is your absolute minimum order quantity?",
      answer: "Utilizing our digital HP Indigo 25K press, we can offer custom printed pouches with MOQs as low as 500 units per SKU. This is ideal for startups and product testing."
    },
    {
      question: "Do I have to pay for printing plates?",
      answer: "No. With our digital manufacturing process, there are zero plate fees. You only pay for the material and the printing, which significantly lowers your startup capital requirements."
    },
    {
      question: "Can I scaled from 500 units to 50,000 later?",
      answer: "Absolutely. We are a full-scale manufacturer. Once your brand grows, we can seamlessly transition you to our high-speed rotogravure lines for lower per-unit costs at scale."
    },
    {
      question: "What sustainable materials are available at low MOQ?",
      answer: "We offer our entire range of sustainable materials at low MOQ, including 100% Recyclable Mono-PE, High-Barrier Kraft, and TUV-Certified Home Compostable films."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Low MOQ Startup Packaging | Agile Sustainable Solutions | Achieve Pack</title>
        <meta name="description" content="The startup guide to sustainable packaging. 800+ words on low MOQ strategy, zero-plate digital printing, rapid market testing, and scalable circularity." />
        <link rel="canonical" href="https://achievepack.com/topics/low-moq-startup-packaging" />
        <meta name="keywords" content="low MOQ packaging, startup sustainable packaging, digital pouch printing, zero plate packaging, small batch pouches, agile packaging manufacturing" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Low MOQ Startup Packaging: Launching the Future"
        description="Establishing technical authority in agile, low-risk sustainable manufacturing for emerging brands."
        keywords={['low MOQ packaging', 'startup sustainability', 'agile manufacturing']}
        heroTitle="Launch. Test. Scale."
        heroSubtitle="MOQ 500 | Zero Plate Fees | Digital Precision | 3-4 Week Turnaround"
        introSummary="For startups, the biggest barrier to sustainability is the high cost of entry. This guide outlines how we use advanced digital technology to provide low-MOQ, high-quality sustainable packaging—allowing you to launch your brand with professional integrity and zero waste."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp"
      />
    </>
  )
}

export default LowMOQStartupPackagingPage
