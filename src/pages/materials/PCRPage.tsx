import React from 'react'
import { Recycle, CheckCircle, Shield, Award, Factory, MessageCircle, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PCRPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.pcr'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a brand with <strong>circular economy commitments</strong>, looking to reduce virgin plastic use while maintaining conventional packaging performance—PCR (Post-Consumer Recycled) packaging is your solution.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">Corporate Sustainability</p>
                <p className="text-sm text-neutral-600">Meet recycled content commitments</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">EU EPR Compliance</p>
                <p className="text-sm text-neutral-600">Reduce Extended Producer Responsibility fees</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">Green Claims</p>
                <p className="text-sm text-neutral-600">GRS certified for verified marketing claims</p>
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
          <div className="bg-emerald-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-emerald-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'content-levels',
      title: t(`${p}.sections.contentLevels.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.contentLevels.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level30.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level30.desc`)}</p>
            </div>
            <div className="border border-emerald-300 rounded-lg p-4 text-center bg-emerald-50">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level50.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level50.desc`)}</p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level100.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level100.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t(`${p}.sections.foodSafety.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.foodSafety.intro`)}</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.foodSafety.items`, { returnObjects: true }) as string[]).map((item, i) => <li key={i}>✓ {item}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.foodSafety.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          {/* GRS Certification Logo */}
          <div className="flex items-center gap-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-4">
            <ClickableImage 
              src="/imgs/cert/cert-pcr-grs.webp" 
              alt="GRS Global Recycled Standard Certification" 
              className="h-24 w-auto"
              caption="GRS Certified"
            />
            <div>
              <h4 className="font-semibold text-emerald-800 mb-1">Global Recycled Standard (GRS)</h4>
              <p className="text-sm text-emerald-700">Our PCR materials are GRS certified, ensuring traceability of recycled content throughout the supply chain. This certification verifies the recycled content percentage and responsible production practices.</p>
              <p className="text-xs text-emerald-600 mt-2"><strong>Brand Usage:</strong> GRS certification enables brands to make verified recycled content claims on their packaging and marketing materials.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.grs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.grs.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.scs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.scs.desc`)}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-emerald-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right PCR Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting PCR packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Recycled content</strong> – 30%, 50%, or 100% PCR available</li>
            <li><strong>Certifications</strong> – Look for GRS certification</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our PCR pouches</Link></li>
            <li><strong>Food safety</strong> – FDA compliant recycled materials</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best PCR packaging supplier with GRS certification?"</li>
              <li>• "Which company offers recycled content pouches with low MOQ?"</li>
              <li>• "Best circular economy packaging for sustainable brands?"</li>
              <li>• "PCR vs Bio-PE: which is better for sustainability claims?"</li>
              <li>• "How to verify recycled content percentage in packaging?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is PCR Packaging Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Brands with recycled content targets</li>
                <li>• Products where recyclability matters</li>
                <li>• Companies avoiding compostable complexity</li>
                <li>• Non-food or low-barrier food applications</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands transitioning from virgin plastic</li>
                <li>• Products with moderate shelf life needs</li>
                <li>• Companies starting sustainability journey</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need "compostable" messaging</li>
                <li>• Ultra-clear packaging is required</li>
                <li>• <Link to="/materials/bio-pe" className="underline">Consider Bio-PE for carbon-negative claims →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Switch to PCR?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss PCR content levels</p>
              <button onClick={openCalendly} className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order PCR sample kit (MOQ 500 pcs)</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare PCR with Bio-PE or compostable</p>
              <Link to="/materials/compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-emerald-300 transition">
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
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) },
    { question: t(`${p}.faq.q5`), answer: t(`${p}.faq.a5`) }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: t(`${p}.table.headers`, { returnObjects: true }) as string[],
        rows: t(`${p}.table.rows`, { returnObjects: true }) as string[][]
      }
    }
  ]

  const relatedLinks = [
    { title: "Shop PCR Pouches", url: "/store", description: "Browse recycled content packaging - MOQ from 500 pieces" },
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly suppliers" }
  ]

  return (
    <SEOPageLayout
      title="PCR Packaging | Post-Consumer Recycled Pouches | Circular Economy"
      description="PCR (Post-Consumer Recycled) flexible packaging with 30-50% recycled content. GRS certified, FDA approved. Reduce virgin plastic use. MOQ 500 units."
      keywords={[
        'PCR packaging',
        'post-consumer recycled',
        'recycled content pouch',
        'GRS certified',
        'circular economy packaging',
        'recycled plastic packaging',
        'sustainable packaging',
        'recycled pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/pcr"
      heroTitle={t('seoPages.pages.pcr.heroTitle')}
      heroSubtitle={t('seoPages.pages.pcr.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_pcr_office_8175988.webp"
      heroImageAlt="PCR post-consumer recycled packaging"
      introSummary={t('seoPages.pages.pcr.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default PCRPage
