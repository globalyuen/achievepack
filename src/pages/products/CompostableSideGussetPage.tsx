import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Award, CheckCircle, Package, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart, ChevronDown, Compass, Cpu, Layers } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

const CompostableSideGussetPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'

  // Keywords casting to string[] to satisfy tsc
  const pouchKeywords = t('seoPages.pages.compostableSideGusset.pouch.seo.keywords', { returnObjects: true }) as string[]
  const apKeywords = t('seoPages.pages.compostableSideGusset.achievePack.seo.keywords', { returnObjects: true }) as string[]
  const apKeywordsLayout = t('seoPages.pages.compostableSideGusset.achievePack.seo.keywordsLayout', { returnObjects: true }) as string[]

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.compostableSideGusset.common.sections.overview.title'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>
              {isPouchDomain 
                ? t('seoPages.pages.compostableSideGusset.common.sections.overview.brandPouch') 
                : t('seoPages.pages.compostableSideGusset.common.sections.overview.brandAP')}
            </strong>
            {t('seoPages.pages.compostableSideGusset.common.sections.overview.descSuffix')}
          </p>
          <p>
            {t('seoPages.pages.compostableSideGusset.common.sections.overview.desc2')}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">
              {t('seoPages.pages.compostableSideGusset.common.sections.overview.advantagesTitle')}
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>• <strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet1Strong')}</strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet1Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet2Strong')}</strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet2Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet3Strong')}</strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet3Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet4Strong')}</strong>{t('seoPages.pages.compostableSideGusset.common.sections.overview.bullet4Text')}</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/products/compostable-side-gusset-collection.png?v=2" 
              alt={t('seoPages.pages.compostableSideGusset.common.sections.overview.imgAlt')} 
              className="w-full rounded-2xl shadow-md border border-neutral-200"
              caption={isPouchDomain 
                ? t('seoPages.pages.compostableSideGusset.common.sections.overview.imgCaptionPouch') 
                : t('seoPages.pages.compostableSideGusset.common.sections.overview.imgCaptionAP')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.compostableSideGusset.common.sections.materials.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.compostableSideGusset.common.sections.materials.intro')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🪵</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer1Title')}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer1Desc')}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌽</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer2Title')}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer2Desc')}
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌱</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer3Title')}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t('seoPages.pages.compostableSideGusset.common.sections.materials.layer3Desc')}
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 mt-4 text-xs leading-relaxed text-amber-900">
            <strong>
              {isPouchDomain 
                ? t('seoPages.pages.compostableSideGusset.common.sections.materials.startupTipStrong') 
                : t('seoPages.pages.compostableSideGusset.common.sections.materials.b2bNoteStrong')}
            </strong>
            {t('seoPages.pages.compostableSideGusset.common.sections.materials.tipText')}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.compostableSideGusset.common.sections.features.title'),
      icon: <Cpu className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.compostableSideGusset.common.sections.features.intro')}
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                💨
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat1Title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat1Desc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🔗
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat2Title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat2Desc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 border border-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🏷️
              </div>
              <div>
                <h4 className="font-bold text-neutral-950 text-sm">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat3Title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  {t('seoPages.pages.compostableSideGusset.common.sections.features.feat3Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'composting',
      title: t('seoPages.pages.compostableSideGusset.common.sections.composting.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.compostableSideGusset.common.sections.composting.intro')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-green-50 text-green-700 border border-green-100 rounded-md uppercase tracking-wider">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.homeBadge')}
              </span>
              <h4 className="font-bold text-neutral-900 text-base">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.homeTitle')}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.homeDesc')}
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.homeStandards')}
              </div>
            </div>
            
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md uppercase tracking-wider">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.industrialBadge')}
              </span>
              <h4 className="font-bold text-neutral-900 text-base">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.industrialTitle')}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.industrialDesc')}
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                {t('seoPages.pages.compostableSideGusset.common.sections.composting.industrialStandards')}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/products/compostable-side-gusset-retail-box.png?v=2" 
              alt={t('seoPages.pages.compostableSideGusset.common.sections.composting.imgAlt')} 
              className="w-full rounded-2xl shadow-md border border-neutral-200"
              caption={isPouchDomain 
                ? t('seoPages.pages.compostableSideGusset.common.sections.composting.imgCaptionPouch') 
                : t('seoPages.pages.compostableSideGusset.common.sections.composting.imgCaptionAP')}
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.compostableSideGusset.common.faqs.q1.question'),
      answer: t('seoPages.pages.compostableSideGusset.common.faqs.q1.answer')
    },
    {
      question: t('seoPages.pages.compostableSideGusset.common.faqs.q2.question'),
      answer: t('seoPages.pages.compostableSideGusset.common.faqs.q2.answer')
    },
    {
      question: t('seoPages.pages.compostableSideGusset.common.faqs.q3.question'),
      answer: t('seoPages.pages.compostableSideGusset.common.faqs.q3.answer')
    },
    {
      question: t('seoPages.pages.compostableSideGusset.common.faqs.q4.question'),
      answer: t('seoPages.pages.compostableSideGusset.common.faqs.q4.answer')
    }
  ]

  // Dynamic visual labels / links to conventional alternatives
  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      {/* Visual Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">
          {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.home')}
        </Link>
        <span className="text-neutral-400">/</span>
        <Link to="/store?category=eco-digital" className="hover:text-white transition">
          {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.ecoMaterials')}
        </Link>
        <span className="text-neutral-400">/</span>
        <Link to="/store?shape=side-gusset" className="hover:text-white transition">
          {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.sideGussetBags')}
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="text-[#10b981] font-bold">
          {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.compostableSideGusset')}
        </span>
      </div>

      {/* Visual Badges & Conventional Switch Link */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-[#10b981] text-white rounded-full uppercase tracking-wider shadow-sm">
          {t('seoPages.pages.compostableSideGusset.common.badges.achievePack')}
        </span>
        <Link 
          to="/packaging/side-gusset-bags" 
          className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-white rounded-full transition border border-white/20 uppercase tracking-wider"
        >
          {t('seoPages.pages.compostableSideGusset.common.badges.conventional')}
        </Link>
      </div>
    </div>
  )

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.compostableSideGusset.pouch.seo.title')}
        metaDescription={t('seoPages.pages.compostableSideGusset.pouch.seo.metaDescription')}
        canonicalUrl="https://pouch.eco/products/compostable-side-gusset-bags"
        keywords={pouchKeywords}
        publishedDate="2026-05-26"
        modifiedDate="2026-05-26"
        author={t('seoPages.pages.compostableSideGusset.pouch.seo.author')}
        
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">
                {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.home')}
              </Link>
              <span>/</span>
              <Link to="/store?category=eco-digital" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">
                {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.ecoMaterials')}
              </Link>
              <span>/</span>
              <Link to="/store?shape=side-gusset" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">
                {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.sideGussetBags')}
              </Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">
                {t('seoPages.pages.compostableSideGusset.common.breadcrumbs.compostableSideGusset')}
              </span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {t('seoPages.pages.compostableSideGusset.common.badges.pouchEco')}
              </span>
              <Link 
                to="/packaging/side-gusset-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                {t('seoPages.pages.compostableSideGusset.common.badges.conventional')}
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Compostable<br />
              <span className="text-[#10b981]">Side Gusset Bags</span><br />
              Specialty Guide
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.compostableSideGusset.pouch.seo.heroSubtitle')}
        heroImage="/imgs/store/products/compostable-side-gusset-collection.png?v=2"
        heroImageAlt={t('seoPages.pages.compostableSideGusset.pouch.seo.heroImageAlt')}
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="12 min read"
        sections={sections}
        ctaTitle={t('seoPages.pages.compostableSideGusset.pouch.seo.ctaTitle')}
        ctaDescription={t('seoPages.pages.compostableSideGusset.pouch.seo.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/products/compostable-side-gusset-bags"
        achievePackText={t('seoPages.pages.compostableSideGusset.pouch.seo.achievePackText')}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t('seoPages.pages.compostableSideGusset.pouch.seo.relArticle1Title'),
            url: '/products/compostable-stand-up-pouches',
            image: '/imgs/illustrated/a_compostable_v3_9254998.webp'
          },
          {
            title: t('seoPages.pages.compostableSideGusset.pouch.seo.relArticle2Title'),
            url: '/blog/usa-compostable-packaging-guide',
            image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
          },
          {
            title: t('seoPages.pages.compostableSideGusset.pouch.seo.relArticle3Title'),
            url: '/blog/coffee-packaging-guide',
            image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp'
          }
        ]}
      />
    )
  }

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.compostableSideGusset.achievePack.seo.title')}</title>
        <meta name="description" content={t('seoPages.pages.compostableSideGusset.achievePack.seo.metaDescription')} />
        <link rel="canonical" href="https://achievepack.com/products/compostable-side-gusset-bags" />
        <meta property="og:title" content={t('seoPages.pages.compostableSideGusset.achievePack.seo.ogTitle')} />
        <meta property="og:description" content={t('seoPages.pages.compostableSideGusset.achievePack.seo.ogDescription')} />
        <meta property="og:url" content="https://achievepack.com/products/compostable-side-gusset-bags" />
        <meta property="og:image" content="https://achievepack.com/imgs/store/products/compostable-side-gusset-collection.png" />
        <meta property="og:type" content="product" />
        <meta name="keywords" content={apKeywords.join(', ')} />
        
        {/* Product Graph Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "@id": "https://achievepack.com/products/compostable-side-gusset-bags#product",
                "name": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.name'),
                "description": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.description'),
                "brand": {
                  "@type": "Brand",
                  "name": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.brandName')
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "lowPrice": "0.50",
                  "highPrice": "2.90",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "offerCount": "4"
                },
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.certName'),
                    "value": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.certValue')
                  },
                  {
                    "@type": "PropertyValue",
                    "name": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.moqName'),
                    "value": t('seoPages.pages.compostableSideGusset.achievePack.seo.graph.moqValue')
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1c1917"
        title={t('seoPages.pages.compostableSideGusset.achievePack.seo.title')}
        description={t('seoPages.pages.compostableSideGusset.achievePack.seo.metaDescription')}
        keywords={apKeywordsLayout}
        heroTitle={t('seoPages.pages.compostableSideGusset.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.compostableSideGusset.achievePack.seo.heroSubtitle')}
        aboveTitle={visualBreadcrumbsAndLabels}
        introSummary={t('seoPages.pages.compostableSideGusset.achievePack.seo.introSummary')}
        sections={sections}
        faqs={faqs}
        heroImage="/imgs/store/products/compostable-side-gusset-collection.png?v=2"
        heroImageAlt={t('seoPages.pages.compostableSideGusset.achievePack.seo.heroImageAlt')}
      />

      {/* Visually Hidden Semantic AIEO Crawling Section */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map(f => (
            <article key={f.question} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{f.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{f.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default CompostableSideGussetPage
