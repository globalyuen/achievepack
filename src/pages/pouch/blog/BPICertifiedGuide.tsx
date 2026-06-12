import React from 'react'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Link } from 'react-router-dom'
import { Award, FileCheck, DollarSign, Target, Briefcase, FileText, HelpCircle } from 'lucide-react'
import { useSeoBlogOverride } from '../../../hooks/useSeoBlogOverride'
import DynamicBlogArticleRender from '../../../components/pouch/DynamicBlogArticleRender'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function BPICertifiedGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('bpi-certified-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections: BlogArticleSection[] = [
    {
      id: 'what-is-bpi',
      title: t('bpiCertifiedGuide.sections.whatIsBpi.title'),
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.whatIsBpi.p1')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 my-8 bg-green-50 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full sm:w-1/4 flex justify-center bg-white p-4 border-2 border-black">
              <img 
                src="/imgs/company/bpi/bpi.svg" 
                alt={t('bpiCertifiedGuide.hero.imageAlt')} 
                className="w-28 h-28 object-contain"
              />
            </div>
            <div className="flex-1 text-black">
              <h4 className="text-lg font-black uppercase mb-1 flex items-center gap-1.5 text-green-950 font-['JetBrains_Mono']">
                {t('bpiCertifiedGuide.sections.whatIsBpi.registryTitle')}
              </h4>
              <p className="text-sm leading-relaxed font-medium">
                {t('bpiCertifiedGuide.sections.whatIsBpi.registryText')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.whatIsBpi.b2bTitle')}</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <strong>{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL1Title')}</strong>
                    <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL1Text')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <strong>{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL2Title')}</strong>
                    <p className="text-sm mt-1" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.whatIsBpi.b2bL2Text') }} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">%</span>
                  <div>
                    <strong>{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL3Title')}</strong>
                    <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL3Text')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <strong>{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL4Title')}</strong>
                    <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.b2bL4Text')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.whatIsBpi.reqTitle')}</h3>
              <div className="space-y-4 text-base">
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('bpiCertifiedGuide.sections.whatIsBpi.req1Title')}</p>
                  <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.req1Text')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('bpiCertifiedGuide.sections.whatIsBpi.req2Title')}</p>
                  <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.req2Text')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-green-700">{t('bpiCertifiedGuide.sections.whatIsBpi.req3Title')}</p>
                  <p className="text-sm mt-1">{t('bpiCertifiedGuide.sections.whatIsBpi.req3Text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-to-get-certified',
      title: t('bpiCertifiedGuide.sections.howToGetCertified.title'),
      icon: <FileCheck className="h-5 w-5" />,
      content: (
        <div className="space-y-6 text-base">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.howToGetCertified.p1')}
          </p>

          <div className="space-y-6">
            <div className="bg-[#00FFFF] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.howToGetCertified.step1Title')}</h4>
              <p className="mb-4">{t('bpiCertifiedGuide.sections.howToGetCertified.step1Text')}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-neutral-900">{t('bpiCertifiedGuide.sections.howToGetCertified.owsTitle')}</p>
                  <p className="mt-1">{t('bpiCertifiedGuide.sections.howToGetCertified.owsCost')}</p>
                  <p>{t('bpiCertifiedGuide.sections.howToGetCertified.owsLead')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-neutral-900">{t('bpiCertifiedGuide.sections.howToGetCertified.tuvTitle')}</p>
                  <p className="mt-1">{t('bpiCertifiedGuide.sections.howToGetCertified.tuvCost')}</p>
                  <p>{t('bpiCertifiedGuide.sections.howToGetCertified.tuvLead')}</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <p className="font-bold text-neutral-900">{t('bpiCertifiedGuide.sections.howToGetCertified.dinTitle')}</p>
                  <p className="mt-1">{t('bpiCertifiedGuide.sections.howToGetCertified.dinCost')}</p>
                  <p>{t('bpiCertifiedGuide.sections.howToGetCertified.dinLead')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.howToGetCertified.step2Title')}</h4>
              <p className="mb-3">{t('bpiCertifiedGuide.sections.howToGetCertified.step2Text')}</p>
              <ul className="space-y-2 list-disc pl-6 text-sm">
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step2L1')}</li>
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step2L2')}</li>
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step2L3')}</li>
              </ul>
            </div>

            <div className="bg-[#D4FF00] border-4 border-black p-6">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.howToGetCertified.step3Title')}</h4>
              <p className="mb-3">{t('bpiCertifiedGuide.sections.howToGetCertified.step3Text')}</p>
              <ul className="space-y-2 list-disc pl-6 text-sm">
                <li>• <strong>{t('bpiCertifiedGuide.sections.howToGetCertified.step3L1')}</strong></li>
                <li>• <strong>{t('bpiCertifiedGuide.sections.howToGetCertified.step3L2')}</strong></li>
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step3L3')}</li>
              </ul>
            </div>

            <div className="bg-[#00FFFF] border-4 border-black p-6 font-medium">
              <h4 className="text-xl font-bold mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.howToGetCertified.step4Title')}</h4>
              <p className="mb-2">{t('bpiCertifiedGuide.sections.howToGetCertified.step4Text')}</p>
              <ul className="space-y-2 list-disc pl-6 text-sm">
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step4L1')}</li>
                <li>• {t('bpiCertifiedGuide.sections.howToGetCertified.step4L2')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'avoid-testing-hack',
      title: t('bpiCertifiedGuide.sections.avoidTestingHack.title'),
      icon: <DollarSign className="h-5 w-5" />,
      content: (
        <div className="space-y-6 text-base">
          <div className="bg-[#D4FF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-3xl uppercase mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.avoidTestingHack.cardTitle')}</h3>
            <p className="font-bold text-lg mb-4">
              {t('bpiCertifiedGuide.sections.avoidTestingHack.cardSubtitle')}
            </p>
            <p className="mb-4">
              {t('bpiCertifiedGuide.sections.avoidTestingHack.p1')}
            </p>
            <div className="bg-white p-6 border-4 border-black space-y-4">
              <p className="font-bold text-green-700 text-xl">{t('bpiCertifiedGuide.sections.avoidTestingHack.howTitle')}</p>
              <ol className="space-y-3 font-medium">
                <li>1️⃣ {t('bpiCertifiedGuide.sections.avoidTestingHack.l1')}</li>
                <li>2️⃣ {t('bpiCertifiedGuide.sections.avoidTestingHack.l2')}</li>
                <li>3️⃣ {t('bpiCertifiedGuide.sections.avoidTestingHack.l3')}</li>
                <li>4️⃣ {t('bpiCertifiedGuide.sections.avoidTestingHack.l4')}</li>
              </ol>
            </div>
            <p className="mt-4 font-bold text-sm font-mono">
              {t('bpiCertifiedGuide.sections.avoidTestingHack.result')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'technical-specifications',
      title: t('bpiCertifiedGuide.sections.technicalSpecs.title'),
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.technicalSpecs.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.technicalSpecs.th1')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.technicalSpecs.th2')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.technicalSpecs.th3')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.technicalSpecs.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr1Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr1Col3') }} />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.technicalSpecs.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr2Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr2Col3') }} />
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.technicalSpecs.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr3Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr3Col3') }} />
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.technicalSpecs.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr4Col2') }} />
                  <td className="border-2 border-black p-3" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.sections.technicalSpecs.tr4Col3') }} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'bpi-vs-other-certs',
      title: t('bpiCertifiedGuide.sections.bpiVsOtherCerts.title'),
      icon: <Target className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.bpiVsOtherCerts.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.th1')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.th2')}</th>
                  <th className="border-2 border-black p-4 text-center font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.th3')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.th4')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr1Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr1Col3')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr1Col4')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr2Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr2Col3')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr2Col4')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr3Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr3Col3')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr3Col4')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr4Col2')}</td>
                  <td className="border-2 border-black p-3 text-center">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr4Col3')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">{t('bpiCertifiedGuide.sections.bpiVsOtherCerts.tr4Col4')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'expert-notes',
      title: t('bpiCertifiedGuide.sections.expertNotes.title'),
      icon: <HelpCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.expertNotes.p1')}
          </p>

          <div className="bg-[#FFA500] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="text-2xl font-black uppercase mb-4 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.expertNotes.cardTitle')}</h4>
            <div className="space-y-4 text-base font-medium">
              <p className="italic">
                {t('bpiCertifiedGuide.sections.expertNotes.quote')}
              </p>
              <div className="border-t-2 border-black my-4 pt-4 space-y-3">
                <p>{t('bpiCertifiedGuide.sections.expertNotes.l1')}</p>
                <p>{t('bpiCertifiedGuide.sections.expertNotes.l2')}</p>
                <p>{t('bpiCertifiedGuide.sections.expertNotes.l3')}</p>
              </div>
              <p className="font-bold border-t-2 border-black pt-4">
                {t('bpiCertifiedGuide.sections.expertNotes.conclusion')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t('bpiCertifiedGuide.sections.caseStudy.title'),
      icon: <Briefcase className="h-5 w-5" />,
      content: (
        <div className="space-y-6 text-base">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.caseStudy.p1')}
          </p>

          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.caseStudy.emergTitle')}</h4>
            <p className="mb-3">
              {t('bpiCertifiedGuide.sections.caseStudy.emergP1')}
            </p>
            <ul className="space-y-2 ml-6">
              <li>{t('bpiCertifiedGuide.sections.caseStudy.emergL1')}</li>
              <li>{t('bpiCertifiedGuide.sections.caseStudy.emergL2')}</li>
              <li>{t('bpiCertifiedGuide.sections.caseStudy.emergL3')}</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-[#F0F0F0] border-2 border-black p-4">
              <p className="font-bold text-red-700">{t('bpiCertifiedGuide.sections.caseStudy.col1Title')}</p>
              <p className="text-lg font-bold mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col1Text')}</p>
              <p className="text-xs text-neutral-600 mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col1Sub')}</p>
            </div>
            <div className="bg-[#F0F0F0] border-2 border-black p-4">
              <p className="font-bold text-blue-700">{t('bpiCertifiedGuide.sections.caseStudy.col2Title')}</p>
              <p className="text-lg font-bold mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col2Text')}</p>
              <p className="text-xs text-neutral-600 mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col2Sub')}</p>
            </div>
            <div className="bg-[#F0F0F0] border-2 border-black p-4">
              <p className="font-bold text-purple-700">{t('bpiCertifiedGuide.sections.caseStudy.col3Title')}</p>
              <p className="text-lg font-bold mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col3Text')}</p>
              <p className="text-xs text-neutral-600 mt-1">{t('bpiCertifiedGuide.sections.caseStudy.col3Sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq-accordions',
      title: t('bpiCertifiedGuide.sections.faqAccordions.title'),
      icon: <HelpCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.faqAccordions.p1')}
          </p>

          <div className="space-y-4">
            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q1')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a1') }} />
            </details>

            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q2')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a2') }} />
            </details>

            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q3')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a3') }} />
            </details>

            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q4')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a4') }} />
            </details>

            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q5')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a5') }} />
            </details>

            <details className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="text-xl font-bold uppercase font-['JetBrains_Mono'] flex items-center gap-2">
                  <span>{t('bpiCertifiedGuide.faq.q6')}</span>
                </h5>
                <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-800" dangerouslySetInnerHTML={{ __html: t('bpiCertifiedGuide.faq.a6') }} />
            </details>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-12 text-center">
            <h4 className="text-3xl font-black uppercase mb-6 font-['JetBrains_Mono']">{t('bpiCertifiedGuide.sections.faqAccordions.ctaTitle')}</h4>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-bold text-neutral-800">
              {t('bpiCertifiedGuide.sections.faqAccordions.ctaText')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/ryan-achievepack/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#D4FF00] border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold uppercase text-sm hover:bg-white hover:text-black transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                {t('bpiCertifiedGuide.sections.faqAccordions.ctaBtn1')}
              </a>
              <a 
                href="https://achievepack.com/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00FFFF] text-black border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold uppercase text-sm hover:bg-white hover:text-black transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                {t('bpiCertifiedGuide.sections.faqAccordions.ctaBtn2')}
              </a>
              <a 
                href="https://achievepack.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold uppercase text-sm hover:bg-black hover:text-white transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                {t('bpiCertifiedGuide.sections.faqAccordions.ctaBtn3')}
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('bpiCertifiedGuide.sections.storeLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bpiCertifiedGuide.sections.storeLinks.textPart1')}<a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('bpiCertifiedGuide.sections.storeLinks.link1')}</a>{t('bpiCertifiedGuide.sections.storeLinks.textPart2')}<a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('bpiCertifiedGuide.sections.storeLinks.link2')}</a>{t('bpiCertifiedGuide.sections.storeLinks.textPart3')}<a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('bpiCertifiedGuide.sections.storeLinks.link3')}</a>{t('bpiCertifiedGuide.sections.storeLinks.textPart4')}
          </p>
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('bpiCertifiedGuide.relatedArticles.r1Title'),
      url: '/blog/industrial-compostable-guide',
      image: '/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp'
    },
    {
      title: t('bpiCertifiedGuide.relatedArticles.r2Title'),
      url: '/blog/usa-compostable-packaging-guide',
      image: '/imgs/seo-photos/usa/hub/a_sustainability_labeling_guide_7131825.webp'
    },
    {
      title: t('bpiCertifiedGuide.relatedArticles.r3Title'),
      url: '/blog/coffee-degassing-valve-guide',
      image: '/imgs/blog/coffee_degassing_valve.png'
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('bpiCertifiedGuide.meta.title')}
      metaDescription={t('bpiCertifiedGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/bpi-certified-guide"
      keywords={t('bpiCertifiedGuide.meta.keywords', { returnObjects: true }) as string[]}
      publishedDate="2026-03-01T08:00:00Z"
      modifiedDate="2026-03-01T08:00:00Z"
      author="Ryan Chen"
      heroTitle={t('bpiCertifiedGuide.hero.title')}
      heroSubtitle={t('bpiCertifiedGuide.hero.subtitle')}
      categoryTag="Materials"
      categoryColor="green"
      readTime="13 min"
      heroImage="/imgs/company/bpi/bpipouch.webp"
      heroImageAlt={t('bpiCertifiedGuide.hero.imageAlt')}
      sections={sections}
      relatedArticles={relatedArticles}
    />
  )
}
