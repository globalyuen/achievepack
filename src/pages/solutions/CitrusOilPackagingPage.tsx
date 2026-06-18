import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const CitrusOilPackagingPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.citrusOilPackaging'

  const sections = [
    {
      id: 'citrus-packaging-challenge',
      title: t(`${p}.sections.challenge.title`),
      icon: <Beaker className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            {t(`${p}.sections.challenge.intro`)}
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> {t(`${p}.sections.challenge.risksTitle`)}
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• {t(`${p}.sections.challenge.risks.0`)}</li>
                <li>• {t(`${p}.sections.challenge.risks.1`)}</li>
                <li>• {t(`${p}.sections.challenge.risks.2`)}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> {t(`${p}.sections.challenge.reqsTitle`)}
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• {t(`${p}.sections.challenge.reqs.0`)}</li>
                <li>• {t(`${p}.sections.challenge.reqs.1`)}</li>
                <li>• {t(`${p}.sections.challenge.reqs.2`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: t(`${p}.sections.options.title`),
      icon: <Package className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.options.intro`)}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Bottle-Shaped Specialty Sachet */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.sections.options.opt1.label`)}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sections.options.opt1.tag`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sections.options.opt1.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  {t(`${p}.sections.options.opt1.desc`)}
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• {t(`${p}.sections.options.opt1.points.0`)}</li>
                  <li>• {t(`${p}.sections.options.opt1.points.1`)}</li>
                  <li>• {t(`${p}.sections.options.opt1.points.2`)}</li>
                </ul>
              </div>
              <Link to="/store/product/bottle-shape-sachet-bag" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                {t(`${p}.sections.options.opt1.action`)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Plastic-Free Foil Capsule */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.sections.options.opt2.label`)}</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sections.options.opt2.tag`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sections.options.opt2.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  {t(`${p}.sections.options.opt2.desc`)}
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• {t(`${p}.sections.options.opt2.points.0`)}</li>
                  <li>• {t(`${p}.sections.options.opt2.points.1`)}</li>
                  <li>• {t(`${p}.sections.options.opt2.points.2`)}</li>
                </ul>
              </div>
              <Link to="/store" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                {t(`${p}.sections.options.opt2.action`)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Clear Recyclable Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.sections.options.opt3.label`)}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sections.options.opt3.tag`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sections.options.opt3.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  {t(`${p}.sections.options.opt3.desc`)}
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• {t(`${p}.sections.options.opt3.points.0`)}</li>
                  <li>• {t(`${p}.sections.options.opt3.points.1`)}</li>
                  <li>• {t(`${p}.sections.options.opt3.points.2`)}</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                {t(`${p}.sections.options.opt3.action`)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Sugarcane Bio-PE Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.sections.options.opt4.label`)}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sections.options.opt4.tag`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sections.options.opt4.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  {t(`${p}.sections.options.opt4.desc`)}
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• {t(`${p}.sections.options.opt4.points.0`)}</li>
                  <li>• {t(`${p}.sections.options.opt4.points.1`)}</li>
                  <li>• {t(`${p}.sections.options.opt4.points.2`)}</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                {t(`${p}.sections.options.opt4.action`)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Capsule Display Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">{t(`${p}.sections.options.opt5.label`)}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">{t(`${p}.sections.options.opt5.tag`)}</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.sections.options.opt5.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  {t(`${p}.sections.options.opt5.desc`)}
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• {t(`${p}.sections.options.opt5.points.0`)}</li>
                  <li>• {t(`${p}.sections.options.opt5.points.1`)}</li>
                  <li>• {t(`${p}.sections.options.opt5.points.2`)}</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                {t(`${p}.sections.options.opt5.action`)} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: t(`${p}.sections.showcase.title`),
      icon: <Sparkles className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.showcase.intro`)}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_foil_capsule.png" 
                alt={t(`${p}.sections.showcase.img1Title`)} 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.sections.showcase.img1Title`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sections.showcase.img1Desc`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_capsule_display_box.png" 
                alt={t(`${p}.sections.showcase.img2Title`)} 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.sections.showcase.img2Title`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sections.showcase.img2Desc`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_clear_spout_pouch.png" 
                alt={t(`${p}.sections.showcase.img3Title`)} 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.sections.showcase.img3Title`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sections.showcase.img3Desc`)}</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_biope_spout_pouch.png" 
                alt={t(`${p}.sections.showcase.img4Title`)} 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">{t(`${p}.sections.showcase.img4Title`)}</h5>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.sections.showcase.img4Desc`)}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/taobao/bottle-shape-sachet-bag/O1CN01q5cziX1wI7uDjUFyO_--1816946284-jpg_.webp" 
                alt={t(`${p}.sections.showcase.solutionTitle`)} 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.sections.showcase.solutionTag`)}
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.sections.showcase.solutionTitle`)}</h4>
              <p className="text-sm text-neutral-700">
                {t(`${p}.sections.showcase.solutionDesc`)}
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/bottle-shape-sachet-bag" className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  {t(`${p}.sections.showcase.action1`)}
                </Link>
                <Link to="/store/product/eco-pla-sealing-sticker" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  {t(`${p}.sections.showcase.action2`)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expert-checklist',
      title: t(`${p}.sections.checklist.title`),
      icon: <Award className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            {t(`${p}.sections.checklist.intro`)}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.sections.checklist.phase1Title`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase1.0`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase1.1`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase1.2`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.sections.checklist.phase2Title`)}</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase2.0`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase2.1`)}</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> {t(`${p}.sections.checklist.phase2.2`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    }
  ]

  const tables = [
    {
      title: t(`${p}.tables.title`),
      data: {
        headers: [
          t(`${p}.tables.headers.0`),
          t(`${p}.tables.headers.1`),
          t(`${p}.tables.headers.2`),
          t(`${p}.tables.headers.3`),
          t(`${p}.tables.headers.4`),
          t(`${p}.tables.headers.5`)
        ],
        rows: [
          [
            t(`${p}.tables.rows.0.0`),
            t(`${p}.tables.rows.0.1`),
            t(`${p}.tables.rows.0.2`),
            t(`${p}.tables.rows.0.3`),
            t(`${p}.tables.rows.0.4`),
            t(`${p}.tables.rows.0.5`)
          ],
          [
            t(`${p}.tables.rows.1.0`),
            t(`${p}.tables.rows.1.1`),
            t(`${p}.tables.rows.1.2`),
            t(`${p}.tables.rows.1.3`),
            t(`${p}.tables.rows.1.4`),
            t(`${p}.tables.rows.1.5`)
          ],
          [
            t(`${p}.tables.rows.2.0`),
            t(`${p}.tables.rows.2.1`),
            t(`${p}.tables.rows.2.2`),
            t(`${p}.tables.rows.2.3`),
            t(`${p}.tables.rows.2.4`),
            t(`${p}.tables.rows.2.5`)
          ],
          [
            t(`${p}.tables.rows.3.0`),
            t(`${p}.tables.rows.3.1`),
            t(`${p}.tables.rows.3.2`),
            t(`${p}.tables.rows.3.3`),
            t(`${p}.tables.rows.3.4`),
            t(`${p}.tables.rows.3.5`)
          ],
          [
            t(`${p}.tables.rows.4.0`),
            t(`${p}.tables.rows.4.1`),
            t(`${p}.tables.rows.4.2`),
            t(`${p}.tables.rows.4.3`),
            t(`${p}.tables.rows.4.4`),
            t(`${p}.tables.rows.4.5`)
          ]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.relatedLinks.link1.title`),
      url: "/store/product/spouted-foil-pouch",
      description: t(`${p}.relatedLinks.link1.description`)
    },
    {
      title: t(`${p}.relatedLinks.link2.title`),
      url: "/store/product/eco-standup",
      description: t(`${p}.relatedLinks.link2.description`)
    },
    {
      title: t(`${p}.relatedLinks.link3.title`),
      url: "/store/product/bottle-shape-sachet-bag",
      description: t(`${p}.relatedLinks.link3.description`)
    },
    {
      title: t(`${p}.relatedLinks.link4.title`),
      url: "/store/product/eco-pla-sealing-sticker",
      description: t(`${p}.relatedLinks.link4.description`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/solutions/citrus-oil-packaging" />
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:url" content="https://achievepack.com/solutions/citrus-oil-packaging" />
        <meta name="keywords" content="citrus oil packaging, sachet pouch honey, d-limonene compatibility, terpene barrier pouch, recyclable spout pouch, bio-PE sugarcane pouch, custom cosmetic box, low MOQ packaging, foil capsule packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Citrus Oil Packaging Solutions Ecosystem",
            "description": "Complete packaging solution range comparing foil capsules, spouted pouches, and specialty bottle sachets for liquid citrus oils and cosmetics.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.06",
              "highPrice": "2.57",
              "offerCount": "5"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#14532d"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['citrus oil packaging', 'limonene barrier', 'recyclable spout pouch', 'sachet pouch sample']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/materials/citrus_clear_spout_pouch.png"
      />
    </>
  )
}

export default CitrusOilPackagingPage
