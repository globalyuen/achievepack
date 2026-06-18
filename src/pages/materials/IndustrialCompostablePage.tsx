import React from 'react'
import { Factory, Leaf, CheckCircle, Clock, Award, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle, TrendingUp, BarChart3, ArrowLeftRight, ShoppingBag, Coffee, Sparkles, Globe, Recycle, Building2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const IndustrialCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.industrialCompostable'

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
      id: 'scenario-trigger',
      title: t(`${p}.sections.targetAudience.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.targetAudience.intro`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">
                  {t(`${p}.sections.targetAudience.coffee.title`)}
                </p>
                <p className="text-sm text-neutral-600">
                  {t(`${p}.sections.targetAudience.coffee.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">
                  {t(`${p}.sections.targetAudience.organic.title`)}
                </p>
                <p className="text-sm text-neutral-600">
                  {t(`${p}.sections.targetAudience.organic.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">
                  {t(`${p}.sections.targetAudience.markets.title`)}
                </p>
                <p className="text-sm text-neutral-600">
                  {t(`${p}.sections.targetAudience.markets.desc`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{t(`${p}.sections.overview.whyChoose`)}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t(`${p}.sections.overview.benefit1`)}</li>
            <li>{t(`${p}.sections.overview.benefit2`)}</li>
            <li>{t(`${p}.sections.overview.benefit3`)}</li>
            <li>{t(`${p}.sections.overview.benefit4`)}</li>
            <li>{t(`${p}.sections.overview.benefit5`)}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.certifications.en13432.title`)}</h4>
              <p className="text-sm text-primary-700 mb-2">{t(`${p}.sections.certifications.en13432.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.certifications.en13432.features`, { returnObjects: true }) as string[]).map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.astm.title`)}</h4>
              <p className="text-sm text-blue-700 mb-2">{t(`${p}.sections.certifications.astm.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.certifications.astm.features`, { returnObjects: true }) as string[]).map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.okIndustrial.title`)}</h4>
            <p className="text-sm text-green-700">{t(`${p}.sections.certifications.okIndustrial.desc`)}</p>
          </div>
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">
                  {t(`${p}.sections.scenarios.coffee.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">
                  {t(`${p}.sections.scenarios.coffee.note`)}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">
                  {t(`${p}.sections.scenarios.organicFood.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.organicFood.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.organicFood.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.organicFood.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">
                  {t(`${p}.sections.scenarios.organicFood.note`)}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">
                  {t(`${p}.sections.scenarios.markets.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">
                  {t(`${p}.sections.scenarios.markets.note`)}
                </span>
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
                <span className="text-xs font-semibold text-amber-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.usCoffee.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.usCoffee.desc`)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.euOrganic.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.euOrganic.desc`)}
                </p>
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
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">$15.2B</p>
              <p className="text-sm opacity-90">
                {t(`${p}.sections.marketData.metrics.marketSize`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">14.5%</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.cagr`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">90-180</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.decompTime`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">58°C+</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.tempRange`)}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">
                {t(`${p}.sections.marketData.tableTitle`)}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    {(t(`${p}.sections.marketData.headers`, { returnObjects: true }) as string[]).map((header, idx) => (
                      <th key={idx} className="px-4 py-3 text-left font-semibold text-neutral-700">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {(t(`${p}.sections.marketData.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-neutral-700">{row[1]}</td>
                      <td className="px-4 py-3 text-neutral-700">{row[2]}</td>
                      <td className="px-4 py-3 text-neutral-700">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">
              {t(`${p}.sections.marketData.impactTitle`)}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">-65%</p>
                <p className="text-sm text-green-600">
                  {t(`${p}.sections.marketData.impact.co2`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">0</p>
                <p className="text-sm text-green-600 font-sans">
                  {t(`${p}.sections.marketData.impact.microplastics`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-sm text-green-600">
                  {t(`${p}.sections.marketData.impact.biomass`)}
                </p>
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
          <p className="text-lg">
            {t(`${p}.sections.comparison.intro`)}
          </p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center font-sans">
                {t(`${p}.sections.comparison.tableTitle`)}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    {(t(`${p}.sections.comparison.headers`, { returnObjects: true }) as string[]).map((header, idx) => (
                      <th 
                        key={idx} 
                        className={`px-4 py-3 text-left font-semibold ${
                          idx === 1 ? 'text-blue-700' : idx === 2 ? 'text-green-700' : idx === 3 ? 'text-purple-700' : 'text-neutral-700'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {(t(`${p}.sections.comparison.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-center text-blue-600">{row[1]}</td>
                      <td className="px-4 py-3 text-center text-green-600">{row[2]}</td>
                      <td className="px-4 py-3 text-center text-purple-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">
              {t(`${p}.sections.comparison.decisionGuideTitle`)}
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">
                  {t(`${p}.sections.comparison.chooseIndustrial`)}
                </p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  {(t(`${p}.sections.comparison.industrialPoints`, { returnObjects: true }) as string[]).map((pt, idx) => (
                    <li key={idx}>• {pt}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">
                  {t(`${p}.sections.comparison.chooseHome`)}
                </p>
                <ul className="mt-2 space-y-1 text-green-600">
                  {(t(`${p}.sections.comparison.homePoints`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                    <li key={idx}>
                      • {idx === arr.length - 1 ? (
                        <Link to="/materials/home-compostable" className="underline">{pt}</Link>
                      ) : pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">
                  {t(`${p}.sections.comparison.chooseRecyclable`)}
                </p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  {(t(`${p}.sections.comparison.recyclablePoints`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                    <li key={idx}>
                      • {idx === arr.length - 1 ? (
                        <Link to="/materials/recyclable-mono-pe" className="underline">{pt}</Link>
                      ) : pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Material</th>
                  <th className="text-left p-3 border">Barrier Level</th>
                  <th className="text-left p-3 border">Shelf Life</th>
                  <th className="text-left p-3 border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">PLA Film</td><td className="p-3 border">Low-Medium</td><td className="p-3 border">6-9 months</td><td className="p-3 border">Dry goods, snacks</td></tr>
                <tr><td className="p-3 border font-medium">PLA + PBAT Blend</td><td className="p-3 border">Medium</td><td className="p-3 border">9-12 months</td><td className="p-3 border">Coffee, tea</td></tr>
                <tr><td className="p-3 border font-medium">Kraft + PLA Barrier</td><td className="p-3 border">Medium</td><td className="p-3 border">9-12 months</td><td className="p-3 border">Premium coffee</td></tr>
                <tr><td className="p-3 border font-medium">Cellulose + PLA</td><td className="p-3 border">Low</td><td className="p-3 border">3-6 months</td><td className="p-3 border">Quick-turn items</td></tr>
                <tr><td className="p-3 border font-medium">Bio-PBS</td><td className="p-3 border">Medium-High</td><td className="p-3 border">12+ months</td><td className="p-3 border">Supplements</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Factor</th>
                  <th className="text-left p-3 border">Home Compostable</th>
                  <th className="text-left p-3 border">Industrial Compostable</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Temperature</td><td className="p-3 border">20-30°C (ambient)</td><td className="p-3 border text-primary-600">58°C+ (controlled)</td></tr>
                <tr><td className="p-3 border font-medium">Timeframe</td><td className="p-3 border">6-12 months</td><td className="p-3 border text-primary-600">90-180 days</td></tr>
                <tr><td className="p-3 border font-medium">Barrier Level</td><td className="p-3 border">Low</td><td className="p-3 border text-primary-600">Low-Medium-High</td></tr>
                <tr><td className="p-3 border font-medium">Accessibility</td><td className="p-3 border text-green-600">Backyard bin</td><td className="p-3 border">Facility required</td></tr>
                <tr><td className="p-3 border font-medium">Infrastructure</td><td className="p-3 border text-green-600">Consumer level</td><td className="p-3 border">Commercial network</td></tr>
                <tr><td className="p-3 border font-medium">Cost</td><td className="p-3 border">Higher</td><td className="p-3 border text-primary-600">More economical</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: t(`${p}.sections.order.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.minOrder`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">90-180</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.daysToCompost`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">12+</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.shelfLife`)}</div>
            </div>
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
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              {t(`${p}.sections.aiSearch.intro`)}
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {(t(`${p}.sections.aiSearch.questions`, { returnObjects: true }) as string[]).map((q, idx) => (
                <li key={idx}>• {q}</li>
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
              <h4 className="font-bold text-green-800 mb-2">
                {t(`${p}.sections.riskHedging.bestFit.title`)}
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                {(t(`${p}.sections.riskHedging.bestFit.points`, { returnObjects: true }) as string[]).map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">
                {t(`${p}.sections.riskHedging.alsoWorks.title`)}
              </h4>
              <ul className="text-sm text-amber-700 space-y-1">
                {(t(`${p}.sections.riskHedging.alsoWorks.points`, { returnObjects: true }) as string[]).map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">
                {t(`${p}.sections.riskHedging.notRecommended.title`)}
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                {(t(`${p}.sections.riskHedging.notRecommended.points`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                  <li key={idx}>
                    • {idx === arr.length - 1 ? (
                      <Link to="/materials/home-compostable" className="underline">{pt}</Link>
                    ) : pt}
                  </li>
                ))}
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
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center font-sans">
              <Phone className="h-8 w-8 mx-auto mb-2 text-white" />
              <h4 className="font-bold text-lg mb-2 text-white">
                {t(`${p}.sections.decisionCta.call.title`)}
              </h4>
              <p className="text-sm opacity-90 mb-4 text-white">
                {t(`${p}.sections.decisionCta.call.desc`)}
              </p>
              <button onClick={openCalendly} className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.call.btn`)}
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300 font-sans">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900 font-sans">
                {t(`${p}.sections.decisionCta.samples.title`)}
              </h4>
              <p className="text-sm text-neutral-600 mb-4 text-neutral-600 font-sans">
                {t(`${p}.sections.decisionCta.samples.desc`)}
              </p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                {t(`${p}.sections.decisionCta.samples.btn`)}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200 font-sans">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">
                {t(`${p}.sections.decisionCta.explore.title`)}
              </h4>
              <p className="text-sm text-neutral-600 mb-4 text-neutral-600">
                {t(`${p}.sections.decisionCta.explore.desc`)}
              </p>
              <Link to="/materials/compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
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
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/home-compostable", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/features/barrier-options", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title="Industrial Compostable Packaging | EN 13432 & ASTM D6400 Certified"
      description="EN 13432 and ASTM D6400 certified industrial compostable pouches. Breaks down in 90-180 days at commercial facilities. Higher barrier than home compostable."
      keywords={['industrial compostable', 'EN 13432', 'ASTM D6400', 'commercial compostable', 'BPI certified', 'compostable flexible packaging']}
      canonicalUrl="https://achievepack.com/materials/industrial-compostable"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp"
      heroImageAlt="Industrial compostable packaging materials"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
    />
  )
}

export default IndustrialCompostablePage
