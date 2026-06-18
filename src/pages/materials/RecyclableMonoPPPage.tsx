import React from 'react'
import { Recycle, Shield, CheckCircle, Thermometer, Target, Calendar, Phone, Download, Mail, MessageCircle, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, Globe, Building2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

const RecyclableMonoPPPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.recyclableMonoPP'
  const isPouchDomain = getDomain() === 'pouch'

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

  // B2C Specific Content & Layout (for Pouch.eco)
  const b2cSections = [
    {
      id: 'hot-fill',
      title: t(`${p}.b2c.sections.hotFill.title`),
      icon: <Thermometer className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.b2c.sections.hotFill.intro`)}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono']">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase">
              {t(`${p}.b2c.sections.hotFill.cardTitle`)}
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed font-sans">
              {t(`${p}.b2c.sections.hotFill.cardDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div className="border-4 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img src="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp" alt="Recyclable mono-PP pouches" className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">
                {t(`${p}.b2c.sections.hotFill.bulletsTitle`)}
              </h4>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.hotFill.bullet1`))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.hotFill.bullet2`))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.hotFill.bullet3`))}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'glass-clarity',
      title: t(`${p}.b2c.sections.clarity.title`),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.b2c.sections.clarity.intro`)}
          </p>
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              {t(`${p}.b2c.sections.clarity.cardTitle`)}
            </h4>
            <p className="text-sm text-neutral-800 leading-relaxed font-sans">
              {t(`${p}.b2c.sections.clarity.cardDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">
                {t(`${p}.b2c.sections.clarity.bulletsTitle`)}
              </h4>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.clarity.bullet1`))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.clarity.bullet2`))}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{renderBullet(t(`${p}.b2c.sections.clarity.bullet3`))}</span>
                </li>
              </ul>
            </div>
            <div className="border-4 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img src="/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp" alt="Vibrant high clarity packaging" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'low-moq',
      title: t(`${p}.b2c.sections.lowMoq.title`),
      icon: <Target className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.b2c.sections.lowMoq.intro`)}
          </p>
          <div className="bg-[#FF00FF] text-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black mb-2 uppercase font-['JetBrains_Mono'] text-white">
              {t(`${p}.b2c.sections.lowMoq.cardTitle`)}
            </h4>
            <p className="text-sm leading-relaxed font-sans">
              {t(`${p}.b2c.sections.lowMoq.cardDesc`)}
            </p>
          </div>
          <div className="bg-[#D4FF00] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-bold text-sm uppercase font-['JetBrains_Mono']">
              {t(`${p}.b2c.sections.lowMoq.adviceTitle`)}
            </p>
            <p className="text-xs mt-1 font-sans">
              {t(`${p}.b2c.sections.lowMoq.adviceDesc`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'personalization',
      title: t(`${p}.b2c.sections.personalization.title`),
      icon: <Building2 className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.b2c.sections.personalization.intro`)}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <h4 className="font-bold text-black font-['JetBrains_Mono'] uppercase mb-2">
                {t(`${p}.b2c.sections.personalization.card1Title`)}
              </h4>
              <p className="text-sm text-neutral-600 font-sans">
                {t(`${p}.b2c.sections.personalization.card1Desc`)}
              </p>
            </div>
            <div className="border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <h4 className="font-bold text-black font-['JetBrains_Mono'] uppercase mb-2">
                {t(`${p}.b2c.sections.personalization.card2Title`)}
              </h4>
              <p className="text-sm text-neutral-600 font-sans">
                {t(`${p}.b2c.sections.personalization.card2Desc`)}
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t(`${p}.b2c.title`)}
        metaDescription={t(`${p}.b2c.description`)}
        canonicalUrl="https://pouch.eco/materials/recyclable-mono-pp"
        heroTitle={
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.b2c.heroBadge1`)}
              </span>
              <Link 
                to="/materials/recyclable" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#D4FF00] text-black border-2 border-black hover:bg-[#00FFFF] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                {t(`${p}.b2c.heroBadge2`)}
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              {t(`${p}.b2c.heroTitleLine1`)}<br />
              <span className="text-[#00FFFF] bg-black text-white px-2 inline-block my-1">{t(`${p}.b2c.heroTitleLine2`)}</span><br />
              {t(`${p}.b2c.heroTitleLine3`)}
            </h1>
          </div>
        }
        heroSubtitle={t(`${p}.b2c.heroSubtitle`)}
        heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
        heroImageAlt="POUCH.ECO Recyclable Mono-PP Packaging"
        categoryTag="RECYCLABLE_MATERIALS"
        categoryColor="#D4FF00"
        readTime="4 min read"
        sections={b2cSections}
        ctaTitle={t(`${p}.b2c.ctaTitle`)}
        ctaDescription={t(`${p}.b2c.ctaDescription`)}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/materials/recyclable-mono-pp"
        achievePackText={t(`${p}.b2c.achievePackText`)}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: "Recyclable Mono-PE",
            url: "/materials/recyclable-mono-pe",
            image: "/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp"
          },
          {
            title: "Sugarcane Bio-PE",
            url: "/materials/bio-pe",
            image: "/imgs/biope/what/a_hero_bio_pe_article_2212774.webp"
          }
        ]}
      />
    )
  }

  // B2B Section data (for Achieve Pack)
  const sections = [
    {
      id: 'infographic',
      title: t(`${p}.sections.glance.title`),
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">{t(`${p}.sections.glance.clickToEnlarge`)}</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp" 
              alt={t(`${p}.sections.glance.alt`)} 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption={t(`${p}.sections.glance.caption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.targetAudience.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.targetAudience.intro`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">
                  {t(`${p}.sections.targetAudience.hotFill.title`)}
                </p>
                <p className="text-sm text-neutral-600 text-neutral-600">
                  {t(`${p}.sections.targetAudience.hotFill.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">
                  {t(`${p}.sections.targetAudience.microwave.title`)}
                </p>
                <p className="text-sm text-neutral-600 text-neutral-600">
                  {t(`${p}.sections.targetAudience.microwave.desc`)}
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">
                  {t(`${p}.sections.targetAudience.clarity.title`)}
                </p>
                <p className="text-sm text-neutral-600 text-neutral-600">
                  {t(`${p}.sections.targetAudience.clarity.desc`)}
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
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">
              {t(`${p}.sections.overview.keyBenefits`)}
            </h4>
            <ul className="space-y-1 text-sm text-purple-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'vs-pe',
      title: t(`${p}.sections.vsPe.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">
                {t(`${p}.sections.vsPe.choosePP`)}
              </h4>
              <ul className="text-sm space-y-1 text-purple-700">
                {(t(`${p}.sections.vsPe.ppReasons`, { returnObjects: true }) as string[]).map((r, i) => <li key={i}>• {r}</li>)}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">
                {t(`${p}.sections.vsPe.choosePE`)}
              </h4>
              <ul className="text-sm space-y-1 text-blue-700">
                {(t(`${p}.sections.vsPe.peReasons`, { returnObjects: true }) as string[]).map((r, i) => <li key={i}>• {r}</li>)}
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
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-purple-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.specifications.specs`, { returnObjects: true }) as string[]).map((s, i) => <li key={i}>✓ {s}</li>)}
            </ul>
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
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">
                  {t(`${p}.sections.scenarios.hotFill.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.hotFill.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.hotFill.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.hotFill.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">
                  {t(`${p}.sections.scenarios.hotFill.note`)}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">
                  {t(`${p}.sections.scenarios.microwave.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.microwave.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.microwave.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.microwave.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">
                  {t(`${p}.sections.scenarios.microwave.note`)}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">
                  {t(`${p}.sections.scenarios.clarity.title`)}
                </h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.clarity.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.clarity.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.clarity.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">
                  {t(`${p}.sections.scenarios.clarity.note`)}
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
                <span className="text-xs font-semibold text-purple-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.euSoup.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.euSoup.desc`)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-amber-600 uppercase">
                  {t(`${p}.sections.scenarios.stories.usFrozen.label`)}
                </span>
                <p className="text-sm text-neutral-700 mt-2">
                  {t(`${p}.sections.scenarios.stories.usFrozen.desc`)}
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
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">130°C</p>
              <p className="text-sm opacity-90">
                {t(`${p}.sections.marketData.metrics.heatLimit`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">12-18</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.shelfLife`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">#5</p>
              <p className="text-sm opacity-90 font-sans">
                {t(`${p}.sections.marketData.metrics.resinCode`)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">85%</p>
              <p className="text-sm opacity-90">
                {t(`${p}.sections.marketData.metrics.clarity`)}
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
                      <th 
                        key={idx} 
                        className={`px-4 py-3 text-left font-semibold ${
                          idx === 1 ? 'text-purple-700' : idx === 2 ? 'text-blue-700' : 'text-neutral-700'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {(t(`${p}.sections.marketData.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-purple-600">{row[1]}</td>
                      <td className="px-4 py-3 text-blue-600">{row[2]}</td>
                      <td className="px-4 py-3 text-neutral-700">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4">
              {t(`${p}.sections.marketData.impactTitle`)}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-700">+50°C</p>
                <p className="text-sm text-purple-600">
                  {t(`${p}.sections.marketData.impact.heatLimit`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-700">85%</p>
                <p className="text-sm text-purple-600 font-sans">
                  {t(`${p}.sections.marketData.impact.clarity`)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-700">+20%</p>
                <p className="text-sm text-purple-600">
                  {t(`${p}.sections.marketData.impact.stiffness`)}
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
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">
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
                          idx === 1 ? 'text-purple-700' : idx === 2 ? 'text-blue-700' : idx === 3 ? 'text-red-700' : 'text-neutral-700'
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
                      <td className="px-4 py-3 text-center text-purple-600">{row[1]}</td>
                      <td className="px-4 py-3 text-center text-blue-600">{row[2]}</td>
                      <td className="px-4 py-3 text-center text-red-600">{row[3]}</td>
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
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-purple-700">
                  {t(`${p}.sections.comparison.choosePP`)}
                </p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  {(t(`${p}.sections.comparison.ppPoints`, { returnObjects: true }) as string[]).map((pt, idx) => (
                    <li key={idx}>• {pt}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">
                  {t(`${p}.sections.comparison.choosePE`)}
                </p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  {(t(`${p}.sections.comparison.pePoints`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                    <li key={idx}>
                      • {idx === arr.length - 1 ? (
                        <Link to="/materials/recyclable-mono-pe" className="underline">{pt}</Link>
                      ) : pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">
                  {t(`${p}.sections.comparison.chooseCompostable`)}
                </p>
                <ul className="mt-2 space-y-1 text-green-600">
                  {(t(`${p}.sections.comparison.compostablePoints`, { returnObjects: true }) as string[]).map((pt, idx, arr) => (
                    <li key={idx}>
                      • {idx === arr.length - 1 ? (
                        <Link to="/materials/compostable" className="underline">{pt}</Link>
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
                      <Link to="/materials/recyclable-mono-pe" className="underline">{pt}</Link>
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
            <div className="bg-purple-600 text-white p-6 rounded-lg text-center font-sans">
              <Phone className="h-8 w-8 mx-auto mb-2 text-white" />
              <h4 className="font-bold text-lg mb-2 text-white">
                {t(`${p}.sections.decisionCta.call.title`)}
              </h4>
              <p className="text-sm opacity-90 mb-4 text-white">
                {t(`${p}.sections.decisionCta.call.desc`)}
              </p>
              <button onClick={openCalendly} className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition cursor-pointer">
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
              <Link to="/materials/recyclable-mono-pe" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-purple-300 transition">
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
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1e3a8a"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'mono-PP pouch',
        'recyclable polypropylene',
        'PP recyclable packaging',
        'hot fill pouch',
        'microwave safe pouch',
        'single material PP',
        'recyclable flexible packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pp"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
      heroImageAlt="Recyclable mono-PP flexible packaging"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default RecyclableMonoPPPage
