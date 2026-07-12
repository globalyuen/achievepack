import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Sprout, Eye } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import SortableMaterialStructuresTable, { COMPOSTABLE_STRUCTURES } from '../../components/SortableMaterialStructuresTable'
import { useTranslation } from 'react-i18next'

const CompostableMaterialStructurePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostableMaterialStructure'

  const structureName = t(`${p}.structureName`)
  const thickness = t(`${p}.thickness`)
  const otr = '<5'
  const wvtr = '<10'

  const sections = [
    {
      id: 'all-compost-overview',
      title: t(`${p}.sections.allCompostOverview.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <SortableMaterialStructuresTable
          structures={COMPOSTABLE_STRUCTURES}
          title={t(`${p}.sections.allCompostOverview.tableTitle`)}
          categoryColor="green"
        />
      )
    },
    {
      id: 'structure-overview',
      title: t(`${p}.sections.structureOverview.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ClickableImage
              src="/imgs/spec/bio-cello-duplex-clear.webp"
              alt="Bio Cellulose Duplex Clear Compostable Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Biodegradable Cellulose Duplex - Compostable"
            />
            <h3 className="text-xl font-bold text-green-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-5 w-5 text-green-500" />
              <Eye className="h-5 w-5 text-green-500" />
              <span className="text-sm text-green-600">{t(`${p}.sections.structureOverview.badge`)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.thickness`)}</p>
                <p className="font-semibold text-green-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.otr`)}</p>
                <p className="font-semibold text-green-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.wvtr`)}</p>
                <p className="font-semibold text-green-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.certification`)}</p>
                <p className="font-semibold text-green-700">{t(`${p}.sections.structureOverview.certificationValue`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layer-breakdown',
      title: t(`${p}.sections.layerBreakdown.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-green-800">{t(`${p}.sections.layerBreakdown.layer1.name`)}</p>
                <p className="text-sm text-green-700">{t(`${p}.sections.layerBreakdown.layer1.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">{t(`${p}.sections.layerBreakdown.layer2.name`)}</p>
                <p className="text-sm text-amber-700">{t(`${p}.sections.layerBreakdown.layer2.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-properties',
      title: t(`${p}.sections.barrierProperties.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.barrierProperties.intro`)}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.barrierProperties.oxygenBarrier`)}</h4>
              <p className="text-2xl font-bold text-amber-600">{otr} cc/m²/day</p>
              <p className="text-sm text-amber-700 mt-1">{t(`${p}.sections.barrierProperties.oxygenNote`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.barrierProperties.moistureBarrier`)}</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">{t(`${p}.sections.barrierProperties.moistureNote`)}</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4 flex items-start gap-3">
            <Eye className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-800 mb-1">{t(`${p}.sections.barrierProperties.clearWindow`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.barrierProperties.clearWindowDesc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Sprout className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.sustainability.heading`)}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.item1Name`)}</strong> {t(`${p}.sections.sustainability.item1Desc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.item2Name`)}</strong> {t(`${p}.sections.sustainability.item2Desc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.item3Name`)}</strong> {t(`${p}.sections.sustainability.item3Desc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.item4Name`)}</strong> {t(`${p}.sections.sustainability.item4Desc`)}</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.sustainability.compostingNoteHeading`)}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.sustainability.compostingNote`)}</p>
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
            {(Array.isArray(t(`${p}.sections.applications.items`, { returnObjects: true })) ? t(`${p}.sections.applications.items`, { returnObjects: true }) as string[] : []).map((item, idx) => (
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
      id: 'ai-search',
      title: t(`${p}.sections.aiSearch.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t(`${p}.sections.aiSearch.point1`)}</strong> – {t(`${p}.sections.aiSearch.point1Desc`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.point2`)}</strong> – {t(`${p}.sections.aiSearch.point2Desc`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.shopNow`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.browseLink`)}</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 {t(`${p}.sections.aiSearch.aiSuggestions`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "{t(`${p}.sections.aiSearch.suggestion1`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.suggestion2`)}"</li>
              <li>• "{t(`${p}.sections.aiSearch.suggestion3`)}"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compare-structures',
      title: t(`${p}.sections.compareStructures.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600 mb-4">{t(`${p}.sections.compareStructures.intro`)}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-2 text-left border">{t(`${p}.sections.compareStructures.headers.structure`)}</th>
                  <th className="p-2 text-center border">{t(`${p}.sections.compareStructures.headers.otr`)}</th>
                  <th className="p-2 text-center border">{t(`${p}.sections.compareStructures.headers.wvtr`)}</th>
                  <th className="p-2 text-left border">{t(`${p}.sections.compareStructures.headers.bestFor`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 font-semibold">
                  <td className="p-2 border"><Link to="/spec/compostable-material-structure" className="text-primary-600 hover:underline">{t(`${p}.sections.compareStructures.rows.row1.title`)}</Link></td>
                  <td className="p-2 text-center border">&lt;5</td>
                  <td className="p-2 text-center border">&lt;10</td>
                  <td className="p-2 border">{t(`${p}.sections.compareStructures.rows.row1.desc`)}</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-cello-triplex-highest" className="text-primary-600 hover:underline">{t(`${p}.sections.compareStructures.rows.row2.title`)}</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;3</td>
                  <td className="p-2 border">{t(`${p}.sections.compareStructures.rows.row2.desc`)}</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-cello-triplex-metalised" className="text-primary-600 hover:underline">{t(`${p}.sections.compareStructures.rows.row3.title`)}</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">{t(`${p}.sections.compareStructures.rows.row3.desc`)}</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-kraft-vm-cello" className="text-primary-600 hover:underline">{t(`${p}.sections.compareStructures.rows.row4.title`)}</Link></td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 text-center border">&lt;1</td>
                  <td className="p-2 border">{t(`${p}.sections.compareStructures.rows.row4.desc`)}</td>
                </tr>
                <tr>
                  <td className="p-2 border"><Link to="/spec/bio-kraft-pbat-low" className="text-primary-600 hover:underline">{t(`${p}.sections.compareStructures.rows.row5.title`)}</Link></td>
                  <td className="p-2 text-center border">&lt;2000</td>
                  <td className="p-2 text-center border">&lt;15</td>
                  <td className="p-2 border">{t(`${p}.sections.compareStructures.rows.row5.desc`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">{t(`${p}.sections.compareStructures.footer.card1Title`)}</p>
              <p className="font-semibold text-green-700">{t(`${p}.sections.compareStructures.footer.card1Value`)}</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">{t(`${p}.sections.compareStructures.footer.card2Title`)}</p>
              <p className="font-semibold text-amber-700">{t(`${p}.sections.compareStructures.footer.card2Value`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-xs text-neutral-500 mb-1">{t(`${p}.sections.compareStructures.footer.card3Title`)}</p>
              <p className="font-semibold text-blue-700">{t(`${p}.sections.compareStructures.footer.card3Value`)}</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.q1`), answer: t(`${p}.faqs.a1`) },
    { question: t(`${p}.faqs.q2`), answer: t(`${p}.faqs.a2`) },
    { question: t(`${p}.faqs.q3`), answer: t(`${p}.faqs.a3`) },
    { question: t(`${p}.faqs.q4`), answer: t(`${p}.faqs.a4`) },
    { question: t(`${p}.faqs.q5`), answer: t(`${p}.faqs.a5`) }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/store", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/spec/bio-cello-triplex-highest", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/spec/bio-kraft-vm-cello", description: t(`${p}.relatedLinks.link3.description`) },
    { title: t(`${p}.relatedLinks.link4.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroLogo="/eco-logo/white-bkg/eco-logo-compost.png"
      heroLogoAlt="TUV/BPI Compostable Certified"
      introSummary={t(`${p}.introSummary`)}
      keywords={[
        'compostable packaging',
        'cellulose pouch',
        'biodegradable stand-up bag',
        'PLA packaging',
        'PBAT sealant',
        'BPI certified pouch',
        'TUV compostable',
        'clear compostable window'
      ]}
      canonicalUrl="https://achievepack.com/spec/compostable-material-structure"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default CompostableMaterialStructurePage;
