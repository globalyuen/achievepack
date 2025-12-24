import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Package, Leaf, Award, CheckCircle, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableStandUpPouchesPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: 'Certified Compostable Stand-Up Pouches',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's compostable stand-up pouches</strong> offer the shelf presence and functionality of conventional flexible packaging with genuine end-of-life sustainability. Certified to <strong>ASTM D6400</strong>, <strong>EN 13432</strong>, and home compostable standards.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Why Brands Choose Compostable Stand-Up Pouches:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Shelf stability</strong> – Stand upright for premium retail display</li>
              <li>• <strong>Multiple barrier options</strong> – Low, medium, and high barrier available</li>
              <li>• <strong>Fully resealable</strong> – Zipper closures for consumer convenience</li>
              <li>• <strong>Low MOQ from 100 pieces</strong> – Start small, scale as you grow</li>
              <li>• <strong>Custom printing</strong> – Full color digital or plate printing</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
              alt="Compostable stand-up pouches for food and beverage" 
              className="w-full rounded-lg shadow-md"
              caption="Premium compostable stand-up pouches with custom printing"
            />
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Applications for Compostable Stand-Up Pouches',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Compostable stand-up pouches are ideal for:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50 text-center">
              <span className="text-3xl mb-2 block">☕</span>
              <h4 className="font-semibold text-amber-800">Coffee & Tea</h4>
              <p className="text-xs mt-1 text-amber-700">With degassing valves for fresh roast</p>
              <Link to="/products/compostable-coffee-bags" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50 text-center">
              <span className="text-3xl mb-2 block">🥜</span>
              <h4 className="font-semibold text-green-800">Snacks & Nuts</h4>
              <p className="text-xs mt-1 text-green-700">Granola, trail mix, dried fruit</p>
              <Link to="/industry/snacks-food" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50 text-center">
              <span className="text-3xl mb-2 block">🍫</span>
              <h4 className="font-semibold text-blue-800">Confectionery</h4>
              <p className="text-xs mt-1 text-blue-700">Chocolate, candy, baked goods</p>
              <Link to="/case-studies/chocolate-brand" className="text-xs text-primary-600 hover:underline mt-2 block">See case study →</Link>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50 text-center">
              <span className="text-3xl mb-2 block">💪</span>
              <h4 className="font-semibold text-purple-800">Supplements</h4>
              <p className="text-xs mt-1 text-purple-700">Protein powder, superfoods</p>
              <Link to="/industry/supplements-powders" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-orange-200 rounded-lg p-4 bg-orange-50/50 text-center">
              <span className="text-3xl mb-2 block">🐕</span>
              <h4 className="font-semibold text-orange-800">Pet Treats</h4>
              <p className="text-xs mt-1 text-orange-700">Dog treats, cat treats, bird food</p>
              <Link to="/industry/pet-food" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-pink-200 rounded-lg p-4 bg-pink-50/50 text-center">
              <span className="text-3xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-pink-800">Herbs & Spices</h4>
              <p className="text-xs mt-1 text-pink-700">Dried herbs, seasoning blends</p>
              <Link to="/packaging/stand-up-pouches" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right compostable structure for your product:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Material</th>
                  <th className="p-3 text-left">Barrier Level</th>
                  <th className="p-3 text-left">Shelf Life</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Certification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Kraft + PLA</td>
                  <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Low</span></td>
                  <td className="p-3">1-3 months</td>
                  <td className="p-3">Baked goods, samples</td>
                  <td className="p-3">EN 13432</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Kraft + PBAT/PLA</td>
                  <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Medium</span></td>
                  <td className="p-3">3-6 months</td>
                  <td className="p-3">Coffee, snacks, herbs</td>
                  <td className="p-3">ASTM D6400</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">NatureFlex™</td>
                  <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Medium-High</span></td>
                  <td className="p-3">6-12 months</td>
                  <td className="p-3">Premium food, retail</td>
                  <td className="p-3">Home Compost</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">MetPLA Triplex</td>
                  <td className="p-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">High</span></td>
                  <td className="p-3">12-18 months</td>
                  <td className="p-3">Coffee, supplements</td>
                  <td className="p-3">ASTM D6400</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/materials/compostable" className="text-primary-600 hover:underline">View full compostable materials guide →</Link>
          </p>
        </div>
      )
    },
    {
      id: 'sizes',
      title: 'Stand-Up Pouch Sizes',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Standard sizes available – custom dimensions on request:</p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">50g</div>
              <p className="text-xs mt-1">80×130+50mm</p>
              <p className="text-xs text-neutral-500">Sample, single serve</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">100g</div>
              <p className="text-xs mt-1">100×180+60mm</p>
              <p className="text-xs text-neutral-500">Small retail</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">250g</div>
              <p className="text-xs mt-1">120×200+80mm</p>
              <p className="text-xs text-neutral-500">Standard retail</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">500g</div>
              <p className="text-xs mt-1">140×230+90mm</p>
              <p className="text-xs text-neutral-500">Large retail</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Custom Sizes Available</h4>
            <p className="text-sm text-blue-700">Need a specific size? We can create custom dimensions to fit your product perfectly. Minimum order 500 pieces for custom sizes.</p>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Certifications & Compliance',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="EN 13432 Seedling Logo" 
                className="h-14 w-auto mb-2"
                caption="EU Seedling"
              />
              <span className="text-xs font-semibold text-neutral-800">EN 13432</span>
              <span className="text-xs text-neutral-500">EU Industrial</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified" 
                className="h-14 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs font-semibold text-neutral-800">ASTM D6400</span>
              <span className="text-xs text-neutral-500">US Industrial</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="Home Compostable" 
                className="h-14 w-auto mb-2"
                caption="Home Compost"
              />
              <span className="text-xs font-semibold text-neutral-800">OK Home</span>
              <span className="text-xs text-neutral-500">Backyard</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="AS5810 Australia" 
                className="h-14 w-auto mb-2"
                caption="AS5810"
              />
              <span className="text-xs font-semibold text-neutral-800">AS5810</span>
              <span className="text-xs text-neutral-500">Australia</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Food Safety Certified</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✓ FDA compliant for direct food contact</li>
              <li>✓ EU 10/2011 food contact materials</li>
              <li>✓ BRC AA Grade certified facility</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'Ordering & Lead Times',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">100</div>
              <div className="text-sm text-green-600 font-medium">Minimum Order</div>
              <p className="text-xs mt-2 text-neutral-600">Digital print pouches</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">7-10</div>
              <div className="text-sm text-blue-600 font-medium">Days Production</div>
              <p className="text-xs mt-2 text-neutral-600">After artwork approval</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">3-5</div>
              <div className="text-sm text-purple-600 font-medium">Days Shipping</div>
              <p className="text-xs mt-2 text-neutral-600">Express to USA/EU</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold text-neutral-800 mb-2">Volume Pricing:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">100-499</div>
                <div className="text-neutral-500">from $0.95/pc</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">500-999</div>
                <div className="text-neutral-500">from $0.65/pc</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">1,000-4,999</div>
                <div className="text-neutral-500">from $0.45/pc</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">5,000+</div>
                <div className="text-neutral-500">Custom quote</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Get Your Compostable Stand-Up Pouches',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready to make the sustainable switch?</h4>
          <p className="text-neutral-700 mb-6">
            Get a custom quote for compostable stand-up pouches. Our team will help you choose the right material and size for your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-200">
            <p className="text-sm text-neutral-600">
              <strong>Related:</strong>{' '}
              <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">Coffee Bags</Link> |{' '}
              <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable Materials</Link> |{' '}
              <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">All Stand-Up Pouches</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>Compostable Stand-Up Pouches | ASTM D6400 Certified | Low MOQ | Achieve Pack</title>
        <meta name="description" content="Certified compostable stand-up pouches for food and beverages. ASTM D6400 & EN 13432 certified. Resealable, custom printed, low MOQ from 100 pieces. Home compostable options." />
        <link rel="canonical" href="https://achievepack.com/products/compostable-stand-up-pouches" />
        <meta property="og:title" content="Compostable Stand-Up Pouches | Certified | Achieve Pack" />
        <meta property="og:description" content="Certified compostable stand-up pouches. ASTM D6400 certified. Low MOQ from 100 pieces. Custom printing available." />
        <meta property="og:url" content="https://achievepack.com/products/compostable-stand-up-pouches" />
        <meta name="keywords" content="compostable stand-up pouches, certified compostable pouches, biodegradable food pouches, ASTM D6400 pouches, EN 13432 packaging, home compostable pouches, eco-friendly stand-up bags, sustainable food packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Compostable Stand-Up Pouches",
            "description": "Certified compostable stand-up pouches for food and beverages. Available in multiple sizes with resealable zipper.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" },
            "category": "Compostable Packaging",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.45",
              "highPrice": "1.20",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Compostable Stand-Up Pouches | Certified Eco Packaging | Achieve Pack"
        description="Premium compostable stand-up pouches with resealable zippers. ASTM D6400 & EN 13432 certified. Custom printed from 100 pieces MOQ."
        keywords={['compostable stand-up pouches', 'certified compostable packaging', 'resealable eco pouches', 'biodegradable stand up bags', 'custom printed compostable bags']}
        heroTitle="Compostable Stand-Up Pouches"
        heroSubtitle="ASTM D6400 & EN 13432 Certified | Resealable | Custom Printed | Low MOQ"
        introSummary="Certified compostable stand-up pouches perfect for snacks, coffee, tea, and dry goods. Our eco-friendly bags feature resealable zippers and are available with custom printing from just 100 pieces."
        sections={sections}
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp"
      />
    </>
  )
}

export default CompostableStandUpPouchesPage
