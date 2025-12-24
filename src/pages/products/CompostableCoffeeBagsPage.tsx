import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Award, CheckCircle, Package, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableCoffeeBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: 'Certified Compostable Coffee Bags',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's compostable coffee bags</strong> are designed specifically for specialty coffee roasters who want to align their packaging with their sustainability values. Our bags meet <strong>ASTM D6400</strong> (US) and <strong>EN 13432</strong> (EU) standards, giving your brand genuine eco-credentials.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Why Roasters Choose Our Compostable Coffee Bags:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Degassing valve compatible</strong> – Fresh roasted coffee stays fresh</li>
              <li>• <strong>High barrier protection</strong> – Up to 12 months shelf life</li>
              <li>• <strong>Low MOQ from 100 pieces</strong> – Perfect for small batch roasters</li>
              <li>• <strong>Full custom printing</strong> – Digital or plate printing available</li>
              <li>• <strong>Multiple sizes</strong> – From 100g sample bags to 1kg retail sizes</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
              alt="Compostable coffee bags with degassing valve for specialty roasters" 
              className="w-full rounded-lg shadow-md"
              caption="Premium compostable coffee bags with degassing valve"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Materials for Coffee Packaging',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We offer several compostable material options specifically designed for coffee:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Kraft Paper + PLA/PBAT</h4>
              <p className="text-sm mb-2">Natural kraft exterior with compostable lining. Classic artisan aesthetic.</p>
              <ul className="text-xs space-y-1 text-amber-700">
                <li>• Medium barrier (3-6 months)</li>
                <li>• Matte natural finish</li>
                <li>• Best for: Fresh roast, direct-to-consumer</li>
                <li>• Industrial compostable certified</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">NatureFlex™ High Barrier</h4>
              <p className="text-sm mb-2">Transparent or metalised cellulose film for maximum protection.</p>
              <ul className="text-xs space-y-1 text-emerald-700">
                <li>• High barrier (6-12 months)</li>
                <li>• Clear window options</li>
                <li>• Best for: Premium coffee, retail</li>
                <li>• Home compostable certified</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">White Kraft + MetPLA</h4>
              <p className="text-sm mb-2">Clean white exterior with metalised compostable barrier.</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• Highest barrier option</li>
                <li>• Premium shelf presence</li>
                <li>• Best for: Grocery retail, longer shelf life</li>
                <li>• ASTM D6400 certified</li>
              </ul>
            </div>
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">Matte Black Compostable</h4>
              <p className="text-sm mb-2">Sleek matte black finish with full compostable structure.</p>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• Premium aesthetics</li>
                <li>• High-end brand positioning</li>
                <li>• Best for: Specialty, single-origin</li>
                <li>• BPI certified eligible</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Not sure which material?</strong> <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compare all compostable options →</Link>
          </p>

          {/* Compostable Materials Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Our Compostable Coffee Packaging Materials</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable packaging certification infographic" 
                className="w-full h-32 object-cover rounded-lg"
                caption="Industrial Compostable"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/home-compost.webp" 
                alt="Home compostable packaging - breaks down in backyard compost" 
                className="w-full h-32 object-cover rounded-lg"
                caption="Home Compostable"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp" 
                alt="Achieve Pack compostable coffee bag with eco-friendly materials" 
                className="w-full h-32 object-cover rounded-lg"
                caption="Compostable Pouch"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_composting_timeline_5months_9414148.webp" 
                alt="Composting timeline showing 5 months breakdown process" 
                className="w-full h-32 object-cover rounded-lg"
                caption="Composting Timeline"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Coffee-Specific Features',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable coffee bags include all the features specialty roasters need:</p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💨</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Compostable Degassing Valve</h4>
                <p className="text-sm">One-way valve releases CO₂ from freshly roasted beans while preventing oxygen ingress. Made from compostable materials to maintain certification.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Resealable Zipper Closure</h4>
                <p className="text-sm">Press-to-close zipper keeps coffee fresh after opening. Available in compostable materials for full end-of-life composting.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🪟</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Clear Window Option</h4>
                <p className="text-sm">Showcase your beans with a NatureFlex cellulose window. Fully home compostable unlike conventional plastic windows.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">Multiple Bag Styles</h4>
                <p className="text-sm">Stand-up pouches, flat bottom bags, side gusset bags – all available in compostable materials.</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/features/reclosure-options" className="text-primary-600 hover:underline">View all closure options →</Link>
          </p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Coffee Bag Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our compostable coffee bags carry multiple certifications for different markets:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="Seedling Logo - EN 13432 Certified" 
                className="h-16 w-auto mb-2"
                caption="EU Seedling Logo"
              />
              <span className="text-xs text-neutral-600">EU EN 13432</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable" 
                className="h-16 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs text-neutral-600">US BPI / ASTM D6400</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable" 
                className="h-16 w-auto mb-2"
                caption="Home Compostable"
              />
              <span className="text-xs text-neutral-600">Home Compost</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Certified" 
                className="h-16 w-auto mb-2"
                caption="AS5810 Australia"
              />
              <span className="text-xs text-neutral-600">AU AS5810</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Food Safety Certifications</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>FDA compliant</strong> – Safe for direct food contact</li>
              <li>• <strong>EU 10/2011 compliant</strong> – European food contact regulations</li>
              <li>• <strong>BRC certified facility</strong> – Global food safety standard</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: 'Coffee Bag Sizes & Specifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Standard sizes for coffee packaging – custom sizes also available:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Dimensions (W×H+G)</th>
                  <th className="p-3 text-left">Capacity</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Sample</td>
                  <td className="p-3">80×130+50mm</td>
                  <td className="p-3">50-100g</td>
                  <td className="p-3">Coffee samples, gift sets</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Small</td>
                  <td className="p-3">100×180+60mm</td>
                  <td className="p-3">150-250g</td>
                  <td className="p-3">Single origin, small batch</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Medium</td>
                  <td className="p-3">120×200+80mm</td>
                  <td className="p-3">250-340g</td>
                  <td className="p-3">Standard retail (12oz)</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Large</td>
                  <td className="p-3">140×230+90mm</td>
                  <td className="p-3">400-500g</td>
                  <td className="p-3">1lb bags, bulk retail</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Bulk</td>
                  <td className="p-3">160×280+100mm</td>
                  <td className="p-3">1kg</td>
                  <td className="p-3">Wholesale, food service</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Need a custom size?</strong> <button onClick={openCalendly} className="text-primary-600 hover:underline">Contact us for bespoke dimensions →</button>
          </p>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'Minimum Order & Lead Times',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">100</div>
              <div className="text-sm text-green-600">Minimum Order</div>
              <p className="text-xs mt-2 text-neutral-600">For digital printed bags</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">7-10</div>
              <div className="text-sm text-blue-600">Days Production</div>
              <p className="text-xs mt-2 text-neutral-600">After artwork approval</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">15-20</div>
              <div className="text-sm text-purple-600">Days to USA</div>
              <p className="text-xs mt-2 text-neutral-600">Door-to-door shipping</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Volume Pricing</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>100-499 pieces:</strong> Starting from $1.20/bag</li>
              <li>• <strong>500-999 pieces:</strong> Starting from $0.85/bag</li>
              <li>• <strong>1,000-4,999 pieces:</strong> Starting from $0.55/bag</li>
              <li>• <strong>5,000+ pieces:</strong> Contact for custom pricing</li>
            </ul>
            <p className="text-xs mt-2 text-neutral-600">*Prices vary by size, material, and printing requirements</p>
          </div>
        </div>
      )
    },
    {
      id: 'use-cases',
      title: 'Who Uses Our Compostable Coffee Bags',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">☕ Specialty Roasters</h4>
              <p className="text-sm">Small batch roasters wanting packaging that matches their sustainability story. Low MOQ lets you order exactly what you need.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🌱 Organic Coffee Brands</h4>
              <p className="text-sm">Certified organic roasters need packaging that reflects their commitment. Compostable bags complete the sustainable value chain.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">🏪 DTC Coffee Startups</h4>
              <p className="text-sm">E-commerce coffee brands differentiating through sustainability. Stand out in the crowded online market.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">🛒 Farmers Market Sellers</h4>
              <p className="text-sm">Local roasters selling at markets where eco-conscious consumers shop. Compostable packaging is expected.</p>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline">Read case study: How a UK roaster switched to compostable bags →</Link>
          </p>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Get Started with Compostable Coffee Bags',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready to switch to compostable?</h4>
          <p className="text-neutral-700 mb-6">
            Get a custom quote for your compostable coffee bags. Share your requirements and we'll provide options within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Browse Shop
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-200">
            <p className="text-sm text-neutral-600">
              <strong>Quick links:</strong>{' '}
              <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable Materials</Link> |{' '}
              <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee & Tea Industry</Link> |{' '}
              <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-Up Pouches</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>Compostable Coffee Bags | ASTM D6400 Certified | Low MOQ 100 pcs | Achieve Pack</title>
        <meta name="description" content="Premium compostable coffee bags with degassing valves. ASTM D6400 & EN 13432 certified. Low MOQ from 100 pieces. Perfect for specialty roasters. Fast shipping to USA." />
        <link rel="canonical" href="https://achievepack.com/products/compostable-coffee-bags" />
        <meta property="og:title" content="Compostable Coffee Bags | Certified | Low MOQ | Achieve Pack" />
        <meta property="og:description" content="Premium compostable coffee bags with degassing valves. ASTM D6400 certified. Low MOQ from 100 pieces for specialty roasters." />
        <meta property="og:url" content="https://achievepack.com/products/compostable-coffee-bags" />
        <meta property="og:type" content="product" />
        <meta name="keywords" content="compostable coffee bags, certified compostable pouches, coffee bags with degassing valve, ASTM D6400 coffee packaging, biodegradable coffee bags, eco-friendly coffee packaging, low MOQ coffee bags, specialty roaster packaging" />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Compostable Coffee Bags with Degassing Valve",
            "description": "Certified compostable coffee bags with one-way degassing valves. ASTM D6400 and EN 13432 certified for industrial composting. Available in kraft, matte, and clear options.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Achieve Pack Company Limited"
            },
            "category": "Compostable Packaging",
            "material": ["PLA", "PBAT", "Kraft Paper", "NatureFlex"],
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.55",
              "highPrice": "1.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "offerCount": "5"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Certification",
                "value": "ASTM D6400, EN 13432, BPI"
              },
              {
                "@type": "PropertyValue",
                "name": "Minimum Order",
                "value": "100 pieces"
              },
              {
                "@type": "PropertyValue",
                "name": "Lead Time",
                "value": "7-10 days production"
              }
            ]
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Compostable Coffee Bags | ASTM D6400 Certified | Achieve Pack"
        description="Premium compostable coffee bags with degassing valves. ASTM D6400 & EN 13432 certified. Low MOQ from 100 pieces. Perfect for specialty roasters."
        keywords={['compostable coffee bags', 'certified compostable pouches', 'coffee bags with degassing valve', 'ASTM D6400 coffee packaging', 'biodegradable coffee bags', 'eco-friendly coffee packaging']}
        heroTitle="Compostable Coffee Bags"
        heroSubtitle="ASTM D6400 & EN 13432 Certified | Degassing Valve | Low MOQ from 100"
        introSummary="Premium compostable coffee bags designed for specialty roasters. Our ASTM D6400 and EN 13432 certified packaging features integrated degassing valves, resealable closures, and is available from just 100 pieces minimum order."
        sections={sections}
        heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />
    </>
  )
}

export default CompostableCoffeeBagsPage
