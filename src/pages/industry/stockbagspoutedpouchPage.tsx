import React from 'react'
import { useTranslation } from 'react-i18next'
import { Leaf, Beaker, Zap, Layers, BookOpen, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const StockBagSpoutedPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.stockSpoutedPouch'

  const sections = [
    {
      id: 'mockup',
      title: t(`${p}.sections.mockup.title`, 'Spouted Pouch Showcase'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">{t(`${p}.sections.mockup.desc`, 'Click the product mockups below to enlarge:')}</p>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/imgs/pouches/spouted_pouch_1_1783005263734.jpg" 
                alt="Aluminum Foil Spout Pouch" 
                className="max-w-full rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
                caption="Spouted Pouch - Main View"
              />
            </div>
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/imgs/pouches/spouted_pouch_2_1783005275031.jpg" 
                alt="Spouted Pouch Detail" 
                className="max-w-full rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
                caption="Spouted Pouch - Detail View"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Premium Features for Liquid Packaging'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            {t(`${p}.sections.features.desc1`, 'Our Aluminum Foil Spout Pouches are lightproof liquid bags perfectly designed for beverages like beer, drinks, jam, sauce, and other liquids. They offer superior barrier properties to extend the shelf life of your products while providing a premium unboxing experience.')}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(`${p}.sections.features.li1`, 'Lightproof aluminum foil structure protects sensitive liquids from UV degradation.')}</li>
            <li>{t(`${p}.sections.features.li2`, 'Leak-proof screw cap design ensures secure transportation and easy dispensing.')}</li>
            <li>{t(`${p}.sections.features.li3`, 'Durable bottom gusset allows the pouch to stand upright on retail shelves.')}</li>
            <li>{t(`${p}.sections.features.li4`, 'Eco-friendly alternatives available, minimizing plastic footprint.')}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`, 'Technical Specifications & Materials'),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>{t(`${p}.sections.specifications.desc`, 'Made with FDA-approved, BPA-free food-grade materials, our spouted pouches are safe for hot fill and cold fill applications, providing excellent resistance to punctures and drops.')}</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.q1`, 'Are these pouches suitable for hot filling?'), answer: t(`${p}.faqs.a1`, 'Yes, our aluminum foil spout pouches can handle hot fill applications up to 85°C (185°F).') },
    { question: t(`${p}.faqs.q2`, 'What is the minimum order quantity (MOQ)?'), answer: t(`${p}.faqs.a2`, 'Our stock spouted pouches have a low MOQ starting from just 100 pieces, making them ideal for small businesses and startups.') },
    { question: t(`${p}.faqs.q3`, 'Can I customize the print on the pouches?'), answer: t(`${p}.faqs.a3`, 'While these are stock bags, we offer fully customizable digital printing options for bulk orders. Contact our sales team for details.') }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`, 'Available Sizes and Capacities'),
      data: {
        headers: [t(`${p}.table.headers.0`, 'Capacity (ml)'), t(`${p}.table.headers.1`, 'Dimensions (W x H + BG)')],
        rows: [
          [t(`${p}.table.rows.0.0`, '100ml'), t(`${p}.table.rows.0.1`, '90 x 130 + 30 mm')],
          [t(`${p}.table.rows.1.0`, '250ml'), t(`${p}.table.rows.1.1`, '110 x 170 + 35 mm')],
          [t(`${p}.table.rows.2.0`, '500ml'), t(`${p}.table.rows.2.1`, '130 x 200 + 40 mm')],
          [t(`${p}.table.rows.3.0`, '1000ml'), t(`${p}.table.rows.3.1`, '150 x 250 + 50 mm')]
        ]
      }
    }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`, 'Stock Bag Spouted Pouch')}
      description={t(`${p}.description`, 'Aluminum foil spout pouch lightproof liquid bag for beer, drinks, jam, and sauce.')}
      heroSubtitle={t(`${p}.heroSubtitle`, 'Aluminum foil spout pouch lightproof liquid bag for beer, drinks, jam, and sauce.')}
      heroImage="/imgs/pouches/spouted_pouch_1_1783005263734.jpg"
      contentCategory={t(`${p}.contentCategory`, 'Spout Pouches')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      relatedLinks={[
        { title: t(`${p}.relatedLinks.0.title`, 'Custom Spout Pouches'), url: "/industry/custom-spout-pouches", description: t(`${p}.relatedLinks.0.description`, 'Fully customizable spouted pouches with digital printing') },
        { title: t(`${p}.relatedLinks.1.title`, 'High Barrier Food Pouches'), url: "/industry/high-barrier-food-pouches", description: t(`${p}.relatedLinks.1.description`, 'Excellent barrier properties for food preservation') }
      ]}
    />
  )
}

export default StockBagSpoutedPouchPage
