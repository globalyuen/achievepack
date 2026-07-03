import React from 'react'
import { Leaf, Beaker, Zap, Layers, BookOpen, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const StockBagSpoutedPouchPage: React.FC = () => {
  const sections = [
    {
      id: 'mockup',
      title: 'Spouted Pouch Showcase',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the product mockups below to enlarge:</p>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/imgs/seo/spout_pouch_1.png" 
                alt="Aluminum Foil Spout Pouch" 
                className="max-w-full rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
                caption="Spouted Pouch - Main View"
              />
            </div>
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/imgs/seo/spout_pouch_2.png" 
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
      title: "Premium Features for Liquid Packaging",
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Our Aluminum Foil Spout Pouches are lightproof liquid bags perfectly designed for beverages like beer, drinks, jam, sauce, and other liquids. They offer superior barrier properties to extend the shelf life of your products while providing a premium unboxing experience.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lightproof aluminum foil structure protects sensitive liquids from UV degradation.</li>
            <li>Leak-proof screw cap design ensures secure transportation and easy dispensing.</li>
            <li>Durable bottom gusset allows the pouch to stand upright on retail shelves.</li>
            <li>Eco-friendly alternatives available, minimizing plastic footprint.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specifications',
      title: "Technical Specifications & Materials",
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>Made with FDA-approved, BPA-free food-grade materials, our spouted pouches are safe for hot fill and cold fill applications, providing excellent resistance to punctures and drops.</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: "Are these pouches suitable for hot filling?", answer: "Yes, our aluminum foil spout pouches can handle hot fill applications up to 85°C (185°F)." },
    { question: "What is the minimum order quantity (MOQ)?", answer: "Our stock spouted pouches have a low MOQ starting from just 100 pieces, making them ideal for small businesses and startups." },
    { question: "Can I customize the print on the pouches?", answer: "While these are stock bags, we offer fully customizable digital printing options for bulk orders. Contact our sales team for details." }
  ]

  const tables = [
    {
      title: "Available Sizes and Capacities",
      data: {
        headers: ["Capacity (ml)", "Dimensions (W x H + BG)"],
        rows: [
          ["100ml", "90 x 130 + 30 mm"],
          ["250ml", "110 x 170 + 35 mm"],
          ["500ml", "130 x 200 + 40 mm"],
          ["1000ml", "150 x 250 + 50 mm"]
        ]
      }
    }
  ]

  return (
    <SEOPageLayout
      title="Stock Bag Spouted Pouch"
      description="Aluminum foil spout pouch lightproof liquid bag for beer, drinks, jam, and sauce."
      heroSubtitle="Aluminum foil spout pouch lightproof liquid bag for beer, drinks, jam, and sauce."
      heroImage="/imgs/seo/spout_pouch_1.png"
      contentCategory="Spout Pouches"
      sections={sections}
      faqs={faqs}
      tables={tables}
      relatedLinks={[
        { title: "Custom Spout Pouches", url: "/industry/custom-spout-pouches", description: "Fully customizable spouted pouches with digital printing" },
        { title: "High Barrier Food Pouches", url: "/industry/high-barrier-food-pouches", description: "Excellent barrier properties for food preservation" }
      ]}
    />
  )
}

export default StockBagSpoutedPouchPage
