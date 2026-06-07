import React from 'react'
import { Package, CheckCircle, Shield, Target, Calendar, Phone, Download, Mail, Leaf, Award, TrendingUp, MessageCircle, Factory, BarChart3, ArrowLeftRight, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomBoxesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.customBoxes'
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.scenarioTrigger.intro`) }} />
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
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.overview.intro`) }} />
          
          {/* Box Type 1: Corrugated Mailer */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp" 
                  alt="Custom Printed Corrugated Mailer Box" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{t(`${p}.sections.overview.card1Title`)}</h4>
                <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.overview.card1Desc`)}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>{t(`${p}.sections.overview.card1Feat1`)}</div>
                  <div>{t(`${p}.sections.overview.card1Feat2`)}</div>
                  <div>{t(`${p}.sections.overview.card1Feat3`)}</div>
                  <div>{t(`${p}.sections.overview.card1Feat4`)}</div>
                  <div>{t(`${p}.sections.overview.card1Feat5`)}</div>
                  <div>{t(`${p}.sections.overview.card1Feat6`)}</div>
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-corrugated-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    {t(`${p}.sections.overview.cardLinkText`)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Box Type 2: Tuck Box */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                  alt="Custom Printed Tuck Box with Gold Foil" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{t(`${p}.sections.overview.card2Title`)}</h4>
                <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.overview.card2Desc`)}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>{t(`${p}.sections.overview.card2Feat1`)}</div>
                  <div>{t(`${p}.sections.overview.card2Feat2`)}</div>
                  <div>{t(`${p}.sections.overview.card2Feat3`)}</div>
                  <div>{t(`${p}.sections.overview.card2Feat4`)}</div>
                  <div>{t(`${p}.sections.overview.card2Feat5`)}</div>
                  <div>{t(`${p}.sections.overview.card2Feat6`)}</div>
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-tuck-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    {t(`${p}.sections.overview.cardLinkText`)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.features.card1Title`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.features.card1Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.features.card2Title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.features.card2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.features.card3Title`)}</h4>
              <p className="text-sm text-neutral-700">{t(`${p}.sections.features.card3Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.features.card4Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.features.card4Desc`)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.features.card5Title`)}</h4>
              <p className="text-sm text-purple-700">{t(`${p}.sections.features.card5Desc`)}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.features.card6Title`)}</h4>
              <p className="text-sm text-red-700">{t(`${p}.sections.features.card6Desc`)}</p>
            </div>
          </div>
          
          {/* Box Types Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.features.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp" 
                alt="Corrugated mailer box for shipping and e-commerce" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCap1`)}
              />
              <ClickableImage 
                src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                alt="Tuck box carton for chocolate and confectionery" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCap2`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Gold foil stamping for luxury box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCap3`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/emboss.webp" 
                alt="Embossed texture for premium box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCap4`)}
              />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍫</div>
              <h4 className="font-semibold text-amber-800">{t(`${p}.sections.applications.card1Title`)}</h4>
              <p className="text-xs text-amber-700 mt-1">{t(`${p}.sections.applications.card1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍵</div>
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.applications.card2Title`)}</h4>
              <p className="text-xs text-green-700 mt-1">{t(`${p}.sections.applications.card2Desc`)}</p>
            </div>
            <div className="bg-amber-100 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">☕</div>
              <h4 className="font-semibold text-amber-900">{t(`${p}.sections.applications.card3Title`)}</h4>
              <p className="text-xs text-amber-800 mt-1">{t(`${p}.sections.applications.card3Desc`)}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍬</div>
              <h4 className="font-semibold text-pink-800">{t(`${p}.sections.applications.card4Title`)}</h4>
              <p className="text-xs text-pink-700 mt-1">{t(`${p}.sections.applications.card4Desc`)}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍪</div>
              <h4 className="font-semibold text-orange-800">{t(`${p}.sections.applications.card5Title`)}</h4>
              <p className="text-xs text-orange-700 mt-1">{t(`${p}.sections.applications.card5Desc`)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.applications.card6Title`)}</h4>
              <p className="text-xs text-purple-700 mt-1">{t(`${p}.sections.applications.card6Desc`)}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🧈</div>
              <h4 className="font-semibold text-yellow-800">{t(`${p}.sections.applications.card7Title`)}</h4>
              <p className="text-xs text-yellow-700 mt-1">{t(`${p}.sections.applications.card7Desc`)}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold text-indigo-800">{t(`${p}.sections.applications.card8Title`)}</h4>
              <p className="text-xs text-indigo-700 mt-1">{t(`${p}.sections.applications.card8Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.sustainability.cardTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainability.card1Title`)}</h5>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>✓ {t(`${p}.sections.sustainability.card1Item1`)}</li>
                  <li>✓ {t(`${p}.sections.sustainability.card1Item2`)}</li>
                  <li>✓ {t(`${p}.sections.sustainability.card1Item3`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainability.card2Title`)}</h5>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>✓ {t(`${p}.sections.sustainability.card2Item1`)}</li>
                  <li>✓ {t(`${p}.sections.sustainability.card2Item2`)}</li>
                  <li>✓ {t(`${p}.sections.sustainability.card2Item3`)}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            {t(`${p}.sections.sustainability.exploreTextPre`)} <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t(`${p}.sections.sustainability.exploreLink1`)}</Link> {t(`${p}.sections.sustainability.exploreTextMid`)} <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.sustainability.exploreLink2`)}</Link>{t(`${p}.sections.sustainability.exploreTextPost`)}
          </p>
        </div>
      )
    },
    {
      id: 'pricing',
      title: t(`${p}.sections.pricing.title`),
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.pricing.card1Title`)}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card1Th1`)}</th>
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card1Th2`)}</th>
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card1Th3`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row1Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row1Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row1Col3`)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row2Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row2Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row2Col3`)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row3Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row3Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row3Col3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row4Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row4Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card1Row4Col3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t(`${p}.sections.pricing.card2Title`)}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card2Th1`)}</th>
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card2Th2`)}</th>
                    <th className="px-3 py-2 text-left">{t(`${p}.sections.pricing.card2Th3`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row1Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row1Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row1Col3`)}</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row2Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row2Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row2Col3`)}</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row3Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row3Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row3Col3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row4Col1`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row4Col2`)}</td>
                    <td className="px-3 py-2">{t(`${p}.sections.pricing.card2Row4Col3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>{t(`${p}.sections.pricing.shippingTitle`)}</strong> {t(`${p}.sections.pricing.shippingDescPre`)} <button onClick={openCalendly} className="underline cursor-pointer">{t(`${p}.sections.pricing.shippingLinkText`)}</button>{t(`${p}.sections.pricing.shippingDescPost`)}
            </p>
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
            <li dangerouslySetInnerHTML={{ __html: t(`${p}.sections.aiSearch.listItem1`) }} />
            <li dangerouslySetInnerHTML={{ __html: t(`${p}.sections.aiSearch.listItem2`) }} />
            <li dangerouslySetInnerHTML={{ __html: t(`${p}.sections.aiSearch.listItem3`) }} />
            <li><strong>{t(`${p}.sections.aiSearch.listItem4Title`)}</strong> – <button onClick={openCalendly} className="text-primary-600 hover:underline cursor-pointer">{t(`${p}.sections.aiSearch.listItem4Button`)}</button></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.boxTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• {t(`${p}.sections.aiSearch.query1`)}</li>
              <li>• {t(`${p}.sections.aiSearch.query2`)}</li>
              <li>• {t(`${p}.sections.aiSearch.query3`)}</li>
              <li>• {t(`${p}.sections.aiSearch.query4`)}</li>
              <li>• {t(`${p}.sections.aiSearch.query5`)}</li>
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
              <h4 className="font-bold text-green-800 mb-2">{t(`${p}.sections.riskHedging.card1Title`)}</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.card1Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card1Item2`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card1Item3`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.sections.riskHedging.card2Title`)}</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.card2Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card2Item2`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">{t(`${p}.sections.riskHedging.card3Title`)}</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• {t(`${p}.sections.riskHedging.card3Item1`)}</li>
                <li>• {t(`${p}.sections.riskHedging.card3Item2`)}</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">{t(`${p}.sections.riskHedging.card3Link`)}</Link></li>
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
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
              <p className="text-sm opacity-90 mb-4">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
              <button onClick={openCalendly} className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.card1Button`)}
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
              <Link to="/store?category=boxes" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                {t(`${p}.sections.decisionCta.card2Button`)}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
              <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
              <Link to="/packaging/stand-up-pouches" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
                {t(`${p}.sections.decisionCta.card3Button`)}
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
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card1Desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card2Desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card3Desc`)}</p>
              <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card3Share`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.storyQuote`)}</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.storyAuthor`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card1Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card1Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card1Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card2Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card2Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card2Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card3Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card3Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card3Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card4Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card4Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card4Sub`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.trend1`) }} />
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.trend2`) }} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.th1`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th2`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th3`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th4`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.th5`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row1Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row1Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row1Col5`)}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row2Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row2Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row2Col5`)}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row3Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row3Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row3Col5`)}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row4Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row4Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row4Col5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <p className="text-sm text-primary-700">{t(`${p}.sections.materialComparison.guideDesc`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const tables = [
    {
      title: t(`${p}.tables.0.title`),
      data: {
        headers: t(`${p}.tables.0.data.headers`, { returnObjects: true }) as string[],
        rows: t(`${p}.tables.0.data.rows`, { returnObjects: true }) as string[][]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.relatedLinks.0.title`),
      url: "/store/product/box-corrugated-custom",
      description: t(`${p}.relatedLinks.0.description`)
    },
    {
      title: t(`${p}.relatedLinks.1.title`),
      url: "/store/product/box-tuck-custom",
      description: t(`${p}.relatedLinks.1.description`)
    },
    {
      title: t(`${p}.relatedLinks.2.title`),
      url: "/packaging/stand-up-pouches",
      description: t(`${p}.relatedLinks.2.description`)
    },
    {
      title: t(`${p}.relatedLinks.3.title`),
      url: "/packaging/flat-bottom-bags",
      description: t(`${p}.relatedLinks.3.description`)
    },
    {
      title: t(`${p}.relatedLinks.4.title`),
      url: "/materials/compostable",
      description: t(`${p}.relatedLinks.4.description`)
    }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/packaging/custom-boxes"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp"
      heroImageAlt={t(`${p}.seo.heroImageAlt`)}
      introSummary={t(`${p}.seo.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.seo.ctaTitle`)}
      ctaDescription={t(`${p}.seo.ctaDescription`)}
      ctaButtonText={t(`${p}.seo.ctaButtonText`)}
      ctaButtonUrl="/store?category=boxes"
    />
  )
}

export default CustomBoxesPage
