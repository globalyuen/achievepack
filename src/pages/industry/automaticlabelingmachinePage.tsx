import React from 'react'
import { useTranslation } from 'react-i18next'
import { Leaf, Beaker, Zap, Layers, BookOpen, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const AutomaticLabelingMachinePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.automaticLabelingMachine'

  const sections = [
    {
      id: 'mockup',
      title: t(`${p}.sections.mockup.title`, 'Machine Showcase'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">{t(`${p}.sections.mockup.desc`, 'Explore the Automatic Labeling Machine for Packaging Boxes and Pouches:')}</p>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <ClickableImage 
                src="/imgs/machinery/labeling_machine_1_1782950839286.jpg" 
                alt="Automatic Labeling Machine Setup"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <ClickableImage 
                src="/imgs/machinery/labeling_machine_3_1782950910958.jpg" 
                alt="Detailed View of Labeling Machine"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Key Features and Benefits'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            {t(`${p}.sections.features.desc1`, 'The Full-automatic labeling machine is engineered for precision and speed, suitable for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels. It offers a reliable and efficient way to automate your packaging workflow.')}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(`${p}.sections.features.li1`, 'High-precision stepper/servo motor drive.')}</li>
            <li>{t(`${p}.sections.features.li2`, 'Advanced PLC control system with a user-friendly touch screen.')}</li>
            <li>{t(`${p}.sections.features.li3`, 'Adjustable labeling speed and position.')}</li>
            <li>{t(`${p}.sections.features.li4`, 'Durable stainless steel construction for long-term reliability.')}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`, 'Technical Specifications'),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>{t(`${p}.sections.specifications.desc`, 'Designed for industrial applications, ensuring maximum throughput and minimal downtime.')}</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.q1`, 'What materials can this machine label?'), answer: t(`${p}.faqs.a1`, 'It can label a variety of materials including paper boxes, plastic lids, cards, and PE self-adhesive labels used in cosmetics.') },
    { question: t(`${p}.faqs.q2`, 'Is it easy to integrate into existing production lines?'), answer: t(`${p}.faqs.a2`, 'Yes, it features a modular design and adjustable conveyor height for seamless integration.') },
    { question: t(`${p}.faqs.q3`, 'Does it come with a warranty?'), answer: t(`${p}.faqs.a3`, 'Yes, it includes a 1-year manufacturer warranty and technical support.') }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`, 'Machine Specifications'),
      data: {
        headers: [t(`${p}.table.headers.0`, 'Specification'), t(`${p}.table.headers.1`, 'Detail')],
        rows: [
          [t(`${p}.table.rows.0.0`, 'Power Supply'), t(`${p}.table.rows.0.1`, '220V/50Hz or customized')],
          [t(`${p}.table.rows.1.0`, 'Labeling Speed'), t(`${p}.table.rows.1.1`, '30-150 pcs/min')],
          [t(`${p}.table.rows.2.0`, 'Labeling Accuracy'), t(`${p}.table.rows.2.1`, '±1.0 mm')],
          [t(`${p}.table.rows.3.0`, 'Applicable Label Size'), t(`${p}.table.rows.3.1`, 'W: 10-150mm, L: 10-100mm')]
        ]
      }
    }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`, 'Automatic Labeling Machine')}
      description={t(`${p}.description`, 'Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels.')}
      heroSubtitle={t(`${p}.heroSubtitle`, 'Full-automatic labeling machine for packaging color boxes, lids, cards, and cosmetic PE self-adhesive labels.')}
      heroImage="/imgs/machinery/labeling_machine_logo_1782952599869.jpg"
      contentCategory={t(`${p}.contentCategory`, 'Packaging Machinery')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      relatedLinks={[
        { title: t(`${p}.relatedLinks.0.title`, 'Custom Printed Pouches'), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.0.description`, 'High-quality custom printed stand-up pouches') },
        { title: t(`${p}.relatedLinks.1.title`, 'Custom Boxes'), url: "/packaging/custom-boxes", description: t(`${p}.relatedLinks.1.description`, 'Premium custom printed packaging boxes') }
      ]}
    />
  )
}

export default AutomaticLabelingMachinePage
