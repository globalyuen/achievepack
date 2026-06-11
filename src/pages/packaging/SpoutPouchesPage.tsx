import React from 'react'
import { Droplets, Package, CheckCircle, Shield, Settings, MessageCircle, Target, Calendar, Phone, Download, Mail, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const SpoutPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.spoutPouches'
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.scenarioTrigger.intro`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.col1Title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.col1Desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.col2Title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.col2Desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.col3Title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.col3Desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong> {t(`${p}.sections.overview.desc`)}
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.advantagesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ {t(`${p}.sections.overview.adv1`)}</li>
              <li>✓ {t(`${p}.sections.overview.adv2`)}</li>
              <li>✓ {t(`${p}.sections.overview.adv3`)}</li>
              <li>✓ {t(`${p}.sections.overview.adv4`)}</li>
              <li>✓ {t(`${p}.sections.overview.adv5`)}</li>
            </ul>
          </div>
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">{t(`${p}.sections.applications.col1Title`)}</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• {t(`${p}.sections.applications.col1Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col1Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col1Item3`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.applications.col2Title`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• {t(`${p}.sections.applications.col2Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col2Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.applications.col3Title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• {t(`${p}.sections.applications.col3Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col3Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col3Item3`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.applications.col4Title`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.applications.col4Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col4Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col4Item3`)}</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.applications.col5Title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• {t(`${p}.sections.applications.col5Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col5Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col5Item3`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.applications.col6Title`)}</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.applications.col6Item1`)}</li>
                <li>• {t(`${p}.sections.applications.col6Item2`)}</li>
                <li>• {t(`${p}.sections.applications.col6Item3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-options',
      title: t(`${p}.sections.spoutOptions.title`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.spoutOptions.col1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>8.6mm</strong> – {t(`${p}.sections.spoutOptions.col1Item1`)}</li>
                <li>• <strong>10mm</strong> – {t(`${p}.sections.spoutOptions.col1Item2`)}</li>
                <li>• <strong>15mm</strong> – {t(`${p}.sections.spoutOptions.col1Item3`)}</li>
                <li>• <strong>22mm</strong> – {t(`${p}.sections.spoutOptions.col1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.spoutOptions.col2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.spoutOptions.col2Item1`)}</li>
                <li>• {t(`${p}.sections.spoutOptions.col2Item2`)}</li>
                <li>• {t(`${p}.sections.spoutOptions.col2Item3`)}</li>
                <li>• {t(`${p}.sections.spoutOptions.col2Item4`)}</li>
              </ul>
            </div>
          </div>
          
          {/* Spout Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.spoutOptions.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/closure/spout.webp" 
                alt="Spout cap for liquid and beverage packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.spoutOptions.galleryCaption1`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp" 
                alt="Spout pouch for baby food and beverages" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption={t(`${p}.sections.spoutOptions.galleryCaption2`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier aluminum spout pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.spoutOptions.galleryCaption3`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/glossy.webp" 
                alt="Glossy finish for premium spout pouches" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.spoutOptions.galleryCaption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco-materials',
      title: t(`${p}.sections.ecoMaterials.title`),
      icon: <Package className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.ecoMaterials.intro`) }} />
          
          {/* Kraft-Look Explanation */}
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.ecoMaterials.kraftTitle`)}</h4>
            <p className="text-amber-900">
              <strong>{t(`${p}.sections.ecoMaterials.kraftIntro`)}</strong> {t(`${p}.sections.ecoMaterials.kraftDesc`)}
            </p>
            <p className="text-sm text-amber-700 mt-2">
              {t(`${p}.sections.ecoMaterials.kraftFootnote`)}
            </p>
          </div>
          
          {/* Important Clarification */}
          <div className="bg-blue-50 border-2 border-blue-200 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-3">{t(`${p}.sections.ecoMaterials.clarificationTitle`)}</h4>
            <p className="text-blue-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.ecoMaterials.clarificationIntro`) }} />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.ecoMaterials.biopeTitle`)}</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• {t(`${p}.sections.ecoMaterials.biopeItem1`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.biopeItem2`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.biopeItem3`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.biopeItem4`)}</li>
                </ul>
                <Link to="/materials/bio-pe" className="text-xs text-green-600 hover:underline mt-2 inline-block">{t(`${p}.sections.ecoMaterials.learnMore`)}</Link>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.ecoMaterials.pcrTitle`)}</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• {t(`${p}.sections.ecoMaterials.pcrItem1`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.pcrItem2`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.pcrItem3`)}</li>
                  <li>• {t(`${p}.sections.ecoMaterials.pcrItem4`)}</li>
                </ul>
                <Link to="/materials/pcr" className="text-xs text-purple-600 hover:underline mt-2 inline-block">{t(`${p}.sections.ecoMaterials.learnMore`)}</Link>
              </div>
            </div>
            
            <p className="text-sm text-blue-700 mt-4">
              <strong>{t(`${p}.sections.ecoMaterials.compostableIntro`)}</strong> <Link to="/materials/compostable" className="underline">{t(`${p}.sections.ecoMaterials.compostableLink`)}</Link> {t(`${p}.sections.ecoMaterials.compostableOutro`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>{t(`${p}.sections.specifications.label1`)}</strong> {t(`${p}.sections.specifications.val1`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.label2`)}</strong> {t(`${p}.sections.specifications.val2`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.label3`)}</strong> {t(`${p}.sections.specifications.val3`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.label4`)}</strong> {t(`${p}.sections.specifications.val4`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.label5`)}</strong> {t(`${p}.sections.specifications.val5`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.label6`)}</strong> {t(`${p}.sections.specifications.val6`)}</li>
            </ul>
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
            <li><strong>{t(`${p}.sections.aiSearch.bullet1Title`)}</strong> – {t(`${p}.sections.aiSearch.bullet1Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.bullet2Title`)}</strong> – {t(`${p}.sections.aiSearch.bullet2Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.bullet3Title`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.bullet3Link`)}</Link></li>
            <li><strong>{t(`${p}.sections.aiSearch.bullet4Title`)}</strong> – <Link to="/industry/sauces-condiments" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.bullet4Link`)}</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.headline`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "{t(`${p}.sections.aiSearch.query1`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.query2`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.query3`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.query4`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.query5`)}"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: t(`${p}.sections.riskHedging.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">{t(`${p}.sections.riskHedging.col1Title`)}</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.col1Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col1Item2`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col1Item3`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.sections.riskHedging.col2Title`)}</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.col2Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col2Item2`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">{t(`${p}.sections.riskHedging.col3Title`)}</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.col3Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.col3Item2`)}</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">{t(`${p}.sections.riskHedging.col3Link`)}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">{t(`${p}.sections.decisionCta.col1Title`)}</h4>
              <p className="text-sm opacity-90 mb-4">{t(`${p}.sections.decisionCta.col1Desc`)}</p>
              <button onClick={openCalendly} className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.col1Btn`)}
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.col2Title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.col2Desc`)}</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                {t(`${p}.sections.decisionCta.col2Btn`)}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.col3Title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.col3Desc`)}</p>
              <Link to="/industry/baby-food" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-blue-300 transition">
                {t(`${p}.sections.decisionCta.col3Btn`)}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industryScenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-pink-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment1Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment1Desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• {t(`${p}.sections.industryScenarios.segment1Item1`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment1Item2`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment1Item3`)}</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment2Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment2Desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• {t(`${p}.sections.industryScenarios.segment2Item1`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment2Item2`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment3Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment3Desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• {t(`${p}.sections.industryScenarios.segment3Item1`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment3Item2`)}</li>
                <li>• {t(`${p}.sections.industryScenarios.segment3Item3`)}</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.successTitle`)}</h4>
            <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.successStory`)}</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ {t(`${p}.sections.industryScenarios.successMetric1`)}</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ {t(`${p}.sections.industryScenarios.successMetric2`)}</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ {t(`${p}.sections.industryScenarios.successMetric3`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat1Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat1Label`)}</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat2Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat2Label`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat3Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat3Label`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat4Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat4Label`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendsTitle`)}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">{t(`${p}.sections.marketData.headers.feature`)}</th>
                    <th className="text-center py-2 font-medium">{t(`${p}.sections.marketData.headers.spout`)}</th>
                    <th className="text-center py-2 font-medium">{t(`${p}.sections.marketData.headers.bottle`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.sections.marketData.row1.feature`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row1.spout`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row1.bottle`)}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.sections.marketData.row2.feature`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row2.spout`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row2.bottle`)}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.sections.marketData.row3.feature`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row3.spout`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row3.bottle`)}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.sections.marketData.row4.feature`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row4.spout`)}</td>
                    <td className="text-center py-2">{t(`${p}.sections.marketData.row4.bottle`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.marketData.ecoTitle`)}</h4>
            <p className="text-sm text-green-700">{t(`${p}.sections.marketData.ecoDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">{t(`${p}.sections.materialComparison.headers.feature`)}</th>
                  <th className="text-center p-3 font-semibold text-blue-700">{t(`${p}.sections.materialComparison.headers.col1`)}</th>
                  <th className="text-center p-3 font-semibold text-green-700">{t(`${p}.sections.materialComparison.headers.col2`)}</th>
                  <th className="text-center p-3 font-semibold text-purple-700">{t(`${p}.sections.materialComparison.headers.col3`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row1.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row1.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row1.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row1.col3`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row2.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row2.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row2.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row2.col3`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row3.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row3.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row3.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row3.col3`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row4.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row4.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row4.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row4.col3`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row5.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row5.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row5.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row5.col3`)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row6.feature`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row6.col1`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row6.col2`)}</td>
                  <td className="text-center p-3">{t(`${p}.sections.materialComparison.row6.col3`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.sections.materialComparison.col1Title`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• {t(`${p}.sections.materialComparison.col1Item1`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col1Item2`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col1Item3`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.sections.materialComparison.col2Title`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• {t(`${p}.sections.materialComparison.col2Item1`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col2Item2`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col2Item3`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.sections.materialComparison.col3Title`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• {t(`${p}.sections.materialComparison.col3Item1`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col3Item2`)}</li>
                  <li>• {t(`${p}.sections.materialComparison.col3Item3`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as any
  const tables = t(`${p}.tables`, { returnObjects: true }) as any
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as any

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.metaTitle`)}
      description={t(`${p}.metaDescription`)}
      keywords={t(`${p}.metaKeywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/packaging/spout-pouches"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
      heroImageAlt={t(`${p}.heroImageAlt`)}
      hero3DModelUrl="/3d/3d-pouch/coffee-pouch.glb"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default SpoutPouchesPage
