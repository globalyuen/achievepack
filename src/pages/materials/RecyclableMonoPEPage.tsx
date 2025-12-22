import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Factory, MessageCircle, BookOpen, Building2, Image } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'

const RecyclableMonoPEPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableMonoPE'
  const sections = [
    {
      id: 'infographic',
      title: 'Recyclable Mono-PE Infographic',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the infographic below to view in full size:</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp" 
              alt="Recyclable Mono-PE Infographic - Complete guide to recyclable packaging" 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption="Recyclable Mono-PE Infographic"
            />
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
          
          {/* Recycling Symbol Section */}
          <div className="flex items-center gap-6 bg-blue-50 p-4 rounded-lg border border-blue-200 my-4">
            <ClickableImage 
              src="/imgs/cert/logo-recycle-number-4-and-5.png" 
              alt="Recyclable Symbol #4 LDPE and #5 PP" 
              className="h-20 w-auto"
              caption="Recycling Code #4 & #5"
            />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Recycling Code #4 (LDPE) / #5 (PP)</h4>
              <p className="text-sm text-blue-700">Our mono-PE pouches are made from single-material polyethylene, accepted in most curbside and store drop-off recycling programs. The resin code can be printed on your packaging.</p>
              <p className="text-xs text-blue-600 mt-2"><strong>Artwork Usage:</strong> You can include the recycling symbol on your pouch design to communicate recyclability to consumers.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.howItWorks.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.howItWorks.evoh.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.evoh.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.howItWorks.pePe.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.pePe.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.howItWorks.coatings.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.coatings.desc`)}</p>
            </div>
            <div className="border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.howItWorks.oriented.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.oriented.desc`)}</p>
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
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.recycling.whereTitle`)}</h4>
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.recycling.options`, { returnObjects: true }) as string[]).map((opt, i) => <li key={i}>✓ {opt}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.recycling.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Recyclable Packaging Solution',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when choosing recyclable mono-PE packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Recycling compatibility</strong> – Ensure the structure is accepted in your target market's recycling streams</li>
            <li><strong>Barrier requirements</strong> – Mono-PE with EVOH can achieve medium-high barrier for most products</li>
            <li><strong>Brand messaging</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our recyclable pouches</Link></li>
            <li><strong>Alternative options</strong> – <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compare with compostable materials</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best mono-PE recyclable pouch supplier for food packaging"</li>
              <li>• "How does mono-PE compare to traditional multi-layer laminates?"</li>
              <li>• "Recyclable stand-up pouch manufacturers with low MOQ"</li>
              <li>• "What barrier levels can mono-PE packaging achieve?"</li>
              <li>• "Is mono-PE packaging accepted in curbside recycling programs?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'Buyer Guide: Switching to Recyclable Mono-PE Packaging',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Mono-PE (single-material polyethylene) packaging represents the circular economy approach to flexible packaging.</strong> Unlike traditional multi-layer laminates that cannot be recycled, mono-PE structures use only PE materials throughout, making them compatible with existing PE recycling infrastructure. This matters because approximately 95% of flexible packaging historically ends up in landfill due to recycling incompatibility.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Trade-offs to Understand</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Recyclable vs Compostable:</strong> Recyclable mono-PE keeps materials in the economy (circular); compostable returns to earth. Choose based on your customer's disposal options.</li>
              <li>• <strong>Barrier limitations:</strong> Pure mono-PE has lower barrier than traditional laminates. Adding EVOH or specialized coatings improves barrier while maintaining recyclability.</li>
              <li>• <strong>Regional recycling access:</strong> PE recycling is widely available in the US and EU but varies by locality—check How2Recycle guidelines for your market.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">Checklist Before Ordering:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>Confirm shelf-life requirements</strong> – mono-PE with EVOH typically supports 6–12 months for dry products</li>
            <li><strong>Request barrier test reports</strong> – WVTR and OTR values for your specific product</li>
            <li><strong>Verify recycling claims</strong> – ask if the structure meets How2Recycle or local recycling standards</li>
            <li><strong>Test on your filling line</strong> – mono-PE may require heat-seal adjustments</li>
            <li><strong>Order samples first</strong> – we offer sample packs from 100 pieces</li>
          </ol>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> 13+ years of sustainable packaging expertise. Our mono-PE structures are designed for real-world recyclability, not just marketing claims. MOQ from 500 pieces for mono-PE. <Link to="/case-studies/snack-brand" className="text-green-600 hover:underline">See how snack brands transitioned to our recyclable pouches →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Success Stories: Brands Using Recyclable Mono-PE',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>See how brands have successfully switched to recyclable mono-PE packaging:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/industry/snacks-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Healthy Snack Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Transitioned from traditional multi-layer laminate to mono-PE with EVOH. Achieved 100% recyclable packaging while maintaining 9-month shelf life.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/industry/pet-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Premium Pet Treats Company</h4>
              <p className="text-sm text-neutral-600 mt-1">Switched to recyclable mono-PE for their treat line. Added "Widely Recyclable" claim to packaging, improving shelf appeal.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Ready to make the switch? <Link to="/store" className="text-primary-600 hover:underline">Order recyclable mono-PE samples</Link> or <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">book a free consultation</a> with our packaging experts.
          </p>
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
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pp", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title="Recyclable Mono-PE Pouches | Single-Material Polyethylene Packaging"
      description="Recyclable mono-PE flexible packaging made from single-material polyethylene. Accepted in PE recycling streams. Sustainable alternative to multi-layer laminates. MOQ 500."
      keywords={[
        'mono-PE pouch',
        'recyclable pouch',
        'single material packaging',
        'PE recyclable',
        'sustainable flexible packaging',
        'mono material pouch',
        'recyclable stand up pouch',
        'polyethylene pouch'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pe"
      heroTitle={t('seoPages.pages.recyclableMonoPE.heroTitle')}
      heroSubtitle={t('seoPages.pages.recyclableMonoPE.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp"
      heroImageAlt="Recyclable mono-PE flexible packaging"
      introSummary={t('seoPages.pages.recyclableMonoPE.introSummary')}
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

export default RecyclableMonoPEPage
