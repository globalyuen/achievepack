import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cookie, Leaf, Package, BarChart3, CheckCircle, Calendar, MessageCircle, Award, Target, Shield, FileCheck, Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const SnackBrandManagerPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Snack Brand Sustainability Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border border-lime-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              As a <strong>brand manager for organic snacks</strong>, you're championing sustainability while managing cost pressures and supply chain complexity. You need packaging that supports marketing claims and performs across retail channels.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Internal Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Balancing cost with sustainability</li>
                  <li>• Multiple product lines/sizes</li>
                  <li>• Retail distribution requirements</li>
                  <li>• Documenting environmental claims</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Verified sustainability credentials</li>
                  <li>• Cost-effective at scale</li>
                  <li>• Consistent supply chain</li>
                  <li>• Documentation for marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multi-product',
      title: 'Solutions Across Your Product Range',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Snack portfolios are complex—different products, sizes, and retail channels. <strong>We provide unified sustainable packaging</strong> that works across your entire product range.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Cookie className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">Chips & Crisps</h4>
              <p className="text-xs text-neutral-600 mt-2">High-barrier protection, nitrogen flush compatible, stand-up display</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Package className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">Granola & Bars</h4>
              <p className="text-xs text-neutral-600 mt-2">Moisture barrier, resealable zipper, portion control options</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">Nuts & Seeds</h4>
              <p className="text-xs text-neutral-600 mt-2">Oxygen barrier, freshness protection, retail + bulk sizes</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_healthy_protein_bars_achieve_pack_8282018.webp" 
                alt="Organic snack bar packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Protein Bars"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up snack pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Stand-Up Pouch"
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper for snacks" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Slider Zipper"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable snack packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability-claims',
      title: 'Support Your Marketing Claims',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Marketing teams need proof. <strong>We provide complete documentation</strong> for packaging sustainability claims—certifications, lifecycle data, and approved messaging.
          </p>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">What We Provide for Marketing</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">Certifications</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• ASTM D6400 / EN 13432 compostable</li>
                  <li>• How2Recycle labeling approval</li>
                  <li>• PCR content verification</li>
                  <li>• Bio-based content certification</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">Messaging Support</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Approved claim language</li>
                  <li>• Certification logos (high-res)</li>
                  <li>• Consumer disposal instructions</li>
                  <li>• Environmental impact data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-performance',
      title: 'Balancing Cost & Sustainability',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Sustainability doesn't have to break the budget. <strong>We offer tiered options</strong> that let you choose the right balance of environmental credentials and cost for each product line.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">Option</th>
                  <th className="p-3 text-left">Sustainability</th>
                  <th className="p-3 text-left">Cost</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Certified Compostable</td>
                  <td className="p-3"><span className="text-green-600">★★★★★</span></td>
                  <td className="p-3">Premium</td>
                  <td className="p-3">Flagship organic lines</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Recyclable Mono-PE</td>
                  <td className="p-3"><span className="text-green-600">★★★★</span></td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">Mainstream products</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">PCR Content</td>
                  <td className="p-3"><span className="text-green-600">★★★</span></td>
                  <td className="p-3">Competitive</td>
                  <td className="p-3">Budget-conscious lines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'retail-ready',
      title: 'Retail-Ready Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Retail buyers have specific requirements. <strong>Our packaging meets major retailer standards</strong> for shelf presence, logistics, and sustainability commitments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Shelf Performance</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Stand-up display</li>
                <li>• Hang holes for pegs</li>
                <li>• Clear brand visibility</li>
                <li>• Multi-pack configurations</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Logistics</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Case pack efficiency</li>
                <li>• Pallet optimization</li>
                <li>• Barcode compatibility</li>
                <li>• Shelf-life labeling</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Retailer Requirements</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Whole Foods standards</li>
                <li>• Sprouts guidelines</li>
                <li>• Natural grocers specs</li>
                <li>• Amazon FBA ready</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supplier-partnership',
      title: 'Long-Term Supplier Partnership',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Brand managers need reliable suppliers. <strong>We build long-term partnerships</strong> with consistent pricing, priority production, and proactive innovation updates.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Partnership Benefits</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Volume Pricing</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Priority Production</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Blanket Orders</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">New Material Updates</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Dedicated Account Manager</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Partner on Your Sustainability Journey',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-600 to-lime-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schedule a Portfolio Review</h3>
          <p className="text-lg mb-6 opacity-90">
            Discuss your product range and sustainability goals. We'll recommend options for each product line with documentation for marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Portfolio Review
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Leaf className="h-5 w-5" />
              Explore Materials
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can the same supplier handle our entire product range?",
      answer: "Yes. We work with snack brands across chips, granola, nuts, bars, and more. Unified sourcing simplifies your supply chain and ensures consistent sustainability standards across all products."
    },
    {
      question: "What documentation do you provide for marketing claims?",
      answer: "We provide certification certificates, approved claim language, high-resolution certification logos, consumer disposal instructions, and environmental impact data—everything your marketing team needs."
    },
    {
      question: "How do you balance cost with sustainability?",
      answer: "We offer tiered options: certified compostable for flagship lines, recyclable for mainstream products, and PCR content for budget-conscious lines. You choose the right balance for each product."
    },
    {
      question: "Do you meet natural/organic retailer requirements?",
      answer: "Yes. Our sustainable packaging meets standards for Whole Foods, Sprouts, Natural Grocers, and other natural/organic retailers. We can help you navigate specific retailer requirements."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Snack Brand Packaging | Organic Snack Pouches | Sustainable | Achieve Pack</title>
        <meta name="description" content="Sustainable packaging for organic snack brands. Multi-product solutions, verified sustainability claims, retail-ready design. Perfect for chips, granola, nuts, and bars." />
        <link rel="canonical" href="https://achievepack.com/solutions/snack-brand-manager" />
        <meta name="keywords" content="snack brand packaging, organic snack pouches, sustainable snack packaging, compostable chip bags, granola packaging, nut packaging" />
      </Helmet>

      <SEOPageLayout
        title="Snack Brand Packaging | Multi-Product Sustainable Solutions"
        description="Sustainable packaging for organic snack brands. Multi-product solutions with verified sustainability claims."
        keywords={['snack brand packaging', 'organic snack pouches', 'sustainable snack packaging', 'compostable chip bags']}
        heroTitle="Snack Brand Packaging Solutions"
        heroSubtitle="Multi-Product Range | Verified Claims | Retail-Ready"
        introSummary="Transition your snack portfolio to sustainable packaging. Solutions for chips, granola, nuts, and bars—with documentation to support your marketing claims."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/snack/a_healthy_protein_bars_achieve_pack_8282018.webp"
      />
    </>
  )
}

export default SnackBrandManagerPage
