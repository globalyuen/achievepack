import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Cookie } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecyclableSnackPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Snack Packaging Recyclability Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Traditional snack packaging uses multi-layer films that can't be recycled. <strong>Recyclable mono-material pouches</strong> offer the same performance with a clear end-of-life pathway.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Traditional Problems</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Multi-layer films = landfill only</li>
                  <li>• Aluminum foil barriers non-recyclable</li>
                  <li>• Mixed plastics rejected by recyclers</li>
                  <li>• Consumer confusion about disposal</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">Mono-Material Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Single polymer = fully recyclable</li>
                  <li>• PE-only or PP-only structures</li>
                  <li>• Store drop-off compatible</li>
                  <li>• Clear consumer messaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mono-materials',
      title: 'Recyclable Mono-Material Options',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Choose from <strong>certified recyclable flexible packaging</strong> designed specifically for snack products—chips, crackers, bars, nuts, and more.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Mono-PE (Polyethylene)</h4>
              <p className="text-sm text-blue-700 mb-3">All-PE structure recyclable in PE film streams. Store drop-off programs. High moisture barrier.</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>✓ How2Recycle Store Drop-Off</li>
                <li>✓ High barrier available (EVOH-free)</li>
                <li>✓ Excellent seal strength</li>
                <li>✓ Nitrogen flush compatible</li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-800 mb-3">Mono-PP (Polypropylene)</h4>
              <p className="text-sm text-cyan-700 mb-3">All-PP construction for curbside recycling in some areas. High clarity options available.</p>
              <ul className="text-sm text-cyan-600 space-y-1">
                <li>✓ Higher clarity than PE</li>
                <li>✓ Better grease resistance</li>
                <li>✓ Higher temperature tolerance</li>
                <li>✓ Growing recycling infrastructure</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp" 
              alt="Recyclable snack packaging" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Recyclable"
            />
            <ClickableImage 
              src="/imgs/store/shape/stand-up-pouch.webp" 
              alt="Stand up pouch for snacks" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Stand Up"
            />
            <ClickableImage 
              src="/imgs/store/shape/flat-bottom-pouch.webp" 
              alt="Flat bottom for snacks" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Bottom"
            />
            <ClickableImage 
              src="/imgs/store/closure/normal-zipper.webp" 
              alt="Resealable snack bag" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Zipper"
            />
          </div>
        </div>
      )
    },
    {
      id: 'snack-performance',
      title: 'Performance for Snack Products',
      icon: <Cookie className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Recyclable doesn't mean compromise. Our mono-material snack packaging delivers <strong>the barrier and shelf life</strong> your products need.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Chips & Crisps</h5>
              <p className="text-xs text-neutral-600 mb-2">High oxygen barrier, nitrogen flush, light protection.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">12+ months shelf life</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Granola & Bars</h5>
              <p className="text-xs text-neutral-600 mb-2">Moisture barrier, resealable, portion options.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">18+ months shelf life</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Nuts & Seeds</h5>
              <p className="text-xs text-neutral-600 mb-2">Oxygen and moisture dual barrier, resealable.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">24+ months shelf life</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Crackers & Cookies</h5>
              <p className="text-xs text-neutral-600 mb-2">Moisture protection, crumble prevention.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">12+ months shelf life</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Dried Fruits</h5>
              <p className="text-xs text-neutral-600 mb-2">Moisture barrier, UV protection, resealable.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">18+ months shelf life</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <h5 className="font-semibold text-neutral-800 mb-2">Popcorn</h5>
              <p className="text-xs text-neutral-600 mb-2">Grease resistance, aroma retention.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">9+ months shelf life</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recycling-claims',
      title: 'Recycling Claims & Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Use verified recycling claims on your snack packaging. We provide <strong>third-party certification documentation</strong> for all recyclability claims.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">How2Recycle</h4>
              <p className="text-xs text-neutral-600 mt-1">Store Drop-Off label for PE films</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl mb-2">🇪🇺</div>
              <h4 className="font-semibold text-neutral-800">RecyClass</h4>
              <p className="text-xs text-neutral-600 mt-1">EU recyclability certification</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl mb-2">🇦🇺</div>
              <h4 className="font-semibold text-neutral-800">APCO</h4>
              <p className="text-xs text-neutral-600 mt-1">Australian Packaging Covenant</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h5 className="font-semibold text-blue-800 mb-2">Consumer Instructions</h5>
            <p className="text-sm text-blue-700">
              We help you create clear disposal instructions for your packaging. For PE store drop-off: "Please recycle this bag at participating retail locations." Simple messaging increases actual recycling rates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Switch to Recyclable Snack Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Recyclable Snack Bag Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            Test recyclable mono-PE and mono-PP materials with your snack products. We'll send barrier test samples and shelf life recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Discuss Your Snacks
            </button>
            <Link
              to="/materials/recyclable-mono-pe"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Recycle className="h-5 w-5" />
              Mono-PE Details
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What makes flexible snack packaging recyclable?",
      answer: "Recyclable flexible packaging uses a single polymer type (mono-material) rather than mixed layers. Our mono-PE pouches contain only polyethylene and can be recycled through store drop-off programs. Mono-PP is recyclable where PP film recycling exists."
    },
    {
      question: "Can recyclable packaging match the shelf life of traditional snack bags?",
      answer: "Yes, modern mono-material structures achieve excellent barrier properties without aluminum foil. Our recyclable snack packaging offers 12-24+ months shelf life depending on product requirements, comparable to traditional multi-layer films."
    },
    {
      question: "Where can consumers recycle mono-PE snack bags?",
      answer: "Mono-PE bags are recyclable at participating retail store drop-off locations throughout North America and many other regions. Major retailers like Target, Walmart, and grocery chains offer this service. We help you create clear disposal instructions for consumers."
    },
    {
      question: "Are recyclable snack pouches compatible with nitrogen flush packaging?",
      answer: "Absolutely. Our recyclable mono-material pouches are fully compatible with nitrogen flush (MAP) packaging. The seal integrity and barrier properties support modified atmosphere packaging for extended freshness."
    },
    {
      question: "What certifications verify recyclability claims for snack packaging?",
      answer: "Key certifications include How2Recycle (North America), RecyClass (EU), and APCO (Australia). We provide documentation to support your recyclability claims and help you create consumer-friendly disposal instructions."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Recyclable Flexible Packaging for Snacks | Mono-Material Pouches | Achieve Pack</title>
        <meta name="description" content="Recyclable snack packaging that performs. Mono-PE and mono-PP pouches for chips, bars, nuts, and more. Same shelf life, clear recycling pathway. How2Recycle certified." />
        <link rel="canonical" href="https://achievepack.com/topics/recyclable-snack-packaging" />
        <meta name="keywords" content="recyclable snack packaging, mono-material pouches, recyclable chip bags, sustainable snack bags, How2Recycle flexible packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Recyclable Flexible Packaging for Snacks",
            "description": "Mono-material recyclable pouches for snack products including chips, bars, nuts, and crackers.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Recyclable Flexible Packaging for Snacks"
        description="Mono-PE and mono-PP pouches for snack products. Same performance, clear recycling pathway."
        keywords={['recyclable snack packaging', 'mono-material pouches', 'recyclable chip bags']}
        heroTitle="Recyclable Flexible Packaging for Snacks"
        heroSubtitle="Mono-Material | Same Performance | Clear Recycling"
        introSummary="Replace landfill-bound snack bags with recyclable mono-material alternatives. Same barrier performance, same shelf life—but now your packaging has a clear end-of-life pathway."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/snack/a_snacks_packaging_overview_7870104.webp"
      />
    </>
  )
}

export default RecyclableSnackPackagingPage
