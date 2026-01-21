import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lightbulb, Beaker, Rocket, Zap, Clock, CheckCircle, Calendar, MessageCircle, Package, Target, Sparkles, Repeat, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ProductDeveloperPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Packaging for Product Innovation',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              As an <strong>innovation-focused product developer</strong>, you bring novel products to market quickly. You need packaging partners who can match your pace and contribute creative solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Innovation Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Long lead times slow product launches</li>
                  <li>• Suppliers don't understand novel products</li>
                  <li>• Rigid packaging options limit creativity</li>
                  <li>• High MOQs prevent market testing</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Rapid prototyping capabilities</li>
                  <li>• Cutting-edge material options</li>
                  <li>• Flexible iteration cycles</li>
                  <li>• Collaborative design partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rapid-prototyping',
      title: 'Rapid Prototyping & Testing',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Don't wait months for packaging samples. <strong>Our digital printing enables rapid prototyping</strong> so you can test, iterate, and launch faster than competitors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">48hrs</div>
              <div className="text-sm text-purple-600 font-medium">Sample Turnaround</div>
              <p className="text-xs mt-2 text-neutral-600">Printed samples for evaluation</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">100</div>
              <div className="text-sm text-blue-600 font-medium">Piece MOQ</div>
              <p className="text-xs mt-2 text-neutral-600">For market testing runs</p>
            </div>
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200 text-center">
              <div className="text-3xl font-bold text-pink-700 mb-2">∞</div>
              <div className="text-sm text-pink-600 font-medium">Design Variations</div>
              <p className="text-xs mt-2 text-neutral-600">No plate costs for changes</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cutting-edge',
      title: 'Cutting-Edge Materials & Technologies',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Stay ahead with <strong>the latest sustainable packaging innovations</strong>—materials and features that differentiate your products and appeal to early adopters.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">Innovative Materials</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>PLA/PBAT Compostable Films</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>Bio-PE (Sugarcane-based)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>Mono-PE Recyclable</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>PCR Content Films</span>
                </li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">Advanced Features</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>NFC/QR Smart Packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>Augmented Reality Ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>Child-Resistant Closures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>Tamper-Evident Seals</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/surface/metalic.webp" 
                alt="Metallic finish innovative packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Metallic Finish"
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Stamp foil premium finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Stamp Foil"
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Slider Zipper"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'iteration',
      title: 'Flexible Iteration Cycles',
      icon: <Repeat className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Product development is iterative. <strong>Our digital-first approach means no plate costs</strong>—change designs between runs without penalties.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">Version Control Without Penalties</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-700">V1</div>
                <p className="text-xs text-neutral-600 mt-1">Initial market test</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">V2</div>
                <p className="text-xs text-neutral-600 mt-1">Refined messaging</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">V3</div>
                <p className="text-xs text-neutral-600 mt-1">Final production</p>
              </div>
            </div>
            <p className="text-sm text-purple-700 mt-4 text-center">
              Same price per unit across all versions—no tooling or plate changeover fees
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'collaboration',
      title: 'Collaborative Design Partnership',
      icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We're not just suppliers—we're <strong>packaging innovation partners</strong>. Our team contributes ideas and solves technical challenges alongside you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">What We Bring</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Material science expertise</li>
                <li>• Structural design creativity</li>
                <li>• Manufacturing feasibility guidance</li>
                <li>• Trend and consumer insights</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">How We Work</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Brainstorming sessions</li>
                <li>• Rapid prototyping cycles</li>
                <li>• Technical problem-solving</li>
                <li>• Market testing support</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Let\'s Innovate Together',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schedule an Innovation Session</h3>
          <p className="text-lg mb-6 opacity-90">
            Share your product concept. We'll explore packaging possibilities and create rapid prototypes for testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Innovation Session
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Explore Materials
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            Our rapid prototyping and innovation-friendly approach serves <strong>product developers across multiple industries</strong> bringing novel products to market.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Beaker className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">R&D Teams</h4>
              </div>
              <p className="text-sm text-purple-700">Rapid iteration cycles with no plate costs for testing multiple packaging concepts simultaneously.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Innovation Labs</h4>
              </div>
              <p className="text-sm text-blue-700">Cutting-edge materials and technologies for breakthrough product presentations.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Consumer Goods Companies</h4>
              </div>
              <p className="text-sm text-amber-700">Market testing support with low MOQ and fast turnaround for concept validation.</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              Customer Success: Beverage Innovation Team
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              A beverage company's innovation team tested 8 packaging concepts in 3 weeks using our digital printing. They identified the winning design through consumer research before committing to full production tooling.
            </p>
            <div className="flex gap-4 text-xs">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">8 Concepts Tested</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">3 Week Timeline</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: '市場數據 Market Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            Stay ahead with <strong>latest product innovation and packaging market data</strong> to inform your development decisions.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">67%</div>
              <div className="text-sm text-neutral-600">Products fail due to poor packaging first impression</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">4.2x</div>
              <div className="text-sm text-neutral-600">Faster time-to-market with digital prototyping</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">82%</div>
              <div className="text-sm text-neutral-600">Consumers prefer sustainable innovation</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">$48B</div>
              <div className="text-sm text-neutral-600">Global smart packaging market by 2026</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Innovation Trends 2024-2026
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-purple-700 mb-2">Emerging Technologies</h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• NFC/RFID smart packaging integration</li>
                  <li>• AR-enabled consumer experiences</li>
                  <li>• Active packaging for freshness extension</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">Material Innovation</h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• Seaweed and algae-based films</li>
                  <li>• Mushroom mycelium packaging</li>
                  <li>• Edible and dissolvable packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            Compare <strong>innovative packaging materials</strong> to select the right option for your product development needs.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Material</th>
                  <th className="p-3 text-left">Innovation Level</th>
                  <th className="p-3 text-left">Prototype Speed</th>
                  <th className="p-3 text-left">Sustainability</th>
                  <th className="p-3 text-left">Best Use Case</th>
                  <th className="p-3 text-left rounded-tr-lg">Cost Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">PLA/PBAT Compostable</td>
                  <td className="p-3"><span className="text-purple-600">★★★★★</span></td>
                  <td className="p-3"><span className="text-green-600">48hrs</span></td>
                  <td className="p-3"><span className="text-green-600">✓ Excellent</span></td>
                  <td className="p-3">Eco-conscious launches</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">Metallic/Holographic Films</td>
                  <td className="p-3"><span className="text-purple-600">★★★★</span></td>
                  <td className="p-3"><span className="text-green-600">48hrs</span></td>
                  <td className="p-3"><span className="text-yellow-600">~ Moderate</span></td>
                  <td className="p-3">Premium positioning</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">Bio-PE (Sugarcane)</td>
                  <td className="p-3"><span className="text-purple-600">★★★★</span></td>
                  <td className="p-3"><span className="text-green-600">48hrs</span></td>
                  <td className="p-3"><span className="text-green-600">✓ Good</span></td>
                  <td className="p-3">Drop-in sustainable</td>
                  <td className="p-3">$$</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">Smart/NFC Enabled</td>
                  <td className="p-3"><span className="text-purple-600">★★★★★</span></td>
                  <td className="p-3"><span className="text-amber-600">1-2 weeks</span></td>
                  <td className="p-3"><span className="text-yellow-600">~ Variable</span></td>
                  <td className="p-3">Consumer engagement</td>
                  <td className="p-3">$$$$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Expert Selection Advice
            </h4>
            <p className="text-sm text-purple-700">
              For rapid concept testing: Start with <strong>standard sustainable materials</strong> to validate the concept, then upgrade to premium or smart materials for production. Our digital printing allows easy material switches between prototype iterations.
            </p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How quickly can I get packaging prototypes?",
      answer: "We offer 48-hour turnaround on printed samples for rapid concept evaluation. Full production runs start at 2-3 weeks, but we can expedite to 7-10 days for urgent launches."
    },
    {
      question: "Can I test multiple design variations?",
      answer: "Absolutely. Digital printing means no plate costs—you can produce 5, 10, or more design variations in the same run for A/B testing without extra setup fees."
    },
    {
      question: "What's the minimum order for market testing?",
      answer: "Just 100 pieces minimum. This allows you to test packaging concepts at trade shows, focus groups, or limited retail pilots without large inventory commitments."
    },
    {
      question: "Do you support novel product formats?",
      answer: "Yes. We've developed packaging for unconventional products across food, beverage, supplements, and consumer goods. Our team loves solving new technical challenges."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Innovation Packaging | Rapid Prototyping | Product Development | Achieve Pack</title>
        <meta name="description" content="Packaging for product innovators. Rapid prototyping in 48 hours, cutting-edge materials, flexible iteration with no plate costs. 100 piece MOQ for market testing." />
        <link rel="canonical" href="https://achievepack.com/solutions/product-developer" />
        <meta name="keywords" content="innovation packaging, rapid prototyping, product development packaging, low MOQ testing, flexible packaging design, cutting-edge materials" />
      </Helmet>

      <SEOPageLayout
        title="Innovation Packaging | Rapid Prototyping | Product Development"
        description="Packaging for product innovators. Rapid prototyping in 48 hours, cutting-edge materials, flexible iteration with no plate costs."
        keywords={['innovation packaging', 'rapid prototyping', 'product development packaging', 'low MOQ testing']}
        heroTitle="Packaging for Product Innovators"
        heroSubtitle="48hr Prototypes | Cutting-Edge Materials | No Plate Costs"
        introSummary="Bring innovative products to market faster with packaging that matches your pace. Rapid prototyping, cutting-edge sustainable materials, and flexible iteration cycles."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_digital_printing_customization_2717640.webp"
                heroImageAlt="Digital printing customization for product innovation"
      />
    </>
  )
}

export default ProductDeveloperPage
