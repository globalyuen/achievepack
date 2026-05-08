import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Shield, Zap, Target, MessageCircle, Calendar, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const HomeCompostableCoffeeBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'coffee-freshness',
      title: 'Freshness Meets Home Compostability',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            For specialty coffee roasters, the barrier is everything. Our home compostable coffee bags utilize cutting-edge bio-films that provide a superior oxygen barrier to ensure your beans stay fresh from roasting to cup.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800">Home Compostable Benefits</h4>
              <ul className="text-sm text-neutral-700 mt-2 space-y-1">
                <li>• Certified TUV OK Home Compost</li>
                <li>• Breaks down in garden composters</li>
                <li>• Zero microplastics residue</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800">Barrier Performance</h4>
              <ul className="text-sm text-neutral-700 mt-2 space-y-1">
                <li>• High OTR & MVTR performance</li>
                <li>• Optional compostable degassing valves</li>
                <li>• Heat sealable for high-speed filling</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Premium Coffee Presentation',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/topics/compostable_coffee_bags.png" 
            alt="Home Compostable Coffee Packaging" 
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ClickableImage src="/imgs/store/pouch shape/flat-bottom.webp" alt="Flat bottom bag" className="w-full h-24 object-cover rounded-lg" caption="Flat Bottom" />
            <ClickableImage src="/imgs/store/pouch shape/side -seal.webp" alt="Side gusset" className="w-full h-24 object-cover rounded-lg" caption="Side Gusset" />
            <ClickableImage src="/imgs/store/pouch shape/stand-up.webp" alt="Stand up" className="w-full h-24 object-cover rounded-lg" caption="Stand Up" />
            <ClickableImage src="/imgs/store/pouch shape/3-side.webp" alt="Flat pouch" className="w-full h-24 object-cover rounded-lg" caption="Flat Pouch" />
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Brew Better?',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Roastery Project</h3>
          <p className="text-lg mb-6 opacity-90">Get custom samples and barrier testing for your specialty coffee beans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
              Book Roaster Consultation
            </button>
            <Link to="/store" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Shop Stock Bags
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Home Compostable Coffee Bags | Specialty Coffee Packaging"
      description="Premium home compostable coffee bags for roasters. High barrier, TUV certified materials with compostable valves. Start from 500 units."
      sections={sections}
    >
      <Helmet>
        <link rel="canonical" href="https://achievepack.com/topics/home-compostable-coffee-bags" />
      </Helmet>
    </SEOPageLayout>
  )
}

export default HomeCompostableCoffeeBagsPage
