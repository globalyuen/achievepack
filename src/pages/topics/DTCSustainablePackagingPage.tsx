import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Truck, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const DTCSustainablePackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'DTC Sustainable Packaging: Engineering the Unboxing Experience',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Direct-to-Consumer (DTC) brands face a unique packaging challenge: the container must survive a <strong>multi-touch logistics cycle</strong> while delivering a premium <strong>sustainable unboxing experience</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                <h4 className="font-semibold text-blue-900">The DTC Friction</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• High shipping costs (DIM weight)</li>
                  <li>• Fragile packaging failure during transit</li>
                  <li>• Consumer 'Packaging Rage' over plastic waste</li>
                  <li>• Lack of brand consistency across SKUs</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">The Achieve Pack Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Lightweight Flexible Pouch engineering</li>
                  <li>• Puncture-Resistant high-barrier laminates</li>
                  <li>• 100% Recyclable Mono-PE structures</li>
                  <li>• Premium Matte/Soft-Touch finishes</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we help DTC brands optimize their packaging for <strong>profitability and planet</strong>. By replacing rigid containers with lightweight flexible pouches, we help you slash shipping carbon, reduce warehouse space, and provide a tactile, sustainable experience your customers will love.
          </p>
        </div>
      )
    },
    {
      id: 'logistics-engineering',
      title: 'Logistics Engineering: Reducing DIM Weight',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In DTC, you don't just ship products; you ship air. Our engineers perform a <strong>Logistics Audit</strong> to ensure your packaging is 'right-sized' to minimize <strong>Dimensional Weight (DIM)</strong> charges.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Weight Reduction</h4>
              <p className="text-sm text-neutral-600">Flexible pouches weigh up to 80% less than glass or rigid PET jars, directly lowering per-unit freight costs.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Density Gains</h4>
              <p className="text-sm text-neutral-600">Ship 5x to 10x more empty units in the same truck volume compared to rigid containers.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Puncture Resistance</h4>
              <p className="text-sm text-neutral-600">Engineered multi-layer films (NY/PE) ensure your product arrives intact despite rough handling.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
              alt="Optimized DTC shipping with flexible pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Lightweight flexible structures are the primary tool for reducing Scope 3 logistics carbon"
            />
          </div>
        </div>
      )
    },
    {
      id: 'brand-experience',
      title: 'Premium Sustainable Finishes',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Sustainable doesn't have to look "brown and boring". We utilize advanced printing and coating technology to deliver a <strong>luxury sustainable aesthetic</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Tactile & Visual Features</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Soft-Touch Matte</h5>
                  <p className="text-xs text-neutral-600 mt-1">A velvety, premium hand-feel that signals quality to the consumer immediately upon contact.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Digital Metallic Effects</h5>
                  <p className="text-xs text-neutral-600 mt-1">Eye-catching foil-like effects without the environmental burden of traditional hot-stamping.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Recyclable Kraft Textures</h5>
                  <p className="text-xs text-neutral-600 mt-1">The look of paper with the barrier performance of high-tech polymers, in a 100% recyclable structure.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Color Precision</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We utilize <strong>G7 Master Certified</strong> color matching to ensure your DTC brand identity is consistent across your entire product line, from the primary pouch to the shipping mailer.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'circular-loyalty',
      title: 'Circular Loyalty: Engaging the Customer',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Sustainable packaging is a powerful tool for customer retention. By providing a <strong>clear disposal pathway</strong>, you build trust and loyalty with your audience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Consumer-ready sustainable pouch with recycling icons" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Recycling Ready: High-clarity messaging on 100% recyclable mono-PE structures"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Transparency Milestones</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>How2Recycle Aligned:</strong> Clear, standardized labeling for consumer disposal.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>QR Code Integration:</strong> Link to digital LCAs and localized recycling instructions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>Plastic Tax Proof:</strong> Prove your 30% PCR content to environmentally conscious buyers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Optimize Your DTC Brand Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-800 to-indigo-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Lighter. Stronger. Sustainable.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to reduce your DTC shipping costs and carbon footprint? Our engineering team will review your current packaging and design your upgrade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book DTC Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order D2C Finish Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            LOGISTICS OPTIMIZED • 100% RECYCLABLE • LOW MOQ DIGITAL • PREMIUM FINISHES
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How much weight can I save by switching to flexible pouches?",
      answer: "Depending on your current rigid container (glass vs. PET), you can expect a 70% to 90% reduction in primary packaging weight, which directly translates to lower freight and carbon costs."
    },
    {
      question: "Can flexible pouches handle liquid DTC products?",
      answer: "Yes. Our high-performance laminates are engineered for liquid laundry detergents, soap refills, and even aggressive chemical products, featuring anti-leak spout and fitment technology."
    },
    {
      question: "Do you offer custom sizes for subscription boxes?",
      answer: "Absolutely. We specialize in custom-dimensioned pouches that are 'right-sized' for standard mailers (like USPS/FedEx sizes) to ensure you aren't paying for shipping air."
    },
    {
      question: "What is your MOQ for custom printed DTC pouches?",
      answer: "Utilizing our digital HP Indigo technology, we can offer custom printed pouches with MOQs as low as 500 units per SKU, ideal for product launches and subscription variety packs."
    }
  ]

  return (
    <>
      <Helmet>
        <title>DTC Sustainable Packaging | Logistics & Brand Strategy | Achieve Pack</title>
        <meta name="description" content="Optimize your DTC brand with sustainable packaging. 800+ words on logistics engineering, DIM weight reduction, premium unboxing, and circular economy loyalty." />
        <link rel="canonical" href="https://achievepack.com/topics/dtc-sustainable-packaging" />
        <meta name="keywords" content="DTC sustainable packaging, D2C packaging strategy, DIM weight reduction, unboxing experience packaging, flexible pouch shipping, sustainable brand identity" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e3a8a"
        title="DTC Sustainable Packaging: Logistics Optimized"
        description="Establishing technical authority in direct-to-consumer packaging engineering and sustainable unboxing experiences."
        keywords={['DTC packaging', 'D2C sustainability', 'logistics optimization']}
        heroTitle="Lighter. Faster. Sustainable."
        heroSubtitle="DIM Weight Optimized | Premium Unboxing | 100% Recyclable | Low MOQ"
        introSummary="In the competitive DTC landscape, your packaging is your brand's physical representative. This guide outlines how we use material science and logistics engineering to help you reduce shipping costs, eliminate waste, and deliver a sustainable unboxing experience that builds lasting customer loyalty."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/dtc_packaging_1778212333445.png"
      />
    </>
  )
}

export default DTCSustainablePackagingPage
