import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Package, Layers, Shield, Cpu, Leaf, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

const StandUpPouchFullMatteFinishPE70Page: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'

  const pouchKeywords = t('seoPages.pages.standUpPouchPE70.pouch.seo.keywords', 'matte stand up pouch, EVOH barrier pouch, PE70 pouch, coffee packaging pouch, custom matte pouches', { returnObjects: true }) as string[]
  const apKeywordsLayout = t('seoPages.pages.standUpPouchPE70.achievePack.seo.keywordsLayout', 'wholesale stand up pouch, B2B matte pouches, high barrier EVOH packaging, 140 micron pouches, specialty food packaging', { returnObjects: true }) as string[]

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.standUpPouchPE70.overview.title', 'Premium Matte Finish & High Barrier Performance'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.standUpPouchPE70.overview.p1', 'When dealing with specialty foods and premium coffee, shelf-life and presentation go hand-in-hand. The 260 mm x 325 mm Stand Up Pouch with Full Matte Finish is engineered to deliver both. Featuring a heavy-duty PE70/EVOH-PE70 structure at 140 microns, this pouch blocks oxygen, humidity, and UV light to preserve product freshness.')}
          </p>
          <p>
            {t('seoPages.pages.standUpPouchPE70.overview.p2', 'Aesthetics matter in modern retail. The full matte exterior provides a sophisticated, glare-free tactile experience that commands premium pricing on the shelf. The inclusion of an industrial-grade zipper and deep 120 mm bottom gusset ensures the pouch stands tall and retains structural integrity even after multiple uses.')}
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-6">
            <h4 className="font-bold text-amber-900 mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
            <p className="italic text-amber-800 text-sm">
              "We constantly see brands struggling with flavor degradation in standard PET pouches. By upgrading to a co-extruded PE70/EVOH-PE70 layer at exactly 140 microns, we drastically reduced the Oxygen Transmission Rate (OTR) to less than 1.5 cc/m²/24hr. Furthermore, applying a true matte varnish on PE can sometimes cause a 5-10% CMYK color shift due to light scattering. Our pre-press team uses proprietary spectral profiling to pre-compensate for this shift, ensuring your brand colors remain vibrant despite the matte diffusion." — Ryan Wong, Co-Founder
            </p>
          </div>
          
          <ClickableImage 
            src="/imgs/store/products/stand-up-pouch-full-matte-finish-pe70-evoh-pe70-140-microns.png" 
            alt="Full Matte Finish PE70 Stand Up Pouch Details" 
            className="w-full rounded-2xl shadow-md border border-neutral-200"
          />
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t('seoPages.pages.standUpPouchPE70.painPoints.title', '5 Packaging Pain Points & Engineering Solutions'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.standUpPouchPE70.painPoints.intro', 'Specialty food brands face critical challenges with standard pouches. Here is how our EVOH-PE70 pouch resolves them:')}</p>
          
          <div className="grid gap-4 mt-4">
            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">01</span>
                <h4 className="font-bold text-lg">Rapid Oxidation and Staling</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Standard PE pouches allow oxygen to permeate the film over time, causing coffee beans to stale and snacks to lose their crunch.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> Integrated EVOH (Ethylene Vinyl Alcohol) co-extrusion technology creates a near-impermeable oxygen barrier, dropping the OTR significantly and extending shelf life by up to 12 months.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">02</span>
                <h4 className="font-bold text-lg">Weak Bottom Gussets Tipping Over</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Flimsy stand-up pouches with inadequate bottom seals tend to topple over on retail shelves, ruining the product display.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> A reinforced 120 mm wide bottom gusset paired with a rigid 140 micron thick film ensures the pouch maintains a perfectly upright, stable posture even when half-empty.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">03</span>
                <h4 className="font-bold text-lg">Zipper Failure and Splitting</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Cheap zippers separate from the pouch walls during filling or fail after the consumer opens and closes the bag a few times.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> We utilize ultrasonic welded standard zippers bonded directly to the inner PE70 layer, guaranteeing reliable resealability for the entire lifespan of the product.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">04</span>
                <h4 className="font-bold text-lg">Punctures from Sharp Products</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Roasted coffee beans, dried pasta, or dog treats have sharp edges that can pierce thin films during transit.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> At 140 microns, the heavy-duty multi-layer structure provides exceptional puncture resistance (dart drop impact strength), protecting against internal abrasions.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">05</span>
                <h4 className="font-bold text-lg">Recyclability Compliance</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Traditional mixed-material pouches (PET/ALU/PE) are impossible to recycle, alienating eco-conscious consumers.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> Engineered as a Mono-PE structure (PE/EVOH-PE), this pouch is classified as RIC 4 (LDPE) recyclable. It provides high barrier performance while remaining fully compatible with flexible plastic recycling streams.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t('seoPages.pages.standUpPouchPE70.products.title', 'Related Products'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.standUpPouchPE70.products.intro', 'Explore our top-tier eco-friendly and premium packaging alternatives designed for specialty brands:')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/products/stand-up-pouch-full-matte-finish-pe70" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/stand-up-pouch-full-matte-finish-pe70-evoh-pe70-140-microns.png" alt="Full Matte PE70 Pouch" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">Full Matte PE70 Pouch</h5>
                <p className="text-xs text-neutral-500">High barrier 140 micron EVOH stand up pouch.</p>
              </div>
            </Link>
            <Link to="/store/product/triangle-coffee-box-card" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/triangle-coffee-box-card-tuck-thumbnail-1.jpg" alt="Triangle Coffee Box" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">Triangle Coffee Box</h5>
                <p className="text-xs text-neutral-500">The premium 350g tuck box with card insertion slot.</p>
              </div>
            </Link>
            <Link to="/store/product/28-lb-dry-food-bag-pet12-ny15-metallocene-milky-white-pe135" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/28-lb-dry-food-bag-pet12-ny15-metallocene-milky-white-pe135.png" alt="28lb Dry Food Bag" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">28lb Dry Food Bag</h5>
                <p className="text-xs text-neutral-500">Large format side gusset quad seal bag for pet food.</p>
              </div>
            </Link>
          </div>
          <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
            <h5 className="font-bold text-sm mb-2">Related Guides</h5>
            <ul className="text-sm space-y-1">
              <li><Link to="/blog/coffee-packaging-guide" className="text-primary-600 hover:underline">Complete Coffee Packaging Guide</Link></li>
              <li><Link to="/blog/custom-printed-materials-guide" className="text-primary-600 hover:underline">Custom Printed Materials Selection</Link></li>
              <li><Link to="/knowledge/pouch-heat-sealing-guide" className="text-primary-600 hover:underline">Pouch Heat Sealing Guide</Link></li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.standUpPouchPE70.faqs.q1.question', 'What is the EVOH layer in this pouch?'),
      answer: t('seoPages.pages.standUpPouchPE70.faqs.q1.answer', 'EVOH (Ethylene Vinyl Alcohol) is a specialized co-extruded layer embedded within the PE structure. It acts as an incredibly effective oxygen and aroma barrier, ensuring the contents stay fresh without relying on non-recyclable aluminum foil.')
    },
    {
      question: t('seoPages.pages.standUpPouchPE70.faqs.q2.question', 'Is a 140 micron thickness necessary?'),
      answer: t('seoPages.pages.standUpPouchPE70.faqs.q2.answer', 'For premium applications, yes. Standard pouches range from 80-100 microns. At 140 microns, the pouch offers superior rigidity, stands perfectly straight on the shelf, and provides maximum puncture resistance for sharper items like roasted coffee or dry pasta.')
    },
    {
      question: t('seoPages.pages.standUpPouchPE70.faqs.q3.question', 'Can I order this pouch fully customized?'),
      answer: t('seoPages.pages.standUpPouchPE70.faqs.q3.answer', 'Yes! While we offer this specific size and specification as a wholesale baseline, we can fully custom print your design using up to 9-color gravure or high-definition digital printing.')
    },
    {
      question: t('seoPages.pages.standUpPouchPE70.faqs.q4.question', 'Is this pouch considered recyclable?'),
      answer: t('seoPages.pages.standUpPouchPE70.faqs.q4.answer', 'Yes. Because it is a Mono-PE structure (Polyethylene with an EVOH barrier of less than 5% by weight), it is recognized as fully recyclable under the RIC 4 category in most global flexible plastic recycling streams.')
    },
    {
      question: t('seoPages.pages.standUpPouchPE70.faqs.q5.question', 'What is the MOQ for this wholesale pouch?'),
      answer: t('seoPages.pages.standUpPouchPE70.faqs.q5.answer', 'For unprinted stock of this specification, our MOQ starts at just 100 pieces for startup testing. For custom printed versions, please consult our team for volume pricing tiers.')
    }
  ]

  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <span className="text-neutral-400">/</span>
        <Link to="/store" className="hover:text-white transition">Products</Link>
        <span className="text-neutral-400">/</span>
        <span className="text-primary-500 font-bold">Matte PE70 Pouch</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-[#10b981] text-white rounded-full uppercase tracking-wider shadow-sm">
          ♻️ Recyclable High Barrier
        </span>
      </div>
    </div>
  )

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.standUpPouchPE70.pouch.seo.title', 'Matte Stand Up Pouch PE70 | Pouch Eco')}
        metaDescription={t('seoPages.pages.standUpPouchPE70.pouch.seo.metaDescription', 'Premium 140 micron EVOH-PE70 full matte stand up pouch. Low MOQ startup packaging designed for ultimate freshness and shelf appeal.')}
        canonicalUrl="https://pouch.eco/products/stand-up-pouch-full-matte-finish-pe70"
        keywords={pouchKeywords}
        publishedDate="2026-07-12"
        modifiedDate="2026-07-12"
        author="Ryan Wong"
        heroTitle={
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/store" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Products</Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Matte PE70</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Recyclable High Barrier
              </span>
            </div>
            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Full Matte PE70<br />
              <span className="text-[#10b981]">Stand Up Pouch</span>
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.standUpPouchPE70.pouch.seo.heroSubtitle', 'Heavy-duty 140 micron structure with EVOH barrier for specialty foods.')}
        heroImage="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg"
        heroImageAlt="Premium Full Matte PE70 Stand Up Pouch"
        categoryTag="FLEXIBLE_POUCHES"
        categoryColor="#10b981"
        readTime="8 min read"
        sections={sections}
        ctaTitle="Test this Pouch Today"
        ctaDescription="Order unprinted samples from just 100 pieces to test your product fit."
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/products/stand-up-pouch-full-matte-finish-pe70"
        achievePackText="Need wholesale industrial quantities? Switch to Achieve Pack."
        showTableOfContents={true}
        relatedArticles={[]}
      />
    )
  }

  return (
    <>
      <DualDomainSEOHead
        title={t('seoPages.pages.standUpPouchPE70.achievePack.seo.title', 'Full Matte PE70 Stand Up Pouch | Achieve Pack')}
        description={t('seoPages.pages.standUpPouchPE70.achievePack.seo.metaDescription', 'Wholesale B2B premium matte stand up pouches featuring a PE70/EVOH structure at 140 microns for maximum barrier defense.')}
        keywords={apKeywordsLayout}
        ogImage="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg"
        schemaType="Product"
        additionalSchema={{
          "@type": "Product",
          "@id": "https://achievepack.com/products/stand-up-pouch-full-matte-finish-pe70#product",
          "name": "Full Matte PE70 Stand Up Pouch (260x325+120mm)",
          "description": "Premium PE70/EVOH-PE70 140 microns thickness stand up pouch.",
          "brand": { "@type": "Brand", "name": "Achieve Pack" },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "1.00",
            "highPrice": "5.58",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "offerCount": "3"
          }
        }}
      />

      <SEOPageLayout 
        heroBgColor="#1c1917"
        title={t('seoPages.pages.standUpPouchPE70.achievePack.seo.title', 'Full Matte PE70 Stand Up Pouch')}
        description={t('seoPages.pages.standUpPouchPE70.achievePack.seo.metaDescription', 'Wholesale B2B premium matte stand up pouches featuring PE70/EVOH structure.')}
        keywords={apKeywordsLayout}
        heroTitle={t('seoPages.pages.standUpPouchPE70.achievePack.seo.heroTitle', 'Full Matte PE70 Stand Up Pouch')}
        heroSubtitle={t('seoPages.pages.standUpPouchPE70.achievePack.seo.heroSubtitle', 'Heavy-duty 140 micron structure with EVOH barrier for specialty foods.')}
        aboveTitle={visualBreadcrumbsAndLabels}
        introSummary={t('seoPages.pages.standUpPouchPE70.achievePack.seo.introSummary', 'Elevate your specialty food packaging with our high-barrier matte PE70 stand up pouches.')}
        sections={sections}
        faqs={faqs}
        heroImage="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg"
        heroImageAlt="Premium Full Matte PE70 Stand Up Pouch"
      />

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

export default StandUpPouchFullMatteFinishPE70Page
