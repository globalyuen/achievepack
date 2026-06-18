import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const KraftMediumBarrierPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.kraftMediumBarrier';

  // Helper to render bold prefixes (split by colon or Chinese full-width colon)
  const renderBullet = (text: string) => {
    const match = text.match(/^([^:：]+)[:：](.*)$/);
    if (match) {
      return (
        <span>
          <strong>{match[1]}:</strong>{match[2]}
        </span>
      );
    }
    return <span>{text}</span>;
  };

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
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.keyFeaturesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• {t(`${p}.sections.overview.features.0`)}</li>
              <li>• {t(`${p}.sections.overview.features.1`)}</li>
              <li>• {t(`${p}.sections.overview.features.2`)}</li>
              <li>• {t(`${p}.sections.overview.features.3`)}</li>
              <li>• {t(`${p}.sections.overview.features.4`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.summary`)}
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.specifications.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.specifications.structure.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.specifications.structure.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.specifications.structure.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.structure.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.structure.points.2`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.specifications.properties.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.specifications.properties.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.specifications.properties.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.properties.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.properties.points.2`)}</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.specifications.formats.title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• {t(`${p}.sections.specifications.formats.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.2`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.3`)}</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.specifications.premium.title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• {t(`${p}.sections.specifications.premium.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.2`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.3`)}</li>
              </ul>
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
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{t(`${p}.sections.applications.items.${idx}`)}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: t(`${p}.sections.advantages.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.advantages.bestForTitle`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.0`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.1`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.2`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.3`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.4`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.advantages.considerationsTitle`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.advantages.considerationsPoints.0`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.1`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.2`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.3`)}</li>
              </ul>
            </div>
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
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">{t(`${p}.sections.scenarios.snacks.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">{t(`${p}.sections.scenarios.snacks.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">{t(`${p}.sections.scenarios.wellness.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">{t(`${p}.sections.scenarios.wellness.note`)}</span>
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
                <span className="text-xs font-semibold text-amber-600 uppercase">{t(`${p}.sections.scenarios.stories.roaster.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.roaster.desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">{t(`${p}.sections.scenarios.stories.organic.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.organic.desc`)}</p>
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
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">1-3</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.mvtr`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">5-20</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.otr`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">6-12</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.shelfLife`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">60-70%</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.renewable`)}</p>
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
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.0.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.1.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.2.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">{t(`${p}.sections.marketData.impactTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">Best Value</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.value`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">60-70%</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.renewable`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">#1</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.roasterChoice`)}</p>
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
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">{t(`${p}.sections.comparison.headers.1`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">{t(`${p}.sections.comparison.headers.2`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">{t(`${p}.sections.comparison.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.0.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.1.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.2.0`)}</td>
                    <td className="px-4 py-3 text-center text-blue-600">{t(`${p}.sections.comparison.rows.2.1`)}</td>
                    <td className="px-4 py-3 text-center text-amber-600">{t(`${p}.sections.comparison.rows.2.2`)}</td>
                    <td className="px-4 py-3 text-center text-green-600">{t(`${p}.sections.comparison.rows.2.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.3.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">{t(`${p}.sections.comparison.decisionGuideTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">{t(`${p}.sections.comparison.chooseMedium`)}</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• {t(`${p}.sections.comparison.mediumPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.mediumPoints.1`)}</li>
                  <li>• {t(`${p}.sections.comparison.mediumPoints.2`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-700">{t(`${p}.sections.comparison.chooseHigh`)}</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• {t(`${p}.sections.comparison.highPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.highPoints.1`)}</li>
                  <li>• <Link to="/materials/kraft-high-barrier" className="underline">{t(`${p}.sections.comparison.highPoints.2`)}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">{t(`${p}.sections.comparison.chooseLow`)}</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• {t(`${p}.sections.comparison.lowPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.lowPoints.1`)}</li>
                  <li>• <Link to="/materials/kraft-low-barrier" className="underline">{t(`${p}.sections.comparison.lowPoints.2`)}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sustainability.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.sustainability.renewable.title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.sustainability.renewable.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.sustainability.reduced.title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.sustainability.reduced.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.sustainability.emissions.title`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.sustainability.emissions.desc`)}</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'kraft medium barrier packaging',
        'kraft coffee bags',
        'metallized kraft pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-medium-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft medium barrier pouches with metallized layers for coffee and premium foods"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  );
};

export default KraftMediumBarrierPage;
