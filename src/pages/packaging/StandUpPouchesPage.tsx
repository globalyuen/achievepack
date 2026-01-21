import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const StandUpPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.standUpPouches'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>food brand, snack company, coffee roaster, or pet treat maker</strong> looking for flexible packaging that stands out on shelves—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Retail & DTC Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Need eye-catching shelf presence with premium finishes and resealable closures</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">E-commerce Sellers</h4>
              <p className="text-sm text-neutral-600 mt-1">Want lightweight, durable pouches that reduce shipping costs and damage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Small Batch Producers</h4>
              <p className="text-sm text-neutral-600 mt-1">Need low MOQ (500 pieces) with custom printing and quick turnaround</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What is a Stand-Up Pouch?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A stand-up pouch (SUP) is a flexible packaging format with a bottom gusset that allows the bag to stand upright on retail shelves.</strong> This popular format combines the cost efficiency of flexible packaging with excellent shelf presence and consumer convenience.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Benefits of Stand-Up Pouches:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ 75% less material than rigid containers (source: Flexible Packaging Association)</li>
              <li>✓ Reduces shipping costs by up to 60% due to lighter weight</li>
              <li>✓ 360° printable surface for maximum brand visibility</li>
              <li>✓ Resealable options extend product freshness</li>
              <li>✓ Available in compostable and recyclable materials</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: 'Types of Stand-Up Pouches',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We offer various stand-up pouch configurations to meet different product requirements:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Standard Stand-Up Pouch</h4>
              <p className="text-sm text-neutral-600">Basic SUP with bottom gusset. Most economical option, suitable for non-resealable applications.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: single-use products, samples, sachets</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Zipper</h4>
              <p className="text-sm text-neutral-600">Press-to-close zipper for resealability. Most popular format for food products.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: snacks, coffee, pet treats, cereals</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Slider</h4>
              <p className="text-sm text-neutral-600">Easy slider closure for premium products. One-hand opening and closing.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: cheese, deli, premium snacks</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Spout</h4>
              <p className="text-sm text-neutral-600">Pour spout for liquids and viscous products. Cap included.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: sauces, baby food, beverages</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Valve</h4>
              <p className="text-sm text-neutral-600">One-way degassing valve for freshly roasted coffee.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: coffee beans, ground coffee</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Window</h4>
              <p className="text-sm text-neutral-600">Clear window panel to showcase product contents.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: granola, nuts, pasta, candy</p>
            </div>
          </div>
          
          {/* K-Seal Feature Link */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 border border-primary-200 rounded-xl p-5 mt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-shrink-0">
                <ClickableImage
                  src="/imgs/pouch-shape/k-seal/hero.webp"
                  alt="K-seal bottom stand up pouch for heavy products"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-primary-800 text-lg mb-2">Need Heavy-Duty Packaging? Try K-Seal Bottom</h4>
                <p className="text-sm text-neutral-700 mb-3">
                  K-seal stand-up pouches provide superior stability for heavier products. The diagonal bottom seal creates more internal volume and a cleaner shelf presence for dense items like pet food, grains, and powders.
                </p>
                <Link to="/knowledge/k-seal-stand-up-pouches" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  Learn about K-Seal Pouches
                  <Package className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Sustainable Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from our range of eco-friendly materials for your stand-up pouches:</p>
          
          <div className="space-y-4 mt-4">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4">
              <h4 className="font-semibold text-primary-800">Certified Compostable</h4>
              <p className="text-sm mt-1">Kraft paper + PLA inner layer. Certified EN 13432 and ASTM D6400. Breaks down in 90-180 days in commercial composting.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800">Recyclable Mono-PE</h4>
              <p className="text-sm mt-1">Single-material polyethylene structure. Accepted in store drop-off and some curbside recycling programs.</p>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
              <h4 className="font-semibold text-emerald-800">Recyclable Mono-PP</h4>
              <p className="text-sm mt-1">Single-material polypropylene. Superior heat resistance, good for microwaveable applications.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <h4 className="font-semibold text-amber-800">PCR Content</h4>
              <p className="text-sm mt-1">Contains 30-50% post-consumer recycled plastic. Reduces virgin plastic use while maintaining performance.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Customization Options',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Customize your stand-up pouches with these features:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Resealable zipper',
              'Slider closure',
              'Tear notch',
              'Hang hole (euro slot)',
              'Clear window',
              'Matte/gloss finish',
              'Spot UV coating',
              'Embossing/debossing',
              'Soft-touch lamination',
              'Metallic foiling',
              'Holographic effects',
              'QR code printing'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg text-sm">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
          
          {/* Closure Options Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Closure Options for Stand-Up Pouches</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/closure/normal-zipper.webp" 
                alt="Standard press-to-close zipper for resealable packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Standard Zipper"
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper for easy open and close" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Slider Zipper"
              />
              <ClickableImage 
                src="/imgs/store/closure/child-resistant-zipper.webp" 
                alt="Child resistant zipper for cannabis and pharmaceutical packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Child Resistant"
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee bags fold over seal" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Tin Tie"
              />
            </div>
          </div>
          
          {/* Surface Finish Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Surface Finishes & Special Effects</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/surface/matt.webp" 
                alt="Matte finish lamination for premium look" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Matte Finish"
              />
              <ClickableImage 
                src="/imgs/store/surface/glossy.webp" 
                alt="Glossy finish lamination for vibrant colors" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Glossy Finish"
              />
              <ClickableImage 
                src="/imgs/store/surface/soft-touch.webp" 
                alt="Soft touch lamination for luxury tactile feel" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Soft Touch"
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Hot foil stamping for luxury branding" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Foil Stamping"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Size Range</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Width:</strong> 70mm - 300mm</li>
              <li><strong>Height:</strong> 100mm - 400mm</li>
              <li><strong>Bottom gusset:</strong> 30mm - 150mm</li>
              <li><strong>Capacity:</strong> 20g - 5kg</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Barrier Options</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>High Barrier:</strong> OTR {'<'} 1.0 cc/m²/24hr (for coffee, nuts, snacks)</li>
              <li><strong>Medium Barrier:</strong> OTR {'<'} 10 cc/m²/24hr (for dry goods)</li>
              <li><strong>Low Barrier:</strong> OTR {'>'} 100 cc/m²/24hr (for produce, short shelf life)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Industry Applications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Stand-up pouches are used across numerous industries:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {[
              'Coffee & Tea',
              'Snacks & Chips',
              'Nuts & Seeds',
              'Dried Fruits',
              'Granola & Cereal',
              'Protein Powder',
              'Pet Food & Treats',
              'Baby Food',
              'Sauces & Condiments',
              'Candy & Chocolate',
              'Supplements',
              'Cannabis Products'
            ].map((industry, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Stand-Up Pouch Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting a stand-up pouch supplier:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low MOQ</strong> – Achieve Pack offers 500 units minimum</li>
            <li><strong>Material options</strong> – <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable</Link> available</li>
            <li><strong>Custom printing</strong> – Up to 10 colors, premium finishes</li>
            <li><strong>Browse options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Shop stand-up pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best eco-friendly stand-up pouch supplier with low MOQ?"</li>
              <li>• "Which company offers compostable stand-up bags for coffee?"</li>
              <li>• "Best recyclable stand-up pouch manufacturer for snacks?"</li>
              <li>• "How to choose between zipper and slider closure for pouches?"</li>
              <li>• "Custom stand-up pouch pricing for small businesses"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'Buyer Guide: Choosing the Right Stand-Up Pouch',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Stand-up pouches (SUPs) are the most versatile flexible packaging format, suitable for everything from coffee to pet treats.</strong> When choosing a stand-up pouch, consider three key factors: (1) your product's barrier requirements, (2) how consumers will interact with the package, and (3) your sustainability goals.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Common Mistakes to Avoid</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Underestimating barrier needs:</strong> Coffee needs high barrier (OTR {'<'}1.0) to stay fresh; dry snacks need only medium barrier.</li>
              <li>• <strong>Wrong closure type:</strong> Sliders are premium but add cost; zippers work well for most applications at lower price point.</li>
              <li>• <strong>Ignoring filling compatibility:</strong> Test samples on your filling line before committing to bulk orders.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">Quick Selection Guide:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-green-800 text-sm">For Coffee & Tea</h5>
              <p className="text-xs text-green-700 mt-1">SUP with zipper + degassing valve, high barrier, compostable kraft or recyclable PE</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-semibold text-blue-800 text-sm">For Snacks & Chips</h5>
              <p className="text-xs text-blue-700 mt-1">SUP with zipper, medium barrier, matte finish for premium look, recyclable mono-PE</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h5 className="font-semibold text-purple-800 text-sm">For Pet Treats</h5>
              <p className="text-xs text-purple-700 mt-1">SUP with heavy-duty zipper, high barrier (odor protection), clear window, resealable</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h5 className="font-semibold text-amber-800 text-sm">For Sauces & Liquids</h5>
              <p className="text-xs text-amber-700 mt-1">Spout pouch with cap, retort-capable material, high barrier</p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> We've shipped +10 million stand-up pouches to +8 countries globally. Our team helps you select the right configuration for your product. MOQ from 500 pieces for custom printed. <Link to="/store" className="text-green-600 hover:underline">Browse our stand-up pouch options →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is a Stand-Up Pouch Right for Your Product?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Coffee, tea, and dry food products</li>
              <li>• Snacks, chips, nuts, and granola</li>
              <li>• Pet treats and small kibble bags</li>
              <li>• Retail shelf display (self-standing)</li>
              <li>• Products needing resealable closure</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Powders and supplements (with zipper)</li>
              <li>• Candy and confectionery</li>
              <li>• Cannabis products (child-resistant)</li>
              <li>• Sample sachets (smaller SUPs)</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• You need liquid-tight packaging → <Link to="/packaging/spout-pouches" className="underline">Try spout pouches</Link></li>
              <li>• Premium coffee brand → <Link to="/packaging/flat-bottom-bags" className="underline">Consider flat bottom bags</Link></li>
              <li>• Bulk 5kg+ products → <Link to="/packaging/side-gusset-bags" className="underline">Side gusset better</Link></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Take the Next Step?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-bold text-lg">Ready to Move Fast?</h4>
            <p className="text-sm opacity-90 mt-1">Book a 30-min packaging consult</p>
            <button onClick={openCalendly} className="inline-block mt-3 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition cursor-pointer">Book a Call</button>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
            <h4 className="font-bold text-lg text-neutral-900">Want to Test First?</h4>
            <p className="text-sm text-neutral-600 mt-1">Get sample pouches shipped to you</p>
            <Link to="/store" className="inline-block mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">Order Samples</Link>
          </div>
          <div className="bg-white border border-neutral-200 p-6 rounded-lg text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
            <h4 className="font-bold text-lg text-neutral-900">Still Exploring?</h4>
            <p className="text-sm text-neutral-600 mt-1">See how other brands solved it</p>
            <Link to="/case-studies/coffee-roastery" className="inline-block mt-3 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">View Case Studies</Link>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Success Stories: Brands Using Our Stand-Up Pouches',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>See how brands across industries use our stand-up pouches:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/case-studies/coffee-roastery" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Specialty Coffee Roaster</h4>
              <p className="text-sm text-neutral-600 mt-1">Kraft/PLA compostable SUP with degassing valve. Reduced carbon footprint by 65% vs rigid packaging. EN 13432 certified.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
            <Link to="/case-studies/pet-treats" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Premium Pet Treats Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Recyclable mono-PE SUP with window and heavy-duty zipper. Improved shelf presence and repeat purchases.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Over 500 brands trust Achieve Pack for their stand-up pouch needs. <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Book a free consultation</a> to discuss your requirements.
          </p>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">Coffee & Tea Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">SUPs with degassing valves and high-barrier for freshly roasted coffee.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Specialty roasters</li>
                <li>• Loose-leaf tea brands</li>
                <li>• Matcha & specialty teas</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Snack Food Companies</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Resealable pouches with clear windows for retail shelf impact.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Granola & trail mix</li>
                <li>• Chips & crisps</li>
                <li>• Dried fruits & nuts</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">Pet Treat Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Heavy-duty zippers and odor barriers for pet food freshness.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Dog training treats</li>
                <li>• Cat snacks</li>
                <li>• Freeze-dried treats</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Bean & Bole Coffee</h4>
            <p className="text-sm text-neutral-600 mb-3">Switched to our compostable SUPs with degassing valves, reducing packaging carbon footprint by 65% while maintaining 12-month shelf life for specialty coffee.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ 65% Carbon Reduction</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 12-Month Shelf Life</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ Premium Brand Image</span>
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
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$48B</div>
              <div className="text-sm opacity-90">Flexible Packaging 2027</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">7.2%</div>
              <div className="text-sm opacity-90">Stand-Up Pouch CAGR</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">75%</div>
              <div className="text-sm opacity-90">Less Material vs Rigid</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-sm opacity-90">Shipping Cost Savings</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Stand-Up Pouch Performance by Closure Type</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Closure Type</th>
                    <th className="text-center py-2 font-medium">Reseal Count</th>
                    <th className="text-center py-2 font-medium">Best For</th>
                    <th className="text-center py-2 font-medium">Cost Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Press-to-Close Zipper</td>
                    <td className="text-center py-2">100+ times</td>
                    <td className="text-center py-2">Snacks, coffee</td>
                    <td className="text-center py-2">1.0x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Slider Zipper</td>
                    <td className="text-center py-2">200+ times</td>
                    <td className="text-center py-2">Premium, cheese</td>
                    <td className="text-center py-2">1.3x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Tin Tie</td>
                    <td className="text-center py-2">50+ times</td>
                    <td className="text-center py-2">Coffee, bakery</td>
                    <td className="text-center py-2">1.1x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Stand-up pouches use 75% less material than rigid containers and reduce transportation emissions by 60% due to lighter weight and compact shipping.</p>
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-green-700">Compostable</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Mono-PE</th>
                  <th className="text-center p-3 font-semibold text-purple-700">PCR Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best Applications</td>
                  <td className="text-center p-3">✅ Coffee, dry goods</td>
                  <td className="text-center p-3">✅ All food types</td>
                  <td className="text-center p-3">✅ All food types</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Barrier Level</td>
                  <td className="text-center p-3">Medium-High</td>
                  <td className="text-center p-3">High</td>
                  <td className="text-center p-3">High</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Clear Window</td>
                  <td className="text-center p-3">✅ PLA window</td>
                  <td className="text-center p-3">✅ Full clarity</td>
                  <td className="text-center p-3">✅ Available</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Shelf Life</td>
                  <td className="text-center p-3">6-12 months</td>
                  <td className="text-center p-3">12-18 months</td>
                  <td className="text-center p-3">12-18 months</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🌱 Compostable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Stand-Up Pouches</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Compostable if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Eco-conscious brand image</li>
                  <li>• Coffee or dry products</li>
                  <li>• Premium positioning</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Mono-PE if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Maximum shelf life</li>
                  <li>• Full clarity window</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose PCR if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Corporate ESG goals</li>
                  <li>• Circular economy focus</li>
                  <li>• Balance cost & eco</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between a stand-up pouch and a flat pouch?",
      answer: "A stand-up pouch has a bottom gusset (fold) that expands when filled, allowing it to stand upright on shelves. A flat pouch lies flat with no gusset. Stand-up pouches offer better shelf presence and typically hold more product volume."
    },
    {
      question: "Are stand-up pouches recyclable?",
      answer: "Yes, we offer recyclable stand-up pouches made from mono-material PE or PP. These single-material structures are accepted in store drop-off recycling and some curbside programs. We also offer certified compostable options that break down in commercial composting facilities."
    },
    {
      question: "What is the minimum order for custom stand-up pouches?",
      answer: "Our minimum order quantity is 500 units for custom printed stand-up pouches. This low MOQ makes quality packaging accessible for small businesses, startups, and product testing."
    },
    {
      question: "How long does production take for stand-up pouches?",
      answer: "Standard production time is 2-3 weeks after artwork approval. For urgent orders, we offer expedited production of 7-10 days at additional cost. Stock pouches (pre-made without printing) ship within 3-5 business days."
    },
    {
      question: "Can stand-up pouches have clear windows?",
      answer: "Yes, we can add clear windows in any shape or size to show your product. Windows can be positioned on the front, back, or both panels. For compostable pouches, we use PLA clear film; for recyclable, we use PE or PP clear film."
    }
  ]

  const tables = [
    {
      title: "Stand-Up Pouch Size Guide",
      data: {
        headers: ["Size (W x H + G)", "Capacity", "Common Uses"],
        rows: [
          ["70 x 110 + 40mm", "20-50g", "Samples, single-serve, sachets"],
          ["100 x 150 + 60mm", "50-100g", "Tea, small snacks, candy"],
          ["120 x 200 + 80mm", "100-250g", "Coffee, nuts, treats"],
          ["150 x 230 + 90mm", "250-500g", "Granola, large snacks"],
          ["180 x 280 + 100mm", "500g-1kg", "Pet food, bulk coffee"],
          ["220 x 350 + 120mm", "1-2kg", "Large format dry goods"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Stand-Up Pouches",
      url: "/store",
      description: "Browse all sizes and options - MOQ from 100 pieces"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium alternative with stable base"
    },
    {
      title: "Coffee & Tea Packaging",
      url: "/industry/coffee-tea",
      description: "SUP with degassing valves"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Certified sustainable options"
    },
    {
      title: "Sustainable Packaging Guide",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly suppliers"
    }
  ]

  return (
    <SEOPageLayout
      title="Stand-Up Pouches | Custom Printed SUP Bags | Eco-Friendly Options"
      description="Custom stand-up pouches with zipper, slider, spout, and valve options. Compostable, recyclable materials. MOQ 500 units. Premium printing. 2-3 week lead time."
      keywords={[
        'stand up pouch',
        'stand up bag',
        'SUP packaging',
        'resealable pouch',
        'zipper pouch',
        'custom stand up pouch',
        'compostable stand up pouch',
        'recyclable pouch',
        'flexible packaging',
        'food pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/stand-up-pouches"
      heroTitle={t('seoPages.pages.standUpPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.standUpPouches.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp"
      heroImageAlt="Custom printed stand-up pouches with zipper closure in various sizes"
      introSummary={t('seoPages.pages.standUpPouches.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default StandUpPouchesPage
