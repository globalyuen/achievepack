import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, AlertTriangle, FileCheck, Thermometer } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PFASFreePackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The PFAS Crisis: Eliminating "Forever Chemicals"',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border border-red-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Per- and polyfluoroalkyl substances (PFAS) are a class of over 12,000 synthetic chemicals used for decades to provide grease and water resistance in food packaging. However, their persistence in the environment and human body has led to a global <strong>regulatory crackdown</strong>. In 2026, <strong>PFAS-free packaging</strong> is a baseline requirement for any brand selling in the US (California AB 1200) or the European Union.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800">The PFAS Risk</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Environmental Persistence ("Forever Chemicals")</li>
                  <li>• Bioaccumulation in human tissue</li>
                  <li>• Regulatory bans in 12+ US states</li>
                  <li>• Strict EU REACH & ECHA restrictions</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">Achieve Pack Assurance</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 100% Certified PFAS-Free Structures</li>
                  <li>• Batch-Level Laboratory Verification</li>
                  <li>• Advanced Bio-Wax Grease Barriers</li>
                  <li>• Full Regulatory Documentation (DoC)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we have proactively eliminated all intentionally added PFAS from our flexible packaging supply chain. By utilizing <strong>high-purity mechanical barriers</strong> and <strong>sustainable aqueous coatings</strong>, we provide the grease resistance your food product needs without the toxic legacy of traditional chemical additives.
          </p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Advanced Grease-Barrier Engineering',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The engineering challenge of <strong>PFAS-free packaging</strong> is maintaining grease resistance (Kit Level 10+) without using fluorinated compounds. We utilize several proprietary technologies to achieve this.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Aqueous Coatings</h4>
              <p className="text-sm text-neutral-600">Water-based dispersions that create a physical barrier against oils and moisture, replacing traditional PFAS-laden paper treatments.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Multi-Layer Extrusion</h4>
              <p className="text-sm text-neutral-600">Utilizing high-purity Polyethylene (PE) or Polylactic Acid (PLA) layers as internal grease shields, eliminating the need for chemical additives.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Thermometer className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Heat Stability</h4>
              <p className="text-sm text-neutral-600">Our PFAS-free structures maintain their barrier properties even at high temperatures (up to 100°C), making them ideal for hot-fill food.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/food_safety_lab_testing_1778760434240.png" 
              alt="Laboratory testing for PFAS absence" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Verifying PFAS-Free status through Total Fluorine (TF) Analysis"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: 'Regulatory Compliance & Global Standards',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            PFAS regulation is a moving target. Achieve Pack stays ahead of the curve by monitoring global legislative updates from the <strong>ECHA (European Chemicals Agency)</strong> and the <strong>US EPA</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">US State Bans (AB 1200)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                California, Maine, and Washington have enacted strict bans on PFAS in plant-based food packaging. We provide the <strong>Certificates of Compliance</strong> required for retail distribution in these markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">EU REACH Restrictions</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Under the REACH regulation, several PFAS compounds (like PFOA and PFOS) are strictly prohibited. Achieve Pack ensures all our European-destined packaging exceeds these safety mandates.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-amber-900">Total Fluorine (TF) Testing</h5>
              <p className="text-sm text-amber-800 mt-1">
                Because there are thousands of PFAS compounds, testing for each one is impossible. We utilize <strong>Total Fluorine (TF) Analysis</strong> (detection limit &lt; 50 ppm) as a surrogate marker. If TF is below 50 ppm, the product is certified to have "no intentionally added PFAS."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Transition to PFAS-Free Safety',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-green-900 to-emerald-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Future-Proof Your Brand Today.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't risk your brand's reputation on "forever chemicals." Our technical team will review your current materials and provide a roadmap to 100% PFAS-free compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Compliance Audit
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Shield className="h-5 w-5" />
              Order PFAS-Free Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            FDA COMPLIANT • EU REACH READY • BRCGS CERTIFIED • 100% TOXIC-FREE
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your 'compostable' bags also PFAS-free?",
      answer: "Yes. This is a critical distinction. Many molded-fiber or early compostable products used PFAS for grease resistance. Achieve Pack's new-generation compostable structures (PLA/PBAT/PBS) are 100% PFAS-free, certified by third-party TF analysis."
    },
    {
      question: "What is California AB 1200?",
      answer: "AB 1200 is a California law that prohibits the sale of plant-based food packaging that contains 'intentionally added PFAS.' It also requires brands to disclose the presence of certain chemicals on their websites. We provide the data you need to comply with these disclosure rules."
    },
    {
      question: "Can I achieve high grease resistance without PFAS?",
      answer: "Absolutely. By utilizing mechanical barriers (high-purity PE/PLA) and sustainable aqueous coatings, we can achieve grease resistance levels comparable to traditional fluorinated treatments, ensuring your product stays clean and oil-free."
    },
    {
      question: "How do you verify your supply chain is PFAS-free?",
      answer: "We perform batch-level testing and require 'Non-PFAS Statements' from all our raw material suppliers. We also conduct random unannounced audits of our production facilities to perform Total Fluorine (TF) tests on the final pouches."
    }
  ]

  return (
    <>
      <Helmet>
        <title>PFAS-Free Packaging | Certified Safe & Toxic-Free | Achieve Pack</title>
        <meta name="description" content="Technical guide to PFAS-free food packaging. 800+ words on eliminating forever chemicals, California AB 1200 compliance, and advanced grease barrier engineering." />
        <link rel="canonical" href="https://achievepack.com/topics/pfas-free-packaging" />
        <meta name="keywords" content="PFAS free packaging, forever chemicals food safety, California AB 1200, aqueous coating grease barrier, non-PFAS food pouches, Total Fluorine testing" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#0f172a"
        title="PFAS-Free Packaging Engineering"
        description="Eliminating 'Forever Chemicals' through advanced material science and rigorous regulatory verification."
        keywords={['PFAS free', 'toxic-free packaging', 'food safety chemicals']}
        heroTitle="Pure. Safe. PFAS-Free."
        heroSubtitle="Forever Chemicals Eliminated | Lab-Verified | 2026 Compliant"
        introSummary="The era of 'Forever Chemicals' in food packaging is over. We help brands navigate the complex global regulatory bans on PFAS by providing certified, high-performance grease barriers that protect both the consumer and the environment."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/food_safety_lab_testing_1778760434240.png"
      />
    </>
  )
}

export default PFASFreePackagingPage
