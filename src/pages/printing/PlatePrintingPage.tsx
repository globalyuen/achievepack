import React from 'react'
import { Layers, Award, Package, CheckCircle, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'

const PlatePrintingPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.platePrinting.sections.overview'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's rotogravure plate printing delivers exceptional quality for high-volume production runs.</strong> With up to 10 spot colors, metallic inks, and premium finishes, plate printing is the choice for established brands seeking maximum shelf impact.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Plate Printing Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Up to 10 spot colors</strong> – Including Pantone matching, metallics, and fluorescents</li>
            <li><strong>Lowest unit cost</strong> – Economies of scale for orders 10,000+ units</li>
            <li><strong>Premium finishes</strong> – Matte, gloss, soft-touch, spot UV, hot foil stamping</li>
            <li><strong>Consistent quality</strong> – Precise registration across millions of impressions</li>
            <li><strong>Large format capability</strong> – Up to 1200mm web width for oversized pouches</li>
          </ul>
        </div>
      )
    },
    {
      id: 'technology',
      title: t('seoPages.pages.platePrinting.sections.technology'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our state-of-the-art gravure presses deliver unmatched print quality:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Print Excellence</h4>
              <ul className="text-sm space-y-1">
                <li>• 175-200 LPI screen for fine detail</li>
                <li>• Laser-engraved chrome cylinders</li>
                <li>• Sub-0.1mm registration accuracy</li>
                <li>• Consistent ink density across run</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Special Effects</h4>
              <ul className="text-sm space-y-1">
                <li>• Metallic gold, silver, copper inks</li>
                <li>• Spot UV and matte varnish</li>
                <li>• Hot foil stamping and embossing</li>
                <li>• Holographic and security features</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t('seoPages.pages.platePrinting.sections.applications'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Plate printing is ideal for:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Established Brands (10,000+ units)',
              'National Retail Distribution',
              'Premium Product Lines',
              'Metallic & Specialty Colors',
              'Long-Term Supply Contracts',
              'Private Label Manufacturing',
              'Luxury Food & Beverage',
              'Export & Multi-Market Products',
              'High-Volume Subscription Boxes'
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
      id: 'finishes',
      title: t('seoPages.pages.platePrinting.sections.finishes'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Elevate your packaging with our finishing options:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Surface Finishes</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Gloss lamination</li>
                <li>• Matte lamination</li>
                <li>• Soft-touch coating</li>
                <li>• Anti-scuff varnish</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Premium Effects</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Spot UV highlight</li>
                <li>• Hot foil stamping</li>
                <li>• Embossing/debossing</li>
                <li>• Registered metallics</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Security Features</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• Holographic strips</li>
                <li>• UV-reactive inks</li>
                <li>• Micro-text printing</li>
                <li>• QR authentication</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: t('seoPages.pages.platePrinting.sections.order'),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10</div>
              <div className="text-sm text-neutral-600">Max Spot Colors</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4-6</div>
              <div className="text-sm text-neutral-600">Weeks Lead Time</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            *Plate costs typically range from $500-2000 depending on number of colors and cylinder size. Plates are stored free for 2 years for repeat orders.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How much do printing plates cost?",
      answer: "Plate costs vary based on pouch size and number of colors. Typical costs range from $50-200 per color cylinder. A 6-color job on a standard pouch size would cost approximately $600-1200 for plates. Plates are stored free for 2 years, making repeat orders much more economical."
    },
    {
      question: "What's the minimum order for plate printing?",
      answer: "Our minimum order for rotogravure plate printing is 5,000 units. For smaller quantities (500-5000), we recommend digital printing which has no plate costs. For orders above 10,000 units, plate printing typically becomes more cost-effective."
    },
    {
      question: "Can I use metallic Pantone colors?",
      answer: "Yes, our gravure printing supports metallic Pantone colors including golds, silvers, and copper. We can also print with metallic base inks overlaid with transparent colors for unique effects. Metallic inks count as spot colors in your design."
    },
    {
      question: "How long are plates stored for reorders?",
      answer: "We store your printing cylinders free of charge for 2 years from the last order. After 2 years of inactivity, we'll contact you before disposal. For active accounts, plates are stored indefinitely at no additional cost."
    }
  ]

  const relatedLinks = [
    { title: "Digital Printing", url: "/printing/digital-printing", description: "Low MOQ option for small batches" },
    { title: "Surface Finish Options", url: "/features/surface-finish", description: "Matte, gloss, soft-touch finishes" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium shelf presence format" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.platePrinting.title')}
      description="High-volume rotogravure printing for eco-friendly pouches. Up to 10 spot colors, metallic inks, spot UV, and hot foil stamping. Best unit cost for orders 10,000+."
      keywords={['gravure printing', 'plate printing pouches', 'rotogravure packaging', 'metallic ink printing', 'high volume packaging', 'premium pouch printing']}
      canonicalUrl="https://achievepack.com/printing/plate-printing"
      heroTitle={t('seoPages.pages.platePrinting.heroTitle')}
      heroSubtitle={t('seoPages.pages.platePrinting.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_plate_printing_quality_7667893.webp"
      heroImageAlt="Gravure printed premium eco-friendly pouches"
      introSummary={t('seoPages.pages.platePrinting.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.platePrinting.cta.title')}
      ctaDescription={t('seoPages.pages.platePrinting.cta.description')}
      ctaButtonText={t('seoPages.pages.platePrinting.cta.button')}
    />
  )
}

export default PlatePrintingPage
