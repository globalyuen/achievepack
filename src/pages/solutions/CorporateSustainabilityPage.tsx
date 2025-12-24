import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Building2, FileCheck, BarChart3, Shield, Globe, CheckCircle, Calendar, MessageCircle, Award, Target, Users, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CorporateSustainabilityPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Meeting Corporate Sustainability Targets',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              As a <strong>Sustainability Director</strong>, you're tasked with meeting ambitious environmental goals while managing multiple brands and suppliers. You need packaging solutions with quantifiable impact data for corporate reporting.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Corporate Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Multiple brands with different packaging needs</li>
                  <li>• Regulatory compliance across regions</li>
                  <li>• ESG reporting requirements</li>
                  <li>• Supplier audit and certification needs</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Quantifiable environmental impact data</li>
                  <li>• Third-party certifications for all claims</li>
                  <li>• Scalable solutions across product lines</li>
                  <li>• Transparent supply chain documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Third-Party Verified Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Every environmental claim we make is backed by <strong>internationally recognized third-party certifications</strong>—the documentation you need for ESG reporting and consumer-facing claims.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Compostability</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>ASTM D6400 (US)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>EN 13432 (EU)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>AS5810 (Australia)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Food Safety</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>BRC Certified Factory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>FDA Compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>FSSC 22000</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Recyclability</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>How2Recycle Verified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Store Drop-Off Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>APR Design Guide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reporting',
      title: 'ESG Reporting Support',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We provide the <strong>quantifiable data you need for corporate sustainability reports</strong>—carbon footprint comparisons, plastic reduction metrics, and end-of-life documentation.
          </p>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mt-4">
            <h4 className="font-semibold text-green-800 mb-3">Available Metrics & Documentation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">Environmental Impact</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Carbon footprint per unit (kg CO2e)</li>
                  <li>• Virgin plastic reduction percentage</li>
                  <li>• PCR/bio-based content certification</li>
                  <li>• Water usage comparison data</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">Compliance Documents</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Certification certificates (PDF)</li>
                  <li>• Material safety data sheets</li>
                  <li>• Supply chain audit reports</li>
                  <li>• End-of-life disposal guidelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable certification documentation" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable Certified"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable certification documentation" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Recyclable Certified"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/pcr.webp" 
                alt="PCR content certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption="PCR Content"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/bio-pe.webp" 
                alt="Bio-based material certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Bio-Based PE"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scalable',
      title: 'Scalable Multi-Brand Solutions',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Managing sustainability across multiple brands? <strong>We offer portfolio-wide packaging solutions</strong> with consistent environmental standards and centralized reporting.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Food & Beverage</h4>
              <p className="text-sm text-neutral-600">Coffee, tea, snacks, supplements, pet food</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Health & Wellness</h4>
              <p className="text-sm text-neutral-600">Vitamins, protein powders, nutraceuticals</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Consumer Goods</h4>
              <p className="text-sm text-neutral-600">Personal care, household products</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supply-chain',
      title: 'Transparent Supply Chain',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We maintain <strong>full supply chain transparency</strong> with documented material sourcing, factory certifications, and ethical manufacturing practices.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Factory Credentials</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">BRC Certified</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ISO 9001</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ISO 14001</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SEDEX Member</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">BSCI Audited</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Partner With Us on Corporate Sustainability',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schedule a Corporate Packaging Review</h3>
          <p className="text-lg mb-6 opacity-90">
            Discuss your sustainability targets with our team. We'll provide material recommendations, impact projections, and documentation samples.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Schedule Corporate Review
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Leaf className="h-5 w-5" />
              View Material Options
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What certifications do you provide for ESG reporting?",
      answer: "We provide ASTM D6400, EN 13432, and AS5810 compostability certificates; How2Recycle verification for recyclable materials; PCR content verification; and bio-based content certification. All certificates are available as PDF documentation."
    },
    {
      question: "Can you provide carbon footprint data for packaging?",
      answer: "Yes. We provide comparative carbon footprint analysis (kg CO2e per unit) between conventional and sustainable materials, helping you quantify the environmental impact of packaging transitions for sustainability reports."
    },
    {
      question: "Do you support supplier audits?",
      answer: "Absolutely. Our manufacturing facilities are BRC, ISO 9001, and ISO 14001 certified. We're SEDEX members and have completed BSCI audits. We can provide audit reports and facilitate virtual or in-person factory inspections."
    },
    {
      question: "Can you handle packaging for multiple brands?",
      answer: "Yes. Many corporate clients work with us across their entire brand portfolio. We provide centralized account management, consistent sustainability standards, and consolidated reporting for multi-brand implementations."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Corporate Sustainability Packaging | ESG Reporting | Certified Materials | Achieve Pack</title>
        <meta name="description" content="Corporate-grade sustainable packaging with third-party certifications for ESG reporting. Quantifiable impact data, supply chain transparency, and multi-brand solutions." />
        <link rel="canonical" href="https://achievepack.com/solutions/corporate-sustainability" />
        <meta name="keywords" content="corporate sustainability packaging, ESG packaging, certified sustainable packaging, environmental reporting, supply chain transparency, corporate packaging solutions" />
      </Helmet>

      <SEOPageLayout
        title="Corporate Sustainability Packaging | ESG Reporting Support"
        description="Corporate-grade sustainable packaging with third-party certifications for ESG reporting. Quantifiable impact data and multi-brand solutions."
        keywords={['corporate sustainability packaging', 'ESG packaging', 'certified sustainable packaging', 'environmental reporting']}
        heroTitle="Corporate Sustainability Packaging"
        heroSubtitle="Third-Party Certified | ESG Reporting Ready | Multi-Brand Scalable"
        introSummary="Meet corporate sustainability targets with packaging backed by quantifiable data. Third-party certifications, supply chain transparency, and scalable solutions for multi-brand portfolios."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/4-infograhic/compost.webp"
      />
    </>
  )
}

export default CorporateSustainabilityPage
