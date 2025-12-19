import React from 'react'
import { Factory, Leaf, CheckCircle, Clock, Award, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const IndustrialCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.industrialCompostable'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a <strong>US specialty coffee roaster</strong>, <strong>EU food brand</strong>, or <strong>organic snack company</strong> looking for certified compostable packaging with better barrier protection than home compostable options—industrial compostable is your solution.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Coffee & Tea Brands</p>
                <p className="text-sm text-neutral-600">Higher barrier for freshness + BPI/EN13432 certified</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Organic Food Companies</p>
                <p className="text-sm text-neutral-600">Meet sustainability claims with real certifications</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">EU Market Sellers</p>
                <p className="text-sm text-neutral-600">EN 13432 required for many EU countries</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{t(`${p}.sections.overview.whyChoose`)}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t(`${p}.sections.overview.benefit1`)}</li>
            <li>{t(`${p}.sections.overview.benefit2`)}</li>
            <li>{t(`${p}.sections.overview.benefit3`)}</li>
            <li>{t(`${p}.sections.overview.benefit4`)}</li>
            <li>{t(`${p}.sections.overview.benefit5`)}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.certifications.en13432.title`)}</h4>
              <p className="text-sm text-primary-700 mb-2">{t(`${p}.sections.certifications.en13432.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.certifications.en13432.features`, { returnObjects: true }) as string[]).map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.astm.title`)}</h4>
              <p className="text-sm text-blue-700 mb-2">{t(`${p}.sections.certifications.astm.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.certifications.astm.features`, { returnObjects: true }) as string[]).map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.okIndustrial.title`)}</h4>
            <p className="text-sm text-green-700">{t(`${p}.sections.certifications.okIndustrial.desc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Material</th>
                  <th className="text-left p-3 border">Barrier Level</th>
                  <th className="text-left p-3 border">Shelf Life</th>
                  <th className="text-left p-3 border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">PLA Film</td><td className="p-3 border">Low-Medium</td><td className="p-3 border">6-9 months</td><td className="p-3 border">Dry goods, snacks</td></tr>
                <tr><td className="p-3 border font-medium">PLA + PBAT Blend</td><td className="p-3 border">Medium</td><td className="p-3 border">9-12 months</td><td className="p-3 border">Coffee, tea</td></tr>
                <tr><td className="p-3 border font-medium">Kraft + PLA Barrier</td><td className="p-3 border">Medium</td><td className="p-3 border">9-12 months</td><td className="p-3 border">Premium coffee</td></tr>
                <tr><td className="p-3 border font-medium">Cellulose + PLA</td><td className="p-3 border">Low</td><td className="p-3 border">3-6 months</td><td className="p-3 border">Quick-turn items</td></tr>
                <tr><td className="p-3 border font-medium">Bio-PBS</td><td className="p-3 border">Medium-High</td><td className="p-3 border">12+ months</td><td className="p-3 border">Supplements</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Factor</th>
                  <th className="text-left p-3 border">Home Compostable</th>
                  <th className="text-left p-3 border">Industrial Compostable</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Temperature</td><td className="p-3 border">20-30°C (ambient)</td><td className="p-3 border text-primary-600">58°C+ (controlled)</td></tr>
                <tr><td className="p-3 border font-medium">Timeframe</td><td className="p-3 border">6-12 months</td><td className="p-3 border text-primary-600">90-180 days</td></tr>
                <tr><td className="p-3 border font-medium">Barrier Level</td><td className="p-3 border">Low</td><td className="p-3 border text-primary-600">Low-Medium-High</td></tr>
                <tr><td className="p-3 border font-medium">Accessibility</td><td className="p-3 border text-green-600">Backyard bin</td><td className="p-3 border">Facility required</td></tr>
                <tr><td className="p-3 border font-medium">Infrastructure</td><td className="p-3 border text-green-600">Consumer level</td><td className="p-3 border">Commercial network</td></tr>
                <tr><td className="p-3 border font-medium">Cost</td><td className="p-3 border">Higher</td><td className="p-3 border text-primary-600">More economical</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: t(`${p}.sections.order.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.minOrder`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">90-180</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.daysToCompost`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">12+</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.order.shelfLife`)}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Industrial Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "EN 13432 vs ASTM D6400: which certification do I need?"</li>
              <li>• "Best BPI certified compostable pouch supplier for coffee?"</li>
              <li>• "Industrial compostable packaging with high barrier for snacks"</li>
              <li>• "How long does industrial compostable packaging take to break down?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is Industrial Compostable Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Products needing 9-12+ month shelf life</li>
                <li>• Coffee, tea, snacks requiring good barrier</li>
                <li>• Markets with commercial composting (CA, WA, EU)</li>
                <li>• B2B products where buyers have facility access</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands educating consumers on composting</li>
                <li>• Products with moderate barrier needs</li>
                <li>• Companies building sustainability credentials</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Customers lack composting access</li>
                <li>• You need ultra-high barrier (18+ months)</li>
                <li>• <Link to="/materials/home-compostable" className="underline">Consider home compostable for direct consumers →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Go Industrial Compostable?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss your certification needs</p>
              <a href="https://calendly.com/nickypouch" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                Book a Call
              </a>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order industrial compostable samples</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare with home compostable or recyclable</p>
              <Link to="/materials/compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
                Compare Options
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
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/home-compostable", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/features/barrier-options", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title="Industrial Compostable Packaging | EN 13432 & ASTM D6400 Certified"
      description="EN 13432 and ASTM D6400 certified industrial compostable pouches. Breaks down in 90-180 days at commercial facilities. Higher barrier than home compostable."
      keywords={['industrial compostable', 'EN 13432', 'ASTM D6400', 'commercial compostable', 'BPI certified', 'compostable flexible packaging']}
      canonicalUrl="https://achievepack.com/materials/industrial-compostable"
      heroTitle={t('seoPages.pages.industrialCompostable.heroTitle')}
      heroSubtitle={t('seoPages.pages.industrialCompostable.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp"
      heroImageAlt="Industrial compostable packaging materials"
      introSummary={t('seoPages.pages.industrialCompostable.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
    />
  )
}

export default IndustrialCompostablePage
