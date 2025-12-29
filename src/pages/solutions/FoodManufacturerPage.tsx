import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FileCheck, Globe, Shield, AlertTriangle, CheckCircle, Calendar, MessageCircle, Award, Target, Scale, BookOpen } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const FoodManufacturerPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Navigating Packaging Regulations',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              As a <strong>food manufacturing professional</strong>, you navigate complex packaging regulations across domestic and international markets. Increasingly strict environmental regulations add another layer of complexity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Regulatory Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• EU Single-Use Plastics Directive</li>
                  <li>• EPR (Extended Producer Responsibility)</li>
                  <li>• State-level US packaging laws</li>
                  <li>• FDA/EFSA food contact compliance</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Current regulatory knowledge</li>
                  <li>• Multi-market compliant packaging</li>
                  <li>• Food safety certifications</li>
                  <li>• Documentation for audits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: 'Multi-Jurisdiction Compliance',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Our packaging meets <strong>regulatory requirements across major markets</strong>—one supplier for domestic and export needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇺🇸</span>
              <h4 className="font-semibold text-neutral-800 mt-2">United States</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• FDA food contact</li>
                <li>• ASTM D6400 compostable</li>
                <li>• CA/NY/NJ state laws</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇪🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">European Union</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• EFSA compliant</li>
                <li>• EN 13432 compostable</li>
                <li>• SUP Directive ready</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇬🇧</span>
              <h4 className="font-semibold text-neutral-800 mt-2">United Kingdom</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• UK food contact</li>
                <li>• Plastic Packaging Tax</li>
                <li>• EPR scheme ready</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇦🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">Australia/NZ</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• FSANZ compliant</li>
                <li>• AS5810 compostable</li>
                <li>• APCO reporting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: 'Food Safety Certifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Our manufacturing facilities maintain <strong>the highest food safety standards</strong>—ready for your QA audits and supplier qualification.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <Award className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-green-800">BRC Certified</h4>
              <p className="text-sm text-green-700 mt-2">Global standard for food safety. AA rating.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Award className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-blue-800">FSSC 22000</h4>
              <p className="text-sm text-blue-700 mt-2">Food Safety System Certification. GFSI recognized.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <Award className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-purple-800">ISO 22000</h4>
              <p className="text-sm text-purple-700 mt-2">Food safety management system.</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="High Barrier"
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-clear.webp" 
                alt="Medium barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Medium Barrier"
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Coffee packaging FDA compliant" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Coffee Packaging"
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_healthy_protein_bars_achieve_pack_8282018.webp" 
                alt="Snack packaging food safe" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Snack Packaging"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: 'Regulatory Documentation',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We provide <strong>comprehensive documentation</strong> for regulatory submissions and audits.
          </p>
          
          <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3">Available Documents</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Certificate of Conformity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Food Contact Declaration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Material Safety Data Sheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Migration Testing Reports</span>
                </li>
              </ul>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Compostability Certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Recyclability Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Factory Audit Reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Traceability Records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'future-proof',
      title: 'Future-Proof Your Packaging',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Regulations are evolving rapidly. <strong>We stay ahead of upcoming requirements</strong> so you can transition proactively rather than reactively.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Upcoming Regulations We're Tracking</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• EU Packaging & Packaging Waste Regulation (PPWR) 2025</li>
              <li>• US Federal plastic policy developments</li>
              <li>• Extended Producer Responsibility expansions</li>
              <li>• Mandatory recycled content requirements</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Discuss Your Regulatory Requirements',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schedule a Compliance Review</h3>
          <p className="text-lg mb-6 opacity-90">
            Discuss your specific markets and requirements. We'll recommend compliant packaging solutions with full documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Schedule Compliance Review
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Scale className="h-5 w-5" />
              View Compliant Materials
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Is your packaging FDA and EFSA compliant?",
      answer: "Yes. All our food-grade packaging meets FDA requirements for US markets and EFSA regulations for EU markets. We provide food contact declarations and migration testing documentation upon request."
    },
    {
      question: "Can the same packaging be used for US and EU exports?",
      answer: "In many cases, yes. Our compostable materials are dual-certified to ASTM D6400 (US) and EN 13432 (EU). We can advise on material options that satisfy both markets' requirements."
    },
    {
      question: "How do you help with Extended Producer Responsibility (EPR)?",
      answer: "We provide packaging weight data, material composition information, and recyclability documentation needed for EPR reporting. Our team stays current with EPR schemes across major markets."
    },
    {
      question: "Can you supply documentation for QA audits?",
      answer: "Absolutely. We provide Certificate of Conformity, material specifications, food contact declarations, and factory audit reports. Our BRC-certified facility is prepared for virtual or in-person inspections."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Food Packaging Regulations | FDA EFSA Compliant | Multi-Market | Achieve Pack</title>
        <meta name="description" content="Food-grade packaging compliant with FDA, EFSA, and international regulations. BRC certified manufacturing, comprehensive documentation, and multi-market solutions." />
        <link rel="canonical" href="https://achievepack.com/solutions/food-manufacturer" />
        <meta name="keywords" content="food packaging regulations, FDA compliant packaging, EFSA food contact, BRC certified packaging, food manufacturing packaging, regulatory compliant packaging" />
      </Helmet>

      <SEOPageLayout
        title="Food Packaging Regulations | FDA EFSA Compliant"
        description="Food-grade packaging compliant with FDA, EFSA, and international regulations. BRC certified manufacturing with comprehensive documentation."
        keywords={['food packaging regulations', 'FDA compliant packaging', 'EFSA food contact', 'BRC certified packaging']}
        heroTitle="Regulatory-Compliant Food Packaging"
        heroSubtitle="FDA & EFSA Compliant | BRC Certified | Multi-Market Ready"
        introSummary="Navigate complex food packaging regulations with confidence. Our packaging meets FDA, EFSA, and international standards with full documentation for audits and export."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/store/barrier/3-foil.webp"
      />
    </>
  )
}

export default FoodManufacturerPage
