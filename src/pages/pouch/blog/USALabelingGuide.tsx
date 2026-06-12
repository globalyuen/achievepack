import { FileCheck, Shield, AlertTriangle, Scale, CheckCircle, MapPin, Building2, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function USALabelingGuide() {
  const { t } = useTranslation()

  const sections: BlogArticleSection[] = [
    {
      id: 'why-labels-matter',
      title: t('usaLabelingGuide.sections.whyLabelsMatter.title'),
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/seo-photos/usa/label/a_digital_labeling_strategy_0282148.webp" alt={t('usaLabelingGuide.sections.whyLabelsMatter.cardTitle')} className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          <div className="bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">{t('usaLabelingGuide.sections.whyLabelsMatter.cardTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg font-bold mb-2">{t('usaLabelingGuide.sections.whyLabelsMatter.p1')}</p>
                <ul className="space-y-2 text-base">
                  <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.l1')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.l2')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.l3')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.l4')}</strong></li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-bold mb-2">{t('usaLabelingGuide.sections.whyLabelsMatter.p2')}</p>
                <ul className="space-y-2 text-base">
                  <li>{t('usaLabelingGuide.sections.whyLabelsMatter.r1')}</li>
                  <li>{t('usaLabelingGuide.sections.whyLabelsMatter.r2')}</li>
                  <li>{t('usaLabelingGuide.sections.whyLabelsMatter.r3')}</li>
                  <li>{t('usaLabelingGuide.sections.whyLabelsMatter.r4')}</li>
                  <li>{t('usaLabelingGuide.sections.whyLabelsMatter.r5')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl uppercase mb-4">{t('usaLabelingGuide.sections.whyLabelsMatter.threeStates')}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border-2 border-blue-600 p-4">
                <h5 className="font-bold text-lg mb-2">{t('usaLabelingGuide.sections.whyLabelsMatter.ca')}</h5>
                <p className="text-sm mb-2"><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.caL')}</strong></p>
                <p className="text-sm">{t('usaLabelingGuide.sections.whyLabelsMatter.caM')}</p>
                <p className="text-sm mt-2">{t('usaLabelingGuide.sections.whyLabelsMatter.caW')}</p>
              </div>
              <div className="bg-green-50 border-2 border-green-600 p-4">
                <h5 className="font-bold text-lg mb-2">{t('usaLabelingGuide.sections.whyLabelsMatter.wa')}</h5>
                <p className="text-sm mb-2"><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.waL')}</strong></p>
                <p className="text-sm">{t('usaLabelingGuide.sections.whyLabelsMatter.waM')}</p>
                <p className="text-sm mt-2">{t('usaLabelingGuide.sections.whyLabelsMatter.waW')}</p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-600 p-4">
                <h5 className="font-bold text-lg mb-2">{t('usaLabelingGuide.sections.whyLabelsMatter.co')}</h5>
                <p className="text-sm mb-2"><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.coL')}</strong></p>
                <p className="text-sm">{t('usaLabelingGuide.sections.whyLabelsMatter.coM')}</p>
                <p className="text-sm mt-2">{t('usaLabelingGuide.sections.whyLabelsMatter.coW')}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F0F0F0] border-4 border-black p-6">
            <h4 className="font-black text-xl uppercase mb-4">{t('usaLabelingGuide.sections.whyLabelsMatter.fedTitle')}</h4>
            <p className="mb-3">{t('usaLabelingGuide.sections.whyLabelsMatter.fedText')}</p>
            <ul className="space-y-2 text-sm">
              <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.fed1')}</strong></li>
              <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.fed2')}</strong></li>
              <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.fed3')}</strong></li>
              <li><strong>{t('usaLabelingGuide.sections.whyLabelsMatter.fed4')}</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'california-deep-dive',
      title: t('usaLabelingGuide.sections.californiaDeepDive.title'),
      icon: <MapPin className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp" alt={t('usaLabelingGuide.sections.californiaDeepDive.cardTitle')} className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          <div className="bg-[#D4FF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-6">{t('usaLabelingGuide.sections.californiaDeepDive.cardTitle')}</h3>
            
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6">
                <h4 className="font-bold text-lg mb-3">{t('usaLabelingGuide.sections.californiaDeepDive.reqTitle')}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.req1Title')}</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ <Link to="/blog/usa-compostable-guide" className="hover:underline text-blue-800">{t('usaLabelingGuide.sections.californiaDeepDive.req1L1')}</Link></li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req1L2')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req1L3')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req1L4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.req2Title')}</h5>
                    <ul className="text-sm space-y-1">
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req2L1')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req2L2')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req2L3')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req2L4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.req3Title')}</h5>
                    <ul className="text-sm space-y-1">
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req3L1')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req3L2')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req3L3')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req3L4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.req4Title')}</h5>
                    <ul className="text-sm space-y-1">
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req4L1')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req4L2')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req4L3')}</li>
                      <li>{t('usaLabelingGuide.sections.californiaDeepDive.req4L4')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h4 className="font-bold text-lg mb-3">{t('usaLabelingGuide.sections.californiaDeepDive.sbTitle')}</h4>
                <div className="bg-red-50 border-2 border-red-600 p-4 mb-4">
                  <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.sbAlert')}</h5>
                  <p className="text-sm">{t('usaLabelingGuide.sections.californiaDeepDive.sbAlertText')}</p>
                </div>
                <ul className="text-sm space-y-2">
                  <li><strong>{t('usaLabelingGuide.sections.californiaDeepDive.sb1')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.californiaDeepDive.sb2')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.californiaDeepDive.sb3')}</strong></li>
                  <li><strong>{t('usaLabelingGuide.sections.californiaDeepDive.sb4')}</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border-4 border-black p-4">
              <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.californiaDeepDive.templTitle')}</h5>
              <div className="bg-white border-2 border-black p-4 font-['JetBrains_Mono'] text-sm">
                <p><strong>{t('usaLabelingGuide.sections.californiaDeepDive.t1')}</strong></p>
                <p className="text-green-700 font-bold mt-2">{t('usaLabelingGuide.sections.californiaDeepDive.t2')}</p>
                <p className="mt-2">{t('usaLabelingGuide.sections.californiaDeepDive.t3')}</p>
                <p>{t('usaLabelingGuide.sections.californiaDeepDive.t4')}</p>
                <p className="mt-2 text-xs">{t('usaLabelingGuide.sections.californiaDeepDive.t5')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'washington-colorado',
      title: t('usaLabelingGuide.sections.washingtonColorado.title'),
      icon: <Scale className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/seo-photos/usa/hub/a_label_compliance_requirements_0902238.webp" alt={t('usaLabelingGuide.sections.washingtonColorado.cardTitle')} className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-6">{t('usaLabelingGuide.sections.washingtonColorado.cardTitle')}</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-black text-[#D4FF00]">
                    <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono']">{t('usaLabelingGuide.sections.washingtonColorado.th1')}</th>
                    <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono']">{t('usaLabelingGuide.sections.washingtonColorado.th2')}</th>
                    <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono']">{t('usaLabelingGuide.sections.washingtonColorado.th3')}</th>
                    <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono']">{t('usaLabelingGuide.sections.washingtonColorado.th4')}</th>
                  </tr>
                </thead>
                <tbody className="font-['JetBrains_Mono'] text-sm">
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr1Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr1Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr1Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr1Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black bg-gray-50">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr2Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr2Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr2Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr2Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr3Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr3Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr3Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr3Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black bg-gray-50">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr4Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr4Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr4Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr4Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr5Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr5Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr5Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr5Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black bg-gray-50">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr6Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr6Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr6Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr6Col4')}</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black p-3 font-bold">{t('usaLabelingGuide.sections.washingtonColorado.tr7Col1')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr7Col2')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr7Col3')}</td>
                    <td className="border-2 border-black p-3">{t('usaLabelingGuide.sections.washingtonColorado.tr7Col4')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6">
            <h4 className="font-black text-xl uppercase mb-4">{t('usaLabelingGuide.sections.washingtonColorado.stratTitle')}</h4>
            <p className="mb-4">{t('usaLabelingGuide.sections.washingtonColorado.stratText')}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.washingtonColorado.step1')}</h5>
                <p className="text-sm">{t('usaLabelingGuide.sections.washingtonColorado.step1Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.washingtonColorado.step2')}</h5>
                <p className="text-sm">{t('usaLabelingGuide.sections.washingtonColorado.step2Text')}</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <h5 className="font-bold mb-2">{t('usaLabelingGuide.sections.washingtonColorado.step3')}</h5>
                <p className="text-sm">{t('usaLabelingGuide.sections.washingtonColorado.step3Text')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'label-design',
      title: t('usaLabelingGuide.sections.labelDesign.title'),
      icon: <FileCheck className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/seo-photos/usa/label/a_labeling_design_best_practices_0279886.webp" alt={t('usaLabelingGuide.sections.labelDesign.cardTitle')} className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-6">{t('usaLabelingGuide.sections.labelDesign.cardTitle')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-4 border-black p-6">
                <h4 className="font-black text-lg uppercase mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {t('usaLabelingGuide.sections.labelDesign.doTitle')}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.do1Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.do1Text')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.do2Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.do2Text')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.do3Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.do3Text')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-4 border-black p-6">
                <h4 className="font-black text-lg uppercase mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t('usaLabelingGuide.sections.labelDesign.dontTitle')}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold">✗</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.dont1Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.dont1Text')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold">✗</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.dont2Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.dont2Text')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold">✗</span>
                    <div>
                      <p className="font-bold">{t('usaLabelingGuide.sections.labelDesign.dont3Title')}</p>
                      <p className="text-xs">{t('usaLabelingGuide.sections.labelDesign.dont3Text')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certification-proof',
      title: t('usaLabelingGuide.sections.certificationProof.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp" alt={t('usaLabelingGuide.sections.certificationProof.title')} className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('usaLabelingGuide.sections.certificationProof.tableTitle')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.th1')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.th2')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('usaLabelingGuide.sections.certificationProof.th3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaLabelingGuide.sections.certificationProof.tr1Col1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.tr1Col2')}</td>
                    <td className="p-3 text-sm">{t('usaLabelingGuide.sections.certificationProof.tr1Col3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaLabelingGuide.sections.certificationProof.tr2Col1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.tr2Col2')}</td>
                    <td className="p-3 text-sm">{t('usaLabelingGuide.sections.certificationProof.tr2Col3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaLabelingGuide.sections.certificationProof.tr3Col1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.tr3Col2')}</td>
                    <td className="p-3 text-sm">{t('usaLabelingGuide.sections.certificationProof.tr3Col3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaLabelingGuide.sections.certificationProof.tr4Col1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.tr4Col2')}</td>
                    <td className="p-3 text-sm">{t('usaLabelingGuide.sections.certificationProof.tr4Col3')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaLabelingGuide.sections.certificationProof.tr5Col1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaLabelingGuide.sections.certificationProof.tr5Col2')}</td>
                    <td className="p-3 text-sm">{t('usaLabelingGuide.sections.certificationProof.tr5Col3')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="https://pouch.eco/products"
              className="inline-flex items-center justify-center gap-3 bg-black text-[#D4FF00] px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-[#D4FF00] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Leaf className="w-5 h-5" />
              {t('usaLabelingGuide.sections.certificationProof.btnShop')}
            </a>
            <a 
              href="https://achievepack.com/usa/labeling-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('usaLabelingGuide.sections.certificationProof.btnPricing')}
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('usaLabelingGuide.sections.storeLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('usaLabelingGuide.sections.storeLinks.textPart1')}<a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaLabelingGuide.sections.storeLinks.link1')}</a>{t('usaLabelingGuide.sections.storeLinks.textPart2')}<a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaLabelingGuide.sections.storeLinks.link2')}</a>{t('usaLabelingGuide.sections.storeLinks.textPart3')}<a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaLabelingGuide.sections.storeLinks.link3')}</a>{t('usaLabelingGuide.sections.storeLinks.textPart4')}
          </p>
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('usaLabelingGuide.relatedArticles.r1Title'),
      url: '/blog/usa-compostable-guide',
      image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
    },
    {
      title: t('usaLabelingGuide.relatedArticles.r2Title'),
      url: '/blog/usa-snacks-packaging-guide',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
    },
    {
      title: t('usaLabelingGuide.relatedArticles.r3Title'),
      url: '/blog/usa-coffee-packaging',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp'
    }
  ]

  const faqSections = [
    {
      q: t('usaLabelingGuide.faq.q1'),
      a: t('usaLabelingGuide.faq.a1')
    },
    {
      q: t('usaLabelingGuide.faq.q2'),
      a: t('usaLabelingGuide.faq.a2')
    },
    {
      q: t('usaLabelingGuide.faq.q3'),
      a: t('usaLabelingGuide.faq.a3')
    },
    {
      q: t('usaLabelingGuide.faq.q4'),
      a: t('usaLabelingGuide.faq.a4')
    },
    {
      q: t('usaLabelingGuide.faq.q5'),
      a: t('usaLabelingGuide.faq.a5')
    },
    {
      q: t('usaLabelingGuide.faq.q6'),
      a: t('usaLabelingGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('usaLabelingGuide.meta.title')}
      metaDescription={t('usaLabelingGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/usa-labeling-guide"
      keywords={t('usaLabelingGuide.meta.keywords', { returnObjects: true }) as string[]}
      publishedDate="2026-01-30T12:00:00Z"
      modifiedDate="2026-01-30T12:00:00Z"
      author="Ryan Wong"
      categoryTag="USA Compliance"
      categoryColor="#3b82f6"
      heroTitle={
        <>
          {t('usaLabelingGuide.hero.titlePart1')}<br />
          <span className="bg-black text-white px-2">{t('usaLabelingGuide.hero.titlePart2')}</span>
        </>
      }
      heroSubtitle={t('usaLabelingGuide.hero.subtitle')}
      heroImage="/imgs/seo-photos/usa/label/a_digital_labeling_strategy_0282148.webp"
      heroImageAlt={t('usaLabelingGuide.hero.imageAlt')}
      sections={sections}
      faqSections={faqSections}
      calendlyUrl="https://calendly.com/ryan-achievepack/30min"
      achievePackLink="https://achievepack.com/usa/labeling-guide"
      achievePackText={t('usaLabelingGuide.achievePackText')}
      showTableOfContents={true}
      relatedArticles={relatedArticles}
    />
  )
}
