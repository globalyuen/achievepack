import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Target, Sparkles, Shield, Eye, Settings, HelpCircle, Calendar, Package, CheckCircle2, Info } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const GreenCoffeeMaterialsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const IMAGES = {
    hero: '/imgs/topics/green-coffee-materials/hero.jpg',
    process: '/imgs/topics/green-coffee-materials/process.jpg',
    comparison: '/imgs/topics/green-coffee-materials/comparison.jpg'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Hidden Cost of Green Coffee Materials Failures',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg font-medium text-neutral-900 leading-relaxed">
            You've spent months perfecting your product, but standard packaging often fails to meet technical requirements during high-stress transit or shelf-life. This leads to compromised barrier integrity and damaged brand reputation.
          </p>
          <p className="text-base">
            We understand the frustration. That's why our <strong>Green Coffee Materials</strong> is engineered to deliver unmatched reliability, featuring advanced multi-layer laminates and precision manufacturing to eliminate these risks entirely.
          </p>
        </div>
      )
    },
    {
      id: 'technology',
      title: 'What makes our Green Coffee Materials Superior?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Our Green Coffee Materials utilizes proprietary extrusion processes and high-grade materials to ensure maximum protection against oxygen, moisture, and UV light degradation.
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Green Coffee Materials manufacturing process" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Precision engineering for Green Coffee Materials"
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: 'From Ryan Wong’s Engineering Notebook',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER AUDIT NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "When analyzing Green Coffee Materials, many suppliers overlook the critical stress points. By integrating a highly durable intermediate layer, we have achieved a 300% increase in tensile strength, ensuring FDA and EU food contact compliance without sacrificing structural integrity."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> BRCGS, FDA & EU Food Contact Standard Compliance
          </p>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Standard vs Premium Green Coffee Materials',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Unlike conventional options, our solution minimizes material fatigue and enhances presentation.
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Comparison of Green Coffee Materials" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison showcasing our superior Green Coffee Materials quality."
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Is the Green Coffee Materials compliant with global food safety standards?",
      answer: "Yes, our manufacturing process and materials are fully certified under BRCGS, FDA, and EU regulations."
    },
    {
      question: "Can we customize the dimensions and finish?",
      answer: "Absolutely. We offer fully custom dimensions, advanced closures, and matte/gloss finishes tailored to your product specifications."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Green Coffee Materials | B2B Technical Packaging</title>
        <meta name="description" content="Technical engineering guide for Green Coffee Materials. B2B sustainable packaging solutions with low MOQs and FDA compliance." />
        <link rel="canonical" href={`https://achievepack.com/topics/green-coffee-materials`} />
      </Helmet>

      <SEOPageLayout
        title="Green Coffee Materials"
        description="Engineered technical solutions for your packaging needs."
        heroImage={IMAGES.hero}
        heroImageAlt="Green Coffee Materials Hero Showcase"
        heroTitle="High-Performance Green Coffee Materials"
        heroSubtitle="Precision Engineered | BRCGS Certified | Custom Dimensions"
        introSummary="Achieve Pack delivers industrial-grade Green Coffee Materials engineered for maximum durability, barrier protection, and production line efficiency."
        aeoSummary="Our Green Coffee Materials represents the pinnacle of flexible packaging technology, combining advanced laminates with robust seal integrity to protect against oxygen and moisture."
        eeatDetails="Manufactured in BRCGS-certified facilities ensuring global compliance for direct food contact."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Technical Packaging"
      />
    </>
  )
}

export default GreenCoffeeMaterialsPage
