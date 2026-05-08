import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Anchor, Droplets, Award, Target, MessageCircle, Calendar, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecycledOceanPlasticPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'ocean-restoration',
      title: 'Turning Ocean Waste into Opportunity',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Ocean-bound plastic (OBP) is material intercepted within 50km of shorelines where waste management is insufficient. By choosing OBP certified packaging, you are directly funding the collection and removal of plastic from the environment.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-900">Environmental Impact:</h4>
            <p className="text-sm text-blue-800 mt-2">
              Every ton of OBP used prevents plastic from entering the deep ocean. Our supply chain is fully certified and traceable, ensuring that your sustainability claims are backed by rigorous data.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Sustainable Coastal Solutions',
      icon: <Anchor className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p>
            Our recycled ocean plastic pouches offer the same durability and barrier performance as virgin materials while delivering a powerful sustainability story to your customers.
          </p>
          <ClickableImage 
            src="/imgs/topics/recycled_ocean_plastic_packaging.png" 
            alt="Recycled Ocean Plastic Packaging" 
            className="w-full h-80 object-cover rounded-xl mt-6"
          />
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Join the Ocean Recovery Mission',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Make an Impact</h3>
          <p className="text-lg mb-6 opacity-90">Ready to switch to OBP certified packaging? Request a quote and impact report for your brand.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Book Impact Consultation
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Get OBP Trial Samples
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Recycled Ocean Plastic Packaging | OBP Certified Solutions"
      description="Eco-friendly packaging made from recycled ocean-bound plastic. Certified OBP materials with full traceability. Help clean the oceans while protecting your product."
      heroTitle="Recycled Ocean Plastic Packaging"
      heroSubtitle="Cleaning the oceans while protecting your products."
      sections={sections}
      canonicalUrl="https://achievepack.com/topics/recycled-ocean-plastic-packaging"
      keywords={['ocean plastic packaging', 'OBP certified', 'recycled plastic bags', 'sustainable ocean packaging']}
      introSummary="Make a positive environmental impact with our certified ocean-bound plastic packaging solutions."
    />
  )
}

export default RecycledOceanPlasticPackagingPage
