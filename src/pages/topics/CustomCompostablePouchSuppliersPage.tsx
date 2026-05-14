import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomCompostablePouchSuppliersPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Custom Compostable Pouch Suppliers: Engineering for the Bio-Economy',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Finding a reliable <strong>Compostable Pouch Supplier</strong> is no longer just about material availability; it is about <strong>certified performance</strong> and <strong>high-barrier engineering</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
                <h4 className="font-semibold text-emerald-800">The Supplier Dilemma</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Lack of verifiable TUV/BPI certifications</li>
                  <li>• Poor moisture/oxygen barrier (short shelf life)</li>
                  <li>• Structural failure (delamination/splitting)</li>
                  <li>• Unreliable lead times and QC</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-lime-500">
                <h4 className="font-semibold text-lime-800">The Achieve Pack Standard</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• TUV OK Compost Home & Industrial Certified</li>
                  <li>• High-Barrier PBS/Bio-EVOH Structures</li>
                  <li>• ISO 9001 & BRCGS Grade A Manufacturing</li>
                  <li>• Factory-Direct Supply Chain Security</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we are a <strong>vertically integrated manufacturer</strong> and specialist supplier of custom compostable pouches. We engineer our bio-polymers to deliver the barrier performance of plastic with the environmental integrity of nature. Every batch is tested for <strong>Migration</strong>, <strong>Seal Integrity</strong>, and <strong>Bio-Degradability</strong>, ensuring your brand is protected against greenwashing and product failure.
          </p>
        </div>
      )
    },
    {
      id: 'certified-supply-chain',
      title: 'Supply Chain Integrity: Verifiable Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In the compostable market, <strong>Certification is your insurance policy</strong>. We provide the full technical audit trail required for global retail compliance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">TUV Austria OK Compost</h4>
              <p className="text-sm text-neutral-600">Certified for both Home and Industrial composting, ensuring full breakdown within 180 days.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-lime-100 rounded-lg w-fit mb-4">
                <Award className="h-6 w-6 text-lime-600" />
              </div>
              <h4 className="font-bold text-neutral-900">BPI Certified</h4>
              <p className="text-sm text-neutral-600">Meets ASTM D6400 standards for North American commercial composting facilities.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Factory className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">BRCGS Food Safety</h4>
              <p className="text-sm text-neutral-600">Manufactured in GFSI-recognized Grade A facilities for total food-grade hygiene.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High performance custom compostable pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Factory-direct transparency ensures every compostable claim is backed by laboratory evidence"
            />
          </div>
        </div>
      )
    },
    {
      id: 'barrier-engineering',
      title: 'Barrier Engineering: Defying Bio-Material Limits',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The historic weakness of compostables was their <strong>poor barrier</strong>. We have solved this through advanced multi-layer bio-polymer laminations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Bio-High-Barrier Stack</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">NK Paper / PBS / Bio-EVOH</h5>
                  <p className="text-xs text-neutral-600 mt-1">A structure designed to protect oxygen-sensitive snacks and coffee for up to 12 months.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Puncture Resistance</h5>
                  <p className="text-xs text-neutral-600 mt-1">Bio-polymers engineered for high-tenacity, preventing pouch failure during logistics.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Heat Seal Integrity</h5>
                  <p className="text-xs text-neutral-600 mt-1">Optimized for high-speed automated lines with consistent seal strength (ASTM F88).</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Sustainable Supplier ROI</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Working with a <strong>specialist compostable supplier</strong> reduces your R&D risk. We provide ready-to-use, certified structures that have already been validated in real-world retail and logistics environments.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Partner with the Compostable Experts',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-lime-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Certified. High-Barrier. Factory-Direct.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a reliable, certified compostable supply chain for your brand? Our engineering team will review your requirements today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Supplier Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Compostable Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            TUV CERTIFIED • BPI COMPLIANT • HIGH BARRIER • BRCGS GRADE A
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are you a direct manufacturer or a broker?",
      answer: "We are a direct vertically-integrated manufacturer. This ensures total control over material quality, certification accuracy, and supply chain security."
    },
    {
      question: "How do you verify home-compostability?",
      answer: "Every custom structure we produce is backed by TUV Austria 'OK Compost Home' certifications, proving it breaks down fully in a backyard compost environment within 180 days."
    },
    {
      question: "What is the lead time for custom compostable pouches?",
      answer: "Typically 10-12 weeks for rotogravure production and 4-6 weeks for digital production, depending on the complexity of the material structure."
    },
    {
      question: "Do you offer low MOQ options for compostables?",
      answer: "Yes. Using our HP Indigo digital technology, we can offer custom printed compostable pouches with MOQs as low as 500 units per SKU."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Custom Compostable Pouch Suppliers | Certified High-Barrier | Achieve Pack</title>
        <meta name="description" content="Find the master guide to custom compostable pouch suppliers. 800+ words on TUV/BPI certifications, high-barrier bio-engineering, and factory-direct supply chains." />
        <link rel="canonical" href="https://achievepack.com/topics/custom-compostable-pouch-suppliers" />
        <meta name="keywords" content="compostable pouch suppliers, custom compostable packaging, TUV certified pouches, BPI compostable bags, sustainable packaging manufacturer, bio-polymer pouches" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Custom Compostable Pouch Suppliers: Engineering the Bio-Future"
        description="Establishing technical authority in certified, high-performance compostable packaging manufacturing."
        keywords={['compostable suppliers', 'bio-packaging', 'sustainable manufacturing']}
        heroTitle="Certified. Proven. Bio-Pure."
        heroSubtitle="TUV OK Compost Home | BPI Certified | High Barrier | BRCGS Grade A"
        introSummary="The compostable market is filled with unverified claims. This guide outlines how we use rigorous engineering and international certification standards to serve as the world's most reliable supplier of custom high-barrier compostable pouches—protecting both your product and your environmental integrity."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CustomCompostablePouchSuppliersPage
