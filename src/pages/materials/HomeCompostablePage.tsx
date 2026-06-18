import React from 'react'
import { Home, Leaf, CheckCircle, Clock, Award, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle, Building2, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, Globe, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import ClickableImage from '../../components/ClickableImage'

const HomeCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  
  const p = 'seoPages.pages.homeCompostable'

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

  // Helper to render verification note with embedded link
  const getVerificationNote = () => {
    const text = t(`${p}.sections.certifications.verificationNote`)
    const linkTerm = text.includes('「證書頁面」') ? '「證書頁面」' : text.includes('Certificados') ? 'Certificados' : text.includes('Certificats') ? 'Certificats' : 'Certificates Page'
    const parts = text.split(linkTerm)
    if (parts.length === 2) {
      return (
        <span>
          {renderBullet(parts[0])}
          <Link to="/company/certificates" className="text-primary-600 hover:underline">{linkTerm}</Link>
          {parts[1]}
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.targetAudience.intro`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">
                  {t(`${p}.sections.targetAudience.organic.title`)}
                </p>
                <p className="text-sm text-neutral-600">
                  {t(`${p}.sections.targetAudience.organic.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">
                  {t(`${p}.sections.targetAudience.tea.title`)}
                </p>
                <p className="text-sm text-neutral-600">
                  {t(`${p}.sections.targetAudience.tea.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">
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
      icon: <Home className="h-5 w-5 text-primary-600" />,
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
          {/* Certification Badges Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable Certification" 
                className="h-16 w-auto mb-2"
                caption="Home Compostable"
              />
              <span className="text-xs font-semibold text-neutral-800">OK Home</span>
              <span className="text-xs text-neutral-500">TÜV Austria</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Home Composting Certification" 
                className="h-16 w-auto mb-2"
                caption="AS5810 Australia"
              />
              <span className="text-xs font-semibold text-neutral-800">AS 5810</span>
              <span className="text-xs text-neutral-500">Australia</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="EU Seedling Logo Compostable" 
                className="h-16 w-auto mb-2"
                caption="EU Seedling"
              />
              <span className="text-xs font-semibold text-neutral-800">Seedling</span>
              <span className="text-xs text-neutral-500">EU Standard</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable" 
                className="h-16 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs font-semibold text-neutral-800">BPI</span>
              <span className="text-xs text-neutral-500">US Standard</span>
            </div>
          </div>
          
          {/* Detailed Certification Info */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-green-200 flex-shrink-0">
                  <ClickableImage src="/imgs/cert/cert-din-home-compost.png" alt="OK Home" className="h-10 w-auto" caption="OK Home" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">{t(`${p}.sections.certifications.okHome.title`)}</h4>
                  <p className="text-sm text-green-700">{t(`${p}.sections.certifications.okHome.subtitle`)}</p>
                </div>
              </div>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.okHome.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-blue-200 flex-shrink-0">
                  <ClickableImage src="/imgs/cert/cert-ABA-as5810.png" alt="AS5810" className="h-10 w-auto" caption="AS5810" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">{t(`${p}.sections.certifications.as5810.title`)}</h4>
                  <p className="text-sm text-blue-700">{t(`${p}.sections.certifications.as5810.subtitle`)}</p>
                </div>
              </div>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.as5810.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature4`)}</li>
              </ul>
            </div>
          </div>
          
          {/* Certification Link */}
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 mt-4">
            <p className="text-sm text-neutral-600">
              {getVerificationNote()}
            </p>
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
                  {t(`${p}.sections.scenarios.teaCoffee.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.teaCoffee.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.teaCoffee.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.teaCoffee.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">
                  {t(`${p}.sections.scenarios.teaCoffee.note`)}
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
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">
                  {t(`${p}.sections.scenarios.markets.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.markets.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">
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
                <span className="text-xs font-semibold text-green-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.auTea.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.auTea.desc`)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-amber-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.ukSnack.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.ukSnack.desc`)}
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
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">45%</p>
              <p className="text-sm opacity-90">
                {t(`${p}.sections.marketData.metrics.ukCompost`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">65%</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.auCompost`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">180</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.decompTime`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">20-30°C</p>
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
                <p className="text-2xl font-bold text-green-700">0</p>
                <p className="text-sm text-green-600">
                  {t(`${p}.sections.marketData.impact.microplastics`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-sm text-green-600 font-sans">
                  {t(`${p}.sections.marketData.impact.nutrients`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">-70%</p>
                <p className="text-sm text-green-600">
                  {t(`${p}.sections.marketData.impact.co2`)}
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-4 py-3">
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
                          idx === 1 ? 'text-green-700' : idx === 2 ? 'text-blue-700' : 'text-neutral-700'
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
                      <td className="px-4 py-3 text-green-700">{row[1]}</td>
                      <td className="px-4 py-3 text-blue-700">{row[2]}</td>
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
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-700">
                  {t(`${p}.sections.comparison.chooseHome`)}
                </p>
                <ul className="mt-2 space-y-1 text-green-600">
                  {(t(`${p}.sections.comparison.homePoints`, { returnObjects: true }) as string[]).map((pt, idx) => (
                    <li key={idx}>• {pt}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">
                  {t(`${p}.sections.comparison.chooseIndustrial`)}
                </p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  {(t(`${p}.sections.comparison.industrialPoints`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                    <li key={idx}>
                      • {idx === arr.length - 1 ? (
                        <Link to="/materials/industrial-compostable" className="underline">{pt}</Link>
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
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.cellulose.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.cellulose.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.paper.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.paper.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature4`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'timeline',
      title: t(`${p}.sections.timeline.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.timeline.intro`)}</p>
          
          <div className="bg-gradient-to-r from-green-50 to-primary-50 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="p-2">
                <div className="text-2xl mb-1">📦</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month1`)}</div>
                <div className="text-xs text-neutral-600 font-sans">{t(`${p}.sections.timeline.month1Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">💧</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month2`)}</div>
                <div className="text-xs text-neutral-600 font-sans">{t(`${p}.sections.timeline.month2Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🍂</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month3`)}</div>
                <div className="text-xs text-neutral-600 font-sans">{t(`${p}.sections.timeline.month3Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌱</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month4`)}</div>
                <div className="text-xs text-neutral-600 font-sans">{t(`${p}.sections.timeline.month4Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌍</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month5`)}</div>
                <div className="text-xs text-neutral-600 font-sans">{t(`${p}.sections.timeline.month5Desc`)}</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {t(`${p}.sections.timeline.note`)}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
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
                      <Link to="/materials/industrial-compostable" className="underline">{pt}</Link>
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
            <div className="bg-green-600 text-white p-6 rounded-lg text-center font-sans">
              <Phone className="h-8 w-8 mx-auto mb-2 text-white" />
              <h4 className="font-bold text-lg mb-2 text-white">
                {t(`${p}.sections.decisionCta.call.title`)}
              </h4>
              <p className="text-sm opacity-90 mb-4 text-white">
                {t(`${p}.sections.decisionCta.call.desc`)}
              </p>
              <button onClick={openCalendly} className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
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
              <Link to="/materials/industrial-compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-green-300 transition">
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
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/industry/coffee-tea", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title={t(`${p}.title`)}
      description={t(`${p}.introSummary`)}
      keywords={['home compostable packaging', 'backyard compostable', 'OK Compost HOME', 'AS 5810', 'compostable pouches', 'biodegradable packaging']}
      canonicalUrl="https://achievepack.com/materials/home-compostable"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp"
      heroImageAlt="Home compostable packaging in garden compost"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
    />
  )
}

export default HomeCompostablePage
