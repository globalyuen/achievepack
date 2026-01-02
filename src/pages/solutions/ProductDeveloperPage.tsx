import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lightbulb, Beaker, Rocket, Zap, Clock, CheckCircle, Calendar, MessageCircle, Package, Target, Sparkles, Repeat } from 'lucide-react'
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
