import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, ShoppingCart, Truck, TrendingUp } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const DTCSustainablePackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Why DTC Brands Need Sustainable Packaging',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Direct-to-consumer brands</strong> are uniquely positioned to make bold sustainability choices. Your packaging is often the first physical touchpoint with customers—make it memorable and responsible.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">DTC Packaging Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Small batch runs with high design flexibility</li>
                  <li>• Brand differentiation through packaging</li>
                  <li>• E-commerce durability requirements</li>
                  <li>• Authentic sustainability stories</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">DTC Opportunities</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Direct communication with eco-conscious consumers</li>
                  <li>• Higher willingness to pay for sustainable options</li>
                  <li>• Instagram-worthy unboxing experiences</li>
                  <li>• Brand story through packaging materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dtc-solutions',
      title: 'Sustainable Packaging for DTC Success',
      icon: <ShoppingCart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            From <strong>custom printed compostable pouches</strong> to recycled content bags, we offer solutions designed for the unique needs of direct-to-consumer brands.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Custom Printed Pouches</h4>
              <p className="text-sm text-green-700 mb-3">Digital printing from 100 pieces. Photo-quality graphics on sustainable materials. Perfect for multi-SKU DTC brands.</p>
              <div className="flex gap-2">
                <ClickableImage 
                  src="/imgs/store/surface/stamp-foil.webp" 
                  alt="Custom printed DTC packaging" 
                  className="w-20 h-20 object-cover rounded-lg"
                  caption="Foil Stamp"
                />
                <ClickableImage 
                  src="/imgs/store/surface/matt.webp"
                  alt="Premium matte finish" 
                  className="w-20 h-20 object-cover rounded-lg"
                  caption="Spot Matte"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Quick Turnaround</h4>
              <p className="text-sm text-blue-700 mb-3">10-15 day lead time with digital printing. Rush orders available. Keep up with your DTC launch schedules.</p>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700">Express options: 7-10 days</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800">Wellness & Supplements</h5>
              <p className="text-xs text-neutral-600">Stand-up pouches, portion sachets, child-resistant options</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800">Food & Snacks</h5>
              <p className="text-xs text-neutral-600">Resealable bags, nitrogen-flush compatible, moisture barrier</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800">Beauty & Personal Care</h5>
              <p className="text-xs text-neutral-600">Soft touch finishes, spout pouches, sachets</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ecommerce-durability',
      title: 'Built for E-Commerce',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            DTC packaging must survive the shipping journey. Our <strong>sustainable pouches are tested for e-commerce durability</strong> without compromising environmental credentials.
          </p>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-neutral-800 mb-3">E-Commerce Ready Features</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-neutral-800">Puncture Resistant</p>
                  <p className="text-xs text-neutral-600">Multi-layer construction protects contents</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-neutral-800">Heat Seal Strength</p>
                  <p className="text-xs text-neutral-600">No leaks through handling and transport</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-neutral-800">Flat-Pack Efficient</p>
                  <p className="text-xs text-neutral-600">Reduces shipping costs and storage space</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <ClickableImage 
              src="/imgs/store/shape/flat-bottom-pouch.webp" 
              alt="Flat bottom pouch for DTC" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Bottom"
            />
            <ClickableImage 
              src="/imgs/store/shape/stand-up-pouch.webp" 
              alt="Stand up pouch for DTC" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Stand Up"
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/side -seal.webp"
              alt="Side gusset bag" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Side Gusset"
            />
            <ClickableImage 
              src="/imgs/store/shape/flat-pouch.webp" 
              alt="Flat pouch for DTC" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Pouch"
            />
          </div>
        </div>
      )
    },
    {
      id: 'brand-storytelling',
      title: 'Tell Your Sustainability Story',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            DTC consumers want to know the story behind your packaging. Our <strong>certified materials give you authentic sustainability claims</strong> for your marketing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">What You Can Say</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>✓ "Home compostable certified by TUV Austria"</li>
                <li>✓ "Made from 30% post-consumer recycled plastic"</li>
                <li>✓ "Bio-based packaging from sugarcane"</li>
                <li>✓ "Plastic-free kraft paper alternative"</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Marketing Support</h4>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>📄 Certificate copies for your website</li>
                <li>📊 Carbon footprint data for reporting</li>
                <li>🏷️ Approved logo usage guidelines</li>
                <li>📖 Consumer-friendly explanations</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4 border border-neutral-200">
            <p className="text-sm text-neutral-700">
              <strong>Anti-Greenwashing Protection:</strong> All our certifications are third-party verified. We provide documentation to back up every claim on your packaging, protecting your brand from greenwashing accusations.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Sustainable DTC Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start with a Sample Kit</h3>
          <p className="text-lg mb-6 opacity-90">
            Receive samples of compostable, recyclable, and bio-based pouches. See and feel the quality before ordering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Shop Sample Packs
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the minimum order quantity for DTC packaging?",
      answer: "For digitally printed custom pouches, our MOQ is just 100 pieces—perfect for DTC brands launching new products or testing materials. Stock eco pouches have no minimum for sampling."
    },
    {
      question: "How quickly can I get sustainable packaging for my DTC brand?",
      answer: "Digital printing takes 10-15 business days from artwork approval. Stock pouches ship within 3-5 business days. Rush production is available for an additional fee."
    },
    {
      question: "Can I get Instagram-worthy custom printing on eco-friendly materials?",
      answer: "Absolutely. Our digital printing delivers photo-quality graphics with up to 10 colors. Premium finishes like matte lamination, spot UV, and soft-touch are available on sustainable materials."
    },
    {
      question: "Do sustainable pouches protect products during e-commerce shipping?",
      answer: "Yes, our eco-friendly pouches are designed for e-commerce. They feature puncture resistance, strong heat seals, and barrier protection comparable to traditional materials. We can adjust specifications based on your product's needs."
    },
    {
      question: "What certifications do you provide for marketing claims?",
      answer: "We provide certificate copies for TUV OK Home Compost, EN 13432, ASTM D6400, and other relevant certifications. This documentation supports your sustainability marketing claims and protects against greenwashing accusations."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sustainable Packaging for Direct-to-Consumer (DTC) Brands | Achieve Pack</title>
        <meta name="description" content="Custom eco-friendly packaging for DTC brands. Low MOQ from 100 pieces, fast turnaround, and certified sustainable materials. Perfect for e-commerce food, wellness, and beauty brands." />
        <link rel="canonical" href="https://achievepack.com/topics/dtc-sustainable-packaging" />
        <meta name="keywords" content="DTC packaging, direct to consumer packaging, sustainable ecommerce packaging, custom eco pouches, DTC brand packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sustainable Packaging for DTC Brands",
            "description": "Custom eco-friendly packaging solutions designed for direct-to-consumer brands with low MOQ and fast turnaround.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" },
            "areaServed": ["United States", "United Kingdom", "Canada", "Australia"]
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Sustainable Packaging for Direct-to-Consumer Brands"
        description="Custom eco-friendly packaging for DTC brands. Low MOQ from 100 pieces, fast turnaround, and certified sustainable materials."
        keywords={['DTC packaging', 'direct to consumer packaging', 'sustainable ecommerce packaging', 'custom eco pouches']}
        heroTitle="Sustainable Packaging for DTC Brands"
        heroSubtitle="Low MOQ | Fast Turnaround | E-Commerce Ready"
        introSummary="Build your DTC brand with sustainable packaging that tells your story. From 100-piece custom runs to scalable production—eco-friendly materials that survive shipping and delight customers."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp"
      />
    </>
  )
}

export default DTCSustainablePackagingPage
