import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Printer, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Palette, Sparkles, Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomPrintedSustainablePouchesPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Custom Printing Meets Sustainability',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Create <strong>stunning custom printed packaging</strong> that's also sustainable. From compostable kraft to recyclable mono-PE, get your brand on eco-friendly materials with no compromise on print quality.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold text-neutral-800">Full Color</h4>
                <p className="text-xs text-neutral-600">CMYK + spot colors</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-semibold text-neutral-800">Eco Materials</h4>
                <p className="text-xs text-neutral-600">Compostable & recyclable</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-2">📦</div>
                <h4 className="font-semibold text-neutral-800">Low MOQ</h4>
                <p className="text-xs text-neutral-600">From 100 pieces</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-options',
      title: 'Printable Sustainable Materials',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            All our <strong>eco-friendly substrates accept custom printing</strong>. Choose your material based on sustainability goals and barrier requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">Compostable Materials</h4>
              <p className="text-sm text-green-700">PLA-based films, kraft paper + PLA, home and industrial compostable options. Excellent print adhesion.</p>
              <div className="flex gap-2 mt-3">
                <ClickableImage src="/imgs/store/barrier/3-paper.webp" alt="Kraft compostable" className="w-16 h-16 object-cover rounded-lg" caption="Kraft" />
              </div>
            </Link>
            
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable Mono-PE</h4>
              <p className="text-sm text-blue-700">Single-material PE for store drop-off recycling. Full color printing with excellent durability.</p>
              <div className="flex gap-2 mt-3">
                <ClickableImage src="/imgs/4-infograhic/recyclable.webp" alt="Recyclable PE" className="w-16 h-16 object-cover rounded-lg" caption="Recyclable" />
              </div>
            </Link>
            
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-5 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">Bio-Based PE</h4>
              <p className="text-sm text-amber-700">Sugarcane-derived, carbon-negative. Prints identically to fossil PE. Braskem certified.</p>
              <div className="flex gap-2 mt-3">
                <ClickableImage src="/imgs/4-infograhic/Bio-PE.webp" alt="Bio-PE" className="w-16 h-16 object-cover rounded-lg" caption="Bio-PE" />
              </div>
            </Link>
            
            <Link to="/materials/pcr" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">PCR Content</h4>
              <p className="text-sm text-purple-700">30-100% post-consumer recycled plastic. FDA food-safe. White underprint available.</p>
              <div className="flex gap-2 mt-3">
                <ClickableImage src="/imgs/4-infograhic/PCR.webp" alt="PCR" className="w-16 h-16 object-cover rounded-lg" caption="PCR" />
              </div>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'print-finishes',
      title: 'Premium Print Finishes',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Elevate your sustainable packaging with <strong>premium surface treatments</strong> that don't compromise eco credentials.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <ClickableImage src="/imgs/store/surface/matte.webp" alt="Matte finish" className="w-full h-20 object-cover rounded-lg mb-2" caption="Matte" />
              <h5 className="font-semibold text-neutral-800 text-sm">Matte Lamination</h5>
              <p className="text-xs text-neutral-600">Soft, premium feel</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <ClickableImage src="/imgs/store/surface/gloss.webp" alt="Gloss finish" className="w-full h-20 object-cover rounded-lg mb-2" caption="Gloss" />
              <h5 className="font-semibold text-neutral-800 text-sm">Gloss Lamination</h5>
              <p className="text-xs text-neutral-600">Vibrant color pop</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <ClickableImage src="/imgs/store/surface/stamp-foil.webp" alt="Foil stamp" className="w-full h-20 object-cover rounded-lg mb-2" caption="Foil" />
              <h5 className="font-semibold text-neutral-800 text-sm">Foil Stamping</h5>
              <p className="text-xs text-neutral-600">Metallic accents</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <ClickableImage src="/imgs/store/surface/matt.webp" alt="Matte Finish" className="w-full h-20 object-cover rounded-lg mb-2" caption="Matte Finish" />
              <h5 className="font-semibold text-neutral-800 text-sm">Spot UV</h5>
              <p className="text-xs text-neutral-600">Tactile highlights</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Eco Note:</strong> Water-based inks and bio-based laminations available for maximum sustainability. All finishes can be applied to compostable substrates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-styles',
      title: 'Custom Printed Pouch Styles',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Choose your <strong>pouch format</strong> based on product requirements and shelf presence goals.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <Link to="/packaging/stand-up-pouches" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <ClickableImage src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" alt="Stand up pouch" className="w-full h-24 object-cover rounded-lg mb-2" caption="Stand Up" />
              <h5 className="font-semibold text-neutral-800 text-sm">Stand Up Pouch</h5>
              <p className="text-xs text-neutral-600">Best seller</p>
            </Link>
            <Link to="/packaging/flat-bottom-bags" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <ClickableImage src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" alt="Flat bottom bag" className="w-full h-24 object-cover rounded-lg mb-2" caption="Flat Bottom" />
              <h5 className="font-semibold text-neutral-800 text-sm">Flat Bottom</h5>
              <p className="text-xs text-neutral-600">Premium shelf</p>
            </Link>
            <Link to="/packaging/side-gusset-bags" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <ClickableImage src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" alt="Side gusset bag" className="w-full h-24 object-cover rounded-lg mb-2" caption="Side Gusset" />
              <h5 className="font-semibold text-neutral-800 text-sm">Side Gusset</h5>
              <p className="text-xs text-neutral-600">Coffee favorite</p>
            </Link>
            <Link to="/packaging/flat-pouches" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <ClickableImage src="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp" alt="Flat pouch" className="w-full h-24 object-cover rounded-lg mb-2" caption="Flat Pouch" />
              <h5 className="font-semibold text-neutral-800 text-sm">Flat Pouch</h5>
              <p className="text-xs text-neutral-600">Samples</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Start Your Custom Packaging Project',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Custom Print Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            See how your design looks on sustainable materials. Request printed samples on compostable, recyclable, or bio-based substrates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Discuss Your Design
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Browse Products
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can you custom print on compostable packaging?",
      answer: "Yes, all our compostable materials accept custom printing. We offer digital printing from 100 pieces and flexographic printing for larger orders. Print quality is excellent on both PLA-based films and kraft paper substrates."
    },
    {
      question: "What is the minimum order for custom printed sustainable pouches?",
      answer: "Our minimum order is 100 pieces for digitally printed pouches on any sustainable material. For flexographic printing, minimums start at 3,000 pieces. Stock pouches are available with no minimum."
    },
    {
      question: "What print finishes work on eco-friendly materials?",
      answer: "All standard finishes are compatible: matte and gloss lamination, soft touch, foil stamping, spot UV, and embossing. We offer water-based and bio-based lamination options for maximum sustainability."
    },
    {
      question: "How long does custom printed sustainable packaging take?",
      answer: "Digital printing takes 10-15 business days from artwork approval. Flexographic printing requires 21-30 days including plate making. Rush options available for both methods."
    },
    {
      question: "Do you provide design assistance for sustainable packaging?",
      answer: "Yes, we offer free artwork review and can help optimize your design for printing on eco-friendly materials. We'll advise on color accuracy, bleed requirements, and certification logo placement."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Custom Printed Sustainable Pouches | Eco-Friendly Packaging | Achieve Pack</title>
        <meta name="description" content="Custom printing on sustainable packaging. Compostable, recyclable, and bio-based pouches with photo-quality graphics. Low MOQ from 100 pieces. Premium finishes available." />
        <link rel="canonical" href="https://achievepack.com/topics/custom-printed-sustainable-pouches" />
        <meta name="keywords" content="custom printed sustainable pouches, eco-friendly custom packaging, printed compostable bags, custom recyclable pouches" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom Printed Sustainable Pouches",
            "description": "Custom printing on eco-friendly packaging materials including compostable, recyclable, and bio-based options.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Custom Printed Sustainable Pouches"
        description="Full color custom printing on compostable, recyclable, and bio-based packaging materials."
        keywords={['custom printed sustainable pouches', 'eco-friendly custom packaging', 'printed compostable bags']}
        heroTitle="Custom Printed Sustainable Pouches"
        heroSubtitle="Photo-Quality Printing | Eco Materials | From 100 Pieces"
        introSummary="Get your brand on sustainable packaging with no compromise on print quality. Full color custom printing on compostable, recyclable, and bio-based pouches—starting from just 100 pieces."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_digital_printing_customization_2717640.webp"
      />
    </>
  )
}

export default CustomPrintedSustainablePouchesPage
