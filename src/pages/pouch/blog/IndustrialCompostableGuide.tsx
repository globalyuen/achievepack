import React from 'react'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Link } from 'react-router-dom'
import { TrendingUp, Award, Leaf, DollarSign, Briefcase, FileCheck, HelpCircle, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function IndustrialCompostableGuide() {
  const { t } = useTranslation()

  const sections: BlogArticleSection[] = [
    {
      id: 'market-opportunity',
      title: t('industrialCompostableGuide.sections.marketOpportunity.title'),
      icon: <TrendingUp className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.marketOpportunity.p1') }} />

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.marketOpportunity.driversTitle')}</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <strong>{t('industrialCompostableGuide.sections.marketOpportunity.d1Title')}</strong>
                    <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.d1Text')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong>{t('industrialCompostableGuide.sections.marketOpportunity.d2Title')}</strong>
                    <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.d2Text')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <strong>{t('industrialCompostableGuide.sections.marketOpportunity.d3Title')}</strong>
                    <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.d3Text')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">☕</span>
                  <div>
                    <strong>{t('industrialCompostableGuide.sections.marketOpportunity.d4Title')}</strong>
                    <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.d4Text')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.marketOpportunity.vsTitle')}</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.marketOpportunity.vs1Title')}</p>
                  <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.vs1Text')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.marketOpportunity.vs2Title')}</p>
                  <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.vs2Text')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.marketOpportunity.vs3Title')}</p>
                  <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.vs3Text')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.marketOpportunity.vs4Title')}</p>
                  <p className="text-sm mt-1">{t('industrialCompostableGuide.sections.marketOpportunity.vs4Text')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.marketOpportunity.csTitle')}</h4>
            <p className="mb-3 text-base">
              {t('industrialCompostableGuide.sections.marketOpportunity.csP1')}
            </p>
            <ul className="space-y-2 ml-6 text-base">
              <li>• <strong>{t('industrialCompostableGuide.sections.marketOpportunity.csL1')}</strong></li>
              <li>• <strong>{t('industrialCompostableGuide.sections.marketOpportunity.csL2')}</strong></li>
              <li>• <strong>{t('industrialCompostableGuide.sections.marketOpportunity.csL3')}</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('industrialCompostableGuide.sections.certifications.title'),
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('industrialCompostableGuide.sections.certifications.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.certifications.th1')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.certifications.th2')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.certifications.th3')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr1Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr1Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr2Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr2Col3')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr3Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr3Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr4Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr4Col3')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr5Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr5Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr5Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.certifications.tr6Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr6Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.certifications.tr6Col3')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#00FFFF] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.certifications.usaTitle')}</h4>
              <p className="mb-3 text-sm">{t('industrialCompostableGuide.sections.certifications.usaText')}</p>
              <div className="mt-4 p-4 bg-white border-2 border-black text-sm">
                <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.certifications.usaStrat')}</p>
                <p className="mt-1">{t('industrialCompostableGuide.sections.certifications.usaStratText')}</p>
              </div>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.certifications.euTitle')}</h4>
              <p className="mb-3 text-sm">{t('industrialCompostableGuide.sections.certifications.euText')}</p>
              <div className="mt-4 p-4 bg-white border-2 border-black text-sm">
                <p className="font-bold text-green-700">{t('industrialCompostableGuide.sections.certifications.euStrat')}</p>
                <p className="mt-1">{t('industrialCompostableGuide.sections.certifications.euStratText')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical-specifications',
      title: t('industrialCompostableGuide.sections.technicalSpecs.title'),
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('industrialCompostableGuide.sections.technicalSpecs.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.technicalSpecs.th1')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.technicalSpecs.th2')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.technicalSpecs.th3')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.technicalSpecs.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr1Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr1Col3') }} />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.technicalSpecs.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr2Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr2Col3') }} />
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.technicalSpecs.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr3Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr3Col3') }} />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.technicalSpecs.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr4Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.technicalSpecs.tr4Col3') }} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'material-options',
      title: t('industrialCompostableGuide.sections.materialOptions.title'),
      icon: <Leaf className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('industrialCompostableGuide.sections.materialOptions.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.th1')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.th2')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.th3')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.th4')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.th5')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.materialOptions.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr1Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr1Col3')}</td>
                  <td className="border-2 border-black p-3">{t('industrialCompostableGuide.sections.materialOptions.tr1Col4')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr1Col5')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.materialOptions.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr2Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr2Col3')}</td>
                  <td className="border-2 border-black p-3">{t('industrialCompostableGuide.sections.materialOptions.tr2Col4')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr2Col5')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.materialOptions.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr3Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr3Col3')}</td>
                  <td className="border-2 border-black p-3">{t('industrialCompostableGuide.sections.materialOptions.tr3Col4')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr3Col5')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('industrialCompostableGuide.sections.materialOptions.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr4Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr4Col3')}</td>
                  <td className="border-2 border-black p-3">{t('industrialCompostableGuide.sections.materialOptions.tr4Col4')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('industrialCompostableGuide.sections.materialOptions.tr4Col5')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#00FFFF] border-4 border-black p-6 mt-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.materialOptions.treeTitle')}</h4>
            <div className="space-y-4 text-base">
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold text-lg">{t('industrialCompostableGuide.sections.materialOptions.q1')}</p>
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.materialOptions.q1Yes') }} />
                <p>{t('industrialCompostableGuide.sections.materialOptions.q1No')}</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold text-lg">{t('industrialCompostableGuide.sections.materialOptions.q2')}</p>
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.materialOptions.q2Yes') }} />
                <p>{t('industrialCompostableGuide.sections.materialOptions.q2No')}</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="font-bold text-lg">{t('industrialCompostableGuide.sections.materialOptions.q3')}</p>
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.materialOptions.q3Yes') }} />
                <p>{t('industrialCompostableGuide.sections.materialOptions.q3No')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-wholesale',
      title: t('industrialCompostableGuide.sections.pricingWholesale.title'),
      icon: <DollarSign className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.pricingWholesale.p1') }} />

          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.tableTitle')}</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black bg-white">
                <thead>
                  <tr className="bg-black text-[#D4FF00]">
                    <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.th1')}</th>
                    <th className="border-2 border-black p-3 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.th2')}</th>
                    <th className="border-2 border-black p-3 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.th3')}</th>
                    <th className="border-2 border-black p-3 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.th4')}</th>
                    <th className="border-2 border-black p-3 text-center font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.th5')}</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  <tr className="bg-[#F0F0F0]">
                    <td className="border-2 border-black p-3 font-bold">4oz / 100g (100×170mm)</td>
                    <td className="border-2 border-black p-3 text-center">$0.90 - $1.15</td>
                    <td className="border-2 border-black p-3 text-center">$0.70 - $0.90</td>
                    <td className="border-2 border-black p-3 text-center">$0.60 - $0.80</td>
                    <td className="border-2 border-black p-3 text-center">$0.18 - $0.28</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 font-bold">8oz / 250g (120×200mm)</td>
                    <td className="border-2 border-black p-3 text-center">$1.15 - $1.40</td>
                    <td className="border-2 border-black p-3 text-center">$0.90 - $1.15</td>
                    <td className="border-2 border-black p-3 text-center">$0.75 - $1.00</td>
                    <td className="border-2 border-black p-3 text-center">$0.24 - $0.35</td>
                  </tr>
                  <tr className="bg-[#F0F0F0]">
                    <td className="border-2 border-black p-3 font-bold">12oz / 340g (140×240mm)</td>
                    <td className="border-2 border-black p-3 text-center">$1.30 - $1.55</td>
                    <td className="border-2 border-black p-3 text-center">$1.05 - $1.30</td>
                    <td className="border-2 border-black p-3 text-center">$0.85 - $1.10</td>
                    <td className="border-2 border-black p-3 text-center">$0.28 - $0.39</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 font-bold">16oz / 500g (150×260mm)</td>
                    <td className="border-2 border-black p-3 text-center">$1.45 - $1.70</td>
                    <td className="border-2 border-black p-3 text-center">$1.15 - $1.45</td>
                    <td className="border-2 border-black p-3 text-center">$0.95 - $1.20</td>
                    <td className="border-2 border-black p-3 text-center">$0.32 - $0.44</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-black font-semibold font-['JetBrains_Mono']">
              {t('industrialCompostableGuide.sections.pricingWholesale.note')}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 mt-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.pricingWholesale.roiTitle')}</h4>
            <p className="mb-4 text-base">
              <strong dangerouslySetInnerHTML={{ __html: t('industrialCompostableGuide.sections.pricingWholesale.roiScenario') }} />
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-[#F0F0F0] p-4 border-2 border-black">
                <p className="font-bold text-red-700 mb-2">{t('industrialCompostableGuide.sections.pricingWholesale.prevTitle')}</p>
                <ul className="space-y-1">
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.prevL1')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.prevL2')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.prevL3')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.prevL4')}</li>
                </ul>
              </div>
              <div className="bg-[#E6FFFA] p-4 border-2 border-black">
                <p className="font-bold text-green-700 mb-2">{t('industrialCompostableGuide.sections.pricingWholesale.pouchTitle')}</p>
                <ul className="space-y-1">
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.pouchL1')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.pouchL2')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.pouchL3')}</li>
                  <li>{t('industrialCompostableGuide.sections.pricingWholesale.pouchL4')}</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#D4FF00] border-2 border-black text-sm font-bold">
              {t('industrialCompostableGuide.sections.pricingWholesale.offset')}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expert-notes',
      title: t('industrialCompostableGuide.sections.expertNotes.title'),
      icon: <HelpCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('industrialCompostableGuide.sections.expertNotes.p1')}
          </p>

          <div className="bg-[#FFA500] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="text-2xl font-black uppercase mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.expertNotes.cardTitle')}</h4>
            <div className="space-y-4 text-base font-medium">
              <p className="italic">
                {t('industrialCompostableGuide.sections.expertNotes.quote')}
              </p>
              <div className="border-t-2 border-black my-4 pt-4 space-y-3">
                <p>{t('industrialCompostableGuide.sections.expertNotes.l1')}</p>
                <p>{t('industrialCompostableGuide.sections.expertNotes.l2')}</p>
                <p>{t('industrialCompostableGuide.sections.expertNotes.l3')}</p>
              </div>
              <p className="font-bold border-t-2 border-black pt-4">
                {t('industrialCompostableGuide.sections.expertNotes.conclusion')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t('industrialCompostableGuide.sections.caseStudy.title'),
      icon: <Briefcase className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.caseStudy.challTitle')}</h4>
            <p className="mb-3 text-base">
              {t('industrialCompostableGuide.sections.caseStudy.challP1')}
            </p>
            <ul className="space-y-2 ml-6 text-base">
              <li>{t('industrialCompostableGuide.sections.caseStudy.challL1')}</li>
              <li>{t('industrialCompostableGuide.sections.caseStudy.challL2')}</li>
              <li>{t('industrialCompostableGuide.sections.caseStudy.challL3')}</li>
              <li>{t('industrialCompostableGuide.sections.caseStudy.challL4')}</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.caseStudy.ph1Title')}</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph1D')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph1DText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph1R')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph1RText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph1Inv')}</p>
                  <p className="text-lg font-bold text-green-700">{t('industrialCompostableGuide.sections.caseStudy.ph1InvVal')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#D4FF00] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.caseStudy.ph2Title')}</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph2D')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph2DText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph2R')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph2RText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph2Inv')}</p>
                  <p className="text-lg font-bold text-green-700">{t('industrialCompostableGuide.sections.caseStudy.ph2InvVal')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#00FFFF] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('industrialCompostableGuide.sections.caseStudy.ph3Title')}</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph3D')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph3DText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph3R')}</p>
                  <p className="text-xs mt-1">{t('industrialCompostableGuide.sections.caseStudy.ph3RText')}</p>
                </div>
                <div className="bg-white p-3 border-2 border-black">
                  <p className="font-bold">{t('industrialCompostableGuide.sections.caseStudy.ph3Inv')}</p>
                  <p className="text-lg font-bold text-green-700">{t('industrialCompostableGuide.sections.caseStudy.ph3InvVal')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('industrialCompostableGuide.sections.storeLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('industrialCompostableGuide.sections.storeLinks.textPart1')}<a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('industrialCompostableGuide.sections.storeLinks.link1')}</a>{t('industrialCompostableGuide.sections.storeLinks.textPart2')}<a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('industrialCompostableGuide.sections.storeLinks.link2')}</a>{t('industrialCompostableGuide.sections.storeLinks.textPart3')}<a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('industrialCompostableGuide.sections.storeLinks.link3')}</a>{t('industrialCompostableGuide.sections.storeLinks.textPart4')}
          </p>
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('industrialCompostableGuide.relatedArticles.r1Title'),
      url: '/blog/bpi-certified-guide',
      image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
    },
    {
      title: t('industrialCompostableGuide.relatedArticles.r2Title'),
      url: '/blog/usa-compostable-packaging-guide',
      image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
    },
    {
      title: t('industrialCompostableGuide.relatedArticles.r3Title'),
      url: '/blog/coffee-degassing-valve-guide',
      image: '/imgs/blog/coffee_degassing_valve.png'
    }
  ]

  const faqSections = [
    {
      q: t('industrialCompostableGuide.faq.q1'),
      a: t('industrialCompostableGuide.faq.a1')
    },
    {
      q: t('industrialCompostableGuide.faq.q2'),
      a: t('industrialCompostableGuide.faq.a2')
    },
    {
      q: t('industrialCompostableGuide.faq.q3'),
      a: t('industrialCompostableGuide.faq.a3')
    },
    {
      q: t('industrialCompostableGuide.faq.q4'),
      a: t('industrialCompostableGuide.faq.a4')
    },
    {
      q: t('industrialCompostableGuide.faq.q5'),
      a: t('industrialCompostableGuide.faq.a5')
    },
    {
      q: t('industrialCompostableGuide.faq.q6'),
      a: t('industrialCompostableGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('industrialCompostableGuide.meta.title')}
      metaDescription={t('industrialCompostableGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/industrial-compostable-guide"
      keywords={t('industrialCompostableGuide.meta.keywords', { returnObjects: true }) as string[]}
      publishedDate="2026-01-30T10:00:00Z"
      modifiedDate="2026-05-31"
      author="Ryan Chen"
      heroTitle={t('industrialCompostableGuide.hero.title')}
      heroSubtitle={t('industrialCompostableGuide.hero.subtitle')}
      categoryTag="Materials"
      categoryColor="green"
      readTime="14 min"
      heroImage="/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp"
      heroImageAlt={t('industrialCompostableGuide.hero.imageAlt')}
      sections={sections}
      faqSections={faqSections}
      achievePackLink="https://achievepack.com/materials/industrial-compostable"
      achievePackText={t('industrialCompostableGuide.achievePackText')}
      relatedArticles={relatedArticles}
    />
  )
}
