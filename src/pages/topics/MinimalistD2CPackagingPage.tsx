import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Layout, CheckCircle, Award, Target, MessageCircle, Calendar, Package, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const MinimalistD2CPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'design-philosophy',
      title: 'The Power of Minimalist Packaging',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            In the D2C (Direct-to-Consumer) world, your packaging is your first physical touchpoint with the customer. A minimalist design focuses on <strong>clean aesthetics, premium textures, and purposeful simplicity</strong> that aligns with modern sustainable values.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">Sleek Matte Finishes</h4>
              <p className="text-sm text-neutral-600 mt-2">Soft-touch matte coatings that scream premium without needing excessive gloss or foils.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900">Reduced Ink Usage</h4>
              <p className="text-sm text-neutral-600 mt-2">Environmentally optimized designs that use less ink while maintaining high brand impact.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'D2C Unboxing Excellence',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/topics/minimalist_d2c_packaging.png" 
            alt="Minimalist D2C Packaging Design" 
            className="w-full h-80 object-cover rounded-xl mt-6"
          />
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Elevate Your Brand Aesthetic',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-700 to-neutral-800 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Design Your Next Launch</h3>
          <p className="text-lg mb-6 opacity-90">Work with our design team to create a minimalist unboxing experience that customers will love to share.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Free Design Consultation
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Get Material Samples
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Minimalist D2C Packaging | E-commerce Shipping Solutions"
      description="Premium minimalist D2C packaging for e-commerce. Sleek matte finishes, eco-friendly materials, and stunning unboxing experiences for modern brands."
      heroTitle="Minimalist D2C Packaging"
      heroSubtitle="Sleek, eco-friendly shipping solutions for modern e-commerce brands."
      sections={sections}
      canonicalUrl="https://achievepack.com/topics/minimalist-d2c-packaging"
      keywords={['minimalist packaging', 'D2C unboxing', 'e-commerce packaging', 'matte finish pouches']}
      introSummary="Create a memorable unboxing experience with our sleek, minimalist packaging solutions designed for modern D2C brands."
    />
  )
}

export default MinimalistD2CPackagingPage
