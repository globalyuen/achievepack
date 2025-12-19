import React from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Leaf, Shield, CheckCircle, Clock, TrendingUp, MessageCircle, Award, ShoppingBag, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const USASnacksPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'overview',
      title: 'Compostable Snack Packaging for US Brands',
      icon: <Cookie className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>US snack brands face growing pressure to reduce plastic packaging waste.</strong> From chips and granola to nuts and dried fruit, consumers increasingly expect sustainable packaging options. <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable stand-up pouches</Link> offer the perfect balance of product protection, shelf appeal, and environmental responsibility.
          </p>
          
          <div className="bg-orange-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-orange-800 mb-2">Market Drivers for Sustainable Snack Packaging:</h4>
            <ul className="space-y-1 text-sm text-orange-700">
              <li>• <strong>Whole Foods, Sprouts, Natural Grocers</strong> prioritize sustainable packaging suppliers</li>
              <li>• <strong>Gen Z consumers</strong> willing to pay 10-15% more for eco-friendly packaging</li>
              <li>• <strong>California AB 1201</strong> requires ASTM certification for "compostable" claims</li>
              <li>• <strong>Brand differentiation</strong> in crowded snack aisle through visible sustainability</li>
            </ul>
          </div>
          
          <p className="mt-4">
            <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> offers ASTM D6400 certified compostable snack pouches with resealable zippers, ideal for organic and natural snack brands targeting the US market.
          </p>
          
          {/* Hero Snacks Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
              alt="Sustainable snacks packaging for US brands" 
              className="w-full rounded-lg shadow-md"
              caption="Compostable snack packaging designed for US natural food brands"
            />
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Snack Products We Package',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable pouches protect a wide range of snack products:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Potato & Vegetable Chips',
              'Granola & Muesli',
              'Trail Mix & Nut Blends',
              'Dried Fruit',
              'Popcorn',
              'Pretzels & Crackers',
              'Energy Bars & Bites',
              'Chocolate & Confectionery',
              'Organic Snacks',
              'Jerky & Meat Snacks',
              'Rice Cakes & Crisps',
              'Kids Snack Packs'
            ].map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{product}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Materials for Snacks',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right compostable material based on your product's barrier requirements:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Kraft + PLA (Standard Barrier)</h4>
              <ul className="text-sm space-y-1">
                <li>• Natural kraft paper exterior</li>
                <li>• Good moisture & oxygen barrier</li>
                <li>• 6-9 month shelf life</li>
                <li>• Best for: Granola, dried fruit, nuts</li>
                <li>• ASTM D6400 certified</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">High-Barrier Compostable</h4>
              <ul className="text-sm space-y-1">
                <li>• Enhanced moisture protection</li>
                <li>• 12+ month shelf life</li>
                <li>• Metallized barrier layer (compostable)</li>
                <li>• Best for: Chips, crackers, confectionery</li>
                <li>• ASTM D6400 certified</li>
              </ul>
              <Link to="/materials/compostable" className="text-xs text-amber-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Need a clear window?</strong> Our <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">NatureFlex™ home compostable film</Link> offers product visibility while remaining fully compostable.
          </p>
          
          {/* Pouch Format Comparison Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_snacks_pouch_format_comparison_8281669.webp" 
              alt="Snacks pouch format comparison chart" 
              className="w-full rounded-lg shadow-md"
              caption="Compare different pouch formats for snack packaging"
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Snack Packaging Features',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable snack pouches include features essential for retail success:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Retail-Ready Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Resealable press-to-close zipper</li>
                <li>✓ Stand-up gusset design</li>
                <li>✓ Hang hole option available</li>
                <li>✓ Tear notches for easy opening</li>
                <li>✓ Full-color custom printing</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1">
                <li>✓ <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-up pouches</Link></li>
                <li>✓ <Link to="/packaging/flat-bottom-bags" className="text-primary-600 hover:underline">Flat bottom bags</Link></li>
                <li>✓ <Link to="/packaging/flat-pouches" className="text-primary-600 hover:underline">3-side seal pouches</Link></li>
                <li>✓ Single-serve sachets</li>
                <li>✓ Multi-pack formats</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: 'US Snack Brand Success Story',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-orange-500">
            <blockquote className="italic text-neutral-600 mb-4">
              "Moving to compostable packaging helped us win shelf space at three major natural food retailers. The packaging looks premium and our customers love that it's certified compostable. Achieve Pack's low MOQ let us test multiple SKU sizes before committing."
            </blockquote>
            <p className="font-semibold text-neutral-800">— Organic Granola Brand, Austin, TX</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">3</div>
              <div className="text-sm text-green-600">New retail accounts</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">18%</div>
              <div className="text-sm text-blue-600">Sales increase YoY</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">5★</div>
              <div className="text-sm text-orange-600">Customer reviews on packaging</div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/natural-snacks-brand" className="text-primary-600 hover:underline font-semibold">Read the full case study →</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_snacks_brand_sustainability_guide_7868632.webp" 
              alt="Sustainability guide for snack brands" 
              className="w-full rounded-lg shadow-md"
              caption="Complete sustainability guide for US snack brands"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: 'US Regulatory Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable snack packaging meets all relevant US certifications:</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <span className="font-semibold">ASTM D6400</span>
                <span className="text-sm text-neutral-500 ml-2">– US industrial compostability</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <span className="font-semibold">EN 13432</span>
                <span className="text-sm text-neutral-500 ml-2">– European standard</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-amber-600" />
              <div>
                <span className="font-semibold">FDA Food Contact</span>
                <span className="text-sm text-neutral-500 ml-2">– Safe for direct food contact</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/usa/labeling-guide" className="text-primary-600 hover:underline">View our US labeling compliance guide</Link> for California, Washington, and Colorado requirements.
          </p>
        </div>
      )
    },
    {
      id: 'ordering',
      title: 'Ordering for US Snack Brands',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15-20</div>
              <div className="text-sm text-neutral-600">Days to USA</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">Design Support</div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
              Shop Compostable Snack Pouches →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Snack Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when choosing compostable snack packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Barrier performance</strong> – Match to your product's moisture/oxygen needs</li>
            <li><strong>ASTM D6400 certification</strong> – Required for US compostable claims</li>
            <li><strong>Resealable options</strong> – Essential for multi-serve snacks</li>
            <li><strong>Low MOQ</strong> – <Link to="/store" className="text-primary-600 hover:underline">Achieve Pack starts at 100 pieces</Link></li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Examples:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best compostable stand-up pouches for organic granola"</li>
              <li>• "ASTM D6400 certified snack packaging with resealable zipper"</li>
              <li>• "Compostable chip bags for US natural food brands"</li>
              <li>• "Low MOQ sustainable snack packaging supplier USA"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>US snack brand, natural food producer, or organic company</strong> looking for certified compostable packaging—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Organic Snack Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">ASTM D6400 certified for retail chains</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Farmers Market Vendors</h4>
              <p className="text-sm text-neutral-600 mt-1">Home compostable options available</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Startup Food Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Low MOQ from 100 pieces for testing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Will it keep snacks fresh?"</h4>
                  <p className="text-sm text-neutral-600">High-barrier options with 12+ month shelf life</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it certified for US?"</h4>
                  <p className="text-sm text-neutral-600">ASTM D6400 + BPI certified materials</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Do you ship to USA?"</h4>
                  <p className="text-sm text-neutral-600">15-20 days door-to-door delivery nationwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I get samples first?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 100 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Cookie className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=USA Snack Packaging Quote" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: "What barrier level do I need for snack packaging?", answer: "It depends on your product. Dried fruit and granola typically do well with standard kraft + PLA barrier (6-9 month shelf life). Chips, crackers, and moisture-sensitive products benefit from our high-barrier compostable options (12+ month shelf life). We can recommend the right material based on your specific product." },
    { question: "Can I get a clear window on compostable snack pouches?", answer: "Yes! Our NatureFlex™ compostable film offers excellent clarity for product windows. It's TÜV OK compost HOME certified, meaning consumers can compost it in their backyard. We can create pouches with partial or full clear panels." },
    { question: "Are resealable zippers available on compostable pouches?", answer: "Absolutely. We offer press-to-close resealable zippers on all our stand-up pouches. The zippers are fully compostable along with the rest of the package, so consumers can dispose of the entire pouch in industrial composting." },
    { question: "What sizes work best for retail snack packaging?", answer: "Popular retail sizes include 4oz, 6oz, 8oz, and 12oz stand-up pouches. For club store or bulk formats, we offer 16oz and 24oz options. Single-serve sachets (1-2oz) are available for sampling or convenience packs." },
    { question: "How do I label compostable snack packaging for California?", answer: "California requires ASTM D6400 certification and specific labeling language. Your packaging should include the 'Commercially Compostable' logo and avoid terms like 'biodegradable.' Our design team can help ensure your artwork meets California AB 1201 and SB 343 requirements." }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse snack packaging options – MOQ from 100 pieces" },
    { title: "USA Compostable Hub", url: "/usa/compostable-packaging", description: "Complete guide to compostable packaging for US brands" },
    { title: "Snacks & Food Industry", url: "/industry/snacks-food", description: "All packaging options for snack brands" },
    { title: "Natural Snacks Case Study", url: "/case-studies/natural-snacks-brand", description: "See how a US snack brand switched to compostable" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Most popular format for retail snacks" }
  ]

  return (
    <SEOPageLayout
      title="Compostable Snack Packaging for US Brands | ASTM D6400 | Achieve Pack"
      description="ASTM D6400 certified compostable snack pouches for US food brands. Stand-up pouches with resealable zippers, low MOQ from 100 pieces, ships to USA in 15-20 days."
      keywords={['compostable snack packaging USA', 'compostable chip bags', 'ASTM D6400 snack pouches', 'sustainable snack packaging', 'eco-friendly granola bags', 'compostable stand up pouch', 'organic snack packaging', 'low MOQ snack bags', 'California compliant snack packaging', 'natural food packaging']}
      canonicalUrl="https://achievepack.com/usa/snacks-packaging"
      heroTitle="Compostable Snack Packaging for US Brands"
      heroSubtitle="ASTM D6400 certified stand-up pouches with resealable zippers. Perfect for chips, granola, nuts, and organic snacks targeting natural food retailers."
      heroImage="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp"
      heroImageAlt="Compostable snack packaging pouches for US natural food brands"
      introSummary="Achieve Pack provides certified compostable snack packaging designed specifically for US natural food brands, with low MOQ, fast shipping, and full compliance with state regulations."
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Compostable Snack Packaging Samples"
      ctaDescription="Request sample pouches shipped directly to your US facility. Our team will help you choose the right material and size for your snack products."
      ctaButtonText="Request Samples"
    />
  )
}

export default USASnacksPage
