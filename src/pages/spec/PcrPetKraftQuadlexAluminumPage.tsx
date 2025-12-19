import React from 'react'
import { Layers, Shield, Leaf, CheckCircle, MessageCircle, Package, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const PcrPetKraftQuadlexAluminumPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'spec.pcrPetKraftQuadlexAluminum'
  
  const structureName = t(`${p}.structureName`)
  const thickness = t(`${p}.thickness`)
  const otr = '<0.5'
  const wvtr = '<0.5'

  const sections = [
    {
      id: 'structure-overview',
      title: t(`${p}.sections.structureOverview.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <ClickableImage
              src="/imgs/spec/pcr-pet-kraft-quadlex-aluminum.webp"
              alt="PET Kraft Quadlex Aluminum Structure"
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              caption="Premium Kraft Paper with Aluminum Foil"
            />
            <h3 className="text-xl font-bold text-amber-800 mb-3">{structureName}</h3>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-amber-600" />
              <span className="text-sm text-amber-600">{t(`${p}.sections.structureOverview.badge`)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.thickness`)}</p>
                <p className="font-semibold text-amber-700">{thickness}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.otr`)}</p>
                <p className="font-semibold text-amber-700">{otr} cc/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.wvtr`)}</p>
                <p className="font-semibold text-amber-700">{wvtr} g/m²/day</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-neutral-500">{t(`${p}.sections.structureOverview.layers`)}</p>
                <p className="font-semibold text-amber-700">{t(`${p}.sections.structureOverview.layersValue`)}</p>
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
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-blue-800">{t(`${p}.sections.layerBreakdown.layer1.name`)}</p>
                <p className="text-sm text-blue-700">{t(`${p}.sections.layerBreakdown.layer1.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-amber-800">{t(`${p}.sections.layerBreakdown.layer2.name`)}</p>
                <p className="text-sm text-amber-700">{t(`${p}.sections.layerBreakdown.layer2.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">{t(`${p}.sections.layerBreakdown.layer3.name`)}</p>
                <p className="text-sm text-gray-700">{t(`${p}.sections.layerBreakdown.layer3.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-green-800">{t(`${p}.sections.layerBreakdown.layer4.name`)}</p>
                <p className="text-sm text-green-700">{t(`${p}.sections.layerBreakdown.layer4.desc`)}</p>
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
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-2">{t(`${p}.sections.barrierProperties.oxygenBarrier`)}</h4>
              <p className="text-2xl font-bold text-gray-600">{otr} cc/m²/day</p>
              <p className="text-sm text-gray-700 mt-1">{t(`${p}.sections.barrierProperties.oxygenNote`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.barrierProperties.moistureBarrier`)}</h4>
              <p className="text-2xl font-bold text-blue-600">{wvtr} g/m²/day</p>
              <p className="text-sm text-blue-700 mt-1">{t(`${p}.sections.barrierProperties.moistureNote`)}</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.barrierProperties.premiumShelf`)}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.barrierProperties.premiumShelfDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.sustainability.heading`)}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.fscKraft`)}</strong> {t(`${p}.sections.sustainability.fscKraftDesc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.pcrBioPe`)}</strong> {t(`${p}.sections.sustainability.pcrBioPeDesc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.consumerAppeal`)}</strong> {t(`${p}.sections.sustainability.consumerAppealDesc`)}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>{t(`${p}.sections.sustainability.foodWaste`)}</strong> {t(`${p}.sections.sustainability.foodWasteDesc`)}</span>
              </li>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-amber-800">{item}</span>
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
    { title: t(`${p}.relatedLinks.link2.title`), url: "/spec/pcr-pp-kraft-quadlex-aluminum", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/spec/pcr-kraft-vmpet", description: t(`${p}.relatedLinks.link3.description`) },
    { title: t(`${p}.relatedLinks.link4.title`), url: "/features/high-barrier", description: t(`${p}.relatedLinks.link4.description`) }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="PCR Recycled Content"
      introSummary={t(`${p}.introSummary`)}
      keywords={[
        'kraft paper aluminum foil',
        'premium kraft packaging',
        'quadlex structure pouch',
        'specialty coffee kraft bag',
        'luxury food packaging',
        'natural maximum barrier',
        'FSC kraft foil pouch',
        'premium eco packaging'
      ]}
      canonicalUrl="https://achievepack.com/spec/pcr-pet-kraft-quadlex-aluminum"
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  )
}

export default PcrPetKraftQuadlexAluminumPage
