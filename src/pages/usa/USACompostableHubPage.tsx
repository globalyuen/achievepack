import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Leaf, Shield, Award, CheckCircle, Globe, MapPin, FileCheck, AlertTriangle, MessageCircle, Package, Coffee, Cookie, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const USACompostableHubPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.usaCompostableHub'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong><Link to="/" className="text-primary-600 hover:underline">{t('common.achievePack', 'Achieve Pack')}</Link> {t(`${p}.sections.overview.descStrong`)}</strong>{t(`${p}.sections.overview.descText`)}<strong>{t(`${p}.sections.overview.descStrongASTM`)}</strong>{t(`${p}.sections.overview.descTextMid`)}<strong>{t(`${p}.sections.overview.descStrongEN`)}</strong>{t(`${p}.sections.overview.descTextEnd`)}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.whyTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>{t(`${p}.sections.overview.why1Strong`)}</strong>{t(`${p}.sections.overview.why1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why2Strong`)}</strong>{t(`${p}.sections.overview.why2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why3Strong`)}</strong>{t(`${p}.sections.overview.why3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why4Strong`)}</strong>{t(`${p}.sections.overview.why4Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why5Strong`)}</strong>{t(`${p}.sections.overview.why5Text`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.demandText`)}
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp" 
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
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">
                <Link to="/materials/industrial-compostable" className="hover:underline">{t(`${p}.sections.materials.card1Title`)}</Link>
              </h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.card1Desc`)}</p>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• {t(`${p}.sections.materials.card1Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item4`)}</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">{t(`${p}.sections.materials.card1Link`)}</Link>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">
                <Link to="/materials/home-compostable" className="hover:underline">{t(`${p}.sections.materials.card2Title`)}</Link>
              </h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.card2Desc`)}</p>
              <ul className="text-xs space-y-1 text-emerald-700">
                <li>• {t(`${p}.sections.materials.card2Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item4`)}</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">{t(`${p}.sections.materials.card2Link`)}</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.materials.notSureStrong`)}</strong> <Link to="/blog/compostable-stand-up-pouch-guide-food-beverage" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.notSureLink`)}</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_sustainability_labeling_guide_7131825.webp" 
              alt={t(`${p}.sections.materials.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.materials.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`)}</p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-blue-600">ASTM</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card1Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card1Desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-green-600">BPI</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card2Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card2Desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-primary-600">EN</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card3Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card3Desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'us-reality',
      title: t(`${p}.sections.usReality.title`),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.usReality.intro`)}</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {t(`${p}.sections.usReality.amberTitle`)}
            </h4>
            <ul className="text-sm text-amber-700 space-y-2">
              <li>{t(`${p}.sections.usReality.amberItem1`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem2`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem3`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem4`)}</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.usReality.greenTitle`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.usReality.greenItem1`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem2`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem3`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem4`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem5`)}</li>
            </ul>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.usReality.alternativeStrong`)}</strong>{t(`${p}.sections.usReality.alternativeText`)}<Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.usReality.alternativeLink`)}</Link>{t(`${p}.sections.usReality.alternativeTextEnd`)}
          </p>
          
          {/* Compliance Requirements Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_label_compliance_requirements_0902238.webp" 
              alt={t(`${p}.sections.usReality.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.usReality.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'state-regulations',
      title: t(`${p}.sections.stateRegulations.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.stateRegulations.intro`)}</p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.stateRegulations.card1Title`)}</h4>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card1Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card1Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card1Item3`)}</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-emerald-800">{t(`${p}.sections.stateRegulations.card2Title`)}</h4>
              <ul className="text-sm text-emerald-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card2Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card2Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.stateRegulations.card3Title`)}</h4>
              <ul className="text-sm text-purple-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card3Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card3Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card3Item3`)}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm">
              <strong>{t(`${p}.sections.stateRegulations.needHelpStrong`)}</strong>{t(`${p}.sections.stateRegulations.needHelpText`)}<Link to="/usa/labeling-guide" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.stateRegulations.needHelpLink`)}</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'industries',
      title: t(`${p}.sections.industries.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.industries.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/usa/coffee-packaging" className="block bg-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="h-6 w-6 text-amber-700" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industries.card1Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industries.card1Desc`)}</p>
            </Link>
            <Link to="/usa/snacks-packaging" className="block bg-orange-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Cookie className="h-6 w-6 text-orange-700" />
                <h4 className="font-semibold text-orange-800">{t(`${p}.sections.industries.card2Title`)}</h4>
              </div>
              <p className="text-sm text-orange-700">{t(`${p}.sections.industries.card2Desc`)}</p>
            </Link>
            <Link to="/industry/pet-food" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-6 w-6 text-blue-700" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industries.card3Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industries.card3Desc`)}</p>
            </Link>
            <Link to="/industry/supplements-powders" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-6 w-6 text-green-700" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industries.card4Title`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industries.card4Desc`)}</p>
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
            <li><strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong> <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link></li>
            <li><strong>{t(`${p}.sections.aiSearch.factor5Strong`)}</strong>{t(`${p}.sections.aiSearch.factor5Text`)}</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.aiTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.aiSearch.aiItem1`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem2`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem3`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem4`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem5`)}</li>
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
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
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
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.heading`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.card1Button`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=USA Compostable Packaging Quote" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                {t(`${p}.sections.decisionCta.card2Button`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
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
    { title: t(`${p}.relatedLinks.1.title`), url: "/materials/home-compostable", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/usa/labeling-guide", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/blog/sustainable-packaging-supplier-analysis", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/compostable-packaging"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp"
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

export default USACompostableHubPage
