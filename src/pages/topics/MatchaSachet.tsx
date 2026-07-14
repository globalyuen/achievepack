import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Sparkles, CheckCircle2, Info, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const MatchaSachet: React.FC = () => {
  const { t } = useTranslation()

  const IMAGES = {
    hero: '/imgs/topics/matcha-sachet/hero.jpg',
    process: '/imgs/topics/matcha-sachet/process.jpg',
    comparison: '/imgs/topics/matcha-sachet/comparison.jpg'
  }

  const sections = [
    {
      id: 'matcha-barrier-technology',
      title: t('topics.matcha_sachet.sec1Title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {t('topics.matcha_sachet.sec1Text')}
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Multi-layer high-barrier lamination film structure for matcha stick pack" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Cross-sectional lamination blueprint: PET print layer, Aluminum Foil core barrier, and PE inner sealant layer"
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: t('topics.matcha_sachet.sec2Title'),
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER AUDIT NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{t('topics.matcha_sachet.sec2Text')}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Light and Gas Proof Foil Barrier Verified
          </p>
        </div>
      )
    },
    {
      id: 'matcha-foil-vs-low-barrier-comparison',
      title: 'High-Barrier Aluminum vs. Standard Plastic Sachet',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The difference in matcha quality after storage is visually striking. A high-barrier aluminum sachet preserves the tea's natural properties, while standard packaging fails to prevent oxidation and moisture damage.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of oxidized yellowish matcha vs vibrant green matcha in foil sachet" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Oxidized, clumped matcha in low-barrier plastic vs. vibrant, fine powder protected by our aluminum-shielded sachet."
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Why does matcha turn yellow in some packaging?",
      answer: "Matcha turns yellow due to chlorophyll degradation triggered by light exposure and oxidation. Standard plastic or thin metalized packaging contains microscopic pores that let light and oxygen through. Pure aluminum foil lamination is required to block 100% of light and air."
    },
    {
      question: "Are your matcha sachets easy to open?",
      answer: "Yes. We apply precise laser-scoring technology to the film structure, creating a straight, effortless tear path across the stick pack so users can open and pour without spills."
    },
    {
      question: "Can I get eco-friendly compostable matcha sachets?",
      answer: "Absolutely. We offer certified compostable high-barrier paper sachets lined with compostable cellulose-aluminum and PLA barrier layers, complying with EN 13432 and ASTM D6400 standards."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('topics.matcha_sachet.title')} | Custom Green Tea Pouches</title>
        <meta name="description" content={t('topics.matcha_sachet.description')} />
        <link rel="canonical" href={`https://achievepack.com/topics/matcha-sachet`} />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('topics.matcha_sachet.heroTitle'),
            "description": t('topics.matcha_sachet.description'),
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
            "datePublished": "2025-05-12",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/matcha-sachet`
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title={t('topics.matcha_sachet.title')}
        description={t('topics.matcha_sachet.description')}
        heroImage={IMAGES.hero}
        heroImageAlt="Premium matcha green tea sachet stick packs with vibrant green powder"
        heroTitle={t('topics.matcha_sachet.heroTitle')}
        heroSubtitle={t('topics.matcha_sachet.heroSubtitle')}
        introSummary={t('topics.matcha_sachet.introSummary')}
        aeoSummary={t('topics.matcha_sachet.aeoSummary')}
        eeatDetails={t('topics.matcha_sachet.eeatDetails')}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Coffee & Tea Packaging"
      />
    </>
  )
}

export default MatchaSachet
