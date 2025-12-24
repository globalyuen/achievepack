import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart, Leaf, Package, Sun, CheckCircle, Calendar, MessageCircle, Award, Target, Store, Sparkles, Palette } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ArtisanProducerPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Packaging for Artisan Makers',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-lg border border-rose-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              You create <strong>small-batch gourmet products</strong> with care—handcrafted granolas, artisan chocolates, specialty preserves. Your packaging should tell that story, but high MOQs and generic options don't match your craft.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Artisan Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Small batches, irregular production</li>
                  <li>• Generic packaging doesn't convey craft</li>
                  <li>• Farmers market conditions (sun, heat)</li>
                  <li>• Limited budget for packaging</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Low MOQ for small runs</li>
                  <li>• Packaging that tells your story</li>
                  <li>• Durable for outdoor markets</li>
                  <li>• Eco-friendly to match values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'small-batch',
      title: 'Made for Small-Batch Production',
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We understand artisan economics. <strong>Order as few as 100 pouches</strong>—perfect for seasonal products, new recipes, or limited editions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-rose-50 p-5 rounded-lg border border-rose-200 text-center">
              <div className="text-3xl font-bold text-rose-700 mb-2">100</div>
              <div className="text-sm text-rose-600 font-medium">Piece Minimum</div>
              <p className="text-xs mt-2 text-neutral-600">No overstock waste</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">Seasonal</div>
              <div className="text-sm text-amber-600 font-medium">Flexibility</div>
              <p className="text-xs mt-2 text-neutral-600">Holiday/harvest editions</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">No</div>
              <div className="text-sm text-green-600 font-medium">Plate Costs</div>
              <p className="text-xs mt-2 text-neutral-600">Change designs freely</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'craft-aesthetic',
      title: 'Packaging That Tells Your Story',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Artisan products deserve artisan packaging. <strong>Natural textures and finishes</strong> that communicate handcrafted quality and connect with conscious consumers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Craft Aesthetics</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Natural kraft paper look</li>
                <li>• Clear windows for product visibility</li>
                <li>• Matte finishes for organic feel</li>
                <li>• Earth-tone printing</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Custom Options</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Your logo and brand story</li>
                <li>• Ingredient lists and certifications</li>
                <li>• Batch numbers and dates</li>
                <li>• Seasonal/limited edition labels</li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
                alt="Artisan chocolate packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Artisan Chocolate"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_tea_craft_australia_garden_morning_8955209.webp"
                alt="Artisan tea packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Craft Tea"
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-paper.webp"
                alt="Kraft paper finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Kraft Paper"
              />
              <ClickableImage 
                src="/imgs/store/closure/normal-zipper.webp"
                alt="Resealable zipper closure" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Resealable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'markets',
      title: 'Built for Farmers Markets',
      icon: <Sun className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Farmers market conditions are tough—direct sun, temperature swings, handling by customers. <strong>Our pouches are designed for real-world durability</strong> while maintaining product freshness.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">Market-Ready Features</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• UV-resistant printing</li>
                <li>• Puncture-resistant materials</li>
                <li>• Stand-up design for display</li>
              </ul>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Resealable for sampling</li>
                <li>• Moisture barrier protection</li>
                <li>• Easy hang hole option</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable',
      title: 'Sustainability That Matches Your Values',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Your customers care about the planet—so do you. <strong>Choose packaging that aligns with artisan values</strong> and tells your sustainability story.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800">Home/Industrial Compostable</h4>
              <p className="text-sm text-green-700 mt-1">Kraft paper with PLA. Breaks down naturally. Perfect for eco-conscious markets.</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800">Recyclable Options</h4>
              <p className="text-sm text-blue-700 mt-1">Store drop-off recyclable. Communicate recycling instructions to customers.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Package Your Craft With Care',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Samples for Your Products</h3>
          <p className="text-lg mb-6 opacity-90">
            Tell us about your artisan products. We'll recommend packaging that matches your brand and send samples for evaluation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Store className="h-5 w-5" />
              Browse Options
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What's the minimum order for artisan products?",
      answer: "Just 100 pieces. This allows you to package small batches, test new products, or create limited seasonal editions without overcommitting to large inventory."
    },
    {
      question: "Can I order different sizes in one order?",
      answer: "Yes. Many artisan producers order mixed sizes—small pouches for samples, larger ones for full products. We can accommodate mixed size orders with the same artwork."
    },
    {
      question: "Do you offer packaging for farmers markets?",
      answer: "Absolutely. Our stand-up pouches are designed for display, with UV-resistant printing and durable materials that withstand outdoor market conditions."
    },
    {
      question: "Can I customize for seasonal products?",
      answer: "Yes! Digital printing means no plate costs—you can create holiday editions, harvest specials, or any seasonal variations without paying extra setup fees."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Artisan Producer Packaging | Small Batch | Low MOQ | Achieve Pack</title>
        <meta name="description" content="Packaging for artisan food makers. Low MOQ from 100 pieces, craft aesthetics, farmers market durable, sustainable options. Perfect for small-batch gourmet products." />
        <link rel="canonical" href="https://achievepack.com/solutions/artisan-producer" />
        <meta name="keywords" content="artisan packaging, small batch packaging, farmers market packaging, gourmet food packaging, craft food pouches, low MOQ artisan" />
      </Helmet>

      <SEOPageLayout
        title="Artisan Producer Packaging | Small Batch Solutions"
        description="Packaging for artisan food makers. Low MOQ from 100 pieces, craft aesthetics, farmers market durable."
        keywords={['artisan packaging', 'small batch packaging', 'farmers market packaging', 'gourmet food packaging']}
        heroTitle="Packaging for Artisan Makers"
        heroSubtitle="100 Piece MOQ | Craft Aesthetics | Market Durable"
        introSummary="Package your handcrafted products with the care they deserve. Low minimum orders, natural craft finishes, and sustainable materials that tell your story."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
      />
    </>
  )
}

export default ArtisanProducerPage
