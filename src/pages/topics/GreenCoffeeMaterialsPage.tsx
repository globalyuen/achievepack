import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Coffee, Droplets, Wind, Thermometer } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const GreenCoffeeMaterialsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Coffee Packaging Dilemma',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Coffee demands <strong>exceptional barrier properties</strong> to preserve freshness, flavor, and aroma. Finding eco-friendly materials that match this performance has been the industry's biggest challenge—until now.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">Coffee's Requirements</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• High oxygen barrier (WVTR &lt; 1g/m²/day)</li>
                  <li>• Degassing valve compatibility</li>
                  <li>• UV and light protection</li>
                  <li>• Aroma retention</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">Eco-Material Solutions</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Compostable with aluminum-free barrier</li>
                  <li>• Recyclable mono-material structures</li>
                  <li>• Bio-based with fossil-free production</li>
                  <li>• Paper-based with PLA coating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'Best Materials for Green Coffee Packaging',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Compare eco-friendly materials based on <strong>barrier performance, certifications, and shelf life</strong> for your coffee products.
          </p>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-amber-700 text-white">
                <tr>
                  <th className="p-3 text-left text-sm">Material</th>
                  <th className="p-3 text-left text-sm">Barrier Level</th>
                  <th className="p-3 text-left text-sm">Coffee Shelf Life</th>
                  <th className="p-3 text-left text-sm">End of Life</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">High-Barrier Compostable</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">12-18 months</td>
                  <td className="p-3">Industrial Compost</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">TUV OK Home Compostable</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                  <td className="p-3">6-12 months</td>
                  <td className="p-3">Home Compost</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Recyclable Mono-PE</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">18-24 months</td>
                  <td className="p-3">PE Recycling</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Bio-PE (Sugarcane)</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">18-24 months</td>
                  <td className="p-3">PE Recycling</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Kraft + PLA Liner</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                  <td className="p-3">6-9 months</td>
                  <td className="p-3">Industrial Compost</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <ClickableImage 
              src="/imgs/store/barrier/1-high.webp" 
              alt="High barrier coffee packaging" 
              className="w-full h-28 object-cover rounded-lg"
              caption="High Barrier"
            />
            <ClickableImage 
              src="/imgs/store/barrier/2-clear.webp"
              alt="Medium barrier coffee packaging" 
              className="w-full h-28 object-cover rounded-lg"
              caption="Medium Barrier"
            />
            <ClickableImage 
              src="/imgs/store/barrier/3-paper.webp" 
              alt="Paper-based coffee packaging" 
              className="w-full h-28 object-cover rounded-lg"
              caption="Paper"
            />
            <ClickableImage 
              src="/imgs/seo-photos/coffee/a_coffee_bag_valve_with_kraft_pouch_1816878.webp" 
              alt="Kraft coffee bag" 
              className="w-full h-28 object-cover rounded-lg"
              caption="Kraft + Valve"
            />
          </div>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Understanding Coffee Barrier Science',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Coffee's enemies are <strong>oxygen, moisture, light, and aroma loss</strong>. Modern eco-materials address each threat while maintaining sustainability credentials.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
              <Wind className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Oxygen Barrier</h4>
              <p className="text-xs text-blue-700 mt-1">EVOH and AlOx coatings replace aluminum foil</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center border border-cyan-200">
              <Droplets className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <h4 className="font-semibold text-cyan-800">Moisture Barrier</h4>
              <p className="text-xs text-cyan-700 mt-1">PE and bio-PE provide excellent WVTR</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
              <Thermometer className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-800">Light Protection</h4>
              <p className="text-xs text-amber-700 mt-1">Metallic inks and kraft outer layers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
              <Coffee className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">Aroma Retention</h4>
              <p className="text-xs text-green-700 mt-1">Multi-layer structures seal in flavor</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Degassing Valves:</strong> All our coffee packaging is compatible with one-way degassing valves. Valves can be added to compostable, recyclable, and bio-based structures. We use both standard and biodegradable valve options.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'recommendations',
      title: 'Material Recommendations by Coffee Type',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Specialty Single Origin</h4>
              <p className="text-sm text-neutral-600 mb-3">Premium positioning, shorter shelf life acceptable, eco-conscious consumers.</p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-green-800">Recommended: TUV OK Home Compostable</p>
                <p className="text-xs text-green-700 mt-1">Aligns with premium artisan positioning</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Commercial Blends</h4>
              <p className="text-sm text-neutral-600 mb-3">Longer shelf life needed, retail distribution, price-competitive.</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-800">Recommended: Recyclable Mono-PE</p>
                <p className="text-xs text-blue-700 mt-1">Maximum barrier with wide recyclability</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Organic/Natural</h4>
              <p className="text-sm text-neutral-600 mb-3">Certification alignment, eco brand values, natural retail.</p>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-amber-800">Recommended: Kraft + PLA Compostable</p>
                <p className="text-xs text-amber-700 mt-1">Natural aesthetic matches brand values</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Carbon-Neutral Goals</h4>
              <p className="text-sm text-neutral-600 mb-3">ESG reporting, carbon footprint reduction, B-Corp aligned.</p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-purple-800">Recommended: Bio-PE (Sugarcane)</p>
                <p className="text-xs text-purple-700 mt-1">Carbon-negative production process</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Find Your Perfect Coffee Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-700 to-orange-700 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Coffee Packaging Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            Get samples of each eco-friendly material to test with your coffee. Fill test with your roast to evaluate shelf life and flavor preservation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Discuss Your Coffee
            </button>
            <Link
              to="/industry/coffee-tea"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Coffee className="h-5 w-5" />
              Coffee Industry Guide
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the best eco-friendly material for coffee packaging?",
      answer: "The best material depends on your priorities. For maximum shelf life with recyclability, choose recyclable mono-PE. For home compostability, TUV OK Home certified materials work well for specialty coffee with shorter sales cycles. For carbon footprint reduction, bio-PE from sugarcane offers identical performance to fossil PE with carbon-negative production."
    },
    {
      question: "Can compostable coffee bags match traditional barrier performance?",
      answer: "High-barrier compostable materials can achieve 12-18 month shelf life for coffee—competitive with many traditional structures. For very long shelf life requirements (24+ months), recyclable mono-materials may be more suitable."
    },
    {
      question: "Do degassing valves work with eco-friendly coffee packaging?",
      answer: "Yes, one-way degassing valves are compatible with all our eco-friendly coffee packaging materials. We offer both standard and biodegradable valve options for compostable structures."
    },
    {
      question: "What certifications should I look for in green coffee packaging?",
      answer: "Key certifications include TUV OK Home/Industrial Compost for compostable materials, How2Recycle for recyclability claims, and Braskem I'm Green for bio-PE. All should be third-party verified for credible marketing claims."
    },
    {
      question: "How does kraft paper coffee packaging compare to plastic?",
      answer: "Kraft paper with PLA liner offers a natural aesthetic and industrial compostability, but provides medium barrier protection (6-9 months shelf life). It's ideal for artisan roasters selling direct to consumers with faster turnover."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Best Materials for Green Coffee Packaging | Eco-Friendly Coffee Bags | Achieve Pack</title>
        <meta name="description" content="Compare compostable, recyclable, and bio-based coffee packaging materials. Expert guide to barrier properties, shelf life, and certifications for sustainable coffee bags." />
        <link rel="canonical" href="https://achievepack.com/topics/green-coffee-materials" />
        <meta name="keywords" content="green coffee packaging, eco-friendly coffee bags, sustainable coffee packaging materials, compostable coffee bags, recyclable coffee packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Materials for Green Coffee Packaging",
            "description": "Expert guide comparing eco-friendly materials for coffee packaging including compostable, recyclable, and bio-based options.",
            "author": { "@type": "Organization", "name": "Achieve Pack" },
            "publisher": { "@type": "Organization", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Best Materials for Green Coffee Packaging"
        description="Expert guide comparing compostable, recyclable, and bio-based materials for sustainable coffee packaging."
        keywords={['green coffee packaging', 'eco-friendly coffee bags', 'sustainable coffee materials']}
        heroTitle="Best Materials for Green Coffee Packaging"
        heroSubtitle="Barrier Science Meets Sustainability"
        introSummary="Coffee demands exceptional barrier performance. Our guide compares compostable, recyclable, and bio-based materials—matching the right eco-friendly solution to your coffee product and brand values."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />
    </>
  )
}

export default GreenCoffeeMaterialsPage
