import React, { ReactNode } from 'react'
import { Home, Leaf, Award, DollarSign, Briefcase, TrendingUp, Shield, Clock, Target, CheckCircle, AlertCircle, Package } from 'lucide-react'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: ReactNode
  content: ReactNode
}

export default function HomeCompostableGuide() {
  const { t } = useTranslation()
  const sections: BlogArticleSection[] = [
    {
      id: 'why-home-compostable',
      title: t('homeCompostableGuide.sections.whyHomeCompostable.title'),
      icon: <TrendingUp className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.whyHomeCompostable.intro') }}
          />

          <div className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.whyHomeCompostable.marketRealityTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#00FFFF] border-2 border-black p-4 text-black">
                <p className="text-3xl font-black">{t('homeCompostableGuide.sections.whyHomeCompostable.stat1')}</p>
                <p className="text-sm">{t('homeCompostableGuide.sections.whyHomeCompostable.stat1Text')}</p>
              </div>
              <div className="bg-[#D4FF00] border-2 border-black p-4 text-black">
                <p className="text-3xl font-black">{t('homeCompostableGuide.sections.whyHomeCompostable.stat2')}</p>
                <p className="text-sm">{t('homeCompostableGuide.sections.whyHomeCompostable.stat2Text')}</p>
              </div>
              <div className="bg-[#00FFFF] border-2 border-black p-4 text-black">
                <p className="text-3xl font-black">{t('homeCompostableGuide.sections.whyHomeCompostable.stat3')}</p>
                <p className="text-sm">{t('homeCompostableGuide.sections.whyHomeCompostable.stat3Text')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              {t('homeCompostableGuide.sections.whyHomeCompostable.whoNeedsTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-black">
              <div className="bg-white border-4 border-black p-4">
                <h4 className="font-bold mb-2">
                  {t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds1Title')}
                </h4>
                <p 
                  className="text-sm text-neutral-600"
                  dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds1Text') }}
                />
              </div>
              <div className="bg-white border-4 border-black p-4">
                <h4 className="font-bold mb-2">
                  {t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds2Title')}
                </h4>
                <p 
                  className="text-sm text-neutral-600"
                  dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds2Text') }}
                />
              </div>
              <div className="bg-white border-4 border-black p-4">
                <h4 className="font-bold mb-2">
                  {t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds3Title')}
                </h4>
                <p 
                  className="text-sm text-neutral-600"
                  dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.whyHomeCompostable.whoNeeds3Text') }}
                />
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <p 
              className="text-sm text-amber-800"
              dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.whyHomeCompostable.warning') }}
            />
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('homeCompostableGuide.sections.certifications.title'),
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.intro') }}
          />

          <div className="bg-white border-4 border-black overflow-hidden text-black">
            <div className="bg-black text-[#D4FF00] p-3">
              <h3 className="font-bold font-['JetBrains_Mono']">
                {t('homeCompostableGuide.sections.certifications.tableTitle')}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#F0F0F0]">
                  <tr>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.th1')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.th2')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.th3')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.th4')}
                    </th>
                    <th className="px-4 py-3 text-left">
                      {t('homeCompostableGuide.sections.certifications.th5')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.certifications.r1c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.r1c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">20-30°C</td>
                    <td className="px-4 py-3 border-r-2 border-black">EU, UK, Global</td>
                    <td className="px-4 py-3">$8K-$15K</td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.certifications.r2c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.r2c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">20-30°C</td>
                    <td className="px-4 py-3 border-r-2 border-black">Australia, NZ</td>
                    <td className="px-4 py-3">$7K-$12K</td>
                  </tr>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.certifications.r3c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.certifications.r3c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">20-30°C</td>
                    <td className="px-4 py-3 border-r-2 border-black">Germany, EU</td>
                    <td className="px-4 py-3">$9K-$16K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.certifications.whichNeedTitle')}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.need1') }} />
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.need2') }} />
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.need3') }} />
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.need4') }} />
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <p 
              className="text-sm text-amber-800"
              dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.certifications.tip') }}
            />
          </div>
        </div>
      )
    },
    {
      id: 'material-options',
      title: t('homeCompostableGuide.sections.materialOptions.title'),
      icon: <Leaf className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.intro') }}
          />

          <div className="bg-white border-4 border-black overflow-hidden">
            <div className="bg-black text-[#D4FF00] p-3">
              <h3 className="font-bold font-['JetBrains_Mono']">
                {t('homeCompostableGuide.sections.materialOptions.tableTitle')}
              </h3>
            </div>
            <div className="overflow-x-auto text-black">
              <table className="w-full text-sm">
                <thead className="bg-[#F0F0F0]">
                  <tr>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.th1')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.th2')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.th3')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.th4')}
                    </th>
                    <th className="px-4 py-3 text-left">
                      {t('homeCompostableGuide.sections.materialOptions.th5')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.materialOptions.r1c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r1c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r1c3')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r1c4')}
                    </td>
                    <td className="px-4 py-3">
                      {t('homeCompostableGuide.sections.materialOptions.r1c5')}
                    </td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.materialOptions.r2c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r2c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r2c3')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r2c4')}
                    </td>
                    <td className="px-4 py-3">
                      {t('homeCompostableGuide.sections.materialOptions.r2c5')}
                    </td>
                  </tr>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.materialOptions.r3c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r3c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r3c3')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r3c4')}
                    </td>
                    <td className="px-4 py-3">
                      {t('homeCompostableGuide.sections.materialOptions.r3c5')}
                    </td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">
                      {t('homeCompostableGuide.sections.materialOptions.r4c1')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r4c2')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r4c3')}
                    </td>
                    <td className="px-4 py-3 border-r-2 border-black">
                      {t('homeCompostableGuide.sections.materialOptions.r4c4')}
                    </td>
                    <td className="px-4 py-3">
                      {t('homeCompostableGuide.sections.materialOptions.r4c5')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-4 border-green-500 p-6">
              <h3 className="text-xl font-bold mb-3 text-green-800">
                {t('homeCompostableGuide.sections.materialOptions.strengthsTitle')}
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.strength1') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.strength2') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.strength3') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.strength4') }} />
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-4 border-red-500 p-6">
              <h3 className="text-xl font-bold mb-3 text-red-800">
                {t('homeCompostableGuide.sections.materialOptions.limitsTitle')}
              </h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.limit1') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.limit2') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.limit3') }} />
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.materialOptions.limit4') }} />
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.materialOptions.treeTitle')}
            </h3>
            <div className="space-y-3 text-sm">
              <p><strong>{t('homeCompostableGuide.sections.materialOptions.treeHomeHeader')}</strong></p>
              <ul className="ml-6 space-y-1">
                <li>{t('homeCompostableGuide.sections.materialOptions.treeHome1')}</li>
                <li>{t('homeCompostableGuide.sections.materialOptions.treeHome2')}</li>
                <li>{t('homeCompostableGuide.sections.materialOptions.treeHome3')}</li>
                <li>{t('homeCompostableGuide.sections.materialOptions.treeHome4')}</li>
              </ul>
              <p className="mt-4"><strong>{t('homeCompostableGuide.sections.materialOptions.treeIndHeader')}</strong></p>
              <ul className="ml-6 space-y-1">
                <li>{t('homeCompostableGuide.sections.materialOptions.treeInd1')}</li>
                <li>{t('homeCompostableGuide.sections.materialOptions.treeInd2')}</li>
                <li>{t('homeCompostableGuide.sections.materialOptions.treeInd3')}</li>
                <li>
                  <a href="https://achievepack.com/materials/industrial-compostable" className="underline text-black hover:text-[#10b981]">
                    {t('homeCompostableGuide.sections.materialOptions.treeIndLink')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t('homeCompostableGuide.sections.specifications.title'),
      icon: <Package className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('homeCompostableGuide.sections.specifications.intro')}
          </p>

          <div className="overflow-x-auto text-black">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">
                    {t('homeCompostableGuide.sections.specifications.th1')}
                  </th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">
                    {t('homeCompostableGuide.sections.specifications.th2')}
                  </th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">
                    {t('homeCompostableGuide.sections.specifications.th3')}
                  </th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">
                    {t('homeCompostableGuide.sections.specifications.r1c1')}
                  </td>
                  <td 
                    className="border-2 border-black p-3 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r1c2') }}
                  />
                  <td 
                    className="border-2 border-black p-3"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r1c3') }}
                  />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">
                    {t('homeCompostableGuide.sections.specifications.r2c1')}
                  </td>
                  <td 
                    className="border-2 border-black p-3 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r2c2') }}
                  />
                  <td className="border-2 border-black p-3">
                    {t('homeCompostableGuide.sections.specifications.r2c3')}
                  </td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">
                    {t('homeCompostableGuide.sections.specifications.r3c1')}
                  </td>
                  <td 
                    className="border-2 border-black p-3 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r3c2') }}
                  />
                  <td 
                    className="border-2 border-black p-3"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r3c3') }}
                  />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">
                    {t('homeCompostableGuide.sections.specifications.r4c1')}
                  </td>
                  <td 
                    className="border-2 border-black p-3 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.specifications.r4c2') }}
                  />
                  <td className="border-2 border-black p-3">
                    {t('homeCompostableGuide.sections.specifications.r4c3')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'transparent-pricing',
      title: t('homeCompostableGuide.sections.transparentPricing.title'),
      icon: <DollarSign className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.transparentPricing.intro') }}
          />

          <div className="bg-white border-4 border-black overflow-hidden text-black">
            <div className="bg-black text-[#D4FF00] p-3">
              <h3 className="font-bold font-['JetBrains_Mono']">
                {t('homeCompostableGuide.sections.transparentPricing.tableTitle')}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#F0F0F0]">
                  <tr>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.transparentPricing.th1')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.transparentPricing.th2')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.transparentPricing.th3')}
                    </th>
                    <th className="px-4 py-3 text-left border-r-2 border-black">
                      {t('homeCompostableGuide.sections.transparentPricing.th4')}
                    </th>
                    <th className="px-4 py-3 text-left">
                      {t('homeCompostableGuide.sections.transparentPricing.th5')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">4oz (100×170mm)</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.10-$1.40</td>
                    <td className="px-4 py-3 border-r-2 border-black">$0.85-$1.10</td>
                    <td className="px-4 py-3 border-r-2 border-black">$0.70-$0.90</td>
                    <td className="px-4 py-3">$0.55-$0.75</td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">8oz (120×200mm)</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.35-$1.65</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.05-$1.35</td>
                    <td className="px-4 py-3 border-r-2 border-black">$0.85-$1.10</td>
                    <td className="px-4 py-3">$0.70-$0.90</td>
                  </tr>
                  <tr className="border-t-2 border-black">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">12oz (140×240mm)</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.50-$1.85</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.20-$1.50</td>
                    <td className="px-4 py-3 border-r-2 border-black">$0.95-$1.20</td>
                    <td className="px-4 py-3">$0.80-$1.00</td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="px-4 py-3 border-r-2 border-black font-bold">1lb (160×260mm)</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.70-$2.05</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.35-$1.65</td>
                    <td className="px-4 py-3 border-r-2 border-black">$1.10-$1.35</td>
                    <td className="px-4 py-3">$0.90-$1.15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#F0F0F0] border-4 border-black p-6 text-black">
            <h3 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.transparentPricing.costTitle')}
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="text-2xl font-black">{t('homeCompostableGuide.sections.transparentPricing.cost1')}</p>
                <p className="text-xs mt-2">{t('homeCompostableGuide.sections.transparentPricing.cost1Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="text-2xl font-black">{t('homeCompostableGuide.sections.transparentPricing.cost2')}</p>
                <p className="text-xs mt-2">{t('homeCompostableGuide.sections.transparentPricing.cost2Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="text-2xl font-black">{t('homeCompostableGuide.sections.transparentPricing.cost3')}</p>
                <p className="text-xs mt-2">{t('homeCompostableGuide.sections.transparentPricing.cost3Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="text-2xl font-black">{t('homeCompostableGuide.sections.transparentPricing.cost4')}</p>
                <p className="text-xs mt-2">{t('homeCompostableGuide.sections.transparentPricing.cost4Text')}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.transparentPricing.roiTitle')}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white border-2 border-black p-4">
                <p className="font-bold mb-2">
                  {t('homeCompostableGuide.sections.transparentPricing.roiSub')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-neutral-600">
                      {t('homeCompostableGuide.sections.transparentPricing.plasticCost')}
                    </p>
                    <p className="text-lg font-bold">$0.50/bag × 1,000 = $500</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">
                      {t('homeCompostableGuide.sections.transparentPricing.compostCost')}
                    </p>
                    <p className="text-lg font-bold">$0.85/bag × 1,000 = $850</p>
                  </div>
                </div>
                <p className="mt-2 text-amber-700"><strong>{t('homeCompostableGuide.sections.transparentPricing.extraCost')}</strong></p>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-bold mb-2">{t('homeCompostableGuide.sections.transparentPricing.valueTitle')}</p>
                <ul className="space-y-1">
                  <li>{t('homeCompostableGuide.sections.transparentPricing.v1')}</li>
                  <li>{t('homeCompostableGuide.sections.transparentPricing.v2')}</li>
                  <li>{t('homeCompostableGuide.sections.transparentPricing.v3')}</li>
                  <li>{t('homeCompostableGuide.sections.transparentPricing.v4')}</li>
                </ul>
                <p 
                  className="mt-2 text-green-700"
                  dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.transparentPricing.netImpact') }}
                />
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <p 
              className="text-sm text-amber-800"
              dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.transparentPricing.budgetTip') }}
            />
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t('homeCompostableGuide.sections.caseStudy.title'),
      icon: <Briefcase className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-8 w-8 text-black" />
              <div>
                <h3 className="text-xl font-bold font-['JetBrains_Mono']">Melbourne Herbal Tea Co.</h3>
                <p className="text-sm text-neutral-600">
                  {t('homeCompostableGuide.sections.caseStudy.introSub')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-black">
              <div className="bg-white border-2 border-black p-3 text-center">
                <p className="text-2xl font-black text-[#10b981]">{t('homeCompostableGuide.sections.caseStudy.stat1')}</p>
                <p className="text-xs">{t('homeCompostableGuide.sections.caseStudy.stat1Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-3 text-center">
                <p className="text-2xl font-black text-[#10b981]">{t('homeCompostableGuide.sections.caseStudy.stat2')}</p>
                <p className="text-xs">{t('homeCompostableGuide.sections.caseStudy.stat2Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-3 text-center">
                <p className="text-2xl font-black text-[#10b981]">{t('homeCompostableGuide.sections.caseStudy.stat3')}</p>
                <p className="text-xs">{t('homeCompostableGuide.sections.caseStudy.stat3Text')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-black">
            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#00FFFF] border-2 border-black px-3 py-1 font-bold text-sm">
                  {t('homeCompostableGuide.sections.caseStudy.p1Title')}
                </div>
                <h3 className="text-lg font-bold">
                  {t('homeCompostableGuide.sections.caseStudy.p1Header')}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>{t('homeCompostableGuide.sections.caseStudy.p1_1')}</li>
                <li>{t('homeCompostableGuide.sections.caseStudy.p1_2')}</li>
                <li>{t('homeCompostableGuide.sections.caseStudy.p1_3')}</li>
                <li>{t('homeCompostableGuide.sections.caseStudy.p1_4')}</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#D4FF00] border-2 border-black px-3 py-1 font-bold text-sm">
                  {t('homeCompostableGuide.sections.caseStudy.p2Title')}
                </div>
                <h3 className="text-lg font-bold">
                  {t('homeCompostableGuide.sections.caseStudy.p2Header')}
                </h3>
              </div>
              <div className="space-y-3 text-sm text-neutral-700">
                <p><strong>{t('homeCompostableGuide.sections.caseStudy.p2Sel')}</strong></p>
                <ul className="space-y-2 ml-4">
                  <li dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.p2_1') }} />
                  <li>{t('homeCompostableGuide.sections.caseStudy.p2_2')}</li>
                  <li>{t('homeCompostableGuide.sections.caseStudy.p2_3')}</li>
                  <li>{t('homeCompostableGuide.sections.caseStudy.p2_4')}</li>
                </ul>
                <p className="mt-3"><strong>{t('homeCompostableGuide.sections.caseStudy.p2Marketing')}</strong></p>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#10b981] text-white border-2 border-black px-3 py-1 font-bold text-sm">
                  {t('homeCompostableGuide.sections.caseStudy.p3Title')}
                </div>
                <h3 className="text-lg font-bold">
                  {t('homeCompostableGuide.sections.caseStudy.p3Header')}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-black">
                <div>
                  <p className="font-bold mb-2 text-green-700">{t('homeCompostableGuide.sections.caseStudy.p3Fin')}</p>
                  <ul className="space-y-1">
                    <li dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.p3Fin1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.p3Fin2') }} />
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Fin3')}</li>
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Fin4')}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2 text-green-700">{t('homeCompostableGuide.sections.caseStudy.p3Brand')}</p>
                  <ul className="space-y-1">
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Brand1')}</li>
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Brand2')}</li>
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Brand3')}</li>
                    <li>{t('homeCompostableGuide.sections.caseStudy.p3Brand4')}</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#D4FF00] border-2 border-black p-4 mt-4 text-black">
                <p className="font-bold">{t('homeCompostableGuide.sections.caseStudy.netProfit')}</p>
                <p className="text-xs mt-1">{t('homeCompostableGuide.sections.caseStudy.roiText')}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">
              {t('homeCompostableGuide.sections.caseStudy.lessonsTitle')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.lesson1') }} />
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.lesson2') }} />
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.lesson3') }} />
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.caseStudy.lesson4') }} />
              </li>
            </ul>
          </div>

          <div className="bg-black text-[#D4FF00] border-4 border-black p-6">
            <h3 className="text-xl font-bold mb-3 font-['JetBrains_Mono'] text-[#D4FF00]">
              {t('homeCompostableGuide.sections.caseStudy.readyTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="text-[#D4FF00]">
                <p className="mb-2 text-[#D4FF00]">{t('homeCompostableGuide.sections.caseStudy.readyLeft1')}</p>
                <p className="text-[#D4FF00]">{t('homeCompostableGuide.sections.caseStudy.readyLeft2')}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://calendly.com/30-min-free-packaging-consultancy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#D4FF00] text-black px-6 py-3 border-4 border-black font-bold text-center hover:bg-[#00FFFF] transition-colors"
                >
                  {t('homeCompostableGuide.sections.caseStudy.btn1')}
                </a>
                <a 
                  href="https://achievepack.com/materials/home-compostable" 
                  className="bg-white text-black px-6 py-3 border-4 border-black font-bold text-center hover:bg-[#F0F0F0] transition-colors"
                >
                  {t('homeCompostableGuide.sections.caseStudy.btn2')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('homeCompostableGuide.sections.b2bStoreLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6 text-black">
          <p 
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.sections.b2bStoreLinks.intro') }}
          />
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('homeCompostableGuide.related.t1'),
      url: '/blog/industrial-compostable-guide',
      image: '/imgs/composting/commercial/a_windrow_composting_facility_0882621.webp'
    },
    {
      title: t('homeCompostableGuide.related.t2'),
      url: '/blog/bpi-certified-guide',
      image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
    },
    {
      title: t('homeCompostableGuide.related.t3'),
      url: '/blog/usa-compostable-guide',
      image: '/imgs/composting/finder/a_achievepack_composting_locator_hero_9733153.webp'
    }
  ]

  const faqSections = [
    {
      q: t('homeCompostableGuide.faq.q1'),
      a: t('homeCompostableGuide.faq.a1')
    },
    {
      q: t('homeCompostableGuide.faq.q2'),
      a: t('homeCompostableGuide.faq.a2')
    },
    {
      q: t('homeCompostableGuide.faq.q3'),
      a: t('homeCompostableGuide.faq.a3')
    },
    {
      q: t('homeCompostableGuide.faq.q4'),
      a: t('homeCompostableGuide.faq.a4')
    },
    {
      q: t('homeCompostableGuide.faq.q5'),
      a: t('homeCompostableGuide.faq.a5')
    },
    {
      q: t('homeCompostableGuide.faq.q6'),
      a: t('homeCompostableGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('homeCompostableGuide.title')}
      metaDescription={t('homeCompostableGuide.metaDescription')}
      canonicalUrl="https://pouch.eco/blog/home-compostable-guide"
      keywords={[
        'home compostable packaging',
        'OK Home certification',
        'AS 5810 certified',
        'TÜV home compost',
        'backyard compostable',
        'home compostable vs industrial',
        'Kraft PLA pouches',
        'Australian home compostable'
      ]}
      publishedDate="2026-01-30T10:00:00Z"
      modifiedDate="2026-01-30T10:00:00Z"
      author="Achieve Pack Sustainability Team"
      heroTitle={
        <span dangerouslySetInnerHTML={{ __html: t('homeCompostableGuide.heroTitle') }} />
      }
      heroSubtitle={t('homeCompostableGuide.heroSubtitle')}
      categoryTag="Materials"
      categoryColor="green"
      readTime="15 min"
      heroImage="/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp"
      heroImageAlt={t('homeCompostableGuide.heroImageAlt')}
      sections={sections}
      faqSections={faqSections}
      achievePackLink="https://achievepack.com/materials/home-compostable"
      achievePackText="Need enterprise-level home compostable barrier films?"
      relatedArticles={relatedArticles}
    />
  )
}
