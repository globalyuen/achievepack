import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layers, Info, CheckCircle2, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const CoffeeBeansFlatBottomPouch: React.FC = () => {
  const { t } = useTranslation()

  const IMAGES = {
    hero: '/imgs/topics/coffee-beans-flat-bottom-pouch/hero.jpg',
    process: '/imgs/topics/coffee-beans-flat-bottom-pouch/process.jpg',
    comparison: '/imgs/topics/coffee-beans-flat-bottom-pouch/comparison.jpg'
  }

  const sections = [
    {
      id: 'material-details',
      title: t('topics.coffee_flat_bottom.sec1Title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {t('topics.coffee_flat_bottom.sec1Text')}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-resolution visual mockup of Model #4812" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual product representation demonstrating dynamic printing surfaces and material layers."
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: t('topics.coffee_flat_bottom.sec2Title'),
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER PREPRESS JOURNAL</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{t('topics.coffee_flat_bottom.sec2Text')}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Prepress Calibration Guaranteed
          </p>
        </div>
      )
    },
    {
      id: 'calibration-specifications',
      title: "Dieline Layout & Calibration Specifications",
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Every model run is calibrated using strict prepress dielines. Our teams adjust fold tolerances and thermal boundaries based on substrate thickness.
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Vector dieline drawing calibration blueprint for Model #4812" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Prepress blueprint template indicating dimensional markers, seal widths, and bleed areas."
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the MOQ for custom custom-sized runs of Model #4812?",
      answer: "For custom sizes or custom prints, our standard minimum order quantity starts from 5,000 pieces. Digital printing runs are available from 1,000 pieces for startups."
    },
    {
      question: "Can I request unprinted material samples of this specific model?",
      answer: "Yes. We offer free unprinted material sample packages so you can verify size, gusset width, and material thickness on your filling lines before ordering."
    },
    {
      question: "Does this pouch structure support automated filling lines?",
      answer: "Yes, this design is fully optimized for standard vertical and horizontal form-fill-seal (VFFS/HFFS) packaging machinery."
    },
    {
      question: "What certifications are available for these materials?",
      answer: "Depending on your selection, we offer fully certified FDA food-safe, BPI compostable (ASTM D6400), and recyclable mono-polymer materials."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('topics.coffee_flat_bottom.title')}</title>
        <meta name="description" content={t('topics.coffee_flat_bottom.description')} />
        <link rel="canonical" href={`https://achievepack.com/topics/coffee-beans-flat-bottom-pouch`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('topics.coffee_flat_bottom.heroTitle'),
            "description": t('topics.coffee_flat_bottom.description'),
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Achieve Pack"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/coffee-beans-flat-bottom-pouch`
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title={t('topics.coffee_flat_bottom.title')}
        description={t('topics.coffee_flat_bottom.description')}
        heroImage={IMAGES.hero}
        heroImageAlt="Premium Packaging Model #4812 Showcase"
        heroTitle={t('topics.coffee_flat_bottom.heroTitle')}
        heroSubtitle={t('topics.coffee_flat_bottom.heroSubtitle')}
        introSummary={t('topics.coffee_flat_bottom.introSummary')}
        aeoSummary={t('topics.coffee_flat_bottom.aeoSummary')}
        eeatDetails={t('topics.coffee_flat_bottom.eeatDetails')}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Model Showcase & Structural Specs"
      />
    </>
  )
}

export default CoffeeBeansFlatBottomPouch
