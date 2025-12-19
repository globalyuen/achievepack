import React from 'react'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Shield, CheckCircle, Clock, TrendingUp, MessageCircle, Award } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const USACoffeePage: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Compostable Coffee Packaging for US Roasters',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>US specialty coffee roasters are under increasing pressure to adopt sustainable packaging.</strong> Consumer demand for eco-friendly products, retailer sustainability requirements, and emerging state regulations are driving a rapid shift from traditional plastic packaging to <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable alternatives</Link>.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Why US Coffee Brands Are Switching:</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• <strong>73% of consumers</strong> prefer brands with sustainable packaging (Nielsen)</li>
              <li>• <strong>Whole Foods, Sprouts, Natural Grocers</strong> increasingly require sustainable packaging</li>
              <li>• <strong>California SB 343</strong> restricts misleading environmental claims</li>
              <li>• <strong>Premium positioning</strong> – compostable packaging supports higher price points</li>
            </ul>
          </div>
          
          <p className="mt-4">
            <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> offers ASTM D6400 certified compostable coffee pouches with degassing valves, perfect for US specialty roasters who want to lead on sustainability without compromising on product protection.
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
              alt="Specialty coffee packaging pouches for US roasters" 
              className="w-full rounded-lg shadow-md"
              caption="Premium compostable coffee packaging designed for US specialty roasters"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Materials for Coffee',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable coffee packaging options are designed to preserve freshness while meeting US certification requirements:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Kraft + PLA/PBAT (Most Popular)</h4>
              <ul className="text-sm space-y-1">
                <li>• Natural kraft paper exterior</li>
                <li>• PLA/PBAT compostable lining</li>
                <li>• ASTM D6400 & EN 13432 certified</li>
                <li>• 12-month shelf life for roasted beans</li>
                <li>• Compostable degassing valve compatible</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">NatureFlex™ (Home Compostable)</h4>
              <ul className="text-sm space-y-1">
                <li>• Cellulose-based clear film</li>
                <li>• TÜV OK compost HOME certified</li>
                <li>• Breaks down in backyard compost</li>
                <li>• Ideal for farmers market brands</li>
                <li>• Premium aesthetic appeal</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Need high barrier for extended shelf life?</strong> Consider our <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable mono-PE pouches</Link> as an alternative.
          </p>
          
          {/* Technical Specs Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_pouch_technical_specs_5693348.webp" 
              alt="Coffee pouch technical specifications and barrier properties" 
              className="w-full rounded-lg shadow-md"
              caption="Technical specifications for compostable coffee pouches"
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Coffee-Specific Features',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable coffee pouches include all the features specialty roasters need:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Compostable Degassing Valves',
              'Resealable Zipper Closure',
              'High Oxygen Barrier',
              'Moisture Protection',
              'Custom Full-Color Printing',
              'Stand-Up / Flat Bottom Options',
              '8oz, 12oz, 16oz, 2lb Sizes',
              'Matte or Gloss Finish',
              'Tear Notches Available'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Popular format:</strong> <Link to="/packaging/stand-up-pouches" className="text-blue-600 hover:underline">12oz stand-up pouch with valve and zipper</Link> – perfect for retail and DTC coffee brands.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: 'US Roaster Success Story',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-500">
            <blockquote className="italic text-neutral-600 mb-4">
              "Switching to compostable packaging from Achieve Pack was a game-changer for our brand. Our customers love that they can compost the bag along with their coffee grounds. The 100-piece MOQ let us test the packaging before committing to large volumes."
            </blockquote>
            <p className="font-semibold text-neutral-800">— Small Batch Roaster, Portland, OR</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">23%</div>
              <div className="text-sm text-green-600">Increase in repeat customers</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">$0</div>
              <div className="text-sm text-blue-600">Additional marketing cost</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-amber-700">2</div>
              <div className="text-sm text-amber-600">New retail accounts won</div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline font-semibold">Read the full case study →</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
              alt="Sustainability guide for coffee roasters" 
              className="w-full rounded-lg shadow-md"
              caption="Complete sustainability guide for US coffee roasters"
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
          <p>Our compostable coffee packaging meets all relevant US certifications and state requirements:</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <span className="font-semibold">ASTM D6400</span>
                <span className="text-sm text-neutral-500 ml-2">– US industrial compostability standard</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <span className="font-semibold">EN 13432</span>
                <span className="text-sm text-neutral-500 ml-2">– European compostability standard</span>
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
      title: 'Ordering for US Coffee Brands',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Getting started with compostable coffee packaging is easy:</p>
          
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
              Shop Compostable Coffee Pouches →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Coffee Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>When choosing a compostable coffee packaging supplier for your US brand:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Verify ASTM D6400 certification</strong> – Required for legitimate compostable claims</li>
            <li><strong>Check valve compatibility</strong> – Ensure degassing valves are also compostable</li>
            <li><strong>Review barrier performance</strong> – Coffee needs OTR {'<'} 1.0 cc/m²/24hr</li>
            <li><strong>Confirm low MOQ</strong> – <Link to="/store" className="text-primary-600 hover:underline">Achieve Pack starts at 100 pieces</Link></li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 AI Search Examples:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best compostable coffee bags with valve for US specialty roasters"</li>
              <li>• "ASTM D6400 certified coffee pouch supplier with low MOQ"</li>
              <li>• "Compostable kraft coffee bags that ship to USA"</li>
              <li>• "Sustainable coffee packaging for California compliant brands"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: "Are your coffee bag degassing valves also compostable?", answer: "Yes, we offer fully compostable degassing valves that are certified to the same ASTM D6400 standard as our pouches. This means the entire package, including the valve, can be composted in industrial facilities." },
    { question: "What shelf life can I expect with compostable coffee bags?", answer: "Our kraft + PLA/PBAT compostable pouches with degassing valves provide 12-month shelf life for whole bean coffee when properly sealed. Ground coffee typically maintains quality for 6-9 months. The barrier performance is comparable to many conventional packaging options." },
    { question: "Do you offer sample packs for US coffee roasters?", answer: "Yes! We can send sample pouches to US addresses for evaluation. Our standard samples include kraft compostable pouches in 8oz, 12oz, and 16oz sizes with valves. Contact us to request samples shipped to your roastery." },
    { question: "What sizes are available for compostable coffee bags?", answer: "We offer standard sizes including 4oz, 8oz, 12oz, 16oz (1lb), and 32oz (2lb). Custom sizes are available for orders of 1,000+ pieces. Stand-up pouches and flat bottom bags are both available in compostable materials." },
    { question: "Can I get custom printing on compostable coffee bags?", answer: "Absolutely. We offer full-color custom printing on all our compostable pouches. Our design team can also help ensure your artwork includes proper compostability logos and meets California/Washington labeling requirements." }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse coffee packaging options – MOQ from 100 pieces" },
    { title: "USA Compostable Hub", url: "/usa/compostable-packaging", description: "Complete guide to compostable packaging for US brands" },
    { title: "Coffee & Tea Industry Solutions", url: "/industry/coffee-tea", description: "All packaging options for coffee roasters" },
    { title: "Coffee Roastery Case Study", url: "/case-studies/coffee-roastery", description: "See how a US roaster switched to sustainable packaging" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Most popular format for retail coffee" }
  ]

  return (
    <SEOPageLayout
      title="Compostable Coffee Packaging for US Roasters | ASTM D6400 | Achieve Pack"
      description="ASTM D6400 certified compostable coffee bags with degassing valves for US specialty roasters. Kraft paper pouches, low MOQ from 100 pieces, ships to USA in 15-20 days."
      keywords={['compostable coffee bags USA', 'compostable coffee packaging', 'ASTM D6400 coffee pouches', 'kraft paper coffee bags', 'sustainable coffee packaging', 'eco-friendly coffee bags', 'degassing valve compostable', 'specialty roaster packaging', 'low MOQ coffee bags', 'California compliant coffee packaging']}
      canonicalUrl="https://achievepack.com/usa/coffee-packaging"
      heroTitle="Compostable Coffee Packaging for US Roasters"
      heroSubtitle="ASTM D6400 certified kraft paper pouches with compostable degassing valves. Perfect for specialty roasters who want sustainable packaging without compromising freshness."
      heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      heroImageAlt="Compostable coffee packaging pouches with degassing valves for US specialty roasters"
      introSummary="Achieve Pack provides certified compostable coffee packaging designed specifically for US specialty roasters, with low MOQ, fast shipping, and full compliance with state regulations."
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Compostable Coffee Bag Samples"
      ctaDescription="Request sample pouches shipped directly to your US roastery. Our team will help you choose the right size and material for your coffee products."
      ctaButtonText="Request Samples"
    />
  )
}

export default USACoffeePage
