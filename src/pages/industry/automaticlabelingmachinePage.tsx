import React from 'react'
import { Leaf, Beaker, Zap, Layers, BookOpen, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const AutomaticLabelingMachinePage: React.FC = () => {
  const sections = [
    {
      id: 'mockup',
      title: 'Machine Showcase',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Explore the Automatic Labeling Machine for Packaging Boxes and Pouches:</p>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/taobao/Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels/O1CN016ZhDFP2EpFUnVyDls_--2165598793.jpg" 
                alt="Automatic Labeling Machine" 
                className="max-w-full rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
                caption="Labeling Machine - Main View"
              />
            </div>
            <div className="flex flex-col items-center">
              <ClickableImage 
                src="/taobao/Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels/O1CN01Dr0Uy42EpFUwqmjVi_--2165598793.jpg" 
                alt="Labeling Process" 
                className="max-w-full rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
                caption="Labeling Process - Detail View"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: "Key Features and Benefits",
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The Full-automatic labeling machine is engineered for precision and speed, suitable for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels. It offers a reliable and efficient way to automate your packaging workflow.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>High-precision stepper/servo motor drive.</li>
            <li>Advanced PLC control system with a user-friendly touch screen.</li>
            <li>Adjustable labeling speed and position.</li>
            <li>Durable stainless steel construction for long-term reliability.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specifications',
      title: "Technical Specifications",
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>Designed for industrial applications, ensuring maximum throughput and minimal downtime.</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: "What materials can this machine label?", answer: "It can label a variety of materials including paper boxes, plastic lids, cards, and PE self-adhesive labels used in cosmetics." },
    { question: "Is it easy to integrate into existing production lines?", answer: "Yes, it features a modular design and adjustable conveyor height for seamless integration." },
    { question: "Does it come with a warranty?", answer: "Yes, it includes a 1-year manufacturer warranty and technical support." }
  ]

  const tables = [
    {
      title: "Machine Specifications",
      data: {
        headers: ["Specification", "Detail"],
        rows: [
          ["Power Supply", "220V/50Hz or customized"],
          ["Labeling Speed", "30-150 pcs/min"],
          ["Labeling Accuracy", "±1.0 mm"],
          ["Applicable Label Size", "W: 10-150mm, L: 10-100mm"]
        ]
      }
    }
  ]

  return (
    <SEOPageLayout
      title="Automatic Labeling Machine"
      description="Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels."
      heroSubtitle="Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels."
      heroImage="/taobao/Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels/O1CN01RiEkx62EpFUvmW5zJ_--2165598793.jpg"
      contentCategory="Packaging Machinery"
      sections={sections}
      faqs={faqs}
      tables={tables}
      relatedLinks={[
        { title: "Custom Printed Pouches", url: "/packaging/stand-up-pouches", description: "High-quality custom printed stand-up pouches" },
        { title: "Custom Boxes", url: "/packaging/custom-boxes", description: "Premium custom printed packaging boxes" }
      ]}
    />
  )
}

export default AutomaticLabelingMachinePage
