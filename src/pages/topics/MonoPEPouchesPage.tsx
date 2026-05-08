import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, CheckCircle, Award, Target, MessageCircle, Calendar, Package, BarChart3 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const MonoPEPouchesPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'recyclability',
      title: 'The Future of Flexible Recycling',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Standard multi-layer pouches are difficult to recycle. Our Mono-PE pouches use a <strong>single-material construction</strong> that is fully compatible with existing PE recycling streams (Category 4).
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-900">Why Mono-Material?</h4>
            <p className="text-sm text-blue-800 mt-2">
              By using only Polyethylene (PE) throughout the entire structure, we ensure the material can be easily reprocessed into new plastic products, supporting a true circular economy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'performance',
      title: 'Engineered for Protection',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Don't sacrifice protection for recyclability. Our Mono-PE films are oriented for high stiffness and excellent barrier performance.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">MDO-PE Technology</h4>
              <p className="text-sm text-neutral-600 mt-2">Machine Direction Orientation (MDO) provides the stiffness required for stand-up performance on retail shelves.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">High Transparency</h4>
              <p className="text-sm text-neutral-600 mt-2">Excellent clarity options available for brands that want to showcase their product visually.</p>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/topics/mono_pe_pouches.png" 
            alt="Mono-PE Recyclable Pouches" 
            className="w-full h-64 object-cover rounded-xl mt-6"
          />
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Switch to Recyclable Mono-PE',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Close the Loop</h3>
          <p className="text-lg mb-6 opacity-90">Start your circular packaging journey today with our Mono-PE trial program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Consult with a Specialist
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Get Material Specs
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Recyclable Mono-PE Pouches | Circular Packaging Solutions"
      description="100% recyclable Mono-PE pouches for a circular economy. Single-material construction with high barrier performance. Category 4 recycling compatible."
      sections={sections}
    >
      <Helmet>
        <link rel="canonical" href="https://achievepack.com/topics/mono-material-pe-pouches" />
      </Helmet>
    </SEOPageLayout>
  )
}

export default MonoPEPouchesPage
