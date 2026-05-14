import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Printer, Palette, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, MousePointer2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomPrintedSustainablePouchesPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Custom Printed Sustainable Pouches: The Intersection of Art and Science',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Custom printing is the final layer of your brand's sustainable narrative. In 2026, a "sustainable" pouch is only effective if its <strong>visual communication</strong> is clear, accurate, and <strong>legally compliant</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-800">The Branding Conflict</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• High plate costs for small brands</li>
                  <li>• Color inconsistency across substrates</li>
                  <li>• Lack of clear recycling instructions</li>
                  <li>• Heavy solvent-based ink usage</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">The Achieve Pack Standard</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• HP Indigo 25K Digital Printing</li>
                  <li>• G7 Master Certified Color Logic</li>
                  <li>• Food-Safe & Compostable Inks</li>
                  <li>• Zero Plate Fees for Startups</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we treat custom printing as a <strong>technical deliverable</strong>. From <strong>Delta-E (ΔE) color deviation control</strong> to <strong>NIR-sortable ink systems</strong>, we ensure your brand stands out while remaining 100% compliant with global circularity mandates.
          </p>
        </div>
      )
    },
    {
      id: 'print-methodology',
      title: 'Printing Methodology: Digital vs. Rotogravure',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The choice of printing method depends on your <strong>brand scale</strong> and <strong>SKU complexity</strong>. We provide both technologies under one roof to ensure optimal efficiency.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">Digital (HP Indigo 25K)</h4>
              <p className="text-sm text-neutral-600 mb-4">Best for: Startups, seasonal SKUs, and high-complexity designs.</p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• No plate fees or setup waste</li>
                <li>• 1200 DPI photographic resolution</li>
                <li>• 100% Variable data (VDP) capable</li>
                <li>• 3-4 week lead times</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">High-Speed Rotogravure</h4>
              <p className="text-sm text-neutral-600 mb-4">Best for: Enterprise brands, high-volume (20k+) static SKUs.</p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• Lowest per-unit cost at scale</li>
                <li>• Superior ink density and solid colors</li>
                <li>• Specialized metallic and neon effects</li>
                <li>• Copper-plate precision</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High definition custom printed pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: G7 Master Certification ensures color consistency across all material substrates"
            />
          </div>
        </div>
      )
    },
    {
      id: 'sustainable-inks',
      title: 'The Science of Inks: Safety & Circularity',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Inks are a critical component of <strong>Material Health</strong>. We utilize advanced ink systems that are designed for food safety and the circular economy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Advanced Ink Tech</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">HP ElectroInk (Food Safe)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Meets the strictest FDA/EFSA regulations for low-migration food contact.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">NIR-Sortable Black</h5>
                  <p className="text-xs text-neutral-600 mt-1">Specialized inks that allow black packaging to be correctly sorted in recycling streams.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Certified Compostable Inks</h5>
                  <p className="text-xs text-neutral-600 mt-1">Inks that break down fully without soil toxicity (EN 13432 compliant).</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Color Matching & ΔE Control</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We maintain a <strong>Delta-E (ΔE) deviation of &lt; 2.0</strong>, ensuring your brand's visual identity remains invariant across different light sources and material types. Our laboratory utilizes spectrophotometry on every batch to verify this precision.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Bring Your Brand to Life',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-purple-800 to-indigo-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Expert Printing. Sustainable Execution.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to design your custom sustainable pouches? Our technical team will help you optimize your artwork for our advanced print lines today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Print Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Finish Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            G7 CERTIFIED • FOOD SAFE • NO PLATE FEES • LOW MOQ (500)
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Do you offer soft-touch or spot-UV finishes?",
      answer: "Yes. Both our digital and rotogravure lines can apply premium tactile finishes like soft-touch matte, high-gloss, and spot-UV varnishes to enhance your unboxing experience."
    },
    {
      question: "How do I ensure my colors are accurate?",
      answer: "We recommend specifying Pantone Solid Coated (PMS) codes. We use G7 Master Certified processes and spectrophotometer verification to match your brand colors with extreme precision."
    },
    {
      question: "Can I print on the bottom or side gussets?",
      answer: "Absolutely. We offer 360-degree printing, allowing you to utilize every square inch of your pouch for branding, storytelling, or regulatory information."
    },
    {
      question: "What is the lead time for custom printed pouches?",
      answer: "Digital orders typically ship in 3-4 weeks. High-speed rotogravure orders, which require plate manufacturing, ship in 8-10 weeks."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Custom Printed Sustainable Pouches | G7 Color Engineering | Achieve Pack</title>
        <meta name="description" content="The master guide to custom printed sustainable pouches. 800+ words on digital vs. rotogravure, G7 color science, food-safe inks, and low-MOQ branding." />
        <link rel="canonical" href="https://achievepack.com/topics/custom-printed-sustainable-pouches" />
        <meta name="keywords" content="custom printed pouches, sustainable pouch printing, digital pouch printing, G7 color matching, food safe inks, custom branded sustainable packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#4c1d95"
        title="Custom Printed Sustainable Pouches: Engineering Identity"
        description="Transforming sustainable materials into powerful brand assets through elite printing technology and color science."
        keywords={['custom printed pouches', 'sustainable branding', 'packaging design']}
        heroTitle="Your Brand. Our Tech."
        heroSubtitle="G7 Master Certified | Digital & Rotogravure | Food Safe Inks | Zero Plate Options"
        introSummary="Your packaging is your most visible sustainability statement. This guide outlines how we use advanced digital and rotogravure technology to deliver ultra-high-resolution branding on eco-friendly substrates—ensuring your identity is as pure as your product."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CustomPrintedSustainablePouchesPage
