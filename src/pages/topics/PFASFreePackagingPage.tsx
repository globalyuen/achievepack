import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Target, MessageCircle, Calendar, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PFASFreePackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'pfas-problem',
      title: 'The PFAS Challenge in Food Packaging',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            PFAS (Per- and polyfluoroalkyl substances) are often called "forever chemicals." Historically used for grease resistance, they are now facing strict bans across the USA and EU due to health and environmental concerns.
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800">Why Brands are Switching:</h4>
            <ul className="text-sm text-neutral-600 mt-2 space-y-1">
              <li>• Compliance with state-level PFAS bans (e.g., California, New York)</li>
              <li>• Consumer demand for non-toxic, safe packaging</li>
              <li>• Brand protection and future-proofing supply chains</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'safe-solutions',
      title: 'Our Certified PFAS-Free Barrier Technology',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We provide high-performance barriers that are <strong>100% free from fluorinated compounds</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">Mineral-Based Barriers</h4>
              <p className="text-sm text-neutral-600 mt-2">Utilizing natural minerals to create a mechanical barrier against grease and oils.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">Bio-Polymer Coatings</h4>
              <p className="text-sm text-neutral-600 mt-2">Plant-based coatings that offer superior moisture and grease resistance without chemicals.</p>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/topics/pfas_free_packaging.png" 
            alt="PFAS-Free Packaging Solution" 
            className="w-full h-64 object-cover rounded-xl mt-6"
          />
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Transition to PFAS-Free Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ensure Your Brand Safety</h3>
          <p className="text-lg mb-6 opacity-90">Request a safety consultation and material testing for your PFAS-free transition.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Book Safety Consultation
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Get Lab Samples
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="PFAS-Free Food Packaging | Certified Non-Toxic Solutions"
      description="Protect your brand with certified PFAS-free food packaging. We offer advanced grease-resistant barriers that meet the strictest safety regulations in the USA and EU."
      heroTitle="PFAS-Free Food Packaging"
      heroSubtitle="Certified non-toxic solutions for a safer supply chain."
      sections={sections}
      canonicalUrl="https://achievepack.com/topics/pfas-free-food-packaging"
      keywords={['pfas-free packaging', 'non-toxic food bags', 'forever chemicals free', 'sustainable packaging']}
      introSummary="Transition to non-toxic, PFAS-free packaging to ensure consumer safety and regulatory compliance."
    />
  )
}

export default PFASFreePackagingPage
