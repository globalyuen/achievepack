import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Factory, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Utensils, Truck  , Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const FoodPackagingSupplierServicePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Role of a Technical Food Packaging Supplier',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              In 2026, a food packaging supplier must be more than a vendor; they must be a <strong>technical partner</strong>. As global regulations tighten and the circular economy matures, your supplier is responsible for your <strong>compliance</strong>, <strong>shelf-life</strong>, and <strong>brand integrity</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-600">
                <h4 className="font-semibold text-orange-800">Supplier Failures</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Lack of BRCGS/ISO certification</li>
                  <li>• No technical data sheets (TDS)</li>
                  <li>• Inconsistent barrier performance</li>
                  <li>• Poor traceability of raw materials</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-800">Achieve Pack Standards</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• BRCGS Global Standard (Grade A)</li>
                  <li>• ISO 9001 & 14001 Quality Control</li>
                  <li>• Full Declaration of Compliance (DoC)</li>
                  <li>• Real-time supply chain transparency</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            Achieve Pack is a <strong>direct-to-factory technical supplier</strong>. We eliminate the middleman and provide brands with direct access to material science engineering. From <strong>High-Barrier EVOH</strong> laminations to <strong>certified compostable structures</strong>, we manage the entire manufacturing process to ensure absolute consistency and food safety.
          </p>
        </div>
      )
    },
    {
      id: 'technical-capability',
      title: 'Our Engineering & Manufacturing Capability',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            As your supplier, we operate state-of-the-art manufacturing lines designed for the complexities of <strong>eco-friendly food-grade production</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Co-Extrusion</h4>
              <p className="text-sm text-neutral-600">Multi-layer extrusion lines capable of integrating EVOH and PA for superior oxygen barriers.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Digital Precision</h4>
              <p className="text-sm text-neutral-600">HP Indigo 25K digital printing for low-MOQ, high-resolution food packaging with 0% solvent ink.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-yellow-100 rounded-lg w-fit mb-4">
                <Utensils className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Clean Room Converting</h4>
              <p className="text-sm text-neutral-600">Controlled environments for bag-making and fitment insertion to ensure zero microbial contamination.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
              alt="High tech food packaging manufacturing facility" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Direct factory control ensures material integrity and BRCGS compliance"
            />
          </div>
        </div>
      )
    },
    {
      id: 'quality-assurance',
      title: 'QA/QC: The Supplier Verification Protocol',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Quality is not checked; it is manufactured. Our <strong>QA/QC protocol</strong> includes laboratory testing on every batch before it leaves the factory.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Batch-Level Verification</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Seal Strength (ASTM F88)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Tensile testing to ensure hermetic integrity and prevent leaks during distribution.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">OTR/WVTR Verification</h5>
                  <p className="text-xs text-neutral-600 mt-1">MOCON testing on finished pouches to verify barrier performance against specifications.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Coefficient of Friction (CoF)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Ensuring consistent performance on your automated filling and packing lines.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Technical Support Services</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We go beyond material supply. Achieve Pack provides <strong>on-site technical support</strong> for filling line optimization, <strong>graphic design services</strong> for eco-labeling compliance, and <strong>LCA reports</strong> for your sustainability disclosure requirements.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supply-chain-security',
      title: 'Global Logistics & Supply Chain Security',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Reliability is as important as quality. We operate a global logistics network that ensures your food packaging is delivered on time, every time.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
                alt="High performance food packaging structure" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Reliable Supply: Consistent high-barrier performance for global food brands"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Supplier Benchmarks</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span><strong>Lead Time Reliability:</strong> 3-4 week average for digital, 6-8 weeks for rotogravure.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span><strong>Stock Management:</strong> JIT (Just-In-Time) options for enterprise clients.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span><strong>Financial Stability:</strong> A transparent, factory-direct pricing model.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Partner with a Technical Food Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-orange-800 to-amber-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Expertise. Reliability. Scale.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a direct-to-factory supply chain for your food packaging? Our engineering team is standing by to review your specifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-orange-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Supplier Consultation
            </button>
            <Link
              to="/company/factory-tour"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Factory className="h-5 w-5" />
              Our Manufacturing Standards
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            BRCGS CERTIFIED • ISO 9001/14001 • DIRECT-TO-FACTORY • GLOBAL SHIPPING
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Do you offer low-MOQ options for startups?",
      answer: "Yes. Our digital printing (HP Indigo 25K) allows for MOQs as low as 500 units per SKU, enabling startups to access professional food-grade packaging without high upfront costs."
    },
    {
      question: "How do you handle quality disputes?",
      answer: "We provide a full technical audit of every production run. If a batch fails to meet the agreed-upon TDS (Technical Data Sheet), we provide full credit or re-production as per our BRCGS-audited quality guarantee."
    },
    {
      question: "Can you provide environmental impact data for my ESG report?",
      answer: "Yes. As a technical supplier, we provide ISO 14040/44 compliant Life Cycle Assessments (LCA) for your specific packaging structures, calculated at the batch level."
    },
    {
      question: "Are you a manufacturer or a broker?",
      answer: "We are a direct-to-factory supplier with vertically integrated manufacturing and material science capabilities. This ensures absolute control over the supply chain and food safety protocols."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Food Packaging Supplier Service | Technical Engineering | Achieve Pack</title>
        <meta name="description" content="Choose a technical food packaging supplier. 800+ words on BRCGS compliance, QA/QC protocols, factory-direct manufacturing, and supply chain security." />
        <link rel="canonical" href="https://achievepack.com/topics/food-packaging-supplier" />
        <meta name="keywords" content="food packaging supplier, BRCGS certified packaging manufacturer, technical packaging partner, food grade pouch supplier, high barrier packaging supply chain" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#7c2d12"
        title="Technical Food Packaging Supplier: Beyond the Pouch"
        description="Establishing technical authority in factory-direct food packaging manufacturing and supply chain management."
        keywords={['food packaging supplier', 'BRCGS certified manufacturer', 'packaging technical partner']}
        heroTitle="Expertise. Scale. Security."
        heroSubtitle="BRCGS Grade A | Factory Direct | ISO 9001/14001 | Global Logistics"
        introSummary="Choosing a food packaging supplier is a strategic decision that affects your product safety, compliance, and bottom line. This guide outlines the technical benchmarks of a top-tier supplier—from BRCGS-audited manufacturing floors to laboratory-verified quality control and real-time supply chain transparency."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp"
      />
    </>
  )
}

export default FoodPackagingSupplierServicePage
