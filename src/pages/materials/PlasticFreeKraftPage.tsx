import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, AlertTriangle, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from 'react-i18next'

const PlasticFreeKraftPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  
  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? (val as T[]) : [];
  };
  
  const sections = [
    {
      id: 'the-myth',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.title'),
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">
            <Trans i18nKey="seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.p1">
              There is a common misconception that choosing a <strong>kraft paper bag</strong> automatically means you are 100% <strong>plastic-free</strong>.
            </Trans>
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="font-bold text-amber-900">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.realityTitle')}</p>
            <p className="text-amber-800">
              {t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.realityDesc')}
            </p>
          </div>
          <p>
            <Trans i18nKey="seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.p2">
              At Achieve Pack, we specialize in bridging this gap with <strong>certified compostable kraft pouches</strong> that replace conventional plastic linings with plant-based PLA, making them genuinely eco-friendly.
            </Trans>
          </p>
        </div>
      )
    },
    {
      id: 'fun-facts',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {getTranslationArray<{ num: string; title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.facts').slice(0, 4).map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">{fact.num}</div>
                <div>
                  <h4 className="font-bold text-neutral-900">{fact.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{fact.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {getTranslationArray<{ num: string; title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.facts').slice(4, 5).map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition col-span-2">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">{fact.num}</div>
                <div>
                  <h4 className="font-bold text-neutral-900">{fact.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{fact.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'comparison',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.title'),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.type')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.material')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.plasticFree')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.score')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-center">
                {getTranslationArray<{ type: string; material: string; plasticFree: string; score: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.rows').map((row, idx) => {
                  let pfColor = "text-red-600";
                  const pfLower = (row.plasticFree || "").toLowerCase();
                  if (pfLower.includes("yes") || pfLower.includes("oui") || pfLower.includes("sí") || pfLower.includes("si") || pfLower.includes("是")) {
                    pfColor = "text-green-600";
                  } else if (pfLower.includes("partial") || pfLower.includes("partiel") || pfLower.includes("parcial") || pfLower.includes("部分")) {
                    pfColor = "text-blue-600";
                  }
                  
                  return (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-neutral-50" : ""}>
                      <td className="px-4 py-3 text-left font-medium">{row.type}</td>
                      <td className="px-4 py-3">{row.material}</td>
                      <td className={`px-4 py-3 font-bold ${pfColor}`}>{row.plasticFree}</td>
                      <td className="px-4 py-3">{row.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'geo-optimization',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.title'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.p1')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {getTranslationArray<{ title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.regions').map((region, idx) => (
              <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-1">{region.title}</h4>
                <p className="text-xs text-neutral-600">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-aieo',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.title'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            {t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.aieoTitle')}
          </h4>
          <p className="text-sm text-blue-700 mb-4">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.desc')}</p>
          <ul className="grid md:grid-cols-2 gap-2 text-xs text-blue-800">
            {getTranslationArray<string>('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.list').map((item, idx) => (
              <li key={idx} className="bg-white/50 p-2 rounded">{item}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.title'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h4 className="text-2xl font-bold mb-2">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.ctaTitle')}</h4>
              <p className="opacity-90 mb-0">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.ctaDesc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openCalendly} className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition shadow-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.bookBtn')}
              </button>
              <Link to="/store" className="bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-400 transition border border-primary-400 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.storeBtn')}
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.plasticFreeKraft.achievePack.seo.title')}
      description={t('seoPages.pages.plasticFreeKraft.achievePack.seo.description')}
      introSummary={t('seoPages.pages.plasticFreeKraft.achievePack.seo.introSummary')}
      keywords={getTranslationArray<string>('seoPages.pages.plasticFreeKraft.achievePack.seo.keywords')}
      sections={sections}
      heroTitle={t('seoPages.pages.plasticFreeKraft.achievePack.seo.heroTitle')}
      heroSubtitle={t('seoPages.pages.plasticFreeKraft.achievePack.seo.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp"
    />
  )
}

export default PlasticFreeKraftPage
