import React from 'react'
import { Palette, Zap, Package, CheckCircle, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'

const DigitalPrintingPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Digital Printing for Eco-Friendly Pouches',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's digital printing technology enables unlimited colors, photographic quality, and variable data printing on sustainable packaging.</strong> Perfect for small batches, seasonal designs, and brands that need flexibility without minimum order commitments.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Digital Printing Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No plate costs</strong> – Eliminate expensive plate setup fees (saving $500-2000)</li>
            <li><strong>Unlimited colors</strong> – Full CMYK + white, no extra cost for additional colors</li>
            <li><strong>Low MOQ</strong> – Start from just 500 pouches for custom designs</li>
            <li><strong>Fast turnaround</strong> – 2-3 weeks vs 4-6 weeks for traditional printing</li>
            <li><strong>Variable data</strong> – Unique QR codes, serial numbers, or personalization per pouch</li>
          </ul>
        </div>
      )
    },
    {
      id: 'technology',
      title: 'HP Indigo Digital Technology',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We use HP Indigo 25K digital presses, the gold standard for flexible packaging printing:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Print Quality</h4>
              <ul className="text-sm space-y-1">
                <li>• 1200 dpi resolution for sharp text and images</li>
                <li>• 97% Pantone color matching capability</li>
                <li>• Photorealistic image reproduction</li>
                <li>• Consistent color across entire print run</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Food-Safe Inks</h4>
              <ul className="text-sm space-y-1">
                <li>• FDA-compliant electroink technology</li>
                <li>• Low migration inks for food contact</li>
                <li>• Odorless and taste-neutral</li>
                <li>• Swiss Ordonnance certified</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Applications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Digital printing is perfect for:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Startup Brands (500-5000 units)',
              'Seasonal Limited Editions',
              'Product Testing & Trials',
              'Multiple SKU Variations',
              'Event & Promotional Packaging',
              'Personalized Gifts & Subscriptions',
              'Regional Flavor Variants',
              'Short-Run Private Labels',
              'Prototype & Mockup Production'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Digital vs Plate Printing',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right printing method for your needs:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Feature</th>
                  <th className="text-left p-3 border">Digital Printing</th>
                  <th className="text-left p-3 border">Plate Printing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Setup Cost</td><td className="p-3 border text-green-600">$0</td><td className="p-3 border">$500-2000</td></tr>
                <tr><td className="p-3 border font-medium">Minimum Order</td><td className="p-3 border text-green-600">500 pcs</td><td className="p-3 border">5,000-10,000 pcs</td></tr>
                <tr><td className="p-3 border font-medium">Colors</td><td className="p-3 border text-green-600">Unlimited</td><td className="p-3 border">Up to 10 colors</td></tr>
                <tr><td className="p-3 border font-medium">Lead Time</td><td className="p-3 border text-green-600">2-3 weeks</td><td className="p-3 border">4-6 weeks</td></tr>
                <tr><td className="p-3 border font-medium">Best For</td><td className="p-3 border">Small batches, testing</td><td className="p-3 border">High volume production</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: 'Order Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$0</div>
              <div className="text-sm text-neutral-600">Plate Setup Cost</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2-3</div>
              <div className="text-sm text-neutral-600">Weeks Turnaround</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the maximum print size for digital printing?",
      answer: "Our HP Indigo presses can print up to 720mm web width, suitable for pouches up to 350mm x 500mm. For larger formats, we recommend our plate printing service."
    },
    {
      question: "Can digital printing match my exact Pantone colors?",
      answer: "HP Indigo achieves 97% Pantone matching capability. For critical brand colors, we recommend a proof sample before production. Some fluorescent and metallic colors may require plate printing."
    },
    {
      question: "Is digital printing suitable for food packaging?",
      answer: "Yes, our HP Indigo electroinks are FDA-compliant and Swiss Ordonnance certified for food contact. The inks are low-migration and odorless, making them safe for direct food packaging."
    },
    {
      question: "What file format should I submit for digital printing?",
      answer: "We accept PDF (preferred), AI, or PSD files at 300dpi minimum. CMYK color mode is required. We provide free artwork checks and can help with file preparation if needed."
    }
  ]

  const relatedLinks = [
    { title: "Plate Printing (10 Colors)", url: "/printing/plate-printing", description: "High-volume gravure printing for large orders" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for retail products" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly substrate options" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.digitalPrinting.title')}
      description="Low MOQ digital printing on sustainable pouches. No plate costs, unlimited colors, 500pc minimum. HP Indigo quality with 2-3 week turnaround. Perfect for startups and small batches."
      keywords={['digital printing pouches', 'low MOQ packaging', 'HP Indigo flexible packaging', 'custom printed pouches', 'no plate cost printing', 'small batch packaging']}
      canonicalUrl="https://achievepack.com/printing/digital-printing"
      heroTitle={t('seoPages.pages.digitalPrinting.heroTitle')}
      heroSubtitle={t('seoPages.pages.digitalPrinting.heroSubtitle')}
      heroImage="/imgs/solution-cosmetics.webp"
      heroImageAlt="HP Indigo digital printed eco-friendly pouches"
      introSummary={t('seoPages.pages.digitalPrinting.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Ready to Start Your Digital Print Project?"
      ctaDescription="Get a free quote for your custom digitally printed pouches. No plate costs, low minimums, fast delivery."
    />
  )
}

export default DigitalPrintingPage
