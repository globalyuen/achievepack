import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lock, Shield, Award, Target, MessageCircle, Calendar, Package, ShieldCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ChildResistantMylarBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'security-compliance',
      title: 'Certified Child-Resistant Security',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Safety and compliance are non-negotiable for sensitive products. Our child-resistant mylar bags are certified under <strong>ASTM D3475 standards</strong>, providing a secure "push and pull" mechanism that ensures children cannot easily open the packaging.
          </p>
          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mt-4">
            <h4 className="font-semibold text-neutral-900">Key Safety Features:</h4>
            <ul className="text-sm text-neutral-700 mt-2 space-y-1">
              <li>• ASTM D3475 certified locking mechanism</li>
              <li>• Opaque materials for discrete content storage</li>
              <li>• Smell-proof and moisture-proof high-barrier foils</li>
              <li>• Tamper-evident heat sealable top</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Versatile CRM Applications',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Whether for pharmaceuticals, legal cannabis, or hazardous household products, our secure pouches provide the professional presentation and protection your brand needs.
          </p>
          <ClickableImage 
            src="/imgs/topics/child_resistant_mylar_bags.png" 
            alt="Child Resistant Mylar Bags" 
            className="w-full h-80 object-cover rounded-xl mt-6"
          />
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Secure Your Supply Chain',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Protect Your Customers</h3>
          <p className="text-lg mb-6 opacity-90">Request certification documents and custom CRM samples for your safety testing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Book Security Consultation
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Get Safety Samples
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Child-Resistant Mylar Bags | Certified Secure CRM Packaging"
      description="Certified ASTM D3475 child-resistant mylar bags. Secure, smell-proof, and moisture-proof packaging for pharmaceuticals and sensitive products. Custom printing available."
      sections={sections}
    >
      <Helmet>
        <link rel="canonical" href="https://achievepack.com/topics/child-resistant-mylar-bags" />
      </Helmet>
    </SEOPageLayout>
  )
}

export default ChildResistantMylarBagsPage
