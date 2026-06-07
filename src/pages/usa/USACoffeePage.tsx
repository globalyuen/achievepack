import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Shield, CheckCircle, Clock, TrendingUp, MessageCircle, Award, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const USACoffeePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.usaCoffee'

  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-lg border border-amber-200">
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
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)}
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.overview.whyTitle`)}</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• <strong>{t(`${p}.sections.overview.why1Strong`)}</strong>{t(`${p}.sections.overview.why1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why2Strong`)}</strong>{t(`${p}.sections.overview.why2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why3Strong`)}</strong>{t(`${p}.sections.overview.why3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why4Strong`)}</strong>{t(`${p}.sections.overview.why4Text`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> {t(`${p}.sections.overview.intro`).startsWith('Achieve Pack') ? t(`${p}.sections.overview.intro`).slice('Achieve Pack'.length) : t(`${p}.sections.overview.intro`)}
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
              alt={t(`${p}.sections.overview.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.imgCaption`)}
            />
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
                <li>{t(`${p}.sections.materials.card1Item1`)}</li>
                <li>{t(`${p}.sections.materials.card1Item2`)}</li>
                <li>{t(`${p}.sections.materials.card1Item3`)}</li>
                <li>{t(`${p}.sections.materials.card1Item4`)}</li>
                <li>{t(`${p}.sections.materials.card1Item5`)}</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.materials.card2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.materials.card2Item1`)}</li>
                <li>{t(`${p}.sections.materials.card2Item2`)}</li>
                <li>{t(`${p}.sections.materials.card2Item3`)}</li>
                <li>{t(`${p}.sections.materials.card2Item4`)}</li>
                <li>{t(`${p}.sections.materials.card2Item5`)}</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.materials.altStrong`)}</strong>{t(`${p}.sections.materials.altText`)}<Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.altLink`)}</Link>{t(`${p}.sections.materials.altTextEnd`)}
          </p>
          
          {/* Technical Specs Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_pouch_technical_specs_5693348.webp" 
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.features.items`, { returnObjects: true }) as string[]).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>{t(`${p}.sections.features.popularStrong`)}</strong> <Link to="/packaging/stand-up-pouches" className="text-blue-600 hover:underline">{t(`${p}.sections.features.popularLink`)}</Link>{t(`${p}.sections.features.popularText`)}
            </p>
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
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-500">
            <blockquote className="italic text-neutral-600 mb-4">
              {t(`${p}.sections.caseStudy.quote`)}
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
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-amber-700">{t(`${p}.sections.caseStudy.stat3Value`)}</div>
              <div className="text-sm text-amber-600">{t(`${p}.sections.caseStudy.stat3Label`)}</div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.caseStudy.caseStudyLink`)}</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
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
          <p>{t(`${p}.sections.ordering.intro`)}</p>
          
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
      id: 'risk-hedging',
      title: t(`${p}.sections.riskHedging.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">{t(`${p}.sections.riskHedging.card1Title`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.riskHedging.card1Item1`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item3`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item4`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item5`)}</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.sections.riskHedging.card2Title`)}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>{t(`${p}.sections.riskHedging.card2Item1`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item3`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item4`)}</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-800 mb-2">{t(`${p}.sections.riskHedging.card3Title`)}</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>
                {t(`${p}.sections.riskHedging.card3Item1`)}
                <Link to="/materials/recyclable-mono-pe" className="underline">{t(`${p}.sections.riskHedging.card3Link`)}</Link>
                {t(`${p}.sections.riskHedging.card3Item1End`)}
              </li>
              <li>{t(`${p}.sections.riskHedging.card3Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card3Item3`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-bold text-lg">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
            <p className="text-sm opacity-90 mt-1">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
            <button onClick={openCalendly} className="inline-block mt-3 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition cursor-pointer">{t(`${p}.sections.decisionCta.card1Button`)}</button>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
            <h4 className="font-bold text-lg text-neutral-900">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
            <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
            <Link to="/store" className="inline-block mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">{t(`${p}.sections.decisionCta.card2Button`)}</Link>
          </div>
          <div className="bg-white border border-neutral-200 p-6 rounded-lg text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
            <h4 className="font-bold text-lg text-neutral-900">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
            <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
            <Link to="/case-studies/coffee-roastery" className="inline-block mt-3 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">{t(`${p}.sections.decisionCta.card3Button`)}</Link>
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
            <li><strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link></li>
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
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/store", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/usa/compostable-packaging", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/industry/coffee-tea", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/case-studies/coffee-roastery", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/coffee-packaging"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
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

export default USACoffeePage
