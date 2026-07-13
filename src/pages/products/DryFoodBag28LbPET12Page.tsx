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

const DryFoodBag28LbPET12Page: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'

  const pouchKeywords = t('seoPages.pages.dryFoodBag28lbPET12.pouch.seo.keywords', '28lb dry food bag, pet food packaging, quad seal side gusset, PET12 bag, large format packaging', { returnObjects: true }) as string[]
  const apKeywordsLayout = t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.keywordsLayout', 'wholesale pet food bags, 28lb quad seal bags, B2B heavy duty packaging, Metallocene PE, multi-layer dry food bags', { returnObjects: true }) as string[]

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.dryFoodBag28lbPET12.overview.title', 'Heavy-Duty 28lb Quad Seal Side Gusset Bag'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.dryFoodBag28lbPET12.overview.p1', 'Scaling your bulk dry food or pet nutrition brand requires packaging that can withstand extreme weight and harsh distribution environments. The 28lb Dry Food Quad Seal Bag (406mm W x 790mm H x 152mm Gusset) is engineered for exactly that. It features a heavy-duty PET12/NY15/Metallocene + Milky White PE135 3-layer structure.')}
          </p>
          <p>
            {t('seoPages.pages.dryFoodBag28lbPET12.overview.p2', 'This is a true industrial-grade wholesale solution. The quad seal side gusset design provides a flat, stable bottom and four crisp printable panels for 9-color gravure printing with a matte varnish finish. This maximizes retail billboard space while maintaining the structural integrity needed to support up to 28 lbs of product.')}
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-6">
            <h4 className="font-bold text-amber-900 mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
            <p className="italic text-amber-800 text-sm">
              "When you package 28 lbs (12.7 kg) of dry kibble, standard polyethylene drops catastrophically under impact. If a pallet shifts during transport, a standard bag will split at the bottom gusset seam. To solve this, we incorporate a 15-micron Nylon (NY15) middle layer for extreme puncture resistance and use Metallocene-blended Milky White PE135 for the inner sealant layer. Metallocene provides superior hot-tack strength and drop-impact resistance compared to conventional LDPE, ensuring the bag survives a 5-foot drop test fully loaded." — Ryan Wong, Co-Founder
            </p>
          </div>
          
          <ClickableImage 
            src="/imgs/store/products/28-lb-dry-food-bag-pet12-ny15-metallocene-milky-white-pe135.png" 
            alt="28lb Dry Food Quad Seal Bag Details" 
            className="w-full rounded-2xl shadow-md border border-neutral-200"
          />
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t('seoPages.pages.dryFoodBag28lbPET12.painPoints.title', '5 Packaging Pain Points & Engineering Solutions'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.dryFoodBag28lbPET12.painPoints.intro', 'Bulk packaging comes with high stakes. A single bag failure ruins 28 lbs of product. Here is how this bag eliminates those risks:')}</p>
          
          <div className="grid gap-4 mt-4">
            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">01</span>
                <h4 className="font-bold text-lg">Catastrophic Drop Failures</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Heavy bulk bags often split at the seams when dropped or handled roughly during warehouse distribution.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> The addition of Metallocene into the PE135 inner layer dramatically increases dart impact strength and seam elasticity. The bag can absorb shock rather than snapping at the seal line.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">02</span>
                <h4 className="font-bold text-lg">Punctures from Sharp Kibble</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Hard baked pet kibble or dry goods have sharp edges that can wear through the plastic film through microscopic friction during transit.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> We engineered a 15-micron biaxially oriented Nylon (BOPA/NY15) middle layer. Nylon provides exceptional tensile strength and flex-crack resistance, creating a puncture-proof shield.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">03</span>
                <h4 className="font-bold text-lg">Fat Oxidation (Rancidity)</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Pet food and nuts contain high fat contents. If oxygen and light penetrate the bag, the fats oxidize and go rancid.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> The 3-layer structure, combined with the Milky White PE and matte varnish, acts as an excellent barrier against UV light and oxygen ingress, protecting volatile fats.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">04</span>
                <h4 className="font-bold text-lg">Poor Retail Branding Space</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Standard pillow bags warp the graphics when filled, making logos unreadable on the shelf.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> The Quad Seal (four corner seals) design creates rigid, squared-off corners. This forms a flat front, back, and two side panels, offering pristine 360-degree billboard space for 9-color printing.</p>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-neutral-700 text-white font-mono text-xs px-2 py-1 rounded">05</span>
                <h4 className="font-bold text-lg">Messy Sealing Lines</h4>
              </div>
              <p className="text-neutral-400 text-sm mb-3">Problem: Heavy gusseted bags often have misaligned seals that leak powder or aroma.</p>
              <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-lg">
                <p className="text-primary-100 text-sm"><span className="text-primary-400 font-bold">✅ Solution:</span> We utilize precision thermal bar sealing with specific dwell times tailored to the Metallocene layer, ensuring a hermetic, leak-proof seal across all 4 heavy-gauge gusset folds.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t('seoPages.pages.dryFoodBag28lbPET12.products.title', 'Related Products'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.dryFoodBag28lbPET12.products.intro', 'Explore our other heavy-duty and bulk packaging solutions:')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/store/product/28-lb-dry-food-bag-pet12-ny15-metallocene-milky-white-pe135" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/28-lb-dry-food-bag-pet12-ny15-metallocene-milky-white-pe135.png" alt="28lb Dry Food Bag" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">28lb Dry Food Bag</h5>
                <p className="text-xs text-neutral-500">Large format quad seal bag for pet food.</p>
              </div>
            </Link>
            <Link to="/store/product/flat-bottom-pouch-pe-evoh-pe-140-microns-thickness-110w-x-39" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/flat-bottom-pouch-pe-evoh-pe-140-microns-thickness-110w-x-39.png" alt="Flat Bottom PE Pouch" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">Flat Bottom Pouch</h5>
                <p className="text-xs text-neutral-500">Structured box pouch for premium retail display.</p>
              </div>
            </Link>
            <Link to="/products/stand-up-pouch-full-matte-finish-pe70" className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition block bg-white">
              <img src="/imgs/store/products/stand-up-pouch-full-matte-finish-pe70-evoh-pe70-140-microns.png" alt="Full Matte PE70 Pouch" className="w-full h-32 object-cover" />
              <div className="p-3">
                <h5 className="font-bold text-sm text-neutral-900 mb-1">Full Matte PE70 Pouch</h5>
                <p className="text-xs text-neutral-500">140 micron EVOH stand up pouch for smaller SKUs.</p>
              </div>
            </Link>
          </div>
          <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
            <h5 className="font-bold text-sm mb-2">Related Guides</h5>
            <ul className="text-sm space-y-1">
              <li><Link to="/blog/custom-printed-materials-guide" className="text-primary-600 hover:underline">Custom Printed Materials Selection</Link></li>
              <li><Link to="/knowledge/pouch-heat-sealing-guide" className="text-primary-600 hover:underline">Pouch Heat Sealing Guide</Link></li>
              <li><Link to="/knowledge/packaging-line-automation" className="text-primary-600 hover:underline">Packaging Line Automation Setup</Link></li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q1.question', 'What does Metallocene do in the PE layer?'),
      answer: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q1.answer', 'Metallocene is a specialized catalyst used during polyethylene production. It creates a highly uniform molecular structure that dramatically improves the film’s toughness, stretchability, and hot-tack seal strength compared to standard LDPE.')
    },
    {
      question: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q2.question', 'Why include a Nylon (NY15) layer?'),
      answer: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q2.answer', 'Nylon (BOPA) is incredibly tough and flex-crack resistant. When holding 28 lbs of hard kibble, the bag undergoes intense internal friction. The NY15 layer prevents the kibble from puncturing the bag from the inside out.')
    },
    {
      question: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q3.question', 'Is this bag suitable for automated VFFS filling lines?'),
      answer: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q3.answer', 'This specific quad seal bag is generally provided as a pre-made pouch for semi-automated or rotary filling machines. However, the exact material structure can be supplied as rollstock for VFFS lines upon request.')
    },
    {
      question: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q4.question', 'Can I get a zipper on this large format bag?'),
      answer: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q4.answer', 'This standard specification does not include a zipper, as many bulk bags are designed for one-time pouring into secondary containers. However, heavy-duty slider zippers or hook-and-loop (Aplix) closures can be added for custom orders.')
    },
    {
      question: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q5.question', 'What is the MOQ for custom printing on these bags?'),
      answer: t('seoPages.pages.dryFoodBag28lbPET12.faqs.q5.answer', 'Due to the massive physical size of the bags and the complex 3-layer industrial lamination process, custom 9-color gravure print runs start at an MOQ of 10,000 pieces.')
    }
  ]

  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <span className="text-neutral-400">/</span>
        <Link to="/store" className="hover:text-white transition">Products</Link>
        <span className="text-neutral-400">/</span>
        <span className="text-primary-500 font-bold">28lb Dry Food Bag</span>
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
        title={t('seoPages.pages.dryFoodBag28lbPET12.pouch.seo.title', '28lb Dry Food Bag PET12 | Pouch Eco')}
        metaDescription={t('seoPages.pages.dryFoodBag28lbPET12.pouch.seo.metaDescription', 'Heavy-duty 28lb dry food quad seal bag. PET12/NY15/Metallocene structure for ultimate puncture resistance and wholesale bulk packaging.')}
        canonicalUrl="https://pouch.eco/products/28-lb-dry-food-bag-pet12"
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
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">28lb Quad Bag</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Industrial Grade
              </span>
            </div>
            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              28lb Quad Seal<br />
              <span className="text-[#10b981]">Dry Food Bag</span>
            </h1>
          </div>
        }
        heroSubtitle={t('seoPages.pages.dryFoodBag28lbPET12.pouch.seo.heroSubtitle', 'Engineered with Nylon and Metallocene for extreme durability and drop resistance.')}
        heroImage="/imgs/store/products/28lb-dry-food-bag-pet12-hero.jpg"
        heroImageAlt="28lb Dry Food Quad Seal Bag"
        categoryTag="BULK_PACKAGING"
        categoryColor="#10b981"
        readTime="10 min read"
        sections={sections}
        ctaTitle="Need Wholesale Bulk Packaging?"
        ctaDescription="Contact us for custom sizes and high-volume pricing."
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/products/28-lb-dry-food-bag-pet12"
        achievePackText="Switch to Achieve Pack for B2B wholesale pricing."
        showTableOfContents={true}
        relatedArticles={[]}
      />
    )
  }

  return (
    <>
      <DualDomainSEOHead
        title={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.title', '28lb Dry Food Quad Seal Bag | Achieve Pack')}
        description={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.metaDescription', 'Wholesale B2B heavy-duty 28lb dry food bags. Engineered with PET12/NY15/Metallocene for maximum puncture resistance.')}
        keywords={apKeywordsLayout}
        ogImage="/imgs/store/products/28lb-dry-food-bag-pet12-hero.jpg"
        schemaType="Product"
        additionalSchema={{
          "@type": "Product",
          "@id": "https://achievepack.com/products/28-lb-dry-food-bag-pet12#product",
          "name": "28lb Dry Food Quad Seal Bag (PET12/NY15)",
          "description": "Heavy-duty PET12/NY15/Metallocene quad seal bag.",
          "brand": { "@type": "Brand", "name": "Achieve Pack" },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.64",
            "highPrice": "0.71",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "offerCount": "4"
          }
        }}
      />

      <SEOPageLayout 
        heroBgColor="#1c1917"
        title={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.title', '28lb Dry Food Quad Seal Bag')}
        description={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.metaDescription', 'Wholesale B2B heavy-duty 28lb dry food bags.')}
        keywords={apKeywordsLayout}
        heroTitle={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.heroTitle', '28lb Dry Food Quad Seal Bag')}
        heroSubtitle={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.heroSubtitle', 'Engineered with Nylon and Metallocene for extreme drop resistance.')}
        aboveTitle={visualBreadcrumbsAndLabels}
        introSummary={t('seoPages.pages.dryFoodBag28lbPET12.achievePack.seo.introSummary', 'Secure your bulk pet food and dry goods with our puncture-proof quad seal bags.')}
        sections={sections}
        faqs={faqs}
        heroImage="/imgs/store/products/28lb-dry-food-bag-pet12-hero.jpg"
        heroImageAlt="28lb Dry Food Quad Seal Bag"
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

export default DryFoodBag28LbPET12Page
