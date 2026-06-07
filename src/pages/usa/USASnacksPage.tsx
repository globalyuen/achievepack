import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Cookie, Leaf, Shield, CheckCircle, Clock, TrendingUp, MessageCircle, Award, ShoppingBag, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const USASnacksPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.usaSnacks'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Cookie className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)} <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t(`${p}.sections.overview.descLink`)}</Link>{t(`${p}.sections.overview.descTextEnd`)}
          </p>
          
          <div className="bg-orange-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-orange-800 mb-2">{t(`${p}.sections.overview.driversTitle`)}</h4>
            <ul className="space-y-1 text-sm text-orange-700">
              <li>• <strong>{t(`${p}.sections.overview.driver1Strong`)}</strong> {t(`${p}.sections.overview.driver1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.driver2Strong`)}</strong> {t(`${p}.sections.overview.driver2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.driver3Strong`)}</strong> {t(`${p}.sections.overview.driver3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.driver4Strong`)}</strong> {t(`${p}.sections.overview.driver4Text`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            <Link to="/" className="text-primary-600 hover:underline">{t(`${p}.sections.overview.achievePackLink`)}</Link>{t(`${p}.sections.overview.descEnd`)}
          </p>
          
          {/* Hero Snacks Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
              alt={t(`${p}.sections.overview.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t(`${p}.sections.products.title`),
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.products.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.products.items`, { returnObjects: true }) as string[]).map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{product}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materials.card1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.materials.card1Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item4`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item5`)}</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.card2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.materials.card2Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item4`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item5`)}</li>
              </ul>
              <Link to="/materials/compostable" className="text-xs text-amber-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.materials.clearWindowStrong`)}</strong>{t(`${p}.sections.materials.clearWindowText`)}<Link to="/materials/home-compostable" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.clearWindowLink`)}</Link>{t(`${p}.sections.materials.clearWindowTextEnd`)}
          </p>
          
          {/* Pouch Format Comparison Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_snacks_pouch_format_comparison_8281669.webp" 
              alt={t(`${p}.sections.materials.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.materials.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.features.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.features.card1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.features.card1Item1`)}</li>
                <li>{t(`${p}.sections.features.card1Item2`)}</li>
                <li>{t(`${p}.sections.features.card1Item3`)}</li>
                <li>{t(`${p}.sections.features.card1Item4`)}</li>
                <li>{t(`${p}.sections.features.card1Item5`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.features.card2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.features.card2Item1`)}<Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">{t(`${p}.sections.features.card2Link1`)}</Link></li>
                <li>{t(`${p}.sections.features.card2Item2`)}<Link to="/packaging/flat-bottom-bags" className="text-primary-600 hover:underline">{t(`${p}.sections.features.card2Link2`)}</Link></li>
                <li>{t(`${p}.sections.features.card2Item3`)}<Link to="/packaging/flat-pouches" className="text-primary-600 hover:underline">{t(`${p}.sections.features.card2Link3`)}</Link></li>
                <li>{t(`${p}.sections.features.card2Item4`)}</li>
                <li>{t(`${p}.sections.features.card2Item5`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t(`${p}.sections.caseStudy.title`),
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-orange-500">
            <blockquote className="italic text-neutral-600 mb-4">
              "{t(`${p}.sections.caseStudy.quote`)}"
            </blockquote>
            <p className="font-semibold text-neutral-800">{t(`${p}.sections.caseStudy.author`)}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">{t(`${p}.sections.caseStudy.stat1Value`)}</div>
              <div className="text-sm text-green-600">{t(`${p}.sections.caseStudy.stat1Label`)}</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{t(`${p}.sections.caseStudy.stat2Value`)}</div>
              <div className="text-sm text-blue-600">{t(`${p}.sections.caseStudy.stat2Label`)}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">{t(`${p}.sections.caseStudy.stat3Value`)}</div>
              <div className="text-sm text-orange-600">{t(`${p}.sections.caseStudy.stat3Label`)}</div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/natural-snacks-brand" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.caseStudy.caseStudyLink`)}</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_snacks_brand_sustainability_guide_7868632.webp" 
              alt={t(`${p}.sections.caseStudy.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.caseStudy.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: t(`${p}.sections.compliance.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.compliance.intro`)}</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert1Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert1Text`)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert2Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert2Text`)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-amber-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert3Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert3Text`)}</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/usa/labeling-guide" className="text-primary-600 hover:underline">{t(`${p}.sections.compliance.complianceLink`)}</Link>{t(`${p}.sections.compliance.complianceText`)}
          </p>
        </div>
      )
    },
    {
      id: 'ordering',
      title: t(`${p}.sections.ordering.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card1Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card1Text`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card2Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card2Text`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card3Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card3Text`)}</div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
              {t(`${p}.sections.ordering.ctaLinkText`)}
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t(`${p}.sections.aiSearch.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.aiSearch.intro`)}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t(`${p}.sections.aiSearch.factor1Strong`)}</strong>{t(`${p}.sections.aiSearch.factor1Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor2Strong`)}</strong>{t(`${p}.sections.aiSearch.factor2Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor3Strong`)}</strong>{t(`${p}.sections.aiSearch.factor3Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong><Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link></li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.aiTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.aiSearch.aiItem1`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem2`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem3`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem4`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.introText`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card1Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card2Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card3Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q1`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a1`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q2`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a2`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q3`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a3`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q4`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a4`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Cookie className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.heading`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.card1Button`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=USA Snack Packaging Quote" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
                {t(`${p}.sections.decisionCta.card2Button`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition">
                {t(`${p}.sections.decisionCta.card3Button`)}
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/store", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/usa/compostable-packaging", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/industry/snacks-food", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/case-studies/natural-snacks-brand", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/snacks-packaging"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp"
      heroImageAlt={t(`${p}.seo.heroImageAlt`)}
      introSummary={t(`${p}.seo.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.seo.ctaTitle`)}
      ctaDescription={t(`${p}.seo.ctaDescription`)}
      ctaButtonText={t(`${p}.seo.ctaButtonText`)}
    />
  )
}

export default USASnacksPage
