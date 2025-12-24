import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Printer, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Palette, Layers, Image } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const DigitalPrintingEcoPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Why Digital Printing for Eco Packaging?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Digital printing</strong> is transforming sustainable packaging by eliminating plates, reducing waste, and enabling short runs. Get custom printed eco-friendly pouches from just 100 pieces.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-800">Digital Advantages</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• No plate costs or setup fees</li>
                  <li>• Variable data printing possible</li>
                  <li>• Photo-quality reproduction</li>
                  <li>• Quick design iterations</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">Sustainability Benefits</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Less ink waste during setup</li>
                  <li>• No plate disposal needed</li>
                  <li>• Print only what you need</li>
                  <li>• Reduced inventory waste</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'digital-vs-flexo',
      title: 'Digital vs Flexographic Printing',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Choose the right printing technology based on <strong>quantity, timeline, and budget</strong>. Both options work with our eco-friendly materials.
          </p>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="p-3 text-left text-sm">Feature</th>
                  <th className="p-3 text-left text-sm">Digital Printing</th>
                  <th className="p-3 text-left text-sm">Flexographic</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Minimum Order</td>
                  <td className="p-3 text-green-700">100 pieces</td>
                  <td className="p-3">3,000+ pieces</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Setup Cost</td>
                  <td className="p-3 text-green-700">None</td>
                  <td className="p-3">$300-800 per color</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Lead Time</td>
                  <td className="p-3 text-green-700">10-15 days</td>
                  <td className="p-3">21-30 days</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Color Range</td>
                  <td className="p-3 text-green-700">CMYK + White (unlimited)</td>
                  <td className="p-3">Up to 10 spot colors</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="p-3">Short runs, multi-SKU</td>
                  <td className="p-3">High volume orders</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Eco Tip:</strong> Digital printing reduces material waste by up to 30% compared to flexographic for orders under 5,000 pieces. No test prints, no plate adjustments, no setup waste.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'print-quality',
      title: 'Print Quality on Eco Materials',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Modern HP Indigo digital presses deliver <strong>photo-quality printing on all sustainable materials</strong>—compostable, recyclable, and bio-based substrates.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Image className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">Photo Quality</h4>
              <p className="text-xs text-neutral-600 mt-1">1200 DPI resolution. Smooth gradients and fine details.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">Full Bleed</h4>
              <p className="text-xs text-neutral-600 mt-1">Edge-to-edge printing. No white borders required.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Palette className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">White Ink</h4>
              <p className="text-xs text-neutral-600 mt-1">Print on metallic and clear substrates.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <ClickableImage 
              src="/imgs/store/surface/metalic.webp" 
              alt="Metallic finish digital print" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Metallic"
            />
            <ClickableImage 
              src="/imgs/store/surface/matte.webp" 
              alt="Matte finish digital print" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Matte"
            />
            <ClickableImage 
              src="/imgs/store/surface/gloss.webp" 
              alt="Gloss finish digital print" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Gloss"
            />
            <ClickableImage 
              src="/imgs/store/surface/kraft.webp" 
              alt="Kraft digital print" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Kraft"
            />
          </div>
        </div>
      )
    },
    {
      id: 'finishes',
      title: 'Premium Finishes Available',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Elevate your eco packaging with <strong>premium surface treatments</strong> that maintain sustainability credentials.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3">Foil Stamping</h4>
              <p className="text-sm text-amber-700 mb-3">Hot foil and cold foil options. Gold, silver, holographic, and custom colors. Available on compostable materials.</p>
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Foil stamping on eco packaging" 
                className="w-full h-24 object-cover rounded-lg"
                caption="Foil Stamp"
              />
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Spot UV & Embossing</h4>
              <p className="text-sm text-purple-700 mb-3">Tactile spot varnish. Debossed or embossed logos. Create premium unboxing experiences.</p>
              <ClickableImage 
                src="/imgs/store/surface/spot-matte.webp" 
                alt="Spot UV on sustainable packaging" 
                className="w-full h-24 object-cover rounded-lg"
                caption="Spot Matte UV"
              />
            </div>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4 border border-neutral-200">
            <h5 className="font-medium text-neutral-800 mb-2">Finish Compatibility:</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Matte Lamination</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Gloss Lamination</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Soft Touch</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Anti-Scratch</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Start Your Digital Print Project',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Free Digital Print Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            See the quality for yourself. Request samples of digitally printed eco packaging on compostable, recyclable, and bio-based materials.
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
              to="/printing/types"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Printer className="h-5 w-5" />
              Explore Print Options
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the minimum order for digitally printed eco packaging?",
      answer: "Our minimum order for digitally printed sustainable pouches is just 100 pieces. This applies to compostable, recyclable, and bio-based materials. No plate fees or setup costs."
    },
    {
      question: "How does print quality compare between digital and flexographic?",
      answer: "Digital printing delivers photo-quality results with smooth gradients and fine details at 1200 DPI. Modern HP Indigo presses match or exceed flexographic quality for most applications. Digital is especially advantageous for photographic images and complex designs."
    },
    {
      question: "Can you digitally print on compostable and recyclable materials?",
      answer: "Yes, we offer digital printing on all our eco-friendly substrates including compostable (PLA-based), recyclable mono-PE, bio-PE, PCR, and kraft paper. Print quality is excellent on all materials."
    },
    {
      question: "What finishes are available with digital printing?",
      answer: "All standard finishes are compatible with digital printing: matte and gloss lamination, soft touch, foil stamping, spot UV, embossing, and debossing. These can be applied to eco-friendly materials while maintaining their sustainability credentials."
    },
    {
      question: "How quickly can I get digitally printed eco pouches?",
      answer: "Standard lead time for digitally printed pouches is 10-15 business days from artwork approval. Rush orders can be completed in 7-10 days for an additional fee. This is significantly faster than flexographic printing which typically requires 21-30 days."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Digital Printing for Eco Packaging | Low MOQ Sustainable Pouches | Achieve Pack</title>
        <meta name="description" content="Digital printing on eco-friendly packaging from 100 pieces. No plate fees, 10-15 day turnaround. Photo-quality printing on compostable, recyclable, and bio-based pouches." />
        <link rel="canonical" href="https://achievepack.com/topics/digital-printing-eco-packaging" />
        <meta name="keywords" content="digital printing eco packaging, sustainable pouch printing, low MOQ packaging print, digital print compostable bags" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Printing for Eco Packaging",
            "description": "Photo-quality digital printing on sustainable packaging materials with low minimum orders and fast turnaround.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Digital Printing for Eco Packaging"
        description="Photo-quality digital printing on compostable, recyclable, and bio-based pouches from just 100 pieces."
        keywords={['digital printing eco packaging', 'sustainable pouch printing', 'low MOQ packaging']}
        heroTitle="Digital Printing for Eco Packaging"
        heroSubtitle="From 100 Pieces | No Plate Fees | 10-15 Days"
        introSummary="Get photo-quality custom printing on sustainable packaging without minimum order barriers. Digital printing eliminates setup waste while delivering premium results on all eco-friendly materials."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_sustainable_packaging_printing_3127893.webp"
      />
    </>
  )
}

export default DigitalPrintingEcoPackagingPage
