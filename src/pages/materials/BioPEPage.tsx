import React from 'react'
import { Leaf, Recycle, CheckCircle, Globe, Sprout, MessageCircle, Award, Target, Shield, Calendar, Phone, Download, Mail, BookOpen, Building2, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const BioPEPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.bioPE'

  // Helper to render bold prefixes (split by colon or Chinese full-width colon)
  const renderBullet = (text: string) => {
    const match = text.match(/^([^:：]+)[:：](.*)$/)
    if (match) {
      return (
        <span>
          <strong>{match[1]}:</strong>{match[2]}
        </span>
      )
    }
    return <span>{text}</span>
  }

  const sections = [
    {
      id: 'infographic',
      title: t(`${p}.sections.infographic.title`),
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">{t(`${p}.sections.infographic.intro`)}</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/Bio-PE.webp" 
              alt="Bio-PE Packaging Infographic - Plant-based polyethylene guide" 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption={t(`${p}.sections.infographic.caption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.targetAudience.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.targetAudience.intro`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">{t(`${p}.sections.targetAudience.carbon.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.targetAudience.carbon.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">{t(`${p}.sections.targetAudience.recycling.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.targetAudience.recycling.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">{t(`${p}.sections.targetAudience.performance.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.targetAudience.performance.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="mb-8 w-full rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/imgs/knowledge/explorer_biope_infographic.jpg" alt="Bio-PE Packaging Guide" className="w-full h-auto" />
          </div>
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          <div className="flex items-center gap-6 bg-green-50 p-4 rounded-lg border border-green-200 my-4">
            <ClickableImage 
              src="/imgs/cert/logo-imgreen-biope.png" 
              alt="I'm Green Bio-based Polyethylene Logo by Braskem" 
              className="h-24 w-auto"
              caption="I'm Green™ by Braskem"
            />
            <div>
              <h4 className="font-semibold text-green-800 mb-1">{t(`${p}.sections.overview.logoSection.title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.overview.logoSection.desc`)}</p>
              <p className="text-xs text-green-600 mt-2">{t(`${p}.sections.overview.logoSection.artworkUsage`)}</p>
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
      id: 'important-clarification',
      title: t(`${p}.sections.clarification.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 border-2 border-amber-300 p-5 rounded-lg">
            <h4 className="font-bold text-amber-800 mb-3">⚠️ {t(`${p}.sections.clarification.keyClarification`)}</h4>
            <p className="text-amber-900 mb-4">
              <strong>{t(`${p}.sections.clarification.warning`)}</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">✅ {t(`${p}.sections.clarification.ecoStartTitle`)}</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• {t(`${p}.sections.clarification.ecoStartPoints.0`)}</li>
                  <li>• {t(`${p}.sections.clarification.ecoStartPoints.1`)}</li>
                  <li>• {t(`${p}.sections.clarification.ecoStartPoints.2`)}</li>
                  <li>• {t(`${p}.sections.clarification.ecoStartPoints.3`)}</li>
                </ul>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <h5 className="font-semibold text-neutral-800 mb-2">📦 {t(`${p}.sections.clarification.tradEndTitle`)}</h5>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• {t(`${p}.sections.clarification.tradEndPoints.0`)}</li>
                  <li>• {t(`${p}.sections.clarification.tradEndPoints.1`)}</li>
                  <li>• {t(`${p}.sections.clarification.tradEndPoints.2`)}</li>
                  <li>• {t(`${p}.sections.clarification.tradEndPoints.3`)}</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-amber-700 mt-4">
              <strong>{t(`${p}.sections.clarification.bestFor`)}</strong>
              <Link to="/materials/compostable" className="text-amber-800 underline ml-1">{t(`${p}.sections.clarification.compostableLink`)}</Link>
            </p>
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
          
          <p className="mt-4">
            {t(`${p}.sections.carbon.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.scenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">{t(`${p}.sections.scenarios.intro`)}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">{t(`${p}.sections.scenarios.fmcg.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.fmcg.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.fmcg.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.fmcg.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">{t(`${p}.sections.scenarios.fmcg.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">{t(`${p}.sections.scenarios.coffee.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">{t(`${p}.sections.scenarios.coffee.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">{t(`${p}.sections.scenarios.eco.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.eco.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.eco.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.eco.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">{t(`${p}.sections.scenarios.eco.note`)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.scenarios.stories.title`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">{t(`${p}.sections.scenarios.stories.cpg.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.cpg.desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-blue-600 uppercase">{t(`${p}.sections.scenarios.stories.retail.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.retail.desc`)}</p>
              </div>
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
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.carbonVal`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.carbonLbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.contentVal`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.contentLbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.recyclableVal`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.recyclableLbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.shelfVal`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.shelfLbl`)}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">{t(`${p}.sections.marketData.tableTitle`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.0`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.1`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.2`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {t(`${p}.sections.marketData.rows`, { returnObjects: true }) && (t(`${p}.sections.marketData.rows`, { returnObjects: true }) as string[][]).map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className={`px-4 py-3 ${rIdx === 3 ? 'text-green-600' : ''}`}>{row[1]}</td>
                      <td className={`px-4 py-3 ${rIdx === 3 ? 'text-red-600' : ''}`}>{row[2]}</td>
                      <td className="px-4 py-3 text-green-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">{t(`${p}.sections.marketData.comparisonTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">{t(`${p}.sections.marketData.benefits.item1Val`)}</p>
                <p className="text-sm text-green-600">{t(`${p}.sections.marketData.benefits.item1Lbl`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">{t(`${p}.sections.marketData.benefits.item2Val`)}</p>
                <p className="text-sm text-green-600">{t(`${p}.sections.marketData.benefits.item2Lbl`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">{t(`${p}.sections.marketData.benefits.item3Val`)}</p>
                <p className="text-sm text-green-600">{t(`${p}.sections.marketData.benefits.item3Lbl`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.comparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">{t(`${p}.sections.comparison.intro`)}</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">{t(`${p}.sections.comparison.tableTitle`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.comparison.headers.0`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">{t(`${p}.sections.comparison.headers.1`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">{t(`${p}.sections.comparison.headers.2`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-purple-700">{t(`${p}.sections.comparison.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {t(`${p}.sections.comparison.rows`, { returnObjects: true }) && (t(`${p}.sections.comparison.rows`, { returnObjects: true }) as string[][]).map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-center">{row[1]}</td>
                      <td className="px-4 py-3 text-center">{row[2]}</td>
                      <td className="px-4 py-3 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">{t(`${p}.sections.comparison.decisionGuideTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-700">{t(`${p}.sections.comparison.chooseBio.title`)}</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• {t(`${p}.sections.comparison.chooseBio.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.chooseBio.point2`)}</li>
                  <li>• {t(`${p}.sections.comparison.chooseBio.point3`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">{t(`${p}.sections.comparison.choosePcr.title`)}</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• {t(`${p}.sections.comparison.choosePcr.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.choosePcr.point2`)}</li>
                  <li>• <Link to="/materials/pcr" className="underline">{t(`${p}.sections.comparison.choosePcr.linkText`)}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">{t(`${p}.sections.comparison.chooseCompostable.title`)}</p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  <li>• {t(`${p}.sections.comparison.chooseCompostable.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.chooseCompostable.point2`)}</li>
                  <li>• <Link to="/materials/compostable" className="underline">{t(`${p}.sections.comparison.chooseCompostable.linkText`)}</Link></li>
                </ul>
              </div>
            </div>
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {t(`${p}.sections.applications.items`, { returnObjects: true }) && (t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
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
      title: t(`${p}.sections.aiSearch.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.aiSearch.intro`)}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t(`${p}.sections.aiSearch.points`, { returnObjects: true }) && (t(`${p}.sections.aiSearch.points`, { returnObjects: true }) as string[]).map((pt, i) => (
              <li key={i}>{renderBullet(pt)}</li>
            ))}
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.promptTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {t(`${p}.sections.aiSearch.prompts`, { returnObjects: true }) && (t(`${p}.sections.aiSearch.prompts`, { returnObjects: true }) as string[]).map((pr, i) => (
                <li key={i}>• {pr}</li>
              ))}
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
              <h4 className="font-bold text-green-800 mb-2">{t(`${p}.sections.riskHedging.bestFitTitle`)}</h4>
              <ul className="text-sm text-green-700 space-y-1">
                {t(`${p}.sections.riskHedging.bestFitPoints`, { returnObjects: true }) && (t(`${p}.sections.riskHedging.bestFitPoints`, { returnObjects: true }) as string[]).map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.sections.riskHedging.worksTitle`)}</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                {t(`${p}.sections.riskHedging.worksPoints`, { returnObjects: true }) && (t(`${p}.sections.riskHedging.worksPoints`, { returnObjects: true }) as string[]).map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">{t(`${p}.sections.riskHedging.notRecommendedTitle`)}</h4>
              <ul className="text-sm text-red-700 space-y-1">
                {t(`${p}.sections.riskHedging.notRecommendedPoints`, { returnObjects: true }) && (t(`${p}.sections.riskHedging.notRecommendedPoints`, { returnObjects: true }) as string[]).map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
              <div className="mt-2 pt-2 border-t border-red-200">
                <Link to="/materials/compostable" className="text-sm text-red-800 underline font-semibold">{t(`${p}.sections.riskHedging.compostableLink`)}</Link>
              </div>
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
          <p className="text-lg">{t(`${p}.sections.decisionCta.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">{t(`${p}.sections.decisionCta.call.title`)}</h4>
              <p className="text-sm opacity-90 mb-4">{t(`${p}.sections.decisionCta.call.desc`)}</p>
              <button onClick={openCalendly} className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.call.btn`)}
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.test.title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.test.desc`)}</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                {t(`${p}.sections.decisionCta.test.btn`)}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.explore.title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.explore.desc`)}</p>
              <Link to="/materials/compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-green-300 transition">
                {t(`${p}.sections.decisionCta.explore.btn`)}
              </Link>
            </div>
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
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
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
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/biope/what/a_hero_bio_pe_article_2212774.webp"
      heroImageAlt="Bio-PE plant-based packaging from sugarcane — Bio-Based, Recyclable, Lower Carbon"
      introSummary={t(`${p}.introSummary`)}
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
