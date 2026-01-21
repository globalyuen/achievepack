import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcoFriendlyFoodPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Food Brand Sustainability Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Food brands face mounting pressure to adopt <strong>eco-friendly packaging</strong> while maintaining product freshness, shelf life, and cost efficiency. Finding the right sustainable packaging partner can transform your brand's environmental impact.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">Common Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Maintaining barrier properties with eco materials</li>
                  <li>• Navigating confusing certifications</li>
                  <li>• High MOQs limiting material testing</li>
                  <li>• Greenwashing concerns from unverified claims</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Third-party certified materials</li>
                  <li>• Food-safe barrier protection</li>
                  <li>• Low MOQ for testing options</li>
                  <li>• Clear end-of-life pathways</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-options',
      title: 'Sustainable Material Options for Food',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Choose from <strong>certified eco-friendly materials</strong> designed specifically for food packaging requirements—each with distinct benefits and ideal applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">Certified Compostable</h4>
              <p className="text-sm text-green-700">TUV OK Home & Industrial certified. Breaks down in 90-180 days. Ideal for organic, natural, and premium brands.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Certifications: EN13432, ASTM D6400 →</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable Mono-PE</h4>
              <p className="text-sm text-blue-700">Single-material structure, fully recyclable in PE streams. Store drop-off compatible. Great for mainstream food brands.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">How2Recycle verified →</span>
            </Link>
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-5 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">Bio-Based PE</h4>
              <p className="text-sm text-amber-700">Sugarcane-derived, carbon-negative production. Identical performance to fossil PE. Braskem I'm Green certified.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Reduces carbon footprint →</span>
            </Link>
            <Link to="/materials/pcr" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">PCR Content</h4>
              <p className="text-sm text-purple-700">30-100% post-consumer recycled plastic. FDA food-safe approved. Reduces virgin plastic use.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Circular economy ready →</span>
            </Link>
          </div>
          
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable packaging for food brands" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Recyclable"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/Bio-PE.webp" 
                alt="Bio-based food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Bio-PE"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/PCR.webp" 
                alt="PCR food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="PCR"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-categories',
      title: 'Solutions by Food Category',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Different food products require different barrier levels and packaging formats. <strong>We match materials to your specific product requirements.</strong>
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Coffee & Tea</h4>
              <p className="text-sm text-neutral-600">High barrier, degassing valves, oxygen protection. Flat bottom and side gusset options.</p>
              <Link to="/industry/coffee-tea" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Snacks & Chips</h4>
              <p className="text-sm text-neutral-600">Nitrogen-flush compatible, moisture barrier, stand-up pouches for shelf display.</p>
              <Link to="/industry/snacks-food" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Baby Food</h4>
              <p className="text-sm text-neutral-600">FDA/EFSA compliant, BPA-free, spout pouches and squeeze formats.</p>
              <Link to="/industry/baby-food" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Pet Food & Treats</h4>
              <p className="text-sm text-neutral-600">Heavy-duty zippers, resealable, puncture-resistant for hard treats.</p>
              <Link to="/industry/pet-food" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Supplements & Powders</h4>
              <p className="text-sm text-neutral-600">Moisture barrier, child-resistant options, portion control sachets.</p>
              <Link to="/industry/supplements-powders" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">Frozen Foods</h4>
              <p className="text-sm text-neutral-600">Freeze-thaw stable, -20°C to +40°C temperature range.</p>
              <Link to="/industry/frozen-food" className="text-xs text-primary-600 mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Third-Party Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            All environmental claims are backed by <strong>internationally recognized certifications</strong>—the documentation you need for marketing and compliance.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">TUV OK Home</h4>
              <p className="text-xs text-neutral-600 mt-1">Home Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h4 className="font-semibold text-neutral-800">EN 13432</h4>
              <p className="text-xs text-neutral-600 mt-1">EU Industrial Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🇺🇸</div>
              <h4 className="font-semibold text-neutral-800">ASTM D6400</h4>
              <p className="text-xs text-neutral-600 mt-1">US Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">How2Recycle</h4>
              <p className="text-xs text-neutral-600 mt-1">Recyclability Verified</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Food Safety:</strong> All materials are BRC certified, FDA compliant, and EU food-contact approved. We provide full documentation for audits and retailer requirements.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'why-achieve-pack',
      title: 'Why Food Brands Choose Achieve Pack',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Low MOQ</h4>
              <p className="text-sm text-neutral-600 mt-2">Start from 100 pieces. Test materials before committing to large orders.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Fast Turnaround</h4>
              <p className="text-sm text-neutral-600 mt-2">Digital printing in 10-15 days. Rush orders available for urgent needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Global Compliance</h4>
              <p className="text-sm text-neutral-600 mt-2">US, EU, UK, AU/NZ compliant. Single supplier for all markets.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Start Your Sustainable Packaging Journey',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Free Material Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            Tell us about your food product. We'll recommend the best eco-friendly materials and send samples for evaluation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Order Sample Pack
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Explore how different industries leverageEco-friendlyfoodPackagingenhance brand value。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Organic Health Foods</h4>
              </div>
              <p className="text-sm text-green-700">Organic brands use compostable packaging to reinforce natural positioning, increasing consumer approval by 40%。</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Retail Supermarket Chains</h4>
              </div>
              <p className="text-sm text-blue-700">Large RetailersrequirementsRecyclablePackaging，meetsEPRregulations and reduces plastic tax burden。</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Premium Specialty Foods</h4>
              </div>
              <p className="text-sm text-purple-700">Premium food brands adopt bio-based materials to demonstrate ESG commitment, attracting eco-conscious consumers。</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800"><strong>Success Story: </strong>AOrganic Snack BrandsswitchedusedTUVCertificationcanCompostablePackagingAfter，inWhole Foodssalesgrowth35%，Brandfavorabilityimprove28%。</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: 'Market Data & Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">The eco-friendly food packaging market continues rapid growth.。</p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600">73%</div>
              <p className="text-sm text-neutral-600 mt-1">of consumers willing to pay premium for eco packaging</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600">9.2%</div>
              <p className="text-sm text-neutral-600 mt-1">sustainable packaging market CAGR</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <p className="text-sm text-neutral-600 mt-1">of retailers have set packaging sustainability goals</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600">2027</div>
              <p className="text-sm text-neutral-600 mt-1">EU comprehensive packaging regulation effective</p>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-2">Market Trend Analysis</h4>
            <p className="text-sm text-neutral-600">The food industry is undergoing a packaging revolution. Consumers are increasingly sensitive to greenwashing and demand third-party certification. Brands with clear eco-packaging strategies gain significant competitive advantage.</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">CompareDifferentEco-friendlyMaterialproperties，choosechoosemaximumsuitableSuitableYoufoodPackaging Option。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="p-3 text-left text-sm">Material Type</th>
                  <th className="p-3 text-left text-sm">Barrier</th>
                  <th className="p-3 text-left text-sm">Shelf Life</th>
                  <th className="p-3 text-left text-sm">Best For</th>
                  <th className="p-3 text-left text-sm">Price Range</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Compostable materials</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium-High</span></td>
                  <td className="p-3">12-18 months</td>
                  <td className="p-3">Organic snacks, natural foods</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Recyclable Mono-PE</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">18-24 months</td>
                  <td className="p-3">Chips, nuts, crackers</td>
                  <td className="p-3">$$</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Bio-Based PE</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">18-24 months</td>
                  <td className="p-3">Mainstream food brands</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">PCR Recycled Plastic</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">High</span></td>
                  <td className="p-3">18-24 months</td>
                  <td className="p-3">Mass market foods</td>
                  <td className="p-3">$$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-800"><strong>Expert Recommendation：</strong>choosechooseEco-friendlyfoodPackagingwhen，first considerProductbarrierRequirementsandShelf Liferequirements，then evaluatetargetMarketrecycling infrastructureandregulationsrequirements，maximumAfterbalanceCostwithBrandpositioning。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What eco-friendly packaging options work best for food products?",
      answer: "For food products, we recommend certified compostable (TUV OK Home, EN13432) for organic brands, recyclable mono-PE for mainstream products, bio-PE for carbon footprint reduction, and PCR for circular economy alignment. The best choice depends on your product's barrier requirements, shelf life, and target market regulations."
    },
    {
      question: "Are your sustainable packaging materials food-safe?",
      answer: "Yes, all our eco-friendly materials are FDA compliant, EU food-contact approved, and manufactured in BRC-certified facilities. We provide full documentation including migration testing reports and certificates of conformity for food safety audits."
    },
    {
      question: "What is the minimum order for eco-friendly food packaging?",
      answer: "Our minimum order is just 100 pieces for digitally printed pouches. This allows food brands to test different sustainable materials before committing to larger production runs. Stock eco pouches are available with no minimum for sampling."
    },
    {
      question: "How do compostable pouches perform compared to traditional plastic?",
      answer: "Modern compostable pouches offer comparable barrier properties to traditional materials. We offer high-barrier compostable options for oxygen-sensitive products like coffee and snacks. While shelf life may be slightly shorter, most food products perform well with 12-18 month stability."
    },
    {
      question: "Can you help with packaging compliance for different countries?",
      answer: "Yes, we specialize in multi-market compliance. Our materials meet US (FDA, ASTM D6400), EU (EFSA, EN 13432), UK (Plastic Packaging Tax), and Australia/NZ (FSANZ, AS5810) requirements. We provide documentation for each market."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Eco-Friendly Packaging Solutions for Food Brands | Achieve Pack</title>
        <meta name="description" content="Certified sustainable packaging for food brands. Compostable, recyclable, and bio-based pouches with food-safe certifications. Low MOQ from 100 pieces. FDA, EU compliant." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-friendly-food-packaging" />
        <meta name="keywords" content="eco-friendly food packaging, sustainable food pouches, compostable food bags, recyclable food packaging, bio-based packaging, food brand packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Eco-Friendly Food Packaging Solutions",
            "description": "Certified sustainable packaging solutions for food brands including compostable, recyclable, and bio-based materials.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" },
            "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Eco-Friendly Food Packaging",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Compostable Food Pouches" }},
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Recyclable Mono-PE Bags" }},
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bio-Based Packaging" }}
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Eco-Friendly Packaging Solutions for Food Brands"
        description="Certified sustainable packaging for food brands. Compostable, recyclable, and bio-based options with full compliance documentation."
        keywords={['eco-friendly food packaging', 'sustainable food pouches', 'compostable food bags', 'food brand packaging']}
        heroTitle="Eco-Friendly Packaging for Food Brands"
        heroSubtitle="Certified Sustainable | Food-Safe | Low MOQ from 100 Pieces"
        introSummary="Transform your food brand with certified eco-friendly packaging. Choose from compostable, recyclable, and bio-based materials—all food-safe and compliant with international regulations."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      />
    </>
  )
}

export default EcoFriendlyFoodPackagingPage
