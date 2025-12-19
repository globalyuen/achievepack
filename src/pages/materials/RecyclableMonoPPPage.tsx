import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Thermometer, Target, Calendar, Phone, Download, Mail, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const RecyclableMonoPPPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableMonoPP'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you need packaging that can withstand <strong>hot-fill processes</strong>, <strong>microwave reheating</strong>, or require <strong>higher heat resistance</strong> than PE—mono-PP recyclable pouches are your solution.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">Hot-Fill Products</p>
                <p className="text-sm text-neutral-600">Soups, sauces, ready meals</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">Microwaveable Foods</p>
                <p className="text-sm text-neutral-600">Convenience meals, frozen products</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800">High-Clarity Needs</p>
                <p className="text-sm text-neutral-600">PP offers better transparency than PE</p>
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
            <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
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
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.vsPe.choosePP`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                {(t(`${p}.sections.vsPe.ppReasons`, { returnObjects: true }) as string[]).map((r, i) => <li key={i}>• {r}</li>)}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.vsPe.choosePE`)}</h4>
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
      id: 'ai-search',
      title: 'Finding Mono-PP Recyclable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Mono-PP vs Mono-PE: which should I choose for hot-fill?"</li>
              <li>• "Best recyclable pouch for microwave-safe food packaging?"</li>
              <li>• "PP recyclable flexible packaging supplier with low MOQ?"</li>
              <li>• "What temperature can mono-PP pouches withstand?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is Mono-PP Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Hot-fill applications (85°C+)</li>
                <li>• Microwave-safe packaging needs</li>
                <li>• Products requiring high clarity</li>
                <li>• Markets with PP recycling streams</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Products with grease/oil content</li>
                <li>• Premium applications needing stiffness</li>
                <li>• Retort-adjacent applications</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• PE recycling is more accessible in your market</li>
                <li>• Lower cost is the priority</li>
                <li>• <Link to="/materials/recyclable-mono-pe" className="underline">Consider Mono-PE instead →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Go Mono-PP Recyclable?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss hot-fill specs</p>
              <a href="https://calendly.com/nickypouch" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                Book a Call
              </a>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order mono-PP samples for testing</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare PP vs PE recyclable options</p>
              <Link to="/materials/recyclable-mono-pe" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-purple-300 transition">
                Compare Materials
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
    <SEOPageLayout
      title={t('seoPages.pages.recyclableMonoPP.title')}
      description="Recyclable mono-PP flexible packaging with high heat resistance and clarity. Hot-fill and microwave safe. Single-material for PP recycling streams. MOQ 500."
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
      heroTitle={t('seoPages.pages.recyclableMonoPP.heroTitle')}
      heroSubtitle={t('seoPages.pages.recyclableMonoPP.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
      heroImageAlt="Recyclable mono-PP flexible packaging"
      introSummary={t('seoPages.pages.recyclableMonoPP.introSummary')}
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
