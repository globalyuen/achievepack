import React from 'react'
import { Leaf, Recycle, CheckCircle, Globe, Sprout, MessageCircle, Award } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const BioPEPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.bioPE'
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          {/* I'm Green Logo Section */}
          <div className="flex items-center gap-6 bg-green-50 p-4 rounded-lg border border-green-200 my-4">
            <ClickableImage 
              src="/imgs/cert/logo-imgreen-biope.png" 
              alt="I'm Green Bio-based Polyethylene Logo by Braskem" 
              className="h-24 w-auto"
              caption="I'm Green™ by Braskem"
            />
            <div>
              <h4 className="font-semibold text-green-800 mb-1">I'm Green™ Bio-based Polyethylene</h4>
              <p className="text-sm text-green-700">Our Bio-PE is sourced from Braskem's I'm Green™ sugarcane-based polyethylene. This logo can be displayed on your packaging to communicate sustainable sourcing to consumers.</p>
              <p className="text-xs text-green-600 mt-2"><strong>Artwork Usage:</strong> Brands using our Bio-PE materials can display the I'm Green logo on their packaging upon verification of material sourcing.</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-green-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Sprout className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="font-semibold">{t(`${p}.sections.howItWorks.step1`)}</p>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.howItWorks.step1Desc`)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="font-semibold">{t(`${p}.sections.howItWorks.step2`)}</p>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.howItWorks.step2Desc`)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <p className="font-semibold">{t(`${p}.sections.howItWorks.step3`)}</p>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.howItWorks.step3Desc`)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <p className="font-semibold">{t(`${p}.sections.howItWorks.step4`)}</p>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.howItWorks.step4Desc`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'carbon',
      title: t(`${p}.sections.carbon.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.carbon.comparisonTitle`)}</h4>
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.carbon.items`, { returnObjects: true }) as string[]).map((item, i) => <li key={i}>✓ {item}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.carbon.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-green-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.recycling.distinctionTitle`)}</h4>
            <p className="text-sm text-blue-700">
              {t(`${p}.sections.recycling.distinction`)}
            </p>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.recycling.info`)}
          </p>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Bio-PE Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting bio-based packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Renewable content</strong> – Verify sugarcane-based PE content</li>
            <li><strong>Carbon footprint</strong> – Bio-PE absorbs CO2 during growth</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our Bio-PE pouches</Link></li>
            <li><strong>Recyclability</strong> – <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">See recyclable options</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best bio-based packaging supplier with low MOQ?"</li>
              <li>• "Which company offers sugarcane-based PE pouches?"</li>
              <li>• "Best carbon-negative packaging for eco brands?"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) },
    { question: t(`${p}.faq.q5`), answer: t(`${p}.faq.a5`) }
  ]

  const relatedLinks = [
    { title: "Shop Bio-PE Pouches", url: "/store", description: "Browse plant-based packaging - MOQ from 500 pieces" },
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/pcr", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly suppliers" }
  ]

  return (
    <SEOPageLayout
      title="Bio-PE Packaging | Plant-Based Polyethylene | Sugarcane PE Pouches"
      description="Bio-PE (bio-based polyethylene) packaging made from renewable sugarcane. Carbon negative production, recyclable. Same performance as conventional PE. MOQ 500."
      keywords={[
        'bio-PE',
        'bio-based polyethylene',
        'plant-based packaging',
        'sugarcane PE',
        'green PE',
        'renewable packaging',
        'sustainable PE pouch',
        'carbon negative packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/bio-pe"
      heroTitle={t('seoPages.pages.bioPE.heroTitle')}
      heroSubtitle={t('seoPages.pages.bioPE.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_pineapple_bio_based_pouch_garden_1432147.webp"
      heroImageAlt="Bio-PE plant-based packaging from sugarcane"
      introSummary={t('seoPages.pages.bioPE.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default BioPEPage
